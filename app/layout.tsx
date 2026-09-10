import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-storm-sans',
  subsets: ['latin'],
});

const ebGaramond = EB_Garamond({
  variable: '--font-storm-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Storm OS | Decision & Execution Intelligence',
  description:
    'AI Storm OS turns fragmented organizational signals into accountable execution by connecting context, decision rights, ownership, execution, verification and organizational learning across existing systems and AI.',
  openGraph: {
    title: 'AI Storm OS — Know What Matters. Know What Happens Next.',
    description:
      'AI Storm OS turns fragmented organizational signals into accountable execution by connecting context, decision rights, ownership, execution, verification and organizational learning across existing systems and AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Storm OS — Know What Matters. Know What Happens Next.',
    description:
      'AI Storm OS turns fragmented organizational signals into accountable execution by connecting context, decision rights, ownership, execution, verification and organizational learning across existing systems and AI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
