import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ProductFrame } from '@/components/site/product-frame';
import { audienceSegments, customerStakes } from '@/components/site/content';
import {
  BrainExecutionSection,
  CrystalBallSection,
  FourQuestionsSection,
  LearningLoopSection,
  StormLifecycleSection,
  StormOriginSection,
} from '@/components/site/phase-two-sections';
import {
  CaseStudySection,
  CategoryAuthoritySection,
  CommercialSection,
  ExistingStackSection,
  JudgmentGraphForeshadowSection,
  ProductProofSection,
  ProofSection,
  TestimonialArchitecture,
  WhyNowSection,
  WhyRealEstateSection,
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
} from '@/components/site/primitives';
import { AnalyticsListener } from '@/components/site/analytics-listener';
import { filmConfig } from '@/lib/film';

export function HomePage({ campaign }: { campaign?: 'penfed' }) {
  const demoHref = filmConfig.enabled ? '#film' : '#signature-sequence';

  return (
    <>
      <AnalyticsListener campaign={campaign} />
      <Header />
      <main>
        <Section className="pt-9 sm:pt-12 lg:pt-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <Eyebrow className="text-[var(--storm-gold)]">
                  Decision & Execution Intelligence
                </Eyebrow>
                <EditorialHeadline
                  as="h1"
                  className="mt-6 max-w-2xl text-[clamp(3rem,4.75vw,5.35rem)] leading-[0.99]"
                >
                  Know what matters.
                  <br />
                  Know what happens next.
                </EditorialHeadline>
                <p className="mt-6 max-w-xl text-base leading-8 text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)]">
                  Important things are happening across your organization every
                  day. The information needed to recognize what matters is
                  scattered across people, systems, conversations, workflows,
                  and data.
                </p>
                <p className="mt-4 max-w-xl text-base leading-8 text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]">
                  Essential EA + AI Storm OS turns fragmented organizational
                  information into accountable action.
                </p>
                <div className="mt-6 grid max-w-xl grid-cols-2 gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] font-sans text-[0.62rem] font-semibold uppercase tracking-[0.11em] text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)] sm:grid-cols-4">
                  {['Attention', 'Why Now', 'Owner', 'Verified'].map((item) => (
                    <p className="bg-[var(--storm-black)] px-3 py-3" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={demoHref} event="hero_demo_click">
                    See Storm in Action
                  </ButtonLink>
                  <ButtonLink
                    href="#brain-execution"
                    variant="secondary"
                    event="platform_click"
                  >
                    Explore the Platform
                  </ButtonLink>
                </div>
                <p className="mt-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_50%,transparent)]">
                  Powered by Crystal Ball Triage
                </p>
              </div>

              <div id="signature-sequence">
                <div className="mb-4 flex items-center justify-between gap-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_48%,transparent)]">
                  <p>Product Behavior</p>
                  <p className="hidden sm:block">Decision Object in Motion</p>
                </div>
                <ProductFrame />
              </div>
            </div>

            <div className="mt-10 border-y border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] py-5">
              <div className="grid gap-4 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_55%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
                {audienceSegments.map((segment) => (
                  <p key={segment}>{segment}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] sm:grid-cols-3">
              {[
                ['Product Exists', 'Live commercial surfaces'],
                ['Proof Exists', 'The Schrader Group case study'],
                ['Traction Exists', '2 Paying Customers / 65 Current Users / $30K Revenue to Date'],
              ].map(([label, value]) => (
                <div className="bg-[var(--storm-black)] p-4" key={label}>
                  <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--storm-gold)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="cream" className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr]">
              <div>
                <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
                  The Customer Problem
                </Eyebrow>
                <EditorialHeadline className="mt-8 text-[clamp(3rem,5.7vw,6.4rem)]">
                  By the time someone connects the dots, the moment may have
                  moved.
                </EditorialHeadline>
              </div>
              <div className="self-end">
                <p className="max-w-2xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
                  Fragmentation does not only create inefficiency. It costs
                  time, money, opportunity, trust, leadership capacity, and
                  employee capacity.
                </p>
                <div className="mt-8 grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2">
                  {customerStakes.map((stake) => (
                    <p
                      className="bg-[var(--storm-cream)] p-4 font-sans text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]"
                      key={stake}
                    >
                      {stake}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <FourQuestionsSection />
        <BrainExecutionSection />
        <CrystalBallSection />
        <StormLifecycleSection />
        <StormOriginSection />
        <LearningLoopSection />
        <ProductProofSection />
        <ProofSection />
        <TestimonialArchitecture />
        <CaseStudySection />
        <CommercialSection />
        <WhyRealEstateSection />
        <ExistingStackSection />
        <GovernmentSection />
        <WhyNowSection />
        <CategoryAuthoritySection />
        <JudgmentGraphForeshadowSection />
        <FounderSection />
        <InvestorSection />
        <FinalCategoryClose />
        <LaunchEvidenceChecklistSection />
      </main>
      <Footer />
    </>
  );
}
