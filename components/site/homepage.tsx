import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { AnalyticsListener } from '@/components/site/analytics-listener';
import {
  caseStudyMetrics,
  companyTraction,
  contactConfig,
  founderProfile,
  operatingEnvironment,
  schraderCaseStudy,
  storyImages,
  teamProfiles,
  testimonials,
} from '@/components/site/content';

function Band({
  id,
  label,
  children,
  className = '',
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`ea-band ${className}`}>
      <div className="ea-container">
        {label && <p className="ea-label">{label}</p>}
        {children}
      </div>
    </section>
  );
}

function Action({
  href,
  children,
  secondary = false,
  event,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  event?: string;
}) {
  const external = href.startsWith('https://');
  return (
    <a
      className={`ea-action ${secondary ? 'ea-action--quiet' : ''}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      data-analytics-event={event}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

const questions = ['What matters?', 'Who owns it?', 'What happens next?'];
export function HomePage({ campaign }: { campaign?: 'penfed' }) {
  return (
    <div className="ea-site">
      <AnalyticsListener campaign={campaign} />
      <Header />
      <main id="main-content">
        <section className="ea-hero" aria-labelledby="hero-title">
          <Image
            className="ea-hero__image"
            src="/brand/ea-storm-architecture.jpg"
            alt=""
            width={1536}
            height={1024}
            priority
            unoptimized
          />
          <div className="ea-entrance" aria-hidden="true">
            <i />
            <i />
            <i />
            <b />
          </div>
          <div className="ea-container ea-hero__content">
            <p className="ea-label">EA STORM</p>
            <h1 id="hero-title">
              Keep What
              <br className="ea-mobile-break" /> Matters Moving.
            </h1>
            <div className="ea-hero__bottom">
              <p className="ea-hero__promise">
                Identify what needs attention.
                <br />
                Get it to the right owner.
                <br />
                Keep it moving through the outcome.
              </p>
              <div className="ea-actions">
                <Action href="#how-it-works" event="hero_demo_click">
                  See How It Works
                </Action>
                <Action
                  href={contactConfig.demoHref}
                  secondary
                  event="platform_click"
                >
                  Request Demo
                </Action>
              </div>
            </div>
            <a
              className="ea-hero__next"
              href="#how-it-works"
              aria-label="Explore how EA STORM works"
            >
              <ArrowDown size={22} aria-hidden="true" />
            </a>
          </div>
        </section>
        <Band id="how-it-works" className="ea-questions">
          <div className="ea-question-row">
            {questions.map((q, i) => (
              <div key={q}>
                <span className="ea-index">0{i + 1}</span>
                <h2>{q}</h2>
              </div>
            ))}
          </div>
          <p className="ea-lead ea-question-support">
            Your organization already has the information.
            <br />
            EA STORM helps turn what it knows into what happens next.
          </p>
        </Band>
        <Band
          id="problem"
          label="The gap between knowing and doing"
          className="ea-white"
        >
          <div className="ea-editorial">
            <h2>Important things get lost between knowing and doing.</h2>
            <div className="ea-prose">
              <p className="ea-pullquote">“I thought someone owned that.”</p>
              <p>
                The email existed. The CRM had information. The meeting surfaced
                context. The dashboard showed data.
              </p>
              <p>Yet the right action may still fail to happen.</p>
              <p className="ea-emphasis">
                When important things keep getting missed, leaders become the
                fallback.
              </p>
              <p>
                The same problems surface again. Teams fix what is urgent
                instead of what is causing it. Leadership gets pulled back into
                the business instead of having the space to lead it forward.
              </p>
            </div>
          </div>
        </Band>
        <Band id="root-cause" label="Recurring issues">
          <div className="ea-editorial">
            <h2>Stop treating the symptom.</h2>
            <div className="ea-prose">
              <p className="ea-pullquote">
                The fire gets put out. The reason it started is still there.
              </p>
              <p>
                EA STORM brings related signals and organizational context
                together so teams can see what may be driving a recurring
                issue—not just what is showing up on the surface.
              </p>
            </div>
          </div>
        </Band>
        <Band id="existing-stack" label="Across the systems you already use">
          <div className="ea-editorial">
            <h2>
              Most systems help you record work, report on work, or execute
              work.
            </h2>
            <div className="ea-prose">
              <p className="ea-emphasis">
                EA STORM makes sure the right work moves in the first place.
              </p>
              <p className="ea-system-promise">
                We don&apos;t replace the systems you use.
                <br />
                We work across them.
              </p>
              <p>
                EA STORM brings together signals already living across your
                systems, teams and workflows to show what needs attention, what
                may be driving it, who should own it, and what should happen
                next.
              </p>
            </div>
          </div>
          <p className="ea-system-line">
            CRM <span>/</span> Email <span>/</span> Meetings <span>/</span>{' '}
            Documents <span>/</span> Finance <span>/</span> Operations
          </p>
        </Band>
        <Band
          id="storm-origin"
          label="The intelligence behind the name"
          className="ea-dark ea-origin"
        >
          <h2>
            Some things can&apos;t be dropped.
            <br />
            Some signals can&apos;t be missed.
          </h2>
          <figure className="ea-origin-visual">
            <div>
              <Image
                src={storyImages.crystalBallDecision.src}
                alt={storyImages.crystalBallDecision.alt}
                width={1536}
                height={1024}
                unoptimized
                loading="lazy"
              />
              <span>Crystal Ball / Questions protected</span>
            </div>
            <i aria-hidden="true" />
            <div>
              <Image
                src={storyImages.stormSignalRouting.src}
                alt={storyImages.stormSignalRouting.alt}
                width={1536}
                height={1024}
                unoptimized
                loading="lazy"
              />
              <span>Storm / Response in motion</span>
            </div>
            <figcaption>
              Conceptual visualization of signal, recognition, movement and
              response
            </figcaption>
          </figure>
          <div className="ea-origin__layout">
            <div className="ea-prose">
              <p className="ea-label">Crystal Ball</p>
              <p>
                Early in Kristina Spencer’s career, in one of her first meetings
                with a commander, the commander had two lucite boxes. One held
                a crystal ball. The other held a tennis/bouncy ball.
              </p>
              <p>
                The Crystal Ball represented the questions that could not be
                dropped: Why does this matter? Who should own it? Should it be
                automated? What oversight does it need? How will it be held
                accountable? What was the outcome? What did we learn? What
                problem did we solve?
              </p>
              <p>
                Execution was the bouncy ball. Work can move, be handed off,
                occasionally drop, and be recovered. The bouncy ball bounces.
                The Crystal Ball shatters.
              </p>
            </div>
            <div className="ea-prose">
              <p className="ea-label">Storm</p>
              <p>
                Years later, after a staff meeting, Kristina was walking toward
                the back of the office. She saw her co-founder Monica Vasquez’s
                service animal, Storm, standing at attention near the office
                door and appearing to need help releasing her leash.
              </p>
              <p>
                Kristina released the leash. Storm immediately moved toward the
                conference room. Monica was experiencing a seizure. Kristina
                had not recognized what was happening. Storm had recognized the
                signal and moved to assist Monica.
              </p>
              <p className="ea-note">
                Monica Vasquez has explicitly approved public use of this
                story.
              </p>
            </div>
          </div>
          <p className="ea-origin__closing">
            Crystal Ball taught Kristina to protect the questions that matter.
            Storm demonstrated the power of recognizing a consequential signal
            and moving the appropriate response. Together, those lessons helped
            shape the operating idea behind EA STORM.
          </p>
          <span id="signature-sequence" className="ea-anchor" />
          <ol className="ea-role-sequence">
            {[
              'Crystal Ball determines.',
              'Authority governs.',
              'Storm executes.',
              'Verification proves.',
              'Memory learns.',
            ].map((role, i) => (
              <li key={role}>
                <span className="ea-index">0{i + 1}</span>
                <p>{role}</p>
                {i < 4 && <ArrowRight size={18} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Band>
        <AskStormSection />
        <ProofSection />
        <Band id="why-now" label="Why now" className="ea-dark ea-thesis">
          <div className="ea-editorial">
            <h2>Your systems know more than your organization acts on.</h2>
            <p className="ea-lead">
              More data, more software and more AI create more possible actions.
              EA STORM helps determine which ones actually need to move.
            </p>
          </div>
        </Band>
        <FounderSection />
        <InvestorSection campaign={campaign} />
        <Band id="contact" label="EA STORM" className="ea-close">
          <h2>Keep What Matters Moving.</h2>
          <div className="ea-close__bottom">
            <p className="ea-lead">
              Know what matters.
              <br />
              Know who owns it.
              <br />
              Keep it moving.
            </p>
            <Action href={contactConfig.demoHref} event="platform_click">
              Request Demo
            </Action>
          </div>
        </Band>
      </main>
      <Footer />
    </div>
  );
}

function AskStormSection() {
  return (
    <Band
      id="product-proof"
      label="The product / Ask STORM"
      className="ea-product ea-ask"
    >
      <div className="ea-editorial">
        <h2>Ask STORM.</h2>
        <div className="ea-prose">
          <p className="ea-emphasis">Ask what&apos;s getting in the way.</p>
          <p>
            Ask a question. EA STORM brings together the relevant
            organizational context, shows what requires attention, surfaces
            what may be driving the issue, and proposes what should happen
            next.
          </p>
        </div>
      </div>
      <p className="ea-note">
        Synthetic product demonstration. No private customer data is displayed.
      </p>
      <div className="ea-ask__experience">
        <div className="ea-ask__conversation" aria-label="Ask STORM demonstration">
          <div className="ea-message ea-message--user">
            <p className="ea-label">You</p>
            <p>What&apos;s getting in our way right now?</p>
          </div>
          <div className="ea-message">
            <p className="ea-label">EA STORM</p>
            <p>Three issues need attention.</p>
            <ol className="ea-issue-list">
              <li>Customer opportunity sitting untouched</li>
              <li>Duplicative technology and system spend</li>
              <li>Workflow and handoff breakdown</li>
            </ol>
          </div>
          <div className="ea-message ea-message--user">
            <p className="ea-label">You</p>
            <p>What should we do first?</p>
          </div>
          <div className="ea-message">
            <p className="ea-label">EA STORM</p>
            <p>
              Review the untouched customer opportunity first. Confirm the
              owner, deadline and authority before action.
            </p>
          </div>
          <div className="ea-ask__context">
            {[
              ['Why this surfaced', 'No recent activity against an open opportunity'],
              ['Evidence', 'CRM activity · customer behavior · workflow history'],
              ['Owner', 'Confirm accountable relationship owner'],
              ['Next action', 'Review context and approve the proposed follow-up'],
              ['Authority', 'Human approval required before execution'],
              ['Verification', 'Track response and resulting status'],
              ['Outcome', 'Return the result to organizational memory'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="ea-label">{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="ea-ask__command">
          <figcaption>
            <p className="ea-label">Integrated operating context</p>
            <h3>Operator Command Center</h3>
          </figcaption>
          <a
            href="/product/command-center.webp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inspect the Operator Command Center screenshot"
          >
              <Image
                src="/product/command-center.webp"
                alt="Operator Command Center interface showing prioritized operational signals and execution work."
                width={1536}
                height={1024}
                unoptimized
                loading="lazy"
              />
          </a>
          <p className="ea-note">
            The conversation is an interface into governed organizational
            context—not a chatbot beside a dashboard.
          </p>
        </figure>
      </div>
    </Band>
  );
}

function ProofSection() {
  return (
    <Band id="proof" label="Proof / Results" className="ea-white">
      <div className="ea-editorial">
        <h2>
          Built in real operations.
          <br />
          Proven through real use.
        </h2>
        <p className="ea-lead">
          {schraderCaseStudy.headline}
          <br />
          {schraderCaseStudy.subhead}
        </p>
      </div>
      <div id="case-study" className="ea-case-context">
        <span>{schraderCaseStudy.client}</span>
        <span>{schraderCaseStudy.industry}</span>
        <span>{schraderCaseStudy.engagement}</span>
      </div>
      <div className="ea-evidence">
        {caseStudyMetrics
          .filter((m) => m.verified)
          .map((m) => (
            <div key={m.label}>
              <p className="ea-number">{m.value}</p>
              <div>
                <h3>{m.label}</h3>
                <p className="ea-note">{m.sourceNote}</p>
              </div>
            </div>
          ))}
      </div>
      <p className="ea-note">{schraderCaseStudy.attributionBoundary}</p>
      <details className="ea-details">
        <summary>Customer operating environment</summary>
        <div className="ea-operating">
          {operatingEnvironment
            .filter((m) => m.verified)
            .map((m) => (
              <div key={m.label}>
                <strong>{m.value}</strong>
                <p>{m.label}</p>
                <p className="ea-note">{m.sourceNote}</p>
              </div>
            ))}
        </div>
        <p className="ea-note">
          Customer operating scale and outcomes are not EA STORM company revenue
          or company traction.
        </p>
      </details>
      <blockquote className="ea-testimonial">
        <p>“{testimonials[0].quote}”</p>
        <footer>
          {testimonials[0].attribution} / {testimonials[0].organization}
        </footer>
      </blockquote>
    </Band>
  );
}

function FounderSection() {
  const founders = [
    { ...founderProfile, bio: founderProfile.shortBio },
    { ...teamProfiles[0], bio: teamProfiles[0].roleNote },
  ];
  return (
    <Band id="company" label="The founders">
      <div className="ea-editorial">
        <h2>
          Operational understanding.
          <br />
          Technical execution.
        </h2>
        <p className="ea-lead">
          The operating problem came first.
          <br />
          The software came second.
        </p>
      </div>
      <div className="ea-founders">
        {founders.map((f) => (
          <article key={f.name}>
            <Image
              src={f.headshot}
              alt={f.headshotAlt}
              width={800}
              height={1000}
              unoptimized
              loading="lazy"
            />
            <p className="ea-label">{f.title}</p>
            <h3>{f.name}</h3>
            <p>{f.bio}</p>
          </article>
        ))}
      </div>
    </Band>
  );
}

function InvestorSection({ campaign }: { campaign?: 'penfed' }) {
  return (
    <Band id="investors" label="Investors" className="ea-white">
      <div className="ea-editorial">
        <h2>Investor Relations</h2>
        <div>
          <p className="ea-emphasis">
            EA STORM is engaging select investors and strategic partners.
          </p>
          <Action href={contactConfig.investorHref} event="investor_click">
            Request Investor Materials
          </Action>
        </div>
      </div>
      {campaign === 'penfed' && (
        <div className="ea-traction">
          <h3>Company traction</h3>
          <p className="ea-note">
            Founder-validated September 14, 2026. Point-in-time company
            traction.
          </p>
          <div>
            {companyTraction.map((m) => (
              <div key={m.label}>
                <p className="ea-number">{m.value}</p>
                <h4>{m.label}</h4>
                <p className="ea-note">{m.sourceNote}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Band>
  );
}
