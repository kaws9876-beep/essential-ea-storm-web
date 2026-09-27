# EA STORM Step 3 Review

Implementation date: September 25, 2026. Local visual-review candidate only.
No commit, push, deployment, DNS, or Cloudflare changes.

## Scope and Structure

Refactored the existing HomePage, shared Header/Footer and marketing metadata.
Scoped styles in app/ea-storm.css leave the privacy policy body styling intact.
The existing source content model remains the source of customer evidence,
approved testimonials, founder facts, investor figures, and government boundaries.
Only founder affiliation/alt text in that model changed to EA STORM.
No duplicate homepage, new dependency, product capability, or integration was added.
The separate demo-commercial directory is absent and no other repository was modified.
Inter remains the installed production-safe sans with Arial/Helvetica fallbacks;
EB Garamond remains the editorial serif.

## Protected Content

- Privacy policy source is unchanged, including legal identity and contact email.
- Copyright holder remains Essential EA.
- Approved testimonial is preserved verbatim, including historical brand wording.
- Customer evidence values and association-versus-causation qualifiers are unchanged.
- Anonymous client identity remains anonymous; industry is operating context, not category.
- Homepage proof is evergreen customer evidence, not company traction.
- /penfed retains 2 Paying Customers, 65 Current Users, $30K Revenue to Date,
  founder-validated September 14, 2026, separate from customer operating evidence.
- $1M Angel / Pre-Seed SAFE and capital priorities are unchanged.
- Government remains development-stage with explicit authorization exclusions.
- Demo and investor destinations remain the approved Google Calendar/Form URLs.
- Crystal Ball determines, Authority governs, Storm executes, Verification proves,
  Memory learns. The full origin story uses only the founder-supplied facts.

## Asset Provenance and Review Exceptions

- public/brand/ea-storm-gold.png is an unchanged copy of the supplied transparent
  1536 x 1024 EA STORM logo. The user requested a header preview of this dimensional
  gold treatment. This is a provisional exception to the flat UI-logo rule, not a
  revision of the locked brand system. No extra glow or shadow is applied.
- At a compact header size, the embedded tagline falls below the brand system's
  14px minimum. The live hero repeats the tagline legibly. Final approval or a
  dedicated compact/horizontal logo is still needed; no mark was redrawn or cropped.
- No separate approved monochrome/light/dark/icon/optical favicon files were supplied.
  The existing favicon has not been improvised into a new EA STORM mark.
- public/brand/ea-storm-architecture.jpg is newly generated conceptual architectural
  imagery, not a real office, customer site, founder image, or product evidence.
  Generated with the built-in image tool, then JPEG-encoded at quality 85, 1536 x 1024,
  95,473 bytes. Original generated PNG retained outside the repository.
- Existing founder, product and cinematic assets were not altered. Product images
  are full-aspect, with full-image links and adjacent synthetic-data disclosure.

Image-generation prompt:

> Use case: stylized-concept. Asset type: wide website hero background, conceptual architectural brand imagery for EA STORM, not a real building or customer site. Create an exceptionally restrained editorial architectural photograph-like render. Luminous ivory and white planes, a thin black structural frame at the far right, precise intersecting walls and floor receding into daylight, subtle realistic shadows. Architecture expresses clarity and purposeful movement, not real estate or luxury lifestyle. Wide 1536x1024 landscape. Composition: the left two thirds and upper middle are a largely uninterrupted very pale ivory wall for dark live HTML text; architectural depth, an open passage, and fine black geometry confined to the rightmost third and lower right. Natural light, crisp detail, almost white palette, no tan/brown cast. No furniture, people, plants, logos, text, lettering, gold surfaces, orbs, gradients, blur, sci-fi elements, or luxury-home staging. One quietly powerful architectural idea, no collage. Leave ample pale negative space for a full-width editorial website headline and supporting text.

## Validation

- npm run lint: PASS after correcting the menu Escape handler.
- npm run typecheck: PASS.
- npm run build: PASS, retaining the generated Cloudflare/Vinext artifact.
  Vinext still reports its existing static route-classification limitation.
- Local HTTP: /, /penfed and /privacy return 200.
- Browser reflow: 1440x900, 1280x800, 768x1024, 390x844 inspected.
  No page-level horizontal overflow or broken image was observed.
- Primary CTA scroll target, mobile navigation, Escape and focus return tested.
- Investor and demo hrefs verified; no external form was submitted.
- Privacy navigation works. Anonymous customer and evergreen homepage checks pass.
- Entrance is finite, 1.6 seconds desktop; mobile backdrop is 1 second. No audio or
  scroll locking. The visual reveal is confined to the architectural field so
  the headline and controls remain readable and usable throughout.
- Reduced-motion CSS removes the entrance and preserves content. Source verified;
  runtime OS/media-preference emulation was not available in the browser tool.
- Light-first layout and existing imagery inspected. Exact full-page pixel-area
  percentage has not been certified. This is not a comprehensive WCAG audit.

## Review Artifacts

Under artifacts/ea-storm-step3/:
- desktop-1440-opening.png
- desktop-1440-hero.png
- laptop-1280-hero.png
- tablet-768-hero.png
- mobile-390-hero.png
- desktop-1440-origin.png
- desktop-1440-product-proof.png
- desktop-1440-proof.png
- desktop-1440-founders.png

Human visual review is the next step, especially the supplied stacked gold logo
and conceptual architectural treatment. No publication is authorized by this report.
