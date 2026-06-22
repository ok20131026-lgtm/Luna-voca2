import { QuizQuestion } from '@/data/quizData';
import { QuizArea } from '@/lib/quizUtils';
import PassageBox from './PassageBox';

const AREA_LABELS: Record<QuizArea, string> = {
  vocabulary: '단어',
  reading1: 'Reading 1',
  reading2: 'Reading 2',
  all: '전체'
};

type QuestionCardProps = {
  question: QuizQuestion;
  area: QuizArea;
  current: number;
  total: number;
  selectedIndex?: number;
  onSelect: (index: number) => void;
  onNext: () => void;
};

export default function QuestionCard({
  question,
  area,
  current,
  total,
  selectedIndex,
  onSelect,
  onNext
}: QuestionCardProps) {
  const answered = selectedIndex !== undefined;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-6">
      <section className="rounded-[2rem] bg-white/95 p-5 shadow-xl shadow-orange-100">
        <div className="mb-4 flex items-center justify-between text-sm font-bold text-slate-500">
          <span>{AREA_LABELS[area]}</span>
          <span>
            {current} / {total}
          </span>
        </div>

        <div className="mb-5 h-3 overflow-hidden rounded-full bg-orange-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-300 to-pink-300"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>

        {question.section !== 'vocabulary' && <PassageBox question={question} />}

        <span className="mt-5 inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-extrabold text-violet-600">
          {question.questionType}
        </span>

        <h2 className="mt-3 text-2xl font-black leading-snug text-slate-800">
          {question.question}
        </h2>

        <div className="mt-5 grid gap-3">
          {question.choices.map((choice, index) => {
            const correct = answered && index === question.answerIndex;
            const wrong =
              answered &&
              index === selectedIndex &&
              index !== question.answerIndex;

            return (
              <button
                key={`${question.id}-${choice}`}
                disabled={answered}
                onClick={() => onSelect(index)}
                className={`rounded-3xl border-2 px-4 py-3 text-left font-bold transition ${
                  correct
                    ? 'border-green-400 bg-green-100 text-green-800'
                    : wrong
                      ? 'border-red-300 bg-red-100 text-red-700'
                      : 'border-orange-100 bg-orange-50 text-slate-700 hover:bg-orange-100'
                }`}
              >
                {String.fromCharCode(65 + index)}. {choice}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-5 rounded-3xl bg-amber-50 p-4 text-sm leading-relaxed text-slate-700">
            <p className="font-extrabold text-amber-700">해설</p>
            <p>{question.explanationKo}</p>

            {question.evidence && (
              <div className="mt-3 border-t border-amber-200 pt-3">
                <p className="font-bold">
                  본문 Lesson: {question.readingTitle ?? question.lesson}
                </p>
                <p className="mt-1 italic">“{question.evidence}”</p>
              </div>
            )}
          </div>
        )}

        {answered && (
          <button
            onClick={onNext}
            className="mt-5 w-full rounded-full bg-slate-800 py-4 font-black text-white shadow-lg"
          >
            {current === total ? '결과 보기' : '다음'}
          </button>
        )}
      </section>
    </main>
  );
}
