import Image from 'next/image';
import {
  caseStudyMetrics,
  caseStudyJourney,
  categoryProofQuestions,
  commercialMarkets,
  companyTraction,
  operatingEnvironment,
  productProofSurfaces,
  schraderCaseStudy,
  stackLayers,
  testimonials,
  type EvidenceMetric,
} from '@/components/site/content';
import {
  Container,
  Disclosure,
  Divider,
  EditorialHeadline,
  Eyebrow,
  Section,
  StatusChip,
} from '@/components/site/primitives';
import { cn } from '@/lib/utils';

function EvidenceNumber({ metric }: { metric: EvidenceMetric }) {
  return (
    <div className="border-t border-current/16 pt-5">
      <p className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-none">
        {metric.value}
      </p>
      <p className="mt-5 max-w-64 font-sans text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.14em] text-current/64">
        {metric.label}
      </p>
      <p className="mt-3 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-current/44">
        {metric.claimClass}
      </p>
    </div>
  );
}

export function ProofSection() {
  return (
    <Section id="proof" tone="cream">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              Proof Architecture
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(3rem,6vw,6.8rem)]">
              Built in real operations.
              <br />
              Not in a demo environment.
            </EditorialHeadline>
          </div>
          <div className="self-end">
            <p className="max-w-3xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              Storm separates company traction from operating-environment
              scale, because evidence is strongest when it is disciplined.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <EvidenceBlock title="Company Traction" metrics={companyTraction} />
          <EvidenceBlock
            title="Design-Partner Operating Environment"
            metrics={operatingEnvironment}
          />
        </div>

        <Disclosure>
          Company traction, customer outcomes, and operating-environment scale
          are governed separately. Dashboard values inside product screenshots
          should be treated as product demo data unless separately validated.
        </Disclosure>
      </Container>
    </Section>
  );
}

function EvidenceBlock({
  title,
  metrics,
}: {
  title: string;
  metrics: EvidenceMetric[];
}) {
  return (
    <section aria-labelledby={title.toLowerCase().replaceAll(' ', '-')}>
      <h2
        className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_50%,transparent)]"
        id={title.toLowerCase().replaceAll(' ', '-')}
      >
        {title}
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {metrics.map((metric) => (
          <EvidenceNumber key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}

export function ProductProofSection() {
  return (
    <Section id="product-proof">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">Product Proof</Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(2.85rem,5.4vw,5.9rem)]">
              Named product surfaces.
              <br />
              Clear maturity signals.
            </EditorialHeadline>
          </div>
          <p className="self-end text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]">
            Product imagery demonstrates interface quality and capability. Any
            values visible inside screenshots are not presented as independently
            validated outcome claims unless they also appear in the governed
            proof sections below.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {productProofSurfaces.map((surface) => (
            <article
              className="border border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] bg-[color-mix(in_srgb,var(--storm-cream)_3%,transparent)] p-4"
              key={surface.name}
            >
              <div className="relative overflow-hidden border border-[color-mix(in_srgb,var(--storm-cream)_10%,transparent)] bg-[var(--storm-black)]">
                <Image
                  alt={surface.alt}
                  className="aspect-[16/10] h-full w-full object-cover object-left-top"
                  height={750}
                  loading="lazy"
                  src={surface.screenshotPath}
                  unoptimized
                  width={1200}
                />
              </div>
              <div className="mt-6">
                <StatusChip
                  intent={surface.status.includes('LIVE') ? 'attention' : 'neutral'}
                >
                  {surface.status}
                </StatusChip>
                <h2 className="mt-8 font-serif text-4xl leading-none">
                  {surface.name}
                </h2>
                <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[var(--storm-gold)]">
                  {surface.job}
                </p>
                <p className="mt-4 text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_66%,transparent)]">
                  {surface.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <Disclosure>
          Product screenshots show approved interface evidence. Visible values
          inside the images remain product interface data unless separately
          validated as customer outcome claims.
        </Disclosure>
      </Container>
    </Section>
  );
}

export function TestimonialArchitecture() {
  return (
    <Section id="testimonials" tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              Customer Testimony
            </Eyebrow>
            <p className="mt-6 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
              Qualitative customer testimony is shown as testimony, not
              converted into additional quantitative claims.
            </p>
          </div>
          <figure className="border-y border-[color-mix(in_srgb,var(--storm-black)_16%,transparent)] py-8">
            <blockquote className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]">
              {testimonials[0].attribution} / {testimonials[0].organization}
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudySection() {
  return (
    <Section id="case-study" tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.66fr_0.34fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              Case Study / The Schrader Group
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(3.2rem,6.5vw,7rem)]">
              {schraderCaseStudy.headline}
            </EditorialHeadline>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              {schraderCaseStudy.subhead}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color-mix(in_srgb,var(--storm-black)_62%,transparent)]">
              The transition was from fragmented systems and founder-dependent
              execution to governed organizational intelligence and accountable
              action.
            </p>
          </div>
          <Disclosure>
            {schraderCaseStudy.attributionBoundary}
          </Disclosure>
        </div>

        <div className="mt-12 grid gap-8 border-y border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-8 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <StatusChip>{schraderCaseStudy.industry}</StatusChip>
            <StatusChip>{schraderCaseStudy.engagement}</StatusChip>
          </div>
          <p className="font-serif text-4xl leading-tight sm:text-5xl">
            The opportunity wasn&apos;t missing.
            <br />
            It was buried.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] lg:grid-cols-3">
          <StoryPanel
            title="The Setup"
            body="The Schrader Group did not simply need more leads or another CRM. The opportunity already existed inside the organization."
          />
          <StoryPanel
            title="The Conflict"
            body="Three robust CRMs and years of operating data still did not create shared context, clear ownership, or reliable action."
          />
          <StoryPanel
            title="The Question"
            body="What might be buried inside your organization because the right signals are scattered across people, systems, conversations, workflows, and data?"
          />
        </div>

        <div className="mt-14 border-y border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-10">
          <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
            <div>
              <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
                Transformation Sequence
              </Eyebrow>
              <p className="mt-5 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
                The proof is not a pile of numbers. It is the movement from
                organizational noise to measurable execution.
              </p>
            </div>
            <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] md:grid-cols-7">
              {caseStudyJourney.map((item, index) => (
                <article
                  className="bg-[var(--storm-cream)] p-4 md:min-h-56"
                  key={item.state}
                >
                  <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--storm-gold)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-6 font-serif text-3xl leading-none">
                    {item.state}
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
            Primary Outcome Proof
          </Eyebrow>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudyMetrics.map((metric) => (
              <EvidenceNumber key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
            Operating Environment
          </Eyebrow>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {operatingEnvironment.map((metric) => (
              <EvidenceNumber key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] lg:grid-cols-2">
          <CaseStudyList title="The Problem" items={schraderCaseStudy.problem} />
          <CaseStudyList
            title="The Transformation"
            items={schraderCaseStudy.transformation}
          />
        </div>

        <div className="mt-14 grid gap-10 border-y border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-10 lg:grid-cols-[0.42fr_0.58fr]">
          <p className="font-serif text-4xl leading-tight sm:text-5xl">
            Systems recorded.
            <br />
            Dashboards reported.
            <br />
            People worked.
          </p>
          <p className="self-end text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
            But the organization lacked a reliable intelligence layer for
            determining what deserved attention, why now, who owned it, and
            what should happen next.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              The Bigger Idea
            </Eyebrow>
            <p className="mt-5 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
              Organizations already possess enormous amounts of information,
              context, relationships and unfinished opportunity.
            </p>
          </div>
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2">
            {categoryProofQuestions.map((question) => (
              <p
                className="bg-[var(--storm-cream)] p-5 font-serif text-2xl leading-tight sm:text-3xl"
                key={question}
              >
                {question}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] pt-10">
          <p className="font-serif text-5xl leading-none sm:text-6xl">
            Judgment -&gt; Action
          </p>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
            {schraderCaseStudy.context}
          </p>
        </div>
      </Container>
    </Section>
  );
}

function StoryPanel({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-[var(--storm-cream)] p-6 sm:p-8">
      <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_50%,transparent)]">
        {title}
      </h2>
      <p className="mt-8 font-serif text-3xl leading-tight">{body}</p>
    </article>
  );
}

function CaseStudyList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="bg-[var(--storm-cream)] p-6 sm:p-8">
      <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_50%,transparent)]">
        {title}
      </h2>
      <ul className="mt-10 grid gap-5">
        {items.map((item) => (
          <li
            className="border-t border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] pt-4 font-serif text-3xl leading-none"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CommercialSection() {
  return (
    <Section id="commercial">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.64fr_0.36fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">Commercial</Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(2.85rem,5.2vw,5.8rem)]">
              One decision architecture.
              <br />
              Built to travel across complexity.
            </EditorialHeadline>
          </div>
          <p className="self-end text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]">
            Storm&apos;s first proving ground is real estate, not because Storm is a
            real-estate CRM, but because the industry provides an unusually
            demanding execution environment.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] lg:grid-cols-4">
          {commercialMarkets.map((market) => (
            <article className="min-h-52 bg-[var(--storm-black)] p-6" key={market.label}>
              <StatusChip intent={market.status === 'CURRENT MARKET' ? 'attention' : 'neutral'}>
                {market.status}
              </StatusChip>
              <h2 className="mt-10 font-serif text-4xl leading-none">
                {market.label}
              </h2>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function WhyRealEstateSection() {
  return (
    <Section tone="cream" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
            Why Real Estate First
          </Eyebrow>
          <div>
            <EditorialHeadline className="text-[clamp(3rem,6vw,6.5rem)]">
              The proving ground was vertical.
              <br />
              The problem was not.
            </EditorialHeadline>
            <p className="mt-8 text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              Real estate exposed the execution gap at high intensity: large
              databases, fragmented technology, long customer lifecycles,
              distributed ownership, high-value opportunities and constant
              handoffs.
            </p>
            <p className="mt-6 text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              Storm was built inside that complexity. The thesis being tested
              now is whether the same decision architecture travels beyond it.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ExistingStackSection() {
  return (
    <Section id="existing-stack">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow className="text-[var(--storm-gold)]">Existing Stack</Eyebrow>
          <EditorialHeadline className="mt-8 text-[clamp(2.8rem,5.2vw,5.8rem)]">
            Storm does not ask you to rebuild your organization around another
            tool.
          </EditorialHeadline>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]">
            Use the systems you have. Use the models you choose. Preserve the
            organization&apos;s decision logic across them.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          {stackLayers.map((layer) => (
            <article
              className={cn(
                'bg-[var(--storm-black)] p-6',
                layer.label === 'Storm' &&
                  'bg-[color-mix(in_srgb,var(--storm-gold)_7%,var(--storm-black))]',
              )}
              key={layer.label}
            >
              <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--storm-gold)]">
                {layer.label}
              </h2>
              <div className="mt-10 grid gap-3">
                {layer.items.map((item) => (
                  <p
                    className="border-t border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] pt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function WhyNowSection() {
  return (
    <Section tone="cream">
      <Container>
        <StatusChip>Thesis</StatusChip>
        <EditorialHeadline className="mt-8 max-w-6xl text-[clamp(3.2rem,7vw,7.4rem)]">
          AI made intelligence abundant.
          <br />
          It did not make accountability automatic.
        </EditorialHeadline>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.44fr_0.56fr]">
          <p className="font-serif text-4xl leading-tight">
            The next AI control point may not be the model.
          </p>
          <div>
            <p className="text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              Models can reason. Agents can act. Systems can automate.
              Organizations still must determine what should happen, who can
              authorize it, who is accountable, what evidence supported it,
              whether it happened, and whether it was right.
            </p>
            <Divider className="my-8" />
            <p className="text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              It may be the organizational judgment surrounding the model.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function CategoryAuthoritySection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] lg:grid-cols-4">
          {[
            ['Intelligence', 'answers questions.'],
            ['Execution', 'moves work.'],
            ['Judgment', 'determines what should happen.'],
            ['Storm', 'connects the three.'],
          ].map(([term, body]) => (
            <article className="min-h-72 bg-[var(--storm-black)] p-6" key={term}>
              <h2 className="font-serif text-5xl leading-none">{term}</h2>
              <p className="mt-10 text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function JudgmentGraphForeshadowSection() {
  return (
    <Section tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.66fr_0.34fr]">
          <div>
            <StatusChip>Architecture in Development</StatusChip>
            <StatusChip>Moat Thesis</StatusChip>
            <EditorialHeadline className="mt-8 text-[clamp(3.1rem,6.4vw,7rem)]">
              Models will change.
              <br />
              Your organization&apos;s judgment should not disappear with them.
            </EditorialHeadline>
          </div>
          <p className="self-end text-lg leading-8 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
            Storm is model-agnostic by design. Its long-term intelligence is
            being built around the organization&apos;s own context, evidence,
            decision history, authority, ownership, execution, outcomes and
            learning.
          </p>
        </div>
        <div className="mt-14 border-t border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] pt-10">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_50%,transparent)]">
            Organizational Judgment Graph
          </p>
          <p className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            A compounding record of how the organization recognizes what
            matters, makes consequential decisions, executes them, and learns
            from the result.
          </p>
        </div>
      </Container>
    </Section>
  );
}
