import { QuizQuestion, quizData } from '@/data/quizData';

export type QuizArea = 'all' | 'vocabulary' | 'reading1' | 'reading2';

export type AnswerRecord = {
  question: QuizQuestion;
  selectedIndex: number;
  isCorrect: boolean;
};

export const getScore = (answers: AnswerRecord[]) =>
  answers.filter((answer) => answer.isCorrect).length;

export const getAccuracy = (correct: number, total: number) =>
  total === 0 ? 0 : Math.round((correct / total) * 100);

export const getBestScoreKey = (area: QuizArea) =>
  `ella-weekly-best-${area}`;

export const filterQuestionsByArea = (area: QuizArea): QuizQuestion[] => {
  if (area === 'all') {
    return quizData.questions;
  }

  return quizData.questions.filter((question) => question.section === area);
};

export const shuffleQuestions = (questions: QuizQuestion[]) =>
  [...questions].sort(() => Math.random() - 0.5);

export const filterWrongAnswers = (answers: AnswerRecord[]) =>
  answers.filter((answer) => !answer.isCorrect);
