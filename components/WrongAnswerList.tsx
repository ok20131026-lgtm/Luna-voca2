import { AREA_LABELS } from '@/data/quizData';
import { AnswerRecord } from '@/lib/quizUtils';

export default function WrongAnswerList({ wrongAnswers, onPick, onHome }: { wrongAnswers: AnswerRecord[]; onPick: (index: number) => void; onHome: () => void }) {
  return <main className="mx-auto max-w-2xl px-4 py-6"><section className="rounded-[2rem] bg-white p-5 shadow-xl"><h1 className="text-2xl font-black">오답 노트 🌟</h1><div className="mt-4 grid gap-3">
    {wrongAnswers.map((answer, index) => <button key={answer.question.id} onClick={() => onPick(index)} className="rounded-3xl border border-orange-100 bg-orange-50 p-4 text-left">
      <p className="text-sm font-extrabold text-orange-500">{AREA_LABELS[answer.question.area]} · {answer.question.type}</p><p className="mt-1 font-black text-slate-800">{answer.question.question}</p><p className="mt-2 text-sm text-slate-600">{answer.question.retryGuide}</p>
    </button>)}
  </div><button onClick={onHome} className="mt-5 w-full rounded-full bg-slate-800 py-3 font-black text-white">처음으로</button></section></main>;
}
