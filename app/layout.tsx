import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `The Deep Mirror — AI-powered Enneagram typing that actually works`,
  description: `Why enneagram tests are inaccurate 2026: The Deep Mirror uses AI conversational interviews to replace flawed surveys with clinical-grade personality assessment.`,
  openGraph: {
    title: `The Deep Mirror — AI-powered Enneagram typing that actually works`,
    description: `Why enneagram tests are inaccurate 2026: The Deep Mirror uses AI conversational interviews to replace flawed surveys with clinical-grade personality assessment.`,
    type: 'website',
    siteName: `The Deep Mirror`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Deep Mirror — AI-powered Enneagram typing that actually works`,
    description: `Why enneagram tests are inaccurate 2026: The Deep Mirror uses AI conversational interviews to replace flawed surveys with clinical-grade personality assessment.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
