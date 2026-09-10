import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AnalyticsEvent } from '@/lib/analytics';

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = 'black',
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: 'black' | 'cream';
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden py-20 sm:py-28 lg:py-36',
        tone === 'black'
          ? 'bg-[var(--storm-black)] text-[var(--storm-cream)]'
          : 'bg-[var(--storm-cream)] text-[var(--storm-black)]',
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'font-sans text-[0.68rem] font-semibold uppercase leading-none tracking-[0.16em]',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function EditorialHeadline({
  children,
  className,
  as: Component = 'h2',
}: {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}) {
  return (
    <Component
      className={cn(
        'font-serif text-[clamp(3rem,8vw,8.75rem)] font-medium leading-[0.92] tracking-normal text-balance',
        className,
      )}
    >
      {children}
    </Component>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  event?: AnalyticsEvent;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  event,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      data-analytics-event={event}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]',
        variant === 'primary'
          ? 'border-[var(--storm-cream)] bg-[var(--storm-cream)] text-[var(--storm-black)] hover:border-[var(--storm-gold)] hover:bg-[var(--storm-gold)]'
          : 'border-[color-mix(in_srgb,var(--storm-cream)_28%,transparent)] text-[var(--storm-cream)] hover:border-[var(--storm-cream)]',
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" size={15} strokeWidth={1.7} />
    </Link>
  );
}

export function StatusChip({
  children,
  intent = 'neutral',
}: {
  children: ReactNode;
  intent?: 'neutral' | 'attention' | 'midnight';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center border px-2.5 py-1 font-sans text-[0.62rem] font-semibold uppercase leading-none tracking-[0.12em]',
        intent === 'attention' &&
          'border-[var(--storm-gold)] bg-[color-mix(in_srgb,var(--storm-gold)_14%,transparent)] text-[var(--storm-gold)]',
        intent === 'midnight' &&
          'border-[color-mix(in_srgb,var(--storm-midnight)_35%,transparent)] bg-[var(--storm-midnight)] text-[var(--storm-cream)]',
        intent === 'neutral' &&
          'border-current/20 bg-transparent text-current/72',
      )}
    >
      {children}
    </span>
  );
}

export function Metric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="border-t border-current/16 pt-5">
      <p className="font-serif text-5xl leading-none sm:text-6xl">{value}</p>
      <p className="mt-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-current/70">
        {label}
      </p>
      <p className="mt-2 max-w-64 text-sm leading-6 text-current/64">{detail}</p>
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('h-px w-full bg-current/16', className)} />;
}

export function Disclosure({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-4xl border-l border-current/20 pl-5 text-sm leading-7 text-current/62">
      {children}
    </p>
  );
}

export function CommandButton({
  children,
  event,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  event?: AnalyticsEvent;
}) {
  return (
    <button
      {...props}
      data-analytics-event={event}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--storm-black)] bg-[var(--storm-black)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--storm-cream)] transition duration-300 hover:bg-transparent hover:text-[var(--storm-black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
