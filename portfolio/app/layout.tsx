import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prakhar Aditya Tripathi — codyandersan',
  description:
    'Prakhar Aditya Tripathi (@codyandersan) — Developer building practical tools, automation scripts, and web apps.',
  keywords: [
    'Prakhar Tripathi',
    'Prakhar Aditya Tripathi codyandersan',
    'Cody Andersan developer portfolio',
    'web developer',
    'python',
    'automation',
    'tailwind',
    'react',
  ],
  authors: [{ name: 'Prakhar Aditya Tripathi' }],
  openGraph: {
    title: 'Prakhar Aditya Tripathi — Developer',
    description: 'I build tools that simplify things.',
    type: 'website',
    url: 'https://codyandersan.pages.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakhar Aditya Tripathi — Developer',
    description: 'I build tools that simplify things.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <meta
          name="google-site-verification"
          content="m3g4bHsaIcZR_28YiJVCOAxeGwUzT4dHXP04v5m609c"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
