import {
  capabilityTypes,
  crystalBallQuestions,
  fourQuestions,
  lifecycleSteps,
  organizationalSignals,
  stormOriginStory,
} from '@/components/site/content';
import {
  Container,
  Disclosure,
  Divider,
  EditorialHeadline,
  Eyebrow,
  Section,
} from '@/components/site/primitives';
import { cn } from '@/lib/utils';

export function FourQuestionsSection() {
  return (
    <Section id="four-questions" tone="cream" className="py-0">
      <Container>
        <div className="border-b border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-14 sm:py-20">
          <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
            The Four Questions
          </Eyebrow>
          <EditorialHeadline className="mt-7 max-w-5xl text-[clamp(2.9rem,5.6vw,6.3rem)]">
            The operating questions behind every consequential action.
          </EditorialHeadline>
        </div>

        <div className="divide-y divide-[color-mix(in_srgb,var(--storm-black)_12%,transparent)]">
          {fourQuestions.map((item, index) => (
            <article
              className="grid min-h-[52svh] items-center gap-10 py-14 lg:grid-cols-[0.38fr_0.62fr] lg:py-20"
              key={item.question}
            >
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_42%,transparent)]">
                Question {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <h2 className="font-serif text-[clamp(3.05rem,7vw,7.4rem)] font-medium leading-[0.94] tracking-normal">
                  {item.question}
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
                  {item.body}
                </p>
                <p className="mt-5 max-w-2xl font-sans text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-gold)_76%,var(--storm-black))]">
                  {item.consequence}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-10 border-t border-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] py-16 lg:grid-cols-[0.58fr_0.42fr] lg:py-24">
          <p className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.96]">
            And Storm does not stop at assignment.
          </p>
          <p className="self-end text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
            It follows the work through execution, verification and outcome.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function BrainExecutionSection() {
  return (
    <Section id="brain-execution">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ArchitecturePanel
            eyebrow="The Brain"
            title="Crystal Ball Triage"
            words={['Recognize.', 'Understand.', 'Prioritize.', 'Decide.']}
            body="Crystal Ball Triage evaluates organizational signals against context, consequence, confidence and decision rights."
          />

          <div className="flex items-center justify-center py-8 lg:px-8">
            <div className="handoff-object grid h-36 w-36 place-items-center border border-[var(--storm-gold)] bg-[color-mix(in_srgb,var(--storm-gold)_8%,transparent)]">
              <span className="font-sans text-[0.64rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[var(--storm-gold)]">
                Judgment
                <br />
                to Action
              </span>
            </div>
          </div>

          <ArchitecturePanel
            eyebrow="The Execution System"
            title="AI Storm OS"
            words={['Route.', 'Govern.', 'Verify.', 'Learn.']}
            body="AI Storm OS takes that intelligence forward, determining ownership and authority, coordinating the appropriate capability, verifying completion and preserving the outcome."
          />
        </div>

        <div className="mt-20 border-t border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] pt-12 text-center">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--storm-gold)]">
            Judgment -&gt; Action
          </p>
          <p className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(3rem,6vw,6.8rem)] leading-[0.96]">
            Crystal Ball determines what should happen.
            <br />
            Storm makes sure something does.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function ArchitecturePanel({
  eyebrow,
  title,
  words,
  body,
}: {
  eyebrow: string;
  title: string;
  words: string[];
  body: string;
}) {
  return (
    <article className="border-y border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] py-10">
      <Eyebrow className="text-[color-mix(in_srgb,var(--storm-cream)_50%,transparent)]">
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">
        {title}
      </h2>
      <div className="mt-10 grid gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--storm-cream)]">
        {words.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </div>
      <p className="mt-10 text-lg leading-8 text-[color-mix(in_srgb,var(--storm-cream)_68%,transparent)]">
        {body}
      </p>
    </article>
  );
}

export function CrystalBallSection() {
  return (
    <Section id="crystal-ball" tone="cream">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              Crystal Ball Triage
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(2.95rem,5.25vw,5.8rem)]">
              Your organization does not need everything escalated.
              <br />
              It needs judgment at scale.
            </EditorialHeadline>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[color-mix(in_srgb,var(--storm-black)_68%,transparent)]">
              Crystal Ball Triage is the intelligence brain inside Storm. It
              evaluates incoming signals before they become another task, alert
              or executive interruption.
            </p>
          </div>

          <div className="crystal-evaluation border border-[color-mix(in_srgb,var(--storm-black)_15%,transparent)] bg-[color-mix(in_srgb,var(--storm-black)_3%,transparent)] p-5">
            <div className="grid gap-3">
              {organizationalSignals.slice(0, 5).map((signal, index) => (
                <div
                  className={cn(
                    'evaluation-signal flex items-center justify-between gap-4 border px-4 py-3 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.1em]',
                    index === 1
                      ? 'border-[var(--storm-gold)] text-[var(--storm-gold)]'
                      : 'border-[color-mix(in_srgb,var(--storm-black)_12%,transparent)] text-[color-mix(in_srgb,var(--storm-black)_42%,transparent)]',
                  )}
                  key={signal}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span>{signal}</span>
                  <span>{index === 1 ? 'Decision Object' : 'Muted'}</span>
                </div>
              ))}
            </div>

            <Divider className="my-8" />

            <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_13%,transparent)] sm:grid-cols-2">
              {crystalBallQuestions.map((question, index) => (
                <p
                  className={cn(
                    'bg-[var(--storm-cream)] p-4 font-serif text-2xl leading-none',
                    index === 2 || index === 4
                      ? 'text-[color-mix(in_srgb,var(--storm-gold)_76%,var(--storm-black))]'
                      : 'text-[var(--storm-black)]',
                  )}
                  key={question}
                >
                  {question}
                </p>
              ))}
            </div>

            <Disclosure>
              The goal is not to remove humans from decisions. It is to put
              human judgment where it creates the most value.
            </Disclosure>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function StormLifecycleSection() {
  return (
    <Section id="storm-lifecycle">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <Eyebrow className="text-[var(--storm-gold)]">
              Meet AI Storm OS
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(3.2rem,6vw,6.7rem)]">
              Judgment becomes valuable when it changes what happens next.
            </EditorialHeadline>
          </div>
          <p className="self-end text-xl leading-9 text-[color-mix(in_srgb,var(--storm-cream)_70%,transparent)]">
            Storm carries intelligence through the entire execution lifecycle.
            Context and accountability persist as the Decision Object moves
            from signal to verified outcome and organizational memory.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] lg:grid-cols-5">
          {lifecycleSteps.map((item, index) => (
            <article
              className={cn(
                'lifecycle-step min-h-64 bg-[var(--storm-black)] p-5',
                item.label === 'Verification' &&
                  'bg-[color-mix(in_srgb,var(--storm-gold)_8%,var(--storm-black))]',
              )}
              key={item.label}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_42%,transparent)]">
                {item.step}
              </p>
              <h2
                className={cn(
                  'mt-8 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em]',
                  ['Capability Selection', 'Verification'].includes(item.label)
                    ? 'text-[var(--storm-gold)]'
                    : 'text-[var(--storm-cream)]',
                )}
              >
                {item.label}
              </h2>
              <p className="mt-5 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-y border-[color-mix(in_srgb,var(--storm-gold)_35%,transparent)] py-16 lg:grid-cols-[0.44fr_0.56fr]">
          <p className="font-sans text-[clamp(3.2rem,9vw,9rem)] font-semibold uppercase leading-none tracking-[0.04em] text-[var(--storm-gold)]">
            Verified
          </p>
          <div className="self-center">
            <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.96]">
              Assignment is not completion.
            </h2>
            <p className="mt-7 text-xl leading-9 text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)]">
              Did it happen? Did it work? What should the organization learn?
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-b border-[color-mix(in_srgb,var(--storm-cream)_14%,transparent)] pb-12 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-cream)_54%,transparent)]">
              Provider-Neutral Execution
            </Eyebrow>
            <p className="mt-5 max-w-sm text-base leading-7 text-[color-mix(in_srgb,var(--storm-cream)_66%,transparent)]">
              Storm does not assume AI is always the right executor. After
              authority is established, the system determines which capability
              should act.
            </p>
          </div>
          <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-cream)_12%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
            {capabilityTypes.map((capability) => (
              <p
                className="bg-[var(--storm-black)] p-4 font-sans text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)]"
                key={capability}
              >
                {capability}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function StormOriginSection() {
  return (
    <Section tone="cream" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <Eyebrow className="text-[color-mix(in_srgb,var(--storm-black)_54%,transparent)]">
              {stormOriginStory.eyebrow}
            </Eyebrow>
            <EditorialHeadline className="mt-8 text-[clamp(2.9rem,5.7vw,6.2rem)]">
              {stormOriginStory.title}
            </EditorialHeadline>
          </div>
          <div className="self-end">
            <p className="text-xl leading-9 text-[color-mix(in_srgb,var(--storm-black)_70%,transparent)]">
              {stormOriginStory.body}
            </p>
            <p className="mt-7 text-lg leading-8 text-[color-mix(in_srgb,var(--storm-black)_66%,transparent)]">
              {stormOriginStory.bridge}
            </p>
            <Disclosure>{stormOriginStory.closing}</Disclosure>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function LearningLoopSection() {
  return (
    <Section tone="cream" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr]">
          <p className="font-serif text-[clamp(3.1rem,6.5vw,7rem)] leading-[0.96]">
            Every outcome strengthens what the organization knows.
          </p>
          <div className="self-end">
            <div className="grid gap-px bg-[color-mix(in_srgb,var(--storm-black)_14%,transparent)] font-sans text-[0.66rem] font-semibold uppercase tracking-[0.13em]">
              {['Outcome', 'Memory', 'Better Context', 'Better Next Decision'].map(
                (item, index) => (
                  <p
                    className={cn(
                      'bg-[var(--storm-cream)] p-4',
                      index === 3 && 'text-[color-mix(in_srgb,var(--storm-gold)_72%,var(--storm-black))]',
                    )}
                    key={item}
                  >
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
