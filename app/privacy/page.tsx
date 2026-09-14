import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import {
  Container,
  EditorialHeadline,
  Eyebrow,
  Section,
} from '@/components/site/primitives';

const privacyEmail = 'privacy@essentialaistorm.com';

const policySections = [
  {
    title: 'Information You Provide',
    body: [
      'Our public website does not currently operate an Essential EA-hosted account-registration or general inquiry submission system.',
      'When you choose to schedule a demonstration or request investor information, you may be directed to a third-party service where you may voluntarily provide information such as your name, professional email address, organization, title or role, scheduling information, investment interests, business interests, and information you choose to include in your request.',
      'Please do not submit classified information, Controlled Unclassified Information (CUI), protected health information, financial-account credentials, Social Security numbers, passwords, export-controlled information, confidential customer information, or other sensitive information through our public website, demonstration-scheduling process, or investor-information request.',
    ],
  },
  {
    title: 'Demo Scheduling',
    body: [
      'Our demonstration scheduling process currently uses Google Calendar.',
      'When you follow our demo scheduling link, you leave essentialaistorm.com and interact with a service provided by Google.',
      'Information submitted through that service may be processed by Google and made available to Essential EA + AI Storm OS for scheduling, communicating about, and conducting the requested meeting.',
    ],
  },
  {
    title: 'Investor Information Requests',
    body: [
      'Our investor-information request process currently uses Google Forms.',
      'When you follow our investor-information link, you leave essentialaistorm.com and interact with a service provided by Google.',
      'Information voluntarily submitted through that form may be processed by Google and made available to Essential EA + AI Storm OS.',
      'We may use investor-request information to evaluate and respond to inquiries, provide appropriate materials, communicate regarding potential investment or strategic relationships, and arrange founder conversations.',
      'Submission of an information request does not create an investment relationship and does not constitute an offer to sell or solicitation to purchase securities.',
    ],
  },
  {
    title: 'Technical Information',
    body: [
      'Like websites generally, our hosting and infrastructure providers may process limited technical information necessary to deliver, secure, and operate the website, such as requests for website resources, timestamps, device or browser information, network information, and similar operational data.',
      "Essential EA + AI Storm OS does not currently use the public website's internal analytics framework to transmit visitor analytics to a registered production analytics provider.",
      'If our use of analytics, advertising technologies, cookies, or similar technologies materially changes, we may update this Policy and provide additional notices or choices where appropriate.',
    ],
  },
  {
    title: 'How We Use Information',
    list: [
      'respond to inquiries;',
      'schedule and conduct demonstrations or meetings;',
      'provide requested information;',
      'communicate with prospective customers, investors, partners, and other stakeholders;',
      'evaluate commercial, investment, and strategic opportunities;',
      'operate, protect, and improve our business and website;',
      'prevent fraud or misuse;',
      'comply with applicable legal obligations; and',
      'establish, exercise, or defend legal rights.',
    ],
    intro: 'We may use information received through our business interactions to:',
  },
  {
    title: 'Information Sharing',
    body: [
      'We may disclose information to service providers that support our business operations, including providers used for website hosting, communications, scheduling, and information requests; professional advisers such as attorneys and accountants; authorities when disclosure is required by applicable law or valid legal process; and parties involved in a potential financing, acquisition, merger, restructuring, or similar business transaction, subject to appropriate safeguards where applicable.',
      'We do not represent that Essential EA + AI Storm OS controls the independent privacy or security practices of third-party services.',
    ],
  },
  {
    title: 'Sale of Personal Information and Targeted Advertising',
    body: [
      'Essential EA + AI Storm OS does not currently operate its public website as a business for selling website visitor personal information, and the current website configuration does not intentionally use personal information for cross-context behavioral or targeted advertising.',
      'If our practices materially change, we will update this Policy and provide any notices or choices required by applicable law.',
    ],
  },
  {
    title: 'Data Minimization and Retention',
    body: [
      'We seek to collect and retain only information reasonably necessary for legitimate business, operational, contractual, security, or legal purposes.',
      'Retention periods may vary based on the nature of the information and relationship.',
      'Information that is no longer reasonably necessary may be deleted, de-identified, or otherwise disposed of consistent with applicable obligations.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use reasonable administrative, technical, and organizational measures designed to protect information under our control.',
      'No website, network, transmission method, or storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'Your Privacy Rights',
    body: [
      'Depending on your residence, applicable law, and the nature of our processing, you may have rights relating to your personal information, which may include rights to request access, correction, deletion, or portability of certain personal information and to opt out of certain processing where applicable.',
      'We may take reasonable steps to verify your identity before fulfilling certain requests.',
      'We will not unlawfully discriminate against an individual for exercising applicable privacy rights.',
    ],
    email: true,
  },
  {
    title: "Children's Privacy",
    body: [
      'Essential EA + AI Storm OS provides enterprise technology and business services.',
      'Our website and services are not directed to children under 13, and we do not intentionally seek to collect personal information from children under 13 through the public website.',
    ],
  },
  {
    title: 'Enterprise Customer Data',
    body: [
      'This Privacy Policy primarily addresses the public website and related business-development interactions.',
      'Information processed by Essential EA + AI Storm OS on behalf of enterprise customers may instead be governed by applicable customer agreements, data-processing terms, deployment requirements, and other contractual or legal obligations.',
    ],
  },
  {
    title: 'Government Information',
    body: [
      'The public website and its public contact channels are not intended for submission of classified information, Controlled Unclassified Information (CUI), government-sensitive information, export-controlled information, or other protected government information.',
      'AI Storm OS Gov is development-stage architecture.',
      'Nothing in this Privacy Policy represents AI Storm OS Gov as government-authorized, FedRAMP-authorized, DoD-authorized, or approved for handling protected government information.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'Our website may link to websites or services operated by third parties.',
      "Once you leave essentialaistorm.com, the relevant third party's terms and privacy practices may apply.",
      'We encourage visitors to review those policies before providing personal information.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy as our website, products, technology, business practices, or legal obligations evolve.',
      'When we make changes, we will update the "Last Updated" date.',
      'Where applicable law requires additional notice or consent, we will provide it as appropriate.',
    ],
  },
] as const;

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Storm OS',
  description:
    'Privacy Policy for Essential EA + AI Storm OS and essentialaistorm.com.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header sectionHrefPrefix="/" />
      <main>
        <Section className="pt-12 sm:pt-16 lg:pt-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <Eyebrow className="text-[var(--storm-gold)]">
                  Essential EA + AI Storm OS
                </Eyebrow>
                <EditorialHeadline
                  as="h1"
                  className="mt-6 text-[clamp(3.2rem,7vw,7.8rem)] leading-[0.94]"
                >
                  Privacy Policy
                </EditorialHeadline>
                <div className="mt-8 grid gap-3 font-sans text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_62%,transparent)]">
                  <p>Effective Date: September 14, 2026</p>
                  <p>Last Updated: September 14, 2026</p>
                </div>
              </div>

              <div className="self-end">
                <p className="max-w-3xl text-xl leading-9 text-[color-mix(in_srgb,var(--storm-cream)_72%,transparent)]">
                  Essential EA + AI Storm OS (&quot;Essential EA,&quot; &quot;AI Storm
                  OS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
                  your privacy. This Privacy Policy explains how information may
                  be collected, used,
                  disclosed, and protected when you visit essentialaistorm.com,
                  request a demonstration, request investor information,
                  communicate with us, or otherwise interact with our public
                  website and business.
                </p>
                <Link
                  className="mt-8 inline-flex min-h-12 items-center justify-center border border-[var(--storm-cream)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--storm-cream)] transition hover:border-[var(--storm-gold)] hover:text-[var(--storm-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
                  href="/"
                >
                  Return to Main Website
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="cream" className="py-16 sm:py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-10">
                {policySections.map((section) => (
                  <section
                    className="border-t border-[color-mix(in_srgb,var(--storm-black)_16%,transparent)] pt-8"
                    key={section.title}
                  >
                    <h2 className="font-sans text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]">
                      {section.title}
                    </h2>
                    {'intro' in section ? (
                      <p className="mt-5 text-base leading-8 text-[color-mix(in_srgb,var(--storm-black)_72%,transparent)]">
                        {section.intro}
                      </p>
                    ) : null}
                    {'list' in section ? (
                      <ul className="mt-5 grid gap-3 text-base leading-8 text-[color-mix(in_srgb,var(--storm-black)_72%,transparent)]">
                        {section.list.map((item) => (
                          <li className="flex gap-3" key={item}>
                            <span aria-hidden="true">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {'body' in section ? (
                      <div className="mt-5 grid gap-5 text-base leading-8 text-[color-mix(in_srgb,var(--storm-black)_72%,transparent)]">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                    {'email' in section ? (
                      <p className="mt-5 text-base leading-8 text-[color-mix(in_srgb,var(--storm-black)_72%,transparent)]">
                        You may submit a privacy request or applicable appeal
                        by emailing:{' '}
                        <a
                          className="font-semibold text-[var(--storm-black)] underline decoration-[var(--storm-gold)] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
                          href={`mailto:${privacyEmail}`}
                        >
                          {privacyEmail}
                        </a>
                      </p>
                    ) : null}
                  </section>
                ))}

                <section className="border-t border-[color-mix(in_srgb,var(--storm-black)_16%,transparent)] pt-8">
                  <h2 className="font-sans text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[color-mix(in_srgb,var(--storm-black)_58%,transparent)]">
                    Contact
                  </h2>
                  <div className="mt-5 grid gap-2 text-base leading-8 text-[color-mix(in_srgb,var(--storm-black)_72%,transparent)]">
                    <p>Questions or privacy requests may be directed to:</p>
                    <p>Essential EA + AI Storm OS</p>
                    <p>San Antonio, Texas, United States</p>
                    <p>
                      <a
                        className="font-semibold text-[var(--storm-black)] underline decoration-[var(--storm-gold)] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
                        href={`mailto:${privacyEmail}`}
                      >
                        {privacyEmail}
                      </a>
                    </p>
                    <p>essentialaistorm.com</p>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer sectionHrefPrefix="/" />
    </>
  );
}
