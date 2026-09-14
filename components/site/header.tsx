import Link from 'next/link';
import { Container, ButtonLink } from '@/components/site/primitives';
import { contactConfig, navItems } from '@/components/site/content';

export function Header({ sectionHrefPrefix = '' }: { sectionHrefPrefix?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--storm-black)_94%,transparent)] text-[var(--storm-cream)] backdrop-blur-md">
      <Container className="hidden min-h-9 items-center justify-between border-b border-[color-mix(in_srgb,var(--storm-cream)_10%,transparent)] font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_48%,transparent)] lg:flex">
        <p>Essential EA</p>
        <p>AI Storm OS</p>
        <p>Decision Rights / Ownership / Verification</p>
      </Container>
      <Container className="flex min-h-16 items-center justify-between gap-6 border-b border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)]">
        <Link
          href="/"
          className="font-sans text-xs font-semibold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
          aria-label="Essential EA homepage"
        >
          Essential EA
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)] transition hover:text-[var(--storm-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
              href={`${sectionHrefPrefix}${item.href}`}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink
          href={contactConfig.demoHref}
          event="platform_click"
          className="hidden sm:inline-flex"
          rel="noopener noreferrer"
          target="_blank"
        >
          Request Demo
        </ButtonLink>
      </Container>
    </header>
  );
}
