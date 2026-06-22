export default function ResultScreen({
  score,
  total,
  onRetryWrong,
  onWrongList,
  onHome
}: {
  score: number;
  total: number;
  onRetryWrong: () => void;
  onWrongList: () => void;
  onHome: () => void;
}) {
  const wrong = total - score;
  const accuracy = total === 0 ? 0 : Math.round((score / total) * 100);

  return <main className="mx-auto flex min-h-screen max-w-xl items-center px-5"><section className="w-full rounded-[2rem] bg-white p-6 text-center shadow-xl">
    <p className="text-5xl">🎉</p><h1 className="mt-2 text-3xl font-black">결과</h1>
    <p className="mt-4 text-5xl font-black text-orange-500">{score * 10}점</p>
    <div className="mt-5 grid grid-cols-3 gap-2 text-sm font-bold"><div className="rounded-2xl bg-orange-50 p-3">정답률<br />{accuracy}%</div><div className="rounded-2xl bg-green-50 p-3">정답<br />{score}</div><div className="rounded-2xl bg-red-50 p-3">오답<br />{wrong}</div></div>
    <button disabled={wrong === 0} onClick={onRetryWrong} className="mt-6 w-full rounded-full bg-orange-400 py-4 font-black text-white disabled:bg-slate-200">오답만 다시 풀기</button>
    <button disabled={wrong === 0} onClick={onWrongList} className="mt-3 w-full rounded-full bg-white py-4 font-black text-slate-700 ring-2 ring-orange-100 disabled:text-slate-300 disabled:ring-slate-100">오답 목록 보기</button>
    <button onClick={onHome} className="mt-3 w-full rounded-full bg-slate-800 py-4 font-black text-white">처음으로 돌아가기</button>
  </section></main>;
}
