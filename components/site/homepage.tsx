import Image from 'next/image';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ProductFrame } from '@/components/site/product-frame';
import {
  audienceSegments,
  contactConfig,
  fourQuestions,
  storyImages,
} from '@/components/site/content';
import {
  FourQuestionsSection,
  StormOriginSection,
} from '@/components/site/phase-two-sections';
import {
  CaseStudySection,
  CommercialSection,
  ProductProofSection,
  ProofSection,
  TestimonialArchitecture,
} from '@/components/site/phase-three-sections';
import {
  FinalCategoryClose,
  FounderSection,
  GovernmentSection,
  InvestorSection,
  LaunchEvidenceChecklistSection,
} from '@/components/site/phase-four-sections';
import {
  ButtonLink,
  Container,
  EditorialHeadline,
  Eyebrow,
  Section,
  StatusChip,
} from '@/components/site/primitives';
import { AnalyticsListener } from '@/components/site/analytics-listener';
import { cn } from '@/lib/utils';

export function HomePage({ campaign }: { campaign?: 'penfed' }) {
  return (
    <>
      <AnalyticsListener campaign={campaign} />
      <Header />
      <main>
        <Section className="storm-opening-stage overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-8 lg:pb-14">
          <CinematicEntrance />
          <Container>
            <div className="grid gap-10 lg:grid-cols-[34rem_1fr] lg:items-center xl:gap-14">
              <div className="relative z-10 max-w-[34rem]">
                <Eyebrow className="text-[var(--storm-gold)]">
                  Decision & Execution Intelligence
                </Eyebrow>
                <EditorialHeadline
                  as="h1"
                  className="mt-5 text-[clamp(2.65rem,3.6vw,4.35rem)] leading-[0.98]"
                >
                  Know what matters.
                  <br />
                  Know what
                  <br className="sm:hidden" /> happens next.
                </EditorialHeadline>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_76%,transparent)]">
                  Crystal Ball Triage reasons across fragmented organizational
                  information to determine what deserves attention, why it
                  matters, who owns it, and what should happen next.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href="#cinematic-sequence"
                    event="hero_demo_click"
                    className="w-full sm:w-auto"
                  >
                    See Storm in Action
                  </ButtonLink>
                  <ButtonLink
                    href={contactConfig.demoHref}
                    variant="secondary"
                    event="platform_click"
                    className="w-full sm:w-auto"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Request Demo
                  </ButtonLink>
                </div>
              </div>

              <div className="relative">
                <div className="hero-orbit absolute inset-0 -m-12 rounded-full opacity-70" />
                <figure className="relative overflow-hidden border border-[color-mix(in_srgb,var(--storm-gold)_38%,transparent)] bg-[var(--storm-black)] shadow-[0_40px_120px_rgb(0_0_0/0.45)]">
                  <Image
                    alt={storyImages.crystalBallIngest.alt}
                    className="aspect-[16/10] h-full w-full object-cover"
                    height={720}
                    priority
                    src={storyImages.crystalBallIngest.src}
                    unoptimized
                    width={1200}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--storm-black)] via-[rgb(10_10_10/0.72)] to-transparent p-5 sm:p-7">
                    <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--storm-gold)]">
                      Fragmented signals enter the operating environment
                    </p>
                    <p className="mt-3 max-w-[17rem] font-serif text-[1.85rem] leading-tight text-[var(--storm-cream)] sm:max-w-lg sm:text-[clamp(2rem,5vw,2.75rem)]">
                      Crystal Ball determines what deserves attention.
                    </p>
                  </div>
                </figure>
                <div className="mt-4 grid grid-cols-2 gap-px bg-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,var(--storm-cream)_66%,transparent)] sm:grid-cols-4">
                  {['Noise', 'Signal', 'Owner', 'Verified'].map((item) => (
                    <p className="bg-[var(--storm-black)] px-3 py-3" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-y border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] py-5">
              <div className="grid gap-4 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_55%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
                {audienceSegments.map((segment) => (
                  <p key={segment}>{segment}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <CinematicSignalStory />
        <CondensedProblemSection />
        <FourQuestionsSection />
        <ProductBehaviorSection />
        <StormOriginSection />
        <ProductProofSection />
        <ProofSection />
        <TestimonialArchitecture />
        <CaseStudySection />
        <CommercialSection />
        <GovernmentSection />
        <FounderSection />
        <InvestorSection />
        <FinalCategoryClose />
        <LaunchEvidenceChecklistSection />
      </main>
      <Footer />
    </>
  );
}

function CinematicEntrance() {
  const fragments = [
    'Signal',
    'Context',
    'Triage',
    'Decision',
    'Authority',
    'Action',
  ];

  return (
    <div aria-hidden="true" className="storm-opening">
      <div className="storm-opening__field">
        <div className="storm-opening__noise storm-opening__noise--a" />
        <div className="storm-opening__noise storm-opening__noise--b" />
        <div className="storm-opening__crystal" />
        <div className="storm-opening__signal" />
        <div className="storm-opening__threshold" />
        <div className="storm-opening__fragments">
          {fragments.map((fragment) => (
            <span key={fragment}>{fragment}</span>
          ))}
        </div>
        <div className="storm-opening__statement">
          <span>Know what matters.</span>
          <span>Know what happens next.</span>
        </div>
      </div>
    </div>
  );
}

const cinematicBeats = [
  {
    kicker: 'Noise',
    title: 'Organizations are surrounded by signals.',
    body: 'CRM, email, meetings, documents, finance, operations, customers and market change all speak at once.',
    image: storyImages.crystalBallIngest,
  },
  {
    kicker: 'Triage',
    title: 'Crystal Ball determines what deserves attention.',
    body: 'The signal is evaluated for context, consequence, timing, ownership and required judgment.',
    image: storyImages.crystalBallDecision,
  },
  {
    kicker: 'Action',
    title: 'Then, Storm carries judgment into action.',
    body: 'The Decision Object moves through ownership, authority and execution.',
    image: storyImages.stormSignalRouting,
  },
  {
    kicker: 'Verified',
    title: 'Execution becomes memory.',
    body: 'Storm checks what happened, what worked, and what the organization should remember.',
    image: storyImages.verificationOutcome,
  },
] as const;

function CinematicSignalStory() {
  return (
    <Section id="cinematic-sequence" className="py-12 sm:py-16 lg:py-[4.5rem]">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">
              First, Crystal Ball Determines
            </Eyebrow>
            <EditorialHeadline className="mt-5 max-w-3xl text-[clamp(3rem,5vw,5.4rem)]">
              What deserves attention?
            </EditorialHeadline>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)] sm:text-lg sm:leading-8">
            Systems record. Dashboards report. Models reason. Agents execute.
            Crystal Ball determines what deserves attention. Storm carries
            governed judgment into action.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10">
          {cinematicBeats.map((beat, index) => (
            <article
              className="cinematic-step grid overflow-hidden border border-[color-mix(in_srgb,var(--storm-cream)_13%,transparent)] bg-[color-mix(in_srgb,var(--storm-cream)_3%,transparent)] lg:grid-cols-[0.48fr_0.52fr]"
              key={beat.kicker}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className={cn('relative min-h-72', index % 2 === 1 && 'lg:order-2')}>
                <Image
                  alt={beat.image.alt}
                  className="h-full w-full object-cover"
                  height={675}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  src={beat.image.src}
                  unoptimized
                  width={1200}
                />
              </div>
              <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <StatusChip intent={index === 3 ? 'attention' : 'neutral'}>
                    {beat.kicker}
                  </StatusChip>
                  <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_42%,transparent)]">
                    {String(index + 1).padStart(2, '0')} / 04
                  </p>
                </div>
                <div>
                  <h2 className="max-w-xl font-serif text-[clamp(2.35rem,4.5vw,5rem)] leading-[0.96]">
                    {beat.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]">
                    {beat.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CondensedProblemSection() {
  const sources = ['CRM', 'Email', 'Meetings', 'Documents', 'Finance', 'Operations', 'Customers', 'Market'];

  return (
    <Section tone="cream" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              The Customer Problem
            </Eyebrow>
            <EditorialHeadline className="mt-7 text-[clamp(2.9rem,5.8vw,6.2rem)]">
              Your organization isn&apos;t short on information.
              <br />
              It&apos;s short on knowing what matters.
            </EditorialHeadline>
          </div>
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2">
            {sources.map((source, index) => (
              <p
                className={cn(
                  'bg-[var(--storm-cream)] p-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]',
                  index === 6 && 'text-[color-mix(in_srgb,var(--storm-gold)_76%,var(--storm-black))]',
                )}
                key={source}
              >
                {source}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProductBehaviorSection() {
  return (
    <Section id="signature-sequence" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">
              See the Decision Object in Motion
            </Eyebrow>
            <p className="mt-7 font-serif text-[clamp(2.6rem,5vw,5.6rem)] leading-[0.98]">
              The product behavior makes sense after the judgment problem is
              clear.
            </p>
            <div className="mt-8 grid gap-2 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
              {fourQuestions.map((item) => (
                <p className="border-t border-current/16 pt-3" key={item.question}>
                  {item.question}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between gap-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_48%,transparent)]">
              <p>Product Behavior</p>
              <p className="hidden sm:block">Decision Object in Motion</p>
            </div>
            <ProductFrame />
          </div>
        </div>
      </Container>
    </Section>
  );
}
