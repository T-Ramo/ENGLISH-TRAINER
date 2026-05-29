/* ============================================================
   GRAMMAR ENGINE — Moteur de quiz et session
   ============================================================ */

class GrammarEngine {
  constructor() {
    this.session = null;
    this.current = null;
    this.sessionIndex = 0;
    this.exerciseStartTime = null;
  }

  startSession(mode, filters = {}) {
    let exercisePool = [...EXERCISES];

    // Filtre par leçon précise (leçon ciblée)
    if (filters.lessonId) {
      exercisePool = exercisePool.filter(ex => ex.lessonId === filters.lessonId);
    }

    // Filtre par niveau (AND avec les autres filtres)
    if (filters.levels && filters.levels.length > 0) {
      exercisePool = exercisePool.filter(ex => {
        const lesson = LESSONS.find(l => l.id === ex.lessonId);
        return lesson && filters.levels.includes(lesson.level);
      });
    }

    // Filtre par catégorie (AND avec les autres filtres)
    if (filters.categories && filters.categories.length > 0) {
      exercisePool = exercisePool.filter(ex => {
        const lesson = LESSONS.find(l => l.id === ex.lessonId);
        return lesson && filters.categories.includes(lesson.category);
      });
    }

    // Pool vide : renvoyer null pour que l'appelant puisse gérer
    if (exercisePool.length === 0) return null;

    // Déterminer le nombre d'exercices selon le mode
    let sessionSize = GrammarEngine.MODES[mode]?.sessionSize || 20;
    if (mode === 'srs-review') {
      const dueCards = Storage.getGrammarDueCards(10);
      sessionSize = dueCards.length;
      exercisePool = dueCards.map(cardId => EXERCISES.find(ex => ex.id === cardId)).filter(Boolean);
    } else {
      Shared.shuffle(exercisePool);
      exercisePool = exercisePool.slice(0, sessionSize);
    }

    this.session = {
      mode,
      exercises: exercisePool,
      results: [],
      points: 0,
      startTime: Date.now(),
      streak: 0,
      categoryScores: mode === 'diagnostic-test' ? {} : null
    };

    this.sessionIndex = 0;
    this.current = this.session.exercises[0];
    this.exerciseStartTime = Date.now();
    return this.current;
  }

  next() {
    this.sessionIndex++;
    this.exerciseStartTime = Date.now();
    if (this.sessionIndex < this.session.exercises.length) {
      this.current = this.session.exercises[this.sessionIndex];
      return this.current;
    }
    return null;
  }

  isFinished() {
    return this.sessionIndex >= this.session.exercises.length - 1;
  }

  submitAnswer(userAnswer) {
    if (!this.current) return { correct: false, message: 'No exercise loaded' };

    const { type } = this.current;
    let isCorrect = false;

    switch (type) {
      case 'blank':
      case 'transform':
        isCorrect = Shared.matchAnswer(userAnswer, this.current.answer).ok;
        break;
      case 'mcq':
        isCorrect = userAnswer === this.current.answer;
        break;
      case 'reorder': {
        const sortedUser = [...userAnswer].sort();
        const sortedAnswer = [...this.current.answer].sort();
        isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedAnswer);
        break;
      }
      case 'error':
        isCorrect = Shared.matchAnswer(userAnswer, this.current.answer).ok;
        break;
    }

    // Calcul des points
    let exercisePoints = GrammarEngine.EXERCISE_POINTS[type] || 6;
    let earnedPoints = exercisePoints;

    // Bonus streak (x1.5 après 5 correctes)
    if (isCorrect) {
      this.session.streak++;
      if (this.session.streak >= 5) {
        earnedPoints = Math.floor(earnedPoints * 1.5);
      }
    } else {
      this.session.streak = 0;
    }

    // Bonus vitesse (< 10s)
    const exerciseTime = this.getCurrentExerciseTime();
    if (exerciseTime < 10000 && isCorrect) {
      earnedPoints += 3;
    }

    if (isCorrect) {
      this.session.points += earnedPoints;
    }

    // Tracking diagnostic
    if (this.session.mode === 'diagnostic-test') {
      const lesson = LESSONS.find(l => l.id === this.current.lessonId);
      if (lesson) {
        const catKey = lesson.category;
        if (!this.session.categoryScores[catKey]) {
          this.session.categoryScores[catKey] = { correct: 0, total: 0 };
        }
        this.session.categoryScores[catKey].total++;
        if (isCorrect) this.session.categoryScores[catKey].correct++;
      }
    }

    // Sauvegarde result et SRS
    this.session.results.push({
      exerciseId: this.current.id,
      lessonId: this.current.lessonId,
      correct: isCorrect,
      points: earnedPoints,
      time: exerciseTime
    });

    // Mise à jour SRS
    this.updateCardSRS(this.current.id, isCorrect);

    return {
      correct: isCorrect,
      earnedPoints: isCorrect ? earnedPoints : 0,
      correctAnswer: this.current.answer,
      explanation: this.current.explanation,
    };
  }

  updateCardSRS(exerciseId, correct) {
    const card = Storage.getGrammarCard(exerciseId);
    const now = new Date();

    if (!card) {
      const newCard = {
        id: exerciseId,
        seen: 1,
        correct: correct ? 1 : 0,
        ease: 2.5,
        intervalDays: correct ? 1 : 0,
        nextDueAt: correct ? new Date(now.getTime() + 86400000).toISOString() : now.toISOString()
      };
      Storage.upsertGrammarCard(newCard);
      return;
    }

    // SM-2 simplified
    card.seen++;
    if (correct) {
      card.correct++;
      const factor = Math.max(1.3, card.ease - (5 - 4.5));
      card.ease = factor;
      const days = card.intervalDays === 0 ? 1 : Math.round(card.intervalDays * card.ease);
      card.intervalDays = days;
    } else {
      card.ease = Math.max(1.3, card.ease - 0.2);
      card.intervalDays = 0;
    }

    card.nextDueAt = new Date(now.getTime() + card.intervalDays * 86400000).toISOString();
    Storage.upsertGrammarCard(card);
  }

  getCurrentExerciseTime() {
    return Date.now() - (this.exerciseStartTime || Date.now());
  }

  finishSession() {
    const duration = Math.round((Date.now() - this.session.startTime) / 1000);
    const totalExercises = this.session.exercises.length;
    const correctAnswers = this.session.results.filter(r => r.correct).length;
    const accuracy = Math.round((correctAnswers / totalExercises) * 100);

    // Marquer les leçons comme lues
    const uniqueLessons = [...new Set(this.session.results.map(r => r.lessonId))];
    uniqueLessons.forEach(lessonId => Storage.markLessonRead('grammar', lessonId));

    // Ajouter les points
    Storage.addPoints(this.session.points);
    Storage.registerActivity('grammar', this.session.mode, correctAnswers, totalExercises);

    // Vérifier les badges
    const badges = this.checkBadges();

    // Estimation du niveau (pour diagnostic)
    let estimatedLevel = 'A2';
    if (this.session.mode === 'diagnostic-test' && this.session.categoryScores) {
      const totalCorrect = Object.values(this.session.categoryScores).reduce((s, c) => s + c.correct, 0);
      const totalTotal = Object.values(this.session.categoryScores).reduce((s, c) => s + c.total, 0);
      const avgScore = totalCorrect / totalTotal;
      if (avgScore >= 0.8) estimatedLevel = 'B2';
      else if (avgScore >= 0.6) estimatedLevel = 'B1';
      else estimatedLevel = 'A2';
    }

    return {
      mode: this.session.mode,
      accuracy,
      totalPoints: this.session.points,
      duration,
      correctAnswers,
      totalExercises,
      categoryScores: this.session.categoryScores,
      estimatedLevel,
      badges,
      streak: this.session.streak
    };
  }

  checkBadges() {
    const newBadges = [];

    // Badge: 10 leçons lues
    const lessonsRead = Storage.getLessonsRead('grammar').length;
    if (lessonsRead >= 10 && !Storage.hasBadge('grammar-lesson-10')) {
      Storage.awardBadge('grammar-lesson-10');
      newBadges.push('grammar-lesson-10');
    }

    // Badge: 48 leçons lues
    if (lessonsRead >= 48 && !Storage.hasBadge('grammar-lesson-all')) {
      Storage.awardBadge('grammar-lesson-all');
      newBadges.push('grammar-lesson-all');
    }

    // Badge: Perfect 100% sur catégorie
    if (!Storage.hasBadge('grammar-category-master')) {
      const categoryScores = Object.entries(this.session.categoryScores || {});
      categoryScores.forEach(([cat, scores]) => {
        if (scores.correct === scores.total && scores.total >= 5) {
          Storage.awardBadge('grammar-category-master');
          newBadges.push('grammar-category-master');
        }
      });
    }

    // Badge: 100% diagnostic
    if (this.session.mode === 'diagnostic-test' && this.session.results.every(r => r.correct) && !Storage.hasBadge('grammar-perfect-diag')) {
      Storage.awardBadge('grammar-perfect-diag');
      newBadges.push('grammar-perfect-diag');
    }

    // Badge: B2+ level
    if (this.session.mode === 'diagnostic-test') {
      const avgScore = Object.values(this.session.categoryScores || {}).reduce((sum, cat) => sum + (cat.correct / cat.total), 0) / Object.keys(this.session.categoryScores || {}).length;
      if (avgScore >= 0.8 && !Storage.hasBadge('grammar-b2')) {
        Storage.awardBadge('grammar-b2');
        newBadges.push('grammar-b2');
      }
    }

    return newBadges;
  }

  static MODES = {
    'lesson-practice': { label: 'Leçon', sessionSize: 15, basePoints: 8 },
    'mixed-practice': { label: 'Entraînement', sessionSize: 20, basePoints: 7 },
    'diagnostic-test': { label: 'Test diagnostic', sessionSize: 25, basePoints: 10 },
    'srs-review': { label: 'Révision SRS', sessionSize: 10, basePoints: 6 }
  };

  static EXERCISE_POINTS = {
    'blank': 8,
    'mcq': 6,
    'transform': 10,
    'reorder': 12,
    'error': 12
  };
}

// Instance globale
const grammarEngine = new GrammarEngine();
