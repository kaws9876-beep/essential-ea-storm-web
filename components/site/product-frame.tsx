import {
  heroSequence,
  organizationalSignals,
} from '@/components/site/content';
import { StatusChip } from '@/components/site/primitives';
import { cn } from '@/lib/utils';

export function ProductFrame() {
  return (
    <div
      className="storm-sequence relative border border-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] bg-[#101010] shadow-[0_28px_80px_rgb(0_0_0/0.28)]"
      aria-label="Illustrative AI Storm OS product sequence showing noise becoming a verified action"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] px-4 py-3">
        <div>
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-cream)_58%,transparent)]">
            Signature Product Sequence
          </p>
          <p className="mt-1 text-sm text-[var(--storm-cream)]">
            Noise -&gt; judgment -&gt; accountable execution
          </p>
        </div>
        <StatusChip intent="attention">Illustrative State</StatusChip>
      </div>

      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="border-b border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] p-5 lg:border-b-0 lg:border-r">
          <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_42%,transparent)]">
            Organizational Noise
          </p>
          <div className="mt-5 grid gap-2">
            {organizationalSignals.map((signal, index) => (
              <div
                className={cn(
                  'signal-row border px-3 py-2 font-sans text-[0.64rem] font-semibold uppercase leading-4 tracking-[0.1em]',
                  index === 1
                    ? 'active-signal border-[color-mix(in_srgb,var(--storm-gold)_52%,transparent)] text-[var(--storm-gold)]'
                    : 'border-[color-mix(in_srgb,var(--storm-cream)_10%,transparent)] text-[color-mix(in_srgb,var(--storm-cream)_42%,transparent)]',
                )}
                key={signal}
                style={{ animationDelay: `${index * 220}ms` }}
              >
                {signal}
              </div>
            ))}
          </div>
          <div className="decision-object mt-6 border border-[color-mix(in_srgb,var(--storm-gold)_42%,transparent)] bg-[color-mix(in_srgb,var(--storm-gold)_7%,transparent)] p-4">
            <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-[var(--storm-gold)]">
              Decision Object
            </p>
            <p className="mt-3 font-serif text-3xl leading-none text-[var(--storm-cream)]">
              Contract deadline requires ownership.
            </p>
            <dl className="mt-5 grid gap-3 font-sans text-xs">
              {[
                ['Evidence', 'Deadline + revenue + relationship'],
                ['Authority', 'Verified'],
                ['Status', 'Executing'],
              ].map(([term, value]) => (
                <div
                  className="grid grid-cols-[0.74fr_1fr] gap-4 border-t border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] pt-3"
                  key={term}
                >
                  <dt className="font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,var(--storm-cream)_42%,transparent)]">
                    {term}
                  </dt>
                  <dd className="text-[color-mix(in_srgb,var(--storm-cream)_76%,transparent)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div className="p-5">
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_10%,transparent)]">
            {heroSequence.map((item, index) => (
              <div
                className="sequence-step grid gap-4 bg-[var(--storm-black)] p-4 sm:grid-cols-[0.42fr_0.72fr_1fr]"
                key={item.state}
                style={{ animationDelay: `${650 + index * 520}ms` }}
              >
                <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_40%,transparent)]">
                  {String(index + 1).padStart(2, '0')} / {item.state}
                </p>
                <p
                  className={cn(
                    'font-sans text-[0.68rem] font-semibold uppercase tracking-[0.12em]',
                    index === 0 || index === 2 || index === 6
                      ? 'text-[var(--storm-gold)]'
                      : 'text-[var(--storm-cream)]',
                  )}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="verified-resolution mt-5 border border-[color-mix(in_srgb,var(--storm-gold)_48%,transparent)] bg-[color-mix(in_srgb,var(--storm-gold)_8%,transparent)] p-5">
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--storm-gold)]">
              Verified
            </p>
            <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_78%,transparent)]">
              Assignment did not end the loop. Storm followed the work through
              execution, outcome, and organizational learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
