import { AREA_LABELS, QuizArea } from '@/data/quizData';

const areas: { area: QuizArea; label: string; icon: string }[] = [
  { area: 'vocabulary', label: '단어 10문항', icon: '🌱' },
  { area: 'reading1', label: 'Reading 1 10문항', icon: '📖' },
  { area: 'reading2', label: 'Reading 2 10문항', icon: '🎣' },
  { area: 'all', label: '전체 30문항', icon: '🌈' }
];

export default function MainMenu({ bestScores, onStart }: { bestScores: Partial<Record<QuizArea, number>>; onStart: (area: QuizArea) => void }) {
  return <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-5 py-8">
    <section className="rounded-[2rem] border border-orange-100 bg-white/90 p-6 shadow-xl shadow-orange-100/70">
      <p className="mb-2 text-sm font-bold text-orange-500">Unit 2. Wind</p>
      <h1 className="text-4xl font-black tracking-tight text-slate-800">Ella Weekly Test Maker</h1>
      <div className="mt-6 grid gap-3">
        {areas.map(({ area, label, icon }) => <button key={area} onClick={() => onStart(area)} className="flex items-center justify-between rounded-3xl border border-orange-100 bg-orange-50 px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-100">
          <span className="flex items-center gap-3 text-lg font-extrabold text-slate-700"><span className="text-2xl">{icon}</span>{label}</span>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-orange-500">최고 {bestScores[area] ?? 0}점</span>
        </button>)}
      </div>
      <p className="mt-5 text-center text-sm text-slate-500">{AREA_LABELS.all} 메뉴에서 단어와 Reading을 한 번에 연습해요 ✨</p>
    </section>
  </main>;
}
