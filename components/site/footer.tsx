import Link from 'next/link';
import { Container, Divider } from '@/components/site/primitives';

export function Footer() {
  return (
    <footer className="bg-[var(--storm-black)] py-14 text-[var(--storm-cream)]">
      <Container>
        <Divider />
        <div className="grid gap-10 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl leading-tight sm:text-4xl">
              AI Storm OS
              <br />
              Decision & Execution Intelligence
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
              Essential EA is building the layer between organizational
              intelligence and accountable action. AI Storm OS Gov is a
              development-stage architecture and is not represented as
              government-authorized.
            </p>
            <p className="mt-8 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_44%,transparent)]">
              Copyright {new Date().getFullYear()} Essential EA
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
            <Link href="#brain-execution" className="hover:text-[var(--storm-cream)]">
              Platform
            </Link>
            <Link href="#commercial" className="hover:text-[var(--storm-cream)]">
              Commercial
            </Link>
            <Link href="#government" className="hover:text-[var(--storm-cream)]">
              Government
            </Link>
            <Link href="#proof" className="hover:text-[var(--storm-cream)]">
              Proof
            </Link>
            <Link href="#company" className="hover:text-[var(--storm-cream)]">
              Company
            </Link>
            <Link href="#investors" className="hover:text-[var(--storm-cream)]">
              Investors
            </Link>
            <Link href="#contact" className="hover:text-[var(--storm-cream)]">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
