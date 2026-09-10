# Essential EA + AI Storm OS Public Website

THIS REPOSITORY IS THE PUBLIC ESSENTIAL EA + AI STORM OS MARKETING WEBSITE.

IT IS SEPARATE FROM TSG AND ALL ESSENTIAL EA PRODUCT APPLICATION REPOSITORIES.

DO NOT IMPORT FROM OR MODIFY THOSE REPOSITORIES.

## Purpose

This project is the public company and product website for Essential EA and AI
Storm OS. It establishes the brand system, signature product experience, proof
architecture, company narrative, government maturity boundary, investor
conversion path, analytics abstraction, route structure, accessibility baseline,
and production-ready posture.

Essential EA is the company. AI Storm OS is the platform. Crystal Ball Triage is
the intelligence brain inside Storm.

## Stack

- Vinext / Next.js-style App Router
- React
- TypeScript with strict mode
- Tailwind CSS
- shadcn component foundation
- Vercel-ready metadata and production build assumptions

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Design Philosophy

The visual system is luxury editorial brand combined with serious enterprise
operating infrastructure. The site should communicate authority, drama,
ownership, precision, luxury, and institutional seriousness without becoming a
generic SaaS, AI startup, government contractor, or productivity app website.

The foundation is carried by black, warm cream, typography, space, alignment,
thin rules, restrained product framing, and precise system language.

## Color Tokens

- Black: `#0A0A0A`
- Warm Cream: `#F5F1EA`
- Gold: `#C9A24A`
- Midnight: `#14253E`
- Rose: `#A57C84`

Black and cream should create approximately 85-90 percent of the visual
experience. Midnight is rare. Rose is exceptional.

Gold is semantic. It represents consequential organizational attention,
judgment, ownership, approved next action, and verified resolution. It should
not become routine decoration.

## Typography

The editorial serif is EB Garamond, an open-source Garamond family distributed
through Google Fonts. It represents human judgment and should carry major
statements, thesis moments, and strategic questions.

The sans-serif is Inter, an open-source precision interface family distributed
through Google Fonts. It represents system execution and should carry
navigation, product UI, labels, metrics, operational states, and technical
information.

## Components

The shared component system prepares:

- `Header`
- `Footer`
- `Container`
- `Section`
- `EditorialHeadline`
- `Eyebrow`
- `ButtonLink`
- `StatusChip`
- `Metric`
- `ProductFrame`
- Product surface cards where appropriate
- Architecture steps in the product frame
- CTA section treatment
- `Divider`
- `Disclosure`

Components must support black and cream environments and keep gold rare.

## Routes

- `/`: complete single-page company and product website
- `/penfed`: campaign entry route that prepares the `penfed_entry` event and
  renders the same premium website experience with campaign attribution

Reserved future route architecture:

- `/platform`
- `/commercial`
- `/government`
- `/proof`
- `/company`
- `/investors`
- `/contact`

## Analytics

Analytics is vendor-neutral in `lib/analytics.ts`. It supports adapters without
hard-coding a vendor.

Prepared events:

- `hero_demo_click`
- `platform_click`
- `gov_section_view`
- `investor_click`
- `contact_submit`
- `scroll_50`
- `scroll_90`
- `penfed_entry`

## Product Maturity Labels

Reusable maturity labels:

- `LIVE`
- `PILOT`
- `IN DEVELOPMENT`
- `ROADMAP`
- `TARGET USE CASE`
- `DISCOVERY USE CASE`

These are credibility controls, not decorative badges.

## Asset Requirements

Expected future product assets live in `public/product/`:

- `command-center.webp`
- `crystal-ball.webp`
- `signal-intelligence.webp`
- `execution.webp`
- `verification.webp`

Do not fabricate production screenshots. If an asset or product surface is not
available, use an elegant development-only placeholder and truthfully label
product maturity.

Expected future film assets live in `public/film/`:

- `storm-master.mp4`
- `storm-hero-loop.mp4`

The film integration is feature-flagged in `lib/film.ts`. Until the approved
film exists, the primary demo CTA falls back to the signature product sequence
instead of exposing a broken or fake video.

## Phase 2 Signature Experience

Phase 2 establishes the core Storm narrative:

Noise -> one signal matters -> why now -> owner -> next action -> authorized ->
executing -> verified -> learning.

The enterprise visual language is:

Crystal Ball -> Decision Object -> Storm -> Verification -> Organizational
Judgment.

The cinematic language may later introduce Storm as an emotional metaphor, but
the public enterprise website should not introduce a dog, mascot, cartoon,
character, or pet-brand cue until an approved film asset provides that narrative
context.

## Phase 3 Proof And Commercial Governance

Phase 3 adds proof, commercial credibility, and category authority without
turning the site into a content-heavy marketing page.

Evidence is structured in `components/site/content.ts` with:

- `value`
- `label`
- `status`
- `verified`
- `sourceNote`
- `lastValidated`

Company traction is separated from design-partner operating environment scale.
Customer-environment scale must not be presented as Storm-attributed business
outcome.

Revenue has an internal code TODO and must be refreshed before production
launch.

Product screenshot paths are configured for:

- Operator Command Center
- Crystal Ball Triage
- Signal Intelligence
- Execution / Assignment
- Verification / Outcome

Screenshots render publicly only when marked approved. Do not fabricate a live
product screenshot.

Testimonials remain development-hidden until approved customer statements,
roles, organizations, outcomes and permission status are supplied.

Case-study business impact metrics are configured but render publicly only when
`verified: true`.

Commercial positioning states that real estate is the current market and first
proving ground. Professional services, financial services and complex operating
organizations are target validation areas, not current customers or proven
product-market-fit claims.

## Accessibility Standard

The site must maintain semantic HTML, logical heading hierarchy, keyboard
navigation, visible focus states, sufficient contrast, reduced-motion support,
responsive typography, mobile usability, no horizontal overflow, and accessible
links and buttons.

Luxury must not compromise usability.

## Government Claim Governance

AI Storm OS Gov is a development-stage architecture. Essential EA does not
currently represent the platform as FedRAMP authorized, IL4/IL5 accredited,
approved to process CUI, or authorized for operational Department of Defense
deployment.

Do not imply authorization, accreditation, certification, or operational
deployment that has not been verified.

## Claim Categories

- FACT: verified current company or product fact
- CUSTOMER EVIDENCE: supported by customer or operating-environment evidence
- THESIS: strategic belief being tested
- IN DEVELOPMENT: capability actively being built
- ROADMAP: planned capability or architecture
- TARGET USE CASE: market or use case being pursued, not a deployment
- DISCOVERY USE CASE: area under investigation

Never convert roadmap into capability, architecture into authorization,
environment scale into Storm-attributed outcome, customer relationship into
product-market fit, or target use case into deployment.

## Phase 4 Company Narrative

Phase 4 completes the public company narrative without inventing new product
claims. It adds:

- Government architecture and development-status disclosure
- Three disciplined government use cases
- Founder-market-fit section for Kristina Spencer
- Structured co-founder/team profile support for Monica Vasquez
- Investor section with early commercial validation and $500K Angel / Pre-Seed
  raise language
- Disabled-safe investor and demo request panels
- Final category close returning to the Four Questions
- Launch evidence checklist for assets and claims still pending approval

Forms remain disabled until an approved provider or contact route is connected.
No entered information is sent while `contactConfig.formsEnabled` is `false`.

## Phase 5 Evidence Integration

Phase 5 hardens the public proof architecture around validated customer evidence
without blurring claim classes.

The Schrader Group case study is structured as:

- customer outcome proof
- customer operating-environment scale
- customer testimony
- transformation narrative
- category proof

The case study describes outcomes occurring during the Essential EA + AI Storm
OS transformation. It does not claim AI Storm OS alone scientifically caused
every result.

Product screenshots are configured for:

- Operator Command Center / Essential EA Dashboard
- Storm Signal Intelligence
- Universal Client Hub

Screenshots remain hidden until approved image files are supplied. Any numbers
visible inside future screenshots must be treated as product demo data unless
separately validated in the governed proof sections.

Founder and team image slots are prepared for approved assets, but the public
site continues to use restrained fallbacks until those files exist in the repo.
