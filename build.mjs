import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const out = 'dist';
await mkdir(out, { recursive: true });
for (const file of ['index.html', 'quizData.json', 'README.md']) {
  if (!existsSync(file)) throw new Error(`Missing required file: ${file}`);
  await copyFile(file, `${out}/${file}`);
}
const env = {
  PUBLIC_URL: process.env.PUBLIC_URL || '',
  KAKAO_JS_KEY: process.env.KAKAO_JS_KEY || ''
};
await writeFile(`${out}/env.js`, `window.APP_ENV=${JSON.stringify(env)};\n`);
console.log('Built static app in dist/');
