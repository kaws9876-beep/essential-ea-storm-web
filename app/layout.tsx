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
    'EA STORM is an intelligence platform designed to identify what matters, put the right work in the right hands, and turn decisions into accountable action and verified results.',
  openGraph: {
    title: 'EA STORM | Keep What Matters Moving.',
    description:
      'EA STORM is an intelligence platform designed to identify what matters, put the right work in the right hands, and turn decisions into accountable action and verified results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EA STORM | Keep What Matters Moving.',
    description:
      'EA STORM is an intelligence platform designed to identify what matters, put the right work in the right hands, and turn decisions into accountable action and verified results.',
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
