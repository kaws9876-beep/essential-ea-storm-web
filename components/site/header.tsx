import Image from 'next/image';
import Link from 'next/link';
import { Menu, ArrowUpRight } from 'lucide-react';
import { contactConfig } from '@/components/site/content';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Where it works', href: '#where-it-works' },
  { label: 'Proof', href: '#proof' },
  { label: 'Company', href: '#company' },
  { label: 'Investors', href: '#investors' },
];

export function Header({
  sectionHrefPrefix = '',
}: {
  sectionHrefPrefix?: string;
}) {
  return (
    <header className="ea-header">
      <div className="ea-container ea-header__row">
        <Link href="/" aria-label="EA STORM homepage" className="ea-logo">
          <Image
            alt="EA STORM — Keep What Matters Moving."
            src="/brand/ea-storm-gold.png"
            width={1536}
            height={1024}
            unoptimized
            priority
          />
        </Link>
        <nav className="ea-desktop-nav" aria-label="Primary navigation">
          {links.map((l) => (
            <a key={l.href} href={`${sectionHrefPrefix}${l.href}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={contactConfig.demoHref}
          className="ea-action ea-header__demo"
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="platform_click"
        >
          Request Demo
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <details className="ea-mobile-menu">
          <summary aria-label="Toggle navigation">
            <Menu aria-hidden="true" />
          </summary>
          <nav id="mobile-navigation" className="ea-mobile-nav" aria-label="Mobile navigation">
            {links.map((l) => (
              <a key={l.href} href={`${sectionHrefPrefix}${l.href}`}>
                {l.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
