# ESL Rainbows Orange Vol.2 Interactive Vocabulary Quiz

A static, Vercel-ready English vocabulary quiz app built from `quizData.json` for ESL Rainbows Orange Vol.2 Unit 1 Lesson 1 through Unit 8 Lesson 2.

## Features

- Independent Unit/Lesson selection: learners can open any lesson immediately.
- Multiple-choice vocabulary quizzes rendered from `quizData.json`.
- Choice format: `English word [Korean part of speech] 🔊`.
- Web Speech API pronunciation buttons using `en-US` and `rate: 0.85`.
- No automatic pronunciation playback.
- Immediate answer feedback with correct/incorrect highlighting.
- Rationales for all choices after answering.
- Toggleable Korean hint showing only the translated question meaning.
- Progress bar, score, accuracy, and review list.
- Lesson score persistence with `localStorage`, falling back to `sessionStorage` and memory.
- Light/dark mode.
- Link copy, TinyURL shortening, QR code, and KakaoTalk share fallback.

## Deployment

The app is a static Vercel deployment.

```bash
npm run build
```

`build.mjs` creates `dist/` and copies the required static files. Vercel uses `vercel.json` with `outputDirectory` set to `dist`.

## Environment Variables

- `PUBLIC_URL`: preferred share URL. If absent, the app uses `location.href`.
- `KAKAO_JS_KEY`: Kakao JavaScript key. If absent, the Kakao button guides users to copy the link instead.

During build, these values are written to `dist/env.js`.
