import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '../styles/global.css';
import background from '../assets/background.png';
import { mystery } from '@/styles/fonts/mystery';

export const metadata: Metadata = {
  title: 'HenriqueNas',
  description: "Henrique Nascimento's personal portfolio",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen flex-col bg-purple-200 ${mystery.className} text-2xl`}
        style={{
          background: `url(${background.src})`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
