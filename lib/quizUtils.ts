import { QuizArea, QuizQuestion, quizData } from '@/data/quizData';

export type AnswerRecord = { question: QuizQuestion; selectedIndex: number; isCorrect: boolean };

export const getScore = (answers: AnswerRecord[]) => answers.filter((answer) => answer.isCorrect).length;
export const getAccuracy = (correct: number, total: number) => (total === 0 ? 0 : Math.round((correct / total) * 100));
export const getBestScoreKey = (area: QuizArea) => `ella-weekly-best-${area}`;
export const filterQuestionsByArea = (area: QuizArea) => area === 'all' ? quizData : quizData.filter((question) => question.area === area);
export const shuffleQuestions = (questions: QuizQuestion[]) => [...questions].sort(() => Math.random() - 0.5);
export const filterWrongAnswers = (answers: AnswerRecord[]) => answers.filter((answer) => !answer.isCorrect);
