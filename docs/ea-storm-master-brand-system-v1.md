# EA STORM Master Brand System v1.0

STATUS: LOCKED — MASTER BRAND SYSTEM v1.0

MASTER BRAND: EA STORM

PRIMARY PROMISE: Keep What Matters Moving.

MESSAGING SOURCE: [docs/ea-storm-canonical-messaging-v1.md](ea-storm-canonical-messaging-v1.md)

Recorded September 25, 2026. Governing messaging status: LOCKED — CANONICAL MESSAGING v1.0.

This is the canonical visual, design, and experience source for future website, Commercial demo, Government demo, product/application UI, investor materials, decks, campaigns, social content, and Astra/Codex work. Messaging remains governed by the linked document. This system establishes rules; it does not certify existing production surfaces as compliant or authorize their migration.

Scope of Step 2: create this document only. No production components, demo code, `/penfed`, `/privacy`, metadata, assets, deployment, Cloudflare, or DNS changes. No commit or push. Numeric layout, type, logo, and motion specifications below are implementation rules for a later authorized sprint, not changes made now.

## 1. Brand Idea

EA STORM communicates **quiet authority, operational clarity, controlled movement, human intelligence, and premium restraint**.

The experience is modern, architectural, editorial, precise, confident, human, institutional, and premium. It must not become flashy, generic SaaS, generic AI, cyberpunk, military-themed, luxury-lifestyle, CRM-like, financial-dashboard-heavy, overdecorated, or futuristic for its own sake.

EA STORM should feel expensive because of restraint, proportion, typography, whitespace, and precision, not because everything is gold.

Luxury Presence-level polish and whitespace, Capiro-level modern restraint and motion discipline, architectural editorial composition, and institutional/product credibility are quality references supplied in the brief. They are not templates. Do not copy competitor layouts, trade dress, animations, page structures, graphics, or copy. No competitor assets are approved by this document.

Recognizable EA STORM grammar: a light operating field, an authoritative editorial statement, clear structural rules, a consequential signal, visible ownership, and a resolved result. Visual movement must respect Crystal Ball reasoning, Authority governance, Storm execution, Verification, and Memory.

## 2. Color

| Color | Exact value | Role | Limits |
| --- | --- | --- | --- |
| Obsidian | `#0A0A0A` | Primary text, navigation, structural contrast, high-authority UI, selected dark editorial moments | Not the default background for every section. |
| Ivory | `#F5F1EA` | Primary external canvas and light operating surfaces | Keep it luminous; do not turn the experience into a field of beige/tan cards. |
| Signature Gold | `#C9A24A` | Consequence, selection, active route, thin rule, important data point, restrained signal, selective CTA detail | Precision signal; approximately 5–8% or less of most compositions, never a quota to fill. |
| Midnight | `#14253E` | Analytical views, charts, intelligence states, selected product contexts, secondary deep contrast | Not an alternative dominant marketing background. |
| Rose | `#A57C84` | Rare human/relationship context or secondary editorial state | Never competes with Gold; never an automatic error color. |

Target 70–80% light/Ivory/cream visual field across external marketing experiences. Evaluate the full page or deck and representative viewports, including imagery, rather than counting CSS tokens or sections. A single purposeful dark reveal may exceed the local dark share without making the whole experience dark-first.

Use Ivory for principal surfaces. Neutral white may support real documents, product evidence, and native form surfaces; it is not a sixth signature accent. Tonal derivatives may support separators and depth, but must retain a neutral character and pass contrast review. Do not introduce a rainbow of new brand colors.

Gold is not a large background, a decorative fill, an all-icon treatment, an all-headline treatment, or faux-luxury ornament. On Ivory, use Obsidian text with a supplemental gold rule or accent. Do not use gold alone to distinguish a required control or state. On Obsidian, selective gold text or indicators may be suitable after checking the complete state.

Rose remains subordinate to the active Gold signal. Midnight carries analytical structure; charts still need labels and non-color distinctions. Semantic warnings and failures require words/icons and accessible contrast; do not force them into gold decoration or invent unapproved palette expansions.

## 3. Light/Dark Balance

| Surface | Default composition | Purpose of dark areas |
| --- | --- | --- |
| Website / external brand | Light-first; Ivory and warm white dominate | Punctuation, transition, authority, cinematic focus, selective product reveal. |
| Product application | Light operating canvas where practical | Obsidian navigation and selective Midnight analytical areas where density benefits. |
| Investor / demo | Ivory operating canvas, Obsidian structure, thin Gold emphasis | Frame the work and create a focused reveal. |
| Campaign / deck | Light-first across the series | Deliberate contrast for a specific idea, not every asset. |

Product density does not excuse poor hierarchy, little whitespace, or a fully dark dashboard by default. A dark entrance must settle into a bright, architectural environment. Measure the intended light balance after the entrance finishes.

## 4. Typography

**Editorial serif: Garamond family.** Use for the hero, major brand statements, founder/origin storytelling, major proof numbers, and selected editorial headings. The repository already uses EB Garamond; retain that family as the implementation starting point unless a later approved font decision replaces it.

**Modern sans: Avenir Next or the closest approved production-safe equivalent.** Use for navigation, body, UI, labels, buttons, controls, metadata, charts, and operational surfaces.

Do not bundle or distribute Avenir Next or any proprietary font without an appropriate license and approval. Current Inter is an existing fallback candidate, not an automatic visual violation or a newly certified equivalent. Evaluate readable forms, weight range, spacing, language coverage, and line-wrap stability before approving the substitute. If Avenir Next is unavailable, use the approved packaged sans, then `Arial, Helvetica, sans-serif`; do not depend on an unavailable local proprietary font. For the serif, a system Garamond/Georgia/serif fallback must remain readable. Preserve license notices, font-loading resilience, and functional fallback layouts.

Starting type roles for later implementation, expressed in CSS pixels with equivalent rem sizing:

| Role | Desktop | Narrow screen | Behavior |
| --- | --- | --- | --- |
| Hero / major statement | 56–72 | 36–44 | Garamond, usually 1–3 intentional lines, 1.05–1.15 line-height. |
| Editorial section heading | 36–48 | 28–36 | Garamond; scale to the actual content area, not the whole viewport. |
| Product heading | 24–32 | 24–28 | Clear operational hierarchy; no hero-sized panel titles. |
| Body / operational content | 16–18 | 16–18 | Sans, 1.5–1.7 line-height, approximately 45–75 characters per line. |
| Labels / navigation / metadata | 14–16 | 14–16 | Readable at normal zoom; no microscopic labels. |
| Major proof number | 48–64 | 36–48 | Serif, with visible unit, timeframe, and attribution. |

Use a small stepped scale with responsive breakpoints; do not continuously scale font size with viewport width. Prefer width and wrapping changes before reducing readable text. Never fragment a short headline into four or five oversized PowerPoint-like lines. Use normal spacing, no negative tracking; uppercase is reserved for short functional labels, not body copy. Let surrounding whitespace create separation. Avoid futuristic fonts, generic geometric SaaS display typography, excessive italic paragraphs, too many weights, and excessive all-caps.

## 5. Grid

Use a disciplined architectural grid with strong alignment, generous margins, thin rules, clean geometry, intentional negative space, one dominant idea per viewport, and one clear focal point. Asymmetry is allowed where it clarifies hierarchy. Substantial imagery must carry meaning rather than occupy thumbnail cards.

Implementation defaults: a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid; 24–32px desktop gutters and 16–24px narrow-screen gutters. Use a centered reading area of roughly 1200–1440px where appropriate; full-width bands and imagery may extend beyond it. Start with 48–64px desktop margins and 20–24px mobile margins. Adjust to content without horizontal page overflow.

Use a 4px spacing base and a restrained 8/16/24/32/48/64/96 rhythm. Marketing sections may use 64–96px desktop vertical spacing and 40–64px mobile spacing; choose spacing so the content's first useful evidence remains visible, not to fill the screen with emptiness. Avoid fixed viewport-height text sections and giant gaps that conceal the next action.

Sections are full-width bands or unframed editorial layouts. Avoid nested cards, repeated boxed sections, and dashboard walls. A page should feel like an architectural publication with real product evidence. Tables, lists, and responsive detail panels serve operational work.

## 6. Shape Language

Prefer rectangles, precise edges, thin rules, restrained framing, and clean geometry. Editorial regions are normally square-edged. Functional controls may use 2–4px radii; framed tools and dialogs may use up to 8px when useful. Do not turn every section into a rounded card.

Avoid excessive pills, bubbly controls, oversized rounded cards, floating glass panels, decorative blobs, generic AI node networks, and heavy shadows. Use one-pixel structural separators where appropriate; critical boundaries must remain perceptible. Reserve shadows for functional elevation such as a menu or dialog, not as an ornament behind every image.

## 7. Photography

Architectural imagery uses cream/white surfaces, black structural lines, warm natural light, sophisticated geometry, controlled shadow, depth, and perspective with minimal clutter. Architecture represents clarity, structure, movement, order, and possibility. It must not position EA STORM as real estate or luxury lifestyle; do not use luxury homes simply to suggest wealth.

Human imagery uses authentic work environments, operational/executive context, and meaningful human tension. Hands, materials, and workspaces are appropriate when specific to the story. Avoid stock handshakes and generic teams pointing at monitors. Founder portraits remain authentic approved evidence; do not replace them with invented people or disclose medical context.

Product photography/screenshots use large, legible, real interface views integrated into editorial composition. Preserve relevant labels, states, units, and context. Use a readable crop plus access to the whole view when necessary; do not hide evidence under dark overlays or reduce it to tiny cards. Keep demo-data disclosures and attribution adjacent to the evidence. Do not modify approved evidence to imply a capability or outcome.

## 8. Conceptual Imagery

Allowed subjects: consequential signals, controlled movement, Crystal Ball, information flow, verification, outcome, and clarity emerging from complexity. Every image needs a product or story purpose. Crystal Ball reasons/triages; authorized work moves through Storm; verification follows execution. Visuals must not depict Storm as the decision maker or imply ungoverned execution.

Avoid robots, glowing AI brains, holographic humans, circuit-board stock art, neon purple/blue AI graphics, sci-fi HUDs, random data streams, generic node clouds, and wealth imagery. A meaningful signal may have restrained illumination; a flood of decorative light is not brand authority.

Approved existing cinematic assets are not automatically invalid, but their prominence, crop, context, and cumulative dark/gold weight require review under the light-first system. Do not regenerate or recolor them in this sprint. Clearly distinguish conceptual visualization from actual product evidence.

## 9. Logo

Master wordmark: **EA STORM**. Optional primary tagline: **Keep What Matters Moving.** The logo is a consistent approved asset, not styled anew on each page.

| Application | Rule |
| --- | --- |
| Primary horizontal lockup | Approved mark at left and EA STORM wordmark at right; optional tagline subordinate to the wordmark, never squeezed to fit. Exact geometry comes from the approved master artwork. |
| Wordmark only | EA STORM without an improvised symbol. Preferred when the tagline or mark would become illegible. |
| Icon / mark | Use only an expressly approved EA STORM master symbol, including approved small-size optical variants. Do not assume the legacy swirl or current favicon is approved for the new identity. |
| Light background | Flat Obsidian wordmark; selective flat Gold detail only in the approved artwork. |
| Dark background | Flat Ivory wordmark; approved Gold accent only. Maintain clear contrast without effects. |
| Clear space | At least one wordmark capital-letter height on all sides, measured from visible artwork, not transparent file padding. No text, rules, controls, or image focal points enter this space. |
| Minimum readable size | Wordmark capitals at least 16 CSS px high; tagline at least 14 CSS px. Mark-only assets at least 24px outside favicon contexts. These are minimums, not target sizes; use larger if detail becomes unclear. |
| Favicon | Dedicated approved optical artwork tested at 16px and 32px; never shrink a full lockup into a favicon. |
| Monochrome | One flat Obsidian, Ivory, or approved single-color ink treatment; preserve the master silhouette and proportions. |
| Application header | Compact approved wordmark/mark; omit the tagline if it compromises navigation or legibility. Maintain clear space and an accessible home name. |
| Deck | Use a clear cover/closing identity and restrained repeated placement; minimum readable wordmark/tagline sizes must hold at intended projection size. |

Do not glow, stretch, distort, add unnecessary shadows, add excessive gold effects, redraw ad hoc, or place the logo inside unnecessary containers. Metallic/dimensional gold may appear selectively in campaign imagery, never as the default UI logo.

Asset status: the current production lockup reads "ESSENTIAL EA + AI STORM OS" with "OPERATIONAL INTELLIGENCE" and is a legacy asset. This sprint creates no new logo and grants no approval to a new symbol. Final EA STORM master artwork, monochrome variants, and optical-size checks are inputs to a later asset approval step; their absence does not block this governance document. Do not invent final aspect ratios or pretend a new mark has been delivered.

## 10. Tagline

**Keep What Matters Moving.**

Use on the hero, approved lockup, closing CTA, deck cover, selected campaign, loading/brand moment, or selected application brand surface. Repeat purposefully and sparingly, not in every section or every navigation view. Do not create competing taglines. A brand moment is not permission to delay content or invent loading activity.

## 11. Motion

Motion communicates signal, movement, resolution, order, and progress. It should feel deliberate, architectural, controlled, quiet, and premium. Slow presentation must not mean slow controls.

| Motion role | Starting rule for later implementation |
| --- | --- |
| Hover / pressed / focus feedback | 120–180ms, immediate response, no geometry shift. Focus must be visible without waiting. |
| Disclosure / panel transition | 180–300ms, stable layout and logical focus. |
| Editorial or section reveal | 400–700ms once; small displacement, opacity or line travel. No perpetual replay. |
| Cinematic entrance | Approximately 900–1600ms total, hard cap 2000ms; never a blocking splash screen. |

Use non-overshooting ease-out curves. Horizontal signal travel, subtle reveal, moving rules, resolving information, controlled section entrances, and progressive disclosure are preferred. Restrained depth/parallax is optional only where it adds meaning and does not interfere with reading or mobile use.

No bouncing UI, playful springs, excessive particles, spinning objects, gimmick loaders, aggressive zoom, glitches, game transitions, or constant movement. Do not animate every element. Completion must settle into a stable state. Never use fake progress to imply external execution.

With `prefers-reduced-motion`, present the final readable state immediately; remove translation, parallax, zoom, and cinematic travel. Preserve all content, controls, focus, and meaningful status. No autoplay audio.

## 12. Cinematic Entrance

Preserve the concept: **a horizontal signal moves through fragmentation and opens into the EA STORM world.**

NOISE / FRAGMENTATION → SIGNAL → MOVEMENT → REVEAL → CLARITY

The entrance may start in Obsidian, resolve one horizontal signal, and reveal the Ivory/cream dominant environment. The destination is bright, architectural, clear, controlled, and premium. Use abstract composition and purposeful movement, not a literal door, portal, sci-fi sequence, or video-game scene.

Keep the brand promise understandable from the first readable frame. Content and navigation must remain accessible; no long splash, forced waiting, scroll lock, or audio. The experience must still work when animation, imagery, or fonts fail to load. Reduced motion goes directly to the clear destination. Entrance choreography communicates the brand metaphor, not a completed product operation.

## 13. Website

Light-first, editorial, cinematic, spacious, clear, modern, architectural, and premium. The canonical messaging document governs every statement.

Preferred progression: one idea → visual support → next idea → product → proof → human story → conversion. Visitors understand the problem and promise before technical architecture. The first brand signal is EA STORM / Keep What Matters Moving.; the three customer questions bridge into the product explanation.

Avoid architecture documents above the fold, jargon before customer pain, dense dashboards too early, repetitive cards, copy walls, endless black sections, tiny labels, and excessive system terminology. Use real proof at a scale visitors can inspect. Keep CTA hierarchy clear and destinations functional. Preserve privacy/legal and investor qualifications. This is a design direction, not authorization to change routes, facts, metadata, or the approved CTA targets.

## 14. Product UI

The application is related to the website but operational: Ivory operating surfaces, Obsidian navigation, a thin Gold active/priority signal, Midnight analytical detail, disciplined tables, explicit statuses, executive summaries, and progressively disclosed detail.

Use density appropriate to repeated work without reducing body/label readability. Align values, units, owners, deadlines, and evidence. Prefer familiar controls and stable dimensions; every clickable-looking affordance must have a meaningful action. Use text, shape, and icons alongside color. Hover information must also work with keyboard and touch.

Avoid CRM as the dominant metaphor, card walls, rainbow states, heavy gradients, excessive dark dashboards, tiny dense type, decorative Gold, and a generic AI-assistant chat shell. Gold indicates consequence, selection, priority, or signal. Distinguish recommended, authorized, executing, verified, and remembered states; a visual transition cannot grant authority.

## 15. Commercial Demo

Commercial remains EA STORM, with the same promise, palette, typography, hierarchy, light-first operating workspace, restrained motion, and approved product evidence. It must not feel like another prototype company, a generic CRM, a separate design system, or a dashboard collection.

Lead the narrative with What matters? Who owns it? What happens next? Introduce technical architecture after the customer understands the situation. Keep synthetic scenarios and modeled outcomes clearly labeled. Never make unimplemented stages or live integrations appear functional. Preserve human initiation, authority boundaries, state clarity, deterministic reset, and accessible inspection.

This document specifies the future demo direction; it does not authorize modifying Commercial code or certify a demo outside this repository.

## 16. Government Demo

Government remains EA STORM. Keep the same master brand, architectural clarity, Ivory/Obsidian/Gold system, disciplined hierarchy, and premium restraint. Government content may introduce mission, echelon, readiness, authority, and operational status.

Do not create an unrelated military UI, camouflage, tactical-game styling, classified-looking theatrics, or excessive military symbolism. Government maturity and authorization guardrails are independent of the brand. Visual authority is not evidence of authorization, accreditation, compliance, or operational deployment.

## 17. Investor/Deck

Decks should feel like the website: Ivory/cream dominant, one idea per slide, a large disciplined Garamond statement, restrained sans support, thin Gold rule, substantial whitespace, minimal bullets, large evidence, and real product imagery. Architectural imagery is optional when it adds meaning.

Use consistent margins and stable title/evidence positions; label units, timeframes, assumptions, and sources. Keep projection readability rather than shrinking disclaimers. Distinguish company traction, customer operating environment, customer outcomes, and modeled product values. Preserve approved investor facts and dates.

Avoid dense slides, multiple dashboards per slide, excessive logos, text walls, decorative AI graphics, and generic PowerPoint templates. One idea per slide is not permission to turn the website or application into a slideshow.

## 18. Campaign/Social

**ONE HUMAN TRUTH / ONE IMAGE / ONE FOCAL STATEMENT / MINIMAL SUPPORT**

Use approved buyer-trigger territory from the messaging lock. Architectural imagery, authentic operational environments, clean object metaphors, and restrained product details may support the idea. Keep EA STORM recognizable and text readable in the actual placement/crop. Do not overload campaign creative with architecture or invent a competing promise. Do not crop out a qualification that changes the meaning of evidence.

## 19. Iconography

Use one consistent thin-line, geometric, operationally clear icon family. The existing Lucide family is the starting point for future implementation. Use approximately 1.5–2px strokes at 20–24px icon sizes, adjusting to retain clarity. Controls need usable hit areas independent of glyph size.

Icons are functional, not decoration. Label unfamiliar controls and provide accessible names; hide purely decorative glyphs from assistive technology. Do not mix families, use cartoon icons, AI sparkles, robots, gradient pictograms, or gold on every icon. Do not adapt a functional icon into an unapproved brand mark.

## 20. Data Visualization

Use Obsidian, Midnight, Gold, and Ivory neutrals. Rose is reserved for a relevant human/relationship dimension. Gold identifies a consequential change, selected series, critical signal, or focal metric; it does not color every series.

Charts prioritize comprehension. Use direct labels, readable scales, units, timestamps, baselines, and source context. Distinguish series through shape, line style, ordering, or labels as well as color. On Ivory, a Gold series requires a contrasting outline or another readable encoding; it cannot carry essential meaning at 2.13:1 contrast alone. Avoid perspective charts, 3D distortion, false precision, decorative meters, and simulated live activity. Tables or textual equivalents must expose important values.

## 21. Accessibility

Luxury must never cost usability. Preserve semantic hierarchy, readable body sizes, visible keyboard focus, logical tab order, accessible dialog/drawer behavior, status announcements, reduced motion, and usable mobile layouts. Project targets: at least 44px touch areas where practical, 16px default body text, and no page-level horizontal overflow at 390px; also review reflow/zoom and keyboard-only operation. Dense tables may scroll within a labeled region without forcing the whole page sideways.

Use at least 4.5:1 for ordinary text and 3:1 for large text under the WCAG large-text definition. Essential control/state graphics need at least 3:1 against adjacent colors. Sources: [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [W3C non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). These thresholds do not alone establish full WCAG conformance.

Calculated opaque sRGB palette-pair ratios, rounded for reference:

| Pair | Contrast | Rule |
| --- | --- | --- |
| Obsidian / Ivory | 17.59:1 | Preferred body and navigation pair. |
| Midnight / Ivory | 13.68:1 | Suitable analytical text and structure. |
| Gold / Ivory | 2.13:1 | Not ordinary or large text, sole focus ring, or essential state boundary. Pair with Obsidian support. |
| Gold / Obsidian | 8.25:1 | Suitable selective text/state contrast; maintain restraint. |
| Rose / Ivory | 3.21:1 | Not small body text; supplement meaningful graphics and verify actual context. |
| Rose / Obsidian | 5.48:1 | Potential readable accent; still rare and semantic. |

Opacity, gradients, image backgrounds, thin strokes, and color mixing require separate testing in the final rendering. Use Obsidian focus outlines on Ivory and Ivory/high-contrast outlines on dark surfaces; Gold may supplement them. Never rely on color alone. Body copy must remain live text; imagery needs suitable alt text or decorative treatment. Verify stable layouts with fallback fonts, enlarged text, and reduced motion. Brand guidelines are not an accessibility audit of the current site.

## 22. Voice + Visual Relationship

Messaging is simple, clear, direct, human, and confident. Visuals are quiet, precise, spacious, architectural, and controlled. Simple copy with busy design fails. Restrained design with jargon-heavy copy also fails. Sophisticated capability should feel obvious.

Use the exact locked promise and one-liner. Preserve the hierarchy from customer problem to three questions to mechanism to technical detail. Do not force KNOW → MOVE → REMEMBER or the entire product-role shorthand into primary brand messaging.

## 23. Do/Don't

| Do | Don't |
| --- | --- |
| Ivory, cream, white, Obsidian structure | Dark everywhere or Gold everywhere |
| Architecture, alignment, generous whitespace | SaaS templates, card walls, PowerPoint composition |
| Garamond statements and clear sans support | Futuristic typography, microscopic UI labels, excessive caps |
| Thin purposeful Gold and clean rules | Faux-luxury ornament, neon, glassmorphism, blobs |
| Large real product evidence and authentic people | Stock-tech imagery, synthetic customer proof, generic CRM aesthetic |
| Controlled finite motion with settled states | Constant glow, excessive particles, game transitions |
| Short statements and clear hierarchy | Unnecessary jargon, visual clutter, technical diagrams before the promise |

## 24. Astra Guardrails

After separate authorization, Astra may implement visual composition, restructure approved layouts, implement responsive design and approved motion, apply canonical styling, integrate approved imagery, and improve hierarchy.

Astra may not independently rewrite locked messaging, invent capabilities, alter Crystal Ball/Storm roles, change customer evidence, investor facts, government maturity claims, privacy/legal text, invent compliance claims, modify deployment architecture, or remove functional routes. Asset and font licensing/approval boundaries remain in force. No authorization to implement is granted by this document.

Codex performs the post-Astra engineering and claims audit. A later handoff should identify the approved scope, assets, affected surfaces, acceptance screenshots, and any documented exceptions.

## 25. Codex Guardrails

Codex later owns architecture accuracy, messaging-governance compliance, claim governance, build integrity, accessibility, responsive verification, performance, route integrity, privacy/legal preservation, security, and authorized Cloudflare deployment. Codex should not casually reinterpret this visual system or change the locked messaging to make a layout fit.

In a later implementation sprint, verify intended light balance, typography, image legibility, finite motion, reduced-motion states, functional CTAs, keyboard interaction, mobile reflow, and the approved product-role sequence. Test affected routes and distinguish implementation evidence from assumptions. Protect existing content and unrelated work. Deployment requires its own authorization; Step 2 grants none.

## Appendix A. Existing Visual Conflict Inventory

Audit date: September 25, 2026. Basis: current source and styles in this repository, direct filesystem inspection, and visual inspection of the production lockup and Crystal Ball ingest bitmap. This is not a new browser-rendered or live-site accessibility audit. No live light/dark area percentage, clipping result, or viewport-pass claim is inferred from source. Entries identify migration needs; they do not authorize fixes.

The root check `Test-Path -LiteralPath demo-commercial` returned **False** during Step 2. The root directory listing independently confirmed no `demo-commercial/`. The Step 1 assertion was not used as evidence. Generated caches/builds and the existing untracked `artifacts/` and `source and assets/` were not modified or treated as production design sources.

### WEBSITE

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `components/site/primitives.tsx:25`; `components/site/homepage.tsx:46` | `Section` defaults to black; opening hero and cinematic sequence inherit dark surfaces. Multiple mounted product, Commercial, Government, investor, and closing sections are also dark. | Light-first composition with approximately 70–80% light visual field; use dark sections deliberately. Exact area share requires later rendered review. | HIGH |
| `components/site/homepage.tsx:49`, `:91` | Hero uses a split text/framed cinematic-image layout with a gold border and large shadow. | Establish a clear architectural focal point, substantial imagery, restrained framing, and the locked simple brand hierarchy. | HIGH |
| `components/site/homepage.tsx:131` | Technical cinematic content and ProductFrame arrive before much of the proof and human story; the primary message remains the old technical hierarchy. | Let the customer understand the knowing-to-doing problem and promise before deeper mechanisms. | HIGH |

### DEMO-COMMERCIAL

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| Repository root `demo-commercial/` | Rechecked now: absent. No Commercial demo source audited in this repository. | Audit the actual demo repository during its authorized migration; apply shared EA STORM rules there. | N/A — scope boundary |

### /PENFED

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `app/penfed/page.tsx:11` | Shares `HomePage`, so it inherits dark hero, section defaults, logo, typography, and motion conflicts. | Include the campaign route in later visual regression review; preserve investor facts, qualifications, and route behavior. | HIGH |

### PRODUCT UI

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `components/site/product-frame.tsx:11` | Website illustration uses a dark framed surface, large shadow, boxed nested detail, and very small uppercase labels. | Use a legible operational hierarchy, restrained framing, and progressive detail; illustration is not a standalone app audit. | MEDIUM |
| Standalone application UI | No application or Commercial/Government demo source present in this website repository. Generic `components/ui/` primitives are not evidence of a deployed product application. | Review actual app surfaces separately. Do not rewrite unused primitives merely because they exist. | N/A — scope boundary |

### LOGO / ASSETS

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `public/brand/essential-ea-ai-storm-os-lockup.png`; `components/site/header.tsx:16` | Visually inspected bitmap: gold swirl and "ESSENTIAL EA + AI STORM OS", with "OPERATIONAL INTELLIGENCE", on a dark field. Header displays it at 40–44px height. | Later approved EA STORM flat master lockup and readable responsive variants; no ad hoc redrawing or automatic approval of the legacy mark. | HIGH |
| `public/favicon.svg` | Source contains blue tile shapes (`#68C4FF`, `#0C79D8`, `#2E9EFF`), outside the canonical palette and unrelated to the inspected lockup. Browser use was not verified here. | Use an approved EA STORM optical favicon when supplied; verify actual route delivery later. | MEDIUM |

### MOTION

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `app/globals.css:369`; `:436`; `components/site/homepage.tsx:46` | 4.8-second dark entrance with signal, threshold, crystal, noise, and fragments; destination hero remains dark. | Brief nonblocking horizontal signal into an Ivory dominant destination, no literal doors/portal, reduced-motion final state. | HIGH |
| `app/globals.css:422`; `components/site/homepage.tsx:90` | `.hero-orbit` uses an 8-second infinite glow and layered radial gradients. | Remove perpetual decorative motion in later implementation; finite consequential signals settle. | HIGH |
| `app/globals.css:397` through `:418` | Product signal/Decision Object/verification reveals last 4.8–8 seconds. | Shorten or restructure finite, meaningful disclosure so information and controls are available promptly; do not imply live execution. | MEDIUM |
| `app/globals.css:130`, `:633` | Reduced-motion handling already exists, including hiding the opening. | Preserve and test it with the later entrance changes; existing support is aligned, not a conflict to remove. | LOW — preserve |

### TYPOGRAPHY

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `app/layout.tsx:2` | EB Garamond and Inter are loaded. | Garamond aligns. Assess current Inter as the production-safe fallback for the Avenir Next direction; do not add unlicensed font files. | LOW — fallback decision |
| `components/site/primitives.tsx:53`, `:132`; `components/site/homepage.tsx:253`; `components/site/product-frame.tsx:28` | Labels frequently use 0.58–0.68rem, uppercase, and wide tracking; some are faded. | Readable labels with restrained hierarchy and sufficient contrast; avoid microscopic operational text. | HIGH |
| `components/site/primitives.tsx:75`; `components/site/phase-four-sections.tsx:387` | Editorial headline defaults use viewport-scaled `clamp` up to 8.75rem; closing brand treatment reaches 10rem. | Disciplined stepped scale, short deliberate line breaks, and type sized to its content area. No inferred live clipping claim. | MEDIUM |

### COLOR

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `app/globals.css:52` | All five signature hex values already match exactly. The conflict is application, not palette identity. | Preserve exact values and govern their distribution/semantic roles. | LOW — preserve |
| `components/site/primitives.tsx:100`, `:134`; `app/globals.css:76` | Gold focus styling and attention-chip text can be reused on light surfaces; Gold/Ivory is only 2.13:1. Some primary button hover states fill Gold. | Use contrasting focus/text support on light surfaces and limit CTA Gold to selective detail; review actual mounted states. | HIGH |
| `components/site/homepage.tsx:51`; `components/site/phase-four-sections.tsx:260`, `:390` | Gold used repeatedly in section eyebrows and category emphasis. | Reserve emphasis for consequential selection/priority; measure total composition rather than asserting the current Gold percentage. | MEDIUM |

### LAYOUT

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `components/site/homepage.tsx:233`, `:291`; `components/site/phase-two-sections.tsx:46` | Repeated framed cinematic rows, source tiles, and question tiles create a boxed rhythm. | More unframed architectural composition and clear focal imagery; retain useful evidence structure. | MEDIUM |
| `components/site/phase-four-sections.tsx:369`; `components/site/primitives.tsx:36` | Full-screen minimum on closing section and generous generic section padding can consume substantial vertical space. | Intentional whitespace with meaningful evidence/action visible; assess actual content height at desktop and mobile before changing it. | MEDIUM |
| `components/site/phase-three-sections.tsx:196`, `:223` | Product proof already uses substantial real screenshot images, rather than only thumbnails. | Preserve that strength; review legibility and light-canvas integration during migration. | LOW — preserve |

### IMAGERY

| File / surface | Current state | Canonical direction | Priority |
| --- | --- | --- | --- |
| `public/story/crystal-ball-ingest.webp`; `components/site/homepage.tsx:94` | Visually inspected: black cinematic setting, many gold streams, luminous sphere, reflective floor. It currently anchors the primary hero. | Retain only purposeful conceptual use; reduce its dominance within the light-first field. Avoid random-stream/sci-fi positioning. No replacement asset is generated here. | HIGH |
| `components/site/homepage.tsx:90`; `app/globals.css:449`, `:532` | CSS glow fields and a luminous crystal add decoration around already cinematic imagery. | Precise signal and controlled depth; remove redundant glow decoration in a later authorized implementation. | MEDIUM |
| `public/founders/`; `public/product/`; site image references | Real founder/product evidence assets are already referenced by source. Their full image set was not visually re-audited in Step 2. | Preserve provenance, readable presentation, approved disclosures, and honest crops; do not replace evidence to achieve a palette. | LOW — preserve |

## Appendix B. Handoff and Validation

Step 2 creates only this file. The pre-existing untracked canonical messaging document is preserved unchanged. Existing untracked folders remain untouched. No production build or deployment is needed for this documentation-only change.

Before a later visual migration, supply or approve the EA STORM logo variants and confirm the sans-serif fallback. Those are future implementation inputs, not missing deliverables from this documentation sprint. Audit current renders at the requested breakpoints during that sprint; this source inventory must not be mistaken for that visual acceptance pass.

The supplied Step 2 attachment ends at the word "Check" after requesting a fresh `demo-commercial/` existence check. The explicit check was completed; no omitted instructions or additional deliverables have been invented.
