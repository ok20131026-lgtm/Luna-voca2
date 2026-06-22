# Ella Weekly Test Maker

`Ella Weekly Test Maker`는 Unit 2. Wind 학습을 위한 모바일 우선 Next.js 퀴즈 앱입니다. 단어 10문항, Reading 1 10문항, Reading 2 10문항, 전체 30문항 모드를 제공합니다.

## 실행 방법

```bash
npm install
npm run dev
npm run build
```

개발 서버는 기본적으로 <http://localhost:3000>에서 실행됩니다.

## 데이터 위치

퀴즈 데이터는 `data/quizData.ts`에 TypeScript 타입과 함께 들어 있습니다. 기존 `orange_quiz.json` / `quizData.json`의 Unit 2 어휘 데이터를 기반으로 단어 문제를 구성했고, Reading 문제는 Lesson 정보와 evidence 근거 문장을 포함합니다. Reading 지문의 한글뜻은 UI에 표시하지 않습니다.

## Vercel 배포

Next.js는 Vercel에서 자동 감지되므로 별도 `vercel.json` 없이 배포할 수 있습니다.

1. GitHub 저장소를 Vercel에 연결합니다.
2. Framework Preset이 `Next.js`로 감지되는지 확인합니다.
3. Build Command는 `npm run build`를 사용합니다.
4. 배포 후 모바일 화면에서 퀴즈를 확인합니다.
