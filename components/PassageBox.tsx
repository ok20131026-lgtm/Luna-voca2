'use client';
import { useState } from 'react';
import { QuizQuestion } from '@/data/quizData';

export default function PassageBox({ question }: { question: QuizQuestion }) {
  const [open, setOpen] = useState(true);
  if (!question.passage) return null;
  return <section className="rounded-3xl border border-sky-100 bg-sky-50 p-4">
    <button onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between font-extrabold text-sky-700">
      <span>{question.area === 'reading1' ? 'Reading 1' : 'Reading 2'} · {question.passageTitle}</span><span>{open ? '숨기기' : '보기'} 🐾</span>
    </button>
    {open && <p className="mt-3 whitespace-pre-line text-sm leading-snug text-slate-700">{question.passage}</p>}
  </section>;
}
