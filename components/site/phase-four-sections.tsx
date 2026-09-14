import Image from 'next/image';
import {
  companyTraction,
  contactConfig,
  finalQuestions,
  founderProfile,
  founderThesis,
  governmentArchitecture,
  governmentBoundaries,
  governmentQuestions,
  governmentUseCases,
  investorStage,
  launchEvidenceChecklist,
  teamProfiles,
} from '@/components/site/content';
import {
  ButtonLink,
  Container,
  Disclosure,
  Divider,
  EditorialHeadline,
  Eyebrow,
  Section,
  StatusChip,
} from '@/components/site/primitives';
import { RequestPanel } from '@/components/site/request-panel';

export function GovernmentSection() {
  return (
    <Section id="government" className="bg-[color-mix(in_srgb,var(--storm-midnight)_30%,var(--storm-black))]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.66fr_0.34fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">AI Storm OS Gov</Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(3rem,6vw,6.7rem)]">
              Government has access to increasingly powerful intelligence.
              <br />
              The next question is accountable action.
            </EditorialHeadline>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)]">
              Storm Gov is being designed around the organizational layer
              surrounding the model: context, evidence, decision rights, human
              judgment, authority, ownership, governed execution, verification,
              auditability, and organizational learning.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <DevelopmentDisclosure />
          <GovernmentArchitecture />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <StatusChip intent="midnight">Governed Questions</StatusChip>
            <p className="mt-6 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_66%,transparent)]">
              Government adoption depends on the discipline around reasoning,
              not theatrical claims about the model itself.
            </p>
          </div>
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] sm:grid-cols-2">
            {governmentQuestions.map((question) => (
              <p
                className="bg-[color-mix(in_srgb,var(--storm-black)_76%,var(--storm-midnight))] p-5 font-serif text-2xl leading-tight"
                key={question}
              >
                {question}
              </p>
            ))}
          </div>
        </div>

        <GovernmentUseCases />

        <div className="mt-16 border-t border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] pt-10">
          <p className="max-w-5xl font-serif text-4xl leading-tight sm:text-5xl">
            Storm Gov is not another frontier model. It is being designed around
            what happens before and after model reasoning: what matters, what
            evidence applies, who has authority, what can be executed, what
            requires human judgment, what happened, and what should be learned.
          </p>
          <Disclosure>
            Approved reasoning services, including ChatGPT, Claude, Gemini, and
            other approved models, may operate as capabilities inside a governed
            enterprise environment.
          </Disclosure>
        </div>
      </Container>
    </Section>
  );
}

function DevelopmentDisclosure() {
  return (
    <article className="border border-[color-mix(in_srgb,var(--storm-gold)_42%,transparent)] p-6 sm:p-8">
      <StatusChip intent="attention">Development Status</StatusChip>
      <p className="mt-8 font-serif text-3xl leading-tight">
        AI Storm OS Gov is a development-stage architecture.
      </p>
      <p className="mt-5 text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]">
        Essential EA does not currently represent the platform as:
      </p>
      <ul className="mt-6 grid gap-3">
        {governmentBoundaries.map((boundary) => (
          <li
            className="border-t border-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] pt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]"
            key={boundary}
          >
            {boundary}
          </li>
        ))}
      </ul>
    </article>
  );
}

function GovernmentArchitecture() {
  return (
    <article aria-label="AI Storm OS Gov architecture" className="border-y border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] py-2">
      {governmentArchitecture.map((step, index) => (
        <div className="grid grid-cols-[2.5rem_1fr] items-center gap-5" key={step}>
          <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--storm-gold)]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <div className="border-l border-[color-mix(in_srgb,var(--storm-cream)_18%,transparent)] py-4 pl-5">
            <p className="font-sans text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_78%,transparent)]">
              {step}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
}

function GovernmentUseCases() {
  return (
    <div className="mt-16">
      <Eyebrow className="text-[color-mix(in_srgb,var(--storm-cream)_54%,transparent)]">
        Government Use Cases
      </Eyebrow>
      <div className="mt-8 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] lg:grid-cols-3">
        {governmentUseCases.map((useCase) => (
          <article className="min-h-72 bg-[var(--storm-black)] p-6" key={useCase.name}>
            <StatusChip
              intent={useCase.status === 'DISCOVERY USE CASE' ? 'neutral' : 'attention'}
            >
              {useCase.status}
            </StatusChip>
            <h3 className="mt-10 font-serif text-4xl leading-none">
              {useCase.name}
            </h3>
            <p className="mt-8 text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_66%,transparent)]">
              {useCase.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FounderSection() {
  return (
    <Section id="company" tone="cream">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              Founders
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(3rem,6vw,6.8rem)]">
              This started before the AI boom.
              <br />
              It started inside the work.
            </EditorialHeadline>
            <div className="mt-10 max-w-3xl space-y-6 text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              <p>
                Kristina Spencer spent decades inside environments where
                fragmented information, competing priorities, changing
                conditions, human judgment, and execution all had to work
                together.
              </p>
              <p>
                The information existed. The systems existed. The people
                existed. But someone still had to determine what mattered, why
                it mattered now, who owned it, and what should happen next.
              </p>
              <p>
                The operating problem came first. The software came second.
                Monica Vasquez turns that operating problem into intelligent
                systems, integration architecture, and executable product
                infrastructure.
              </p>
            </div>
          </div>
          <FounderPortraits />
        </div>

        <Divider className="my-14" />
        <div className="mb-14 grid gap-8 border-y border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-10 lg:grid-cols-[0.34fr_0.66fr]">
          <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
            Founder Thesis
          </Eyebrow>
          <p className="font-serif text-4xl leading-tight sm:text-5xl">
            {founderThesis}
          </p>
        </div>
        <TeamArchitecture />
      </Container>
    </Section>
  );
}

function FounderPortraits() {
  return (
    <aside className="grid gap-px self-end bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <FounderCard
        alt={founderProfile.headshotAlt}
        bio={founderProfile.shortBio}
        headshot={founderProfile.headshot}
        name={founderProfile.name}
        proofPoints={founderProfile.proofPoints}
        title={founderProfile.title}
      />
      {teamProfiles.map((profile) => (
        <FounderCard
          alt={profile.headshotAlt}
          bio={profile.roleNote}
          headshot={profile.headshot}
          key={profile.name}
          name={profile.name}
          proofPoints={profile.proofPoints}
          title={profile.title}
        />
      ))}
    </aside>
  );
}

function FounderCard({
  alt,
  bio,
  headshot,
  name,
  proofPoints,
  title,
}: {
  alt: string;
  bio: string;
  headshot: string;
  name: string;
  proofPoints: readonly string[];
  title: string;
}) {
  return (
    <article className="bg-[var(--storm-cream)] p-5">
      <Image
        alt={alt}
        className="aspect-[4/5] w-full border border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] object-cover object-top"
        height={1000}
        loading="lazy"
        src={headshot}
        unoptimized
        width={800}
      />
      <h2 className="mt-8 font-serif text-4xl leading-none">{name}</h2>
      <p className="mt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]">
        {title}
      </p>
      <p className="mt-6 text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
        {bio}
      </p>
      <ul className="mt-6 grid gap-2">
        {proofPoints.map((point) => (
          <li
            className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_56%,transparent)]"
            key={point}
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function TeamArchitecture() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
      <div>
        <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
          Team Architecture
        </Eyebrow>
        <p className="mt-5 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
          Team profiles are structured for approved founders, advisors, and
          future operating hires without inventing credentials.
        </p>
      </div>
      <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2">
        {teamProfiles.map((profile) => (
          <article className="bg-[var(--storm-cream)] p-6" key={profile.name}>
            <StatusChip>Approved Team Profile</StatusChip>
            <h3 className="mt-10 font-serif text-4xl leading-none">
              {profile.name}
            </h3>
            <p className="mt-4 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]">
              {profile.title}
            </p>
            <p className="mt-6 text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_66%,transparent)]">
              {profile.roleNote}
            </p>
            <ul className="mt-6 grid gap-2">
              {profile.proofPoints.map((point) => (
                <li
                  className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_56%,transparent)]"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <article className="bg-[var(--storm-cream)] p-6">
          <Disclosure>{founderProfile.founderMarketFit}</Disclosure>
        </article>
      </div>
    </div>
  );
}

export function InvestorSection() {
  return (
    <Section id="investors">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.62fr_0.38fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">Investors</Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(2.9rem,5.7vw,6.2rem)]">
              We&apos;re not building another AI assistant.
              <br />
              We&apos;re building the layer between organizational intelligence
              and accountable action.
            </EditorialHeadline>
          </div>
          <div className="self-end">
            <StatusChip intent="attention">{investorStage.stage}</StatusChip>
            <p className="mt-8 font-serif text-5xl leading-none">
              {investorStage.raising}
            </p>
            <p className="mt-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_58%,transparent)]">
              {investorStage.instrument}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink
                href={contactConfig.investorHref}
                event="investor_click"
                rel="noopener noreferrer"
                target="_blank"
              >
                Request Investor Materials
              </ButtonLink>
              <ButtonLink href="#company" variant="secondary" event="investor_click">
                Meet the Founder
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.5fr_0.5fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-cream)_54%,transparent)]">
              Traction
            </Eyebrow>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {companyTraction.map((metric) => (
                <div className="border-t border-current/16 pt-5" key={metric.label}>
                  <p className="font-serif text-5xl leading-none">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-current/62">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-cream)_54%,transparent)]">
              Capital Priorities
            </Eyebrow>
            <div className="mt-8 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] sm:grid-cols-2">
              {investorStage.capitalPriorities.map((priority) => (
                <p
                  className="bg-[var(--storm-black)] p-5 font-serif text-3xl leading-tight"
                  key={priority}
                >
                  {priority}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <RequestPanel
            id="investor-interest"
            title="Investor Interest"
            fields={[
              'Name',
              'Email',
              'Organization / Fund',
              'Role',
              'Area of interest',
              'Optional message',
            ]}
            options={['Investor', 'Strategic Partner', 'Enterprise', 'Government', 'Other']}
            actionEvent="investor_click"
            actionHref={contactConfig.investorHref}
            actionLabel="Request Investor Materials"
            enabled={contactConfig.formsEnabled}
          />
          <RequestPanel
            id="request-demo"
            title="Request a Demo"
            fields={[
              'Name',
              'Work email',
              'Organization',
              'Role',
              'Primary interest',
            ]}
            options={['Commercial', 'Government', 'Investor / Partner']}
            actionHref={contactConfig.demoHref}
            actionLabel="Request a Demo"
            enabled={contactConfig.formsEnabled}
          />
        </div>
      </Container>
    </Section>
  );
}

export function FinalCategoryClose() {
  return (
    <Section id="contact" className="min-h-screen py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="grid gap-5">
            {finalQuestions.map((question) => (
              <p className="font-serif text-4xl leading-tight sm:text-5xl" key={question}>
                {question}
              </p>
            ))}
          </div>
          <div className="self-end">
            <div className="grid max-w-lg grid-cols-3 gap-px bg-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em]">
              {['Executed', 'Verified', 'Learned'].map((state) => (
                <p className="bg-[var(--storm-black)] px-4 py-5 text-center" key={state}>
                  {state}
                </p>
              ))}
            </div>
            <EditorialHeadline className="mt-12 text-[clamp(4rem,10vw,10rem)]">
              AI Storm OS
            </EditorialHeadline>
            <p className="mt-4 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--storm-gold)]">
              Decision & Execution Intelligence
            </p>
            <p className="mt-10 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
              Crystal Ball is the brain.
              <br />
              Storm is what happens next.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#signature-sequence" event="hero_demo_click">
                See Storm in Action
              </ButtonLink>
              <ButtonLink
                href={contactConfig.demoHref}
                variant="secondary"
                event="platform_click"
                rel="noopener noreferrer"
                target="_blank"
              >
                Request a Demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function LaunchEvidenceChecklistSection() {
  return (
    <Section tone="cream" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <StatusChip>Before Public Launch</StatusChip>
            <p className="mt-6 text-base leading-7 text-[color-mix(in_srgb,var(--storm-black)_64%,transparent)]">
              Items intentionally held until founder approval or source
              validation.
            </p>
          </div>
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
            {launchEvidenceChecklist.map((item) => (
              <p
                className="bg-[var(--storm-cream)] p-5 font-sans text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-black)_66%,transparent)]"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
