import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { contactConfig } from '@/components/site/content';
import { PurposeImpactExperience } from '@/components/site/purpose-impact-experience';

export const metadata: Metadata = {
  title: 'Purpose & Impact | EA STORM',
  description:
    'EA STORM is building a company grounded in service, accountability, and purpose.',
};

export default function PurposePage() {
  return (
    <div className="ea-site ea-purpose-page">
      <Header sectionHrefPrefix="/" />
      <main id="main-content">
        <section className="ea-purpose-hero" aria-label="Purpose and Impact">
          <Image
            className="ea-purpose-hero__image ea-purpose-hero__desktop"
            src="/brand/purpose/purpose-human-horizon-approved.png"
            alt="EA STORM Purpose and Impact. What we build matters. What it makes possible matters more. People, opportunity, stronger tomorrows. Greater people, stronger organizations, brighter tomorrows."
            width={1536}
            height={1024}
            sizes="100vw"
            unoptimized
            priority
          />
          <div className="ea-purpose-hero__mobile">
            <div className="ea-purpose-hero__mobile-copy">
              <p className="ea-purpose-hero__mobile-brand">EA STORM</p>
              <p className="ea-purpose-hero__mobile-tagline">
                Keep What Matters Moving.
              </p>
              <span aria-hidden="true" />
              <h1>
                What we build matters.
                <em>What it makes possible matters more.</em>
              </h1>
            </div>
            <div className="ea-purpose-hero__mobile-scene" aria-hidden="true">
              <Image
                src="/brand/purpose/purpose-human-horizon-approved.png"
                alt=""
                width={1536}
                height={1024}
                sizes="165vw"
                unoptimized
                priority
              />
            </div>
            <div className="ea-purpose-hero__mobile-footer">
              <p aria-label="People, Opportunity, Stronger Tomorrows">
                People <span aria-hidden="true">|</span> Opportunity{' '}
                <span aria-hidden="true">|</span> Stronger Tomorrows
              </p>
            </div>
          </div>
        </section>

        <section className="ea-band ea-white">
          <div className="ea-container ea-purpose-intro">
            <p className="ea-label">Why we are building EA STORM</p>
            <div className="ea-editorial">
              <h2>
                Business success should create opportunities beyond the
                business.
              </h2>
              <div className="ea-prose">
                <p>
                  As a military-spouse-founded technology company, we believe
                  business success should create opportunities beyond the
                  business.
                </p>
                <p>
                  Our mission is to build technology that moves organizations
                  forward while creating opportunities to:
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ea-band ea-purpose-commitments">
          <div className="ea-container">
            <p className="ea-label">The commitments</p>
            <h2>
              Four ways purpose remains part of the company we are building.
            </h2>
            <PurposeImpactExperience />
          </div>
        </section>

        <section className="ea-band ea-dark ea-purpose-close">
          <div className="ea-container">
            <p className="ea-label">EA STORM</p>
            <h2>
              We&apos;re building more than software. We&apos;re building a
              company grounded in service, accountability, and purpose.
            </h2>
            <p className="ea-purpose-close__promise">
              EA STORM. Keep What Matters Moving.
            </p>
            <div className="ea-purpose-actions">
              <a
                className="ea-action ea-action--light"
                href={contactConfig.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="platform_click"
              >
                Request Demo <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <Link className="ea-action ea-action--quiet-light" href="/">
                <ArrowLeft size={18} aria-hidden="true" /> Back to EA STORM
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer sectionHrefPrefix="/" />
    </div>
  );
}
