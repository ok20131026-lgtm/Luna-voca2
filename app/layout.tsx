import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ella Weekly Test Maker',
  description: 'Unit 2 Wind quiz app for vocabulary and reading practice'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
