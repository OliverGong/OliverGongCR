import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Resume Studio 管理台', description: 'Sprint 0' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
