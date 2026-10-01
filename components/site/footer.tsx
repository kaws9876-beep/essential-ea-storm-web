import Image from 'next/image';
import Link from 'next/link';

export function Footer({
  sectionHrefPrefix = '',
}: {
  sectionHrefPrefix?: string;
}) {
  return (
    <footer className="ea-footer">
      <div className="ea-container">
        <div className="ea-footer__top">
          <Link href="/" aria-label="EA STORM homepage">
            <Image
              src="/brand/ea-storm-gold.png"
              alt="EA STORM — Keep What Matters Moving."
              width={1536}
              height={1024}
              unoptimized
              className="ea-footer__logo"
            />
          </Link>
          <p>
            EA STORM identifies what needs attention, gets it to the right
            owner, and keeps it moving through the outcome.
          </p>
          <address className="ea-footer__contact">
            <strong>Kristina Spencer</strong>
            <span>CEO &amp; Co-Founder</span>
            <a href="mailto:kristina@essentialaistorm.com">
              kristina@essentialaistorm.com
            </a>
            <a href="tel:+19372664496">937-266-4496</a>
            <a
              href="https://www.linkedin.com/in/kristina-spencer-ba42ab123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kristina Spencer on LinkedIn"
              className="ea-footer__linkedin"
            >
              LinkedIn
            </a>
          </address>
          <nav aria-label="Footer navigation">
            {[
              ['How it works', '#how-it-works'],
              ['Where it works', '#where-it-works'],
              ['Ask STORM', '#product-proof'],
              ['Proof', '#proof'],
              ['Company', '#company'],
              ['Engagements', '#engagements'],
              ['Investors', '#investors'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <Link key={href} href={`${sectionHrefPrefix}${href}`}>
                {label}
              </Link>
            ))}
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="ea-footer__legal">
          <p>Copyright {new Date().getFullYear()} Essential EA</p>
          <p>
            Government architecture is development-stage and is not represented
            as government-authorized.
          </p>
        </div>
      </div>
    </footer>
  );
}
