import Image from 'next/image';
import Link from 'next/link';
import { Container, ButtonLink } from '@/components/site/primitives';
import { contactConfig, navItems } from '@/components/site/content';

export function Header({ sectionHrefPrefix = '' }: { sectionHrefPrefix?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--storm-black)_94%,transparent)] text-[var(--storm-cream)] backdrop-blur-md">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-6 border-b border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)]">
        <Link
          href="/"
          className="group flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
          aria-label="Essential EA homepage"
        >
          <Image
            alt="Essential EA + AI Storm OS"
            className="h-10 w-auto object-contain transition duration-300 group-hover:brightness-110 sm:h-11"
            height={72}
            priority
            src="/brand/essential-ea-ai-storm-os-lockup.png"
            unoptimized
            width={190}
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              className="border-b border-transparent pb-1 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.15em] text-[color-mix(in_srgb,var(--storm-cream)_74%,transparent)] transition hover:border-[var(--storm-gold)] hover:text-[var(--storm-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
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
      <Container className="flex min-h-11 items-center gap-5 overflow-x-auto border-b border-[color-mix(in_srgb,var(--storm-cream)_10%,transparent)] font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_64%,transparent)] lg:hidden">
        {navItems.map((item) => (
          <Link
            className="shrink-0 border-b border-transparent py-3 transition hover:border-[var(--storm-gold)] hover:text-[var(--storm-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
            href={`${sectionHrefPrefix}${item.href}`}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}
