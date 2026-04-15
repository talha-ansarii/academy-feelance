import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScholarBot } from '@/components/chat/ScholarBot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'The Sovereign Scholar | Excellence in NEET Preparation',
  description: 'Premier medical entrance mentorship and high-end editorial experience.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans font-body antialiased bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
        <Navbar />
        {children}
        <ScholarBot />
        <Footer />
      </body>
    </html>
  );
}
