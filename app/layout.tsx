import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://prakhartri.me';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Prakhar Aditya Tripathi',
    template: '%s | Prakhar Aditya Tripathi',
  },

  description:
    'Developer portfolio of Prakhar Aditya Tripathi. Building practical tools, automation scripts, and modern web applications.',

  applicationName: 'Prakhar Aditya Tripathi Portfolio',

  keywords: [
    'Prakhar Aditya Tripathi',
    'Prakhar Tripathi',
    'prakhartri',
    'codyandersan',
    'developer portfolio',
    'student developer',
    'python automation',
    'web development',
    'Next.js developer',
    'React developer',
    'Tailwind CSS',
    'software engineering',
  ],

  authors: [
    {
      name: 'Prakhar Aditya Tripathi',
      url: siteUrl,
    },
  ],

  creator: 'Prakhar Aditya Tripathi',
  publisher: 'Prakhar Aditya Tripathi',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Prakhar Aditya Tripathi',

    title: 'Prakhar Aditya Tripathi',
    description:
      'Developer building practical tools, automation scripts, and modern web applications.',

    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Prakhar Aditya Tripathi',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Prakhar Aditya Tripathi',
    description:
      'Developer building practical tools, automation scripts, and modern web applications.',

    images: ['/og.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <meta
          name="google-site-verification"
          content="m3g4bHsaIcZR_28YiJVCOAxeGwUzT4dHXP04v5m609c"
        />

        <meta
          name="theme-color"
          content="#09090b"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',

              name: 'Prakhar Aditya Tripathi',

              alternateName: [
                'prakhartri',
                'codyandersan',
              ],

              url: siteUrl,

              image: `${siteUrl}/profile.webp`,

              sameAs: [
                'https://github.com/codyandersan',
                'https://linkedin.com/in/prakhartri',
              ],

              jobTitle: 'Student Developer',

              description:
                'Developer building practical tools, automation scripts, and web applications.',

              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lucknow',
                addressCountry: 'India',
              },
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}