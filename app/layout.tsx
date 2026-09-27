import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css';
import './ea-storm.css';

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
  title: 'EA STORM | Keep What Matters Moving.',
  description:
    'EA STORM identifies what needs attention, gets it to the right owner, and keeps it moving through the outcome.',
  openGraph: {
    title: 'EA STORM | Keep What Matters Moving.',
    description:
      'EA STORM identifies what needs attention, gets it to the right owner, and keeps it moving through the outcome.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EA STORM | Keep What Matters Moving.',
    description:
      'EA STORM identifies what needs attention, gets it to the right owner, and keeps it moving through the outcome.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ebGaramond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
