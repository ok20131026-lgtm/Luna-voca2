'use client';

import { useEffect, useMemo, useState } from 'react';
import { QuizQuestion } from '@/data/quizData';
import {
  AnswerRecord,
  filterQuestionsByArea,
  filterWrongAnswers,
  getBestScoreKey,
  getScore,
  shuffleQuestions,
  QuizArea
} from '@/lib/quizUtils';
import MainMenu from './MainMenu';
import QuestionCard from './QuestionCard';
import ResultScreen from './ResultScreen';
import WrongAnswerList from './WrongAnswerList';

type Screen = 'main' | 'quiz' | 'result' | 'wrongList';

const AREAS: QuizArea[] = ['vocabulary', 'reading1', 'reading2', 'all'];

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>('main');
  const [area, setArea] = useState<QuizArea>('vocabulary');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [bestScores, setBestScores] = useState<Partial<Record<QuizArea, number>>>({});

  useEffect(() => {
    const storedScores = Object.fromEntries(
      AREAS.map((item) => [
        item,
        Number(window.localStorage.getItem(getBestScoreKey(item)) ?? 0)
      ])
    ) as Partial<Record<QuizArea, number>>;

    setBestScores(storedScores);
  }, []);

  const wrongAnswers = useMemo(() => filterWrongAnswers(answers), [answers]);
  const activeQuestion = questions[currentIndex];

  const start = (
    nextArea: QuizArea,
    sourceQuestions: QuizQuestion[] = filterQuestionsByArea(nextArea)
  ) => {
    const nextQuestions = shuffleQuestions(sourceQuestions);

    setArea(nextArea);
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setSelectedIndex(undefined);
    setAnswers([]);
    setScreen(nextQuestions.length > 0 ? 'quiz' : 'main');
  };

  const recordAnswer = (index: number) => {
    if (!activeQuestion || selectedIndex !== undefined) return;

    setSelectedIndex(index);
    setAnswers((prev) => [
      ...prev.filter((item) => item.question.id !== activeQuestion.id),
      {
        question: activeQuestion,
        selectedIndex: index,
        isCorrect: index === activeQuestion.answerIndex
      }
    ]);
  };

  const finish = (finalAnswers: AnswerRecord[]) => {
    const score = getScore(finalAnswers);
    const key = getBestScoreKey(area);
    const best = Math.max(score, Number(window.localStorage.getItem(key) ?? 0));

    window.localStorage.setItem(key, String(best));
    setBestScores((prev) => ({ ...prev, [area]: best }));
    setScreen('result');
  };

  const next = () => {
    if (currentIndex + 1 === questions.length) {
      finish(answers);
      return;
    }

    setCurrentIndex((value) => value + 1);
    setSelectedIndex(undefined);
  };

  const retryWrong = () => {
    const wrongQuestions = wrongAnswers.map((answer) => answer.question);
    if (wrongQuestions.length > 0) start(area, wrongQuestions);
  };

  const retryOne = (index: number) => {
    const wrongAnswer = wrongAnswers[index];

    if (wrongAnswer) {
      start(wrongAnswer.question.section, [wrongAnswer.question]);
    }
  };

  if (screen === 'main') {
    return <MainMenu bestScores={bestScores} onStart={start} />;
  }

  if (screen === 'result') {
    return (
      <ResultScreen
        score={getScore(answers)}
        total={answers.length}
        onRetryWrong={retryWrong}
        onWrongList={() => setScreen('wrongList')}
        onHome={() => setScreen('main')}
      />
    );
  }

  if (screen === 'wrongList') {
    return (
      <WrongAnswerList
        wrongAnswers={wrongAnswers}
        onPick={retryOne}
        onHome={() => setScreen('main')}
      />
    );
  }

  if (!activeQuestion) {
    return <MainMenu bestScores={bestScores} onStart={start} />;
  }

  return (
    <QuestionCard
      question={activeQuestion}
      area={area}
      current={currentIndex + 1}
      total={questions.length}
      selectedIndex={selectedIndex}
      onSelect={recordAnswer}
      onNext={next}
    />
  );
}
