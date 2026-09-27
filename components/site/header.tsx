'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { contactConfig } from '@/components/site/content';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Proof', href: '#proof' },
  { label: 'Company', href: '#company' },
  { label: 'Investors', href: '#investors' },
];

export function Header({
  sectionHrefPrefix = '',
}: {
  sectionHrefPrefix?: string;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
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
            <Link key={l.href} href={`${sectionHrefPrefix}${l.href}`}>
              {l.label}
            </Link>
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
        <button
          ref={toggle}
          className="ea-menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="ea-mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={`${sectionHrefPrefix}${l.href}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
