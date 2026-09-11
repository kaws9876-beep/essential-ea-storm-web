export const navItems = [
  { label: 'Platform', href: '#brain-execution' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Government', href: '#government' },
  { label: 'Proof', href: '#proof' },
  { label: 'Company', href: '#company' },
  { label: 'Investors', href: '#investors' },
];

export const statusVariants = [
  'FACT',
  'CUSTOMER EVIDENCE',
  'THESIS',
  'LIVE',
  'PILOT',
  'IN DEVELOPMENT',
  'ROADMAP',
  'TARGET USE CASE',
  'DISCOVERY USE CASE',
] as const;

export const audienceSegments = [
  'Executive Operations',
  'Financial Services',
  'Government Programs',
  'AI-Native Teams',
] as const;

export const customerStakes = [
  'Opportunity may be gone',
  'Deadline may have passed',
  'Client trust may have weakened',
  'Risk may have grown',
  'Leadership capacity may be spent',
  'Teams may still be deciding what to do',
] as const;

export const organizationalSignals = [
  'Client activity spike',
  'Contract deadline - 48 hrs',
  'Listing aging - 127 DOM',
  'Executive response required',
  'Payment exception',
  'Relationship risk',
  'Operational deadline',
] as const;

export const heroSequence = [
  {
    state: 'Signal',
    label: 'Attention Required',
    detail: 'Contract deadline - 48 hrs',
  },
  {
    state: 'Context',
    label: 'Why Now',
    detail: 'Revenue opportunity + deadline + relationship context',
  },
  {
    state: 'Owner',
    label: 'Owner',
    detail: 'Builder Intelligence / assigned operator',
  },
  {
    state: 'Next Action',
    label: 'Next Action',
    detail: 'Prepare analysis -> notify owner -> schedule follow-up',
  },
  {
    state: 'Authorized',
    label: 'Authorized',
    detail: 'Decision rights verified',
  },
  {
    state: 'Executing',
    label: 'Executing',
    detail: 'Storm carries the judgment forward',
  },
  {
    state: 'Verified',
    label: 'Verified',
    detail: 'Outcome captured for future decisions',
  },
] as const;

export const fourQuestions = [
  {
    question: 'What deserves attention?',
    body: 'Thousands of signals compete for finite human attention. Storm separates activity from consequence.',
    consequence: 'Because not everything deserves equal attention.',
  },
  {
    question: 'Why now?',
    body: 'Priority without context is just another notification. Storm evaluates timing, consequence, relationships, history and organizational context.',
    consequence: 'Because timing changes value.',
  },
  {
    question: 'Who owns it?',
    body: 'Knowing something matters does not determine who should act. Storm connects work to responsibility, decision rights and authority.',
    consequence: 'Because unowned work becomes lost work.',
  },
  {
    question: 'What happens next?',
    body: 'Insight without execution leaves the organization exactly where it started. Storm turns judgment into an accountable next action.',
    consequence: 'Because insight without execution changes nothing.',
  },
] as const;

export const crystalBallQuestions = [
  'Does this matter?',
  'Why does it matter?',
  'Why now?',
  'What happens if we do nothing?',
  'Who should own it?',
  'Does this require human judgment?',
  'Does this require executive authority?',
  'Can it be delegated?',
  'Can AI assist?',
  'Can Storm execute?',
] as const;

export const lifecycleSteps = [
  {
    step: '01',
    label: 'Signal',
    body: 'An event, behavior, deadline, opportunity, exception, communication or change enters the operating environment.',
  },
  {
    step: '02',
    label: 'Context',
    body: 'Storm assembles relevant history, relationships, systems, workflows and organizational context.',
  },
  {
    step: '03',
    label: 'Triage',
    body: 'Crystal Ball evaluates consequence, urgency, confidence and required judgment.',
  },
  {
    step: '04',
    label: 'Decision',
    body: 'A decision, recommendation, escalation or action is established.',
  },
  {
    step: '05',
    label: 'Authority',
    body: 'Storm evaluates organizational decision rights and approval requirements.',
  },
  {
    step: '06',
    label: 'Capability Selection',
    body: 'Storm determines the appropriate execution capability based on context, authority, governance and task requirements.',
  },
  {
    step: '07',
    label: 'Execution',
    body: 'The authorized human, AI model, AI agent, workflow, software system, API or decision engine carries out the work.',
  },
  {
    step: '08',
    label: 'Verification',
    body: "Assignment isn't completion. Storm checks whether the intended action or outcome actually occurred.",
  },
  {
    step: '09',
    label: 'Outcome',
    body: 'Storm captures what resulted.',
  },
  {
    step: '10',
    label: 'Memory / Learning',
    body: 'The outcome becomes part of organizational judgment.',
  },
] as const;

export const capabilityTypes = [
  'Human',
  'AI model',
  'AI agent',
  'Workflow',
  'Software system',
  'API',
  'Decision engine',
] as const;

export const stormOriginStory = {
  eyebrow: 'The Intelligence Behind the Name',
  title: 'Signal recognition is the idea at the center of Storm.',
  body:
    "Storm is Monica's service animal. Her work depends on something deceptively powerful: noticing signals, recognizing when they matter, and bringing the right signal forward at the right moment.",
  bridge:
    "That principle helped inspire Storm Signal Intelligence. Organizations are surrounded by signals every day inside conversations, relationships, workflows, systems and data. The problem is not the absence of information. It is recognizing what matters before the moment passes.",
  closing:
    'Storm Signal Intelligence is designed to help organizations detect consequential signals, connect them to context, and bring what matters forward for human judgment and action.',
} as const;

export type EvidenceMetric = {
  value: string;
  label: string;
  status: 'FACT' | 'CUSTOMER EVIDENCE' | 'THESIS' | 'IN DEVELOPMENT' | 'ROADMAP';
  claimClass:
    | 'COMPANY TRACTION'
    | 'CUSTOMER OUTCOME'
    | 'CUSTOMER OPERATING ENVIRONMENT'
    | 'PRODUCT DEMO DATA'
    | 'GOVERNMENT DEVELOPMENT / MATURITY'
    | 'ASPIRATIONAL / TARGET MARKET';
  verified: boolean;
  sourceNote: string;
  lastValidated: string;
};

export const companyTraction: EvidenceMetric[] = [
  {
    value: '2',
    label: 'Paying Customers',
    status: 'FACT',
    claimClass: 'COMPANY TRACTION',
    verified: true,
    sourceNote: 'Founder-provided traction placeholder pending final production verification.',
    lastValidated: 'Founder verification required before launch',
  },
  {
    value: '~30',
    label: 'Users',
    status: 'FACT',
    claimClass: 'COMPANY TRACTION',
    verified: true,
    sourceNote: 'Founder-provided traction placeholder pending final production verification.',
    lastValidated: 'Founder verification required before launch',
  },
  {
    value: '$24K+',
    label: 'Revenue at Last Validated Reporting Point',
    status: 'FACT',
    claimClass: 'COMPANY TRACTION',
    verified: true,
    // TODO: REVALIDATE COMPANY REVENUE IMMEDIATELY BEFORE PUBLIC PRODUCTION LAUNCH.
    sourceNote: 'Revenue must be refreshed before production launch.',
    lastValidated: 'Founder verification required before launch',
  },
];

export const operatingEnvironment: EvidenceMetric[] = [
  {
    value: '31,727',
    label: 'Deduplicated Contacts',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OPERATING ENVIRONMENT',
    verified: true,
    sourceNote: 'The Schrader Group operating environment scale.',
    lastValidated: 'Founder verification required before launch',
  },
  {
    value: '8,525',
    label: 'Historical Closings',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OPERATING ENVIRONMENT',
    verified: true,
    sourceNote: 'The Schrader Group historical operating environment.',
    lastValidated: 'Founder verification required before launch',
  },
  {
    value: '$1.86B',
    label: 'Historical Transaction Volume',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OPERATING ENVIRONMENT',
    verified: true,
    sourceNote:
      'The Schrader Group historical sales volume across approximately 30 years.',
    lastValidated: 'Founder verification required before launch',
  },
  {
    value: '150+',
    label: 'Workflows Mapped, Governed or Automated',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OPERATING ENVIRONMENT',
    verified: true,
    sourceNote: 'The Schrader Group cross-functional workflow environment.',
    lastValidated: 'Founder verification required before launch',
  },
];

export const productProofSurfaces = [
  {
    name: 'Operator Command Center / Essential EA Dashboard',
    job: 'What requires attention now?',
    description:
      'Not another dashboard showing everything. A focused operating surface for decisions, opportunities, risks and execution failures that need action now.',
    status: 'LIVE',
    screenshotPath: '/product/command-center.webp',
    alt: 'Operator Command Center interface showing prioritized operational signals and execution work.',
    screenshotApproved: false,
  },
  {
    name: 'Storm Signal Intelligence',
    job: 'What consequential activity is hiding inside organizational noise?',
    description:
      'Transforms fragmented customer, operational, relationship and lifecycle activity into prioritized signals the organization can act on.',
    status: 'LIVE',
    screenshotPath: '/product/signal-intelligence.webp',
    alt: 'Storm Signal Intelligence interface showing customer and operational signals organized for action.',
    screenshotApproved: false,
  },
  {
    name: 'Universal Client Hub',
    job: 'What context does the organization need in order to act well?',
    description:
      'Unifies relationship history, customer context, operational state and next actions without positioning Storm as a CRM replacement.',
    status: 'LIVE',
    screenshotPath: '/product/universal-client-hub.webp',
    alt: 'Universal Client Hub interface showing relationship context and accountable next actions.',
    screenshotApproved: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      'When I began working with Kristina, my company was fractured. My overhead was out of control, my staff were frustrated and defeated, and I felt like I had no idea what to do next. A year later, everything looks different. My GCI is up. My overhead has dropped dramatically, and that savings drove real ROI back into the business. Most importantly, my employees got their time back, time they now spend doing what they love: taking care of our clients and driving the business forward. I am deeply grateful for what The Essential EA and AI Storm OS brought back to my company.',
    attribution: 'Dayton Schrader',
    organization: 'The Schrader Group',
    status: 'CUSTOMER EVIDENCE',
  },
] as const;

export const caseStudyMetrics: EvidenceMetric[] = [
  {
    value: '$150K -> $30K',
    label: 'Annual Technology Stack Cost',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OUTCOME',
    verified: true,
    sourceNote:
      'Outcome occurred during the 12-month Essential EA + AI Storm OS transformation; not presented as controlled causal attribution.',
    lastValidated: 'Founder-provided validated outcome',
  },
  {
    value: '~400 -> 500+',
    label: 'Annual Closings',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OUTCOME',
    verified: true,
    sourceNote:
      'Annual production moved from approximately 400 closings to more than 500 during the 12-month transformation.',
    lastValidated: 'Founder-provided validated outcome',
  },
  {
    value: '6,500',
    label: 'Existing Opportunities Uncovered',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OUTCOME',
    verified: true,
    sourceNote:
      'Existing opportunities uncovered in the organization database; not described as newly generated leads.',
    lastValidated: 'Founder-provided validated outcome',
  },
  {
    value: '6-8 HRS',
    label: 'Returned Per Department / Week',
    status: 'CUSTOMER EVIDENCE',
    claimClass: 'CUSTOMER OUTCOME',
    verified: true,
    sourceNote:
      'Approximately 6-8 hours of capacity returned to each department every week; not extrapolated annually.',
    lastValidated: 'Founder-provided validated outcome',
  },
];

export const schraderCaseStudy = {
  client: 'The Schrader Group',
  industry: 'Real Estate',
  engagement: '12-month operational transformation',
  headline: 'From fractured to focused.',
  subhead:
    'How The Schrader Group rebuilt its operation with Essential EA + AI Storm OS.',
  context:
    'Essential EA + AI Storm OS helped create an intelligence and execution layer across the operation, connecting what deserved attention to accountable next action.',
  attributionBoundary:
    'Outcomes are described as occurring during the Essential EA + AI Storm OS transformation. They are not presented as controlled scientific attribution to AI Storm OS alone.',
  problem: [
    'owner bottleneck',
    'multiple systems without shared context',
    'leads without clear ownership',
    'fragmented departmental workflows',
    'client relationships difficult to nurture systematically',
    'expanded technology overhead',
  ],
  transformation: [
    'made operating context visible',
    'prioritized buried opportunities',
    'assigned ownership',
    'connected execution to workflows',
    'measured outcomes',
    'created organizational learning',
  ],
  workflowScope: [
    'lead intake',
    'transaction-to-close',
    'marketing',
    'sales',
    'general operations',
    'finance',
  ],
} as const;

export const caseStudyJourney = [
  {
    state: 'Fractured',
    body: 'Systems recorded activity, but the organization lacked shared context for judgment and execution.',
  },
  {
    state: 'Visible',
    body: 'Contacts, historical closings, workflows and opportunity signals were brought into a governed operating view.',
  },
  {
    state: 'Prioritized',
    body: 'The work shifted from more leads to the consequential opportunity already inside the business.',
  },
  {
    state: 'Owned',
    body: 'Signals became accountable work instead of unresolved operational noise.',
  },
  {
    state: 'Executed',
    body: 'Workflow redesign, automation and clearer ownership returned time to departments.',
  },
  {
    state: 'Measured',
    body: 'Technology cost, production, surfaced opportunities and returned capacity were tracked as customer-specific outcomes.',
  },
  {
    state: 'Growing',
    body: 'Outcome evidence becomes operating memory for the next decision cycle.',
  },
] as const;

export const categoryProofQuestions = [
  'What deserves attention?',
  'Why does it matter now?',
  'Who owns it?',
  'What should happen next?',
  'Did it happen?',
  'Did it work?',
  'What should the organization remember?',
] as const;

export const commercialMarkets = [
  { label: 'Real Estate', status: 'CURRENT MARKET' },
  { label: 'Professional Services', status: 'TARGET VALIDATION' },
  { label: 'Financial Services', status: 'TARGET VALIDATION' },
  { label: 'Complex Operating Organizations', status: 'TARGET VALIDATION' },
] as const;

export const stackLayers = [
  {
    label: 'Intelligence',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Enterprise AI', 'Other approved models'],
  },
  {
    label: 'Storm',
    items: [
      'Crystal Ball Triage',
      'Decision Objects',
      'Authority Graph',
      'Capability Selection',
      'Execution',
      'Verification',
      'Organizational Judgment',
    ],
  },
  {
    label: 'Systems',
    items: [
      'CRM',
      'ERP',
      'Email',
      'Calendar',
      'Documents',
      'Collaboration',
      'Databases',
      'Line-of-business systems',
    ],
  },
] as const;

export const governmentQuestions = [
  'What deserves attention?',
  'What evidence supports it?',
  'Why now?',
  'Who owns the decision?',
  'What authority governs it?',
  'Where is human approval required?',
  'What action is authorized?',
  'Did execution occur?',
  'What is the audit trail?',
  'What should the organization retain?',
] as const;

export const governmentArchitecture = [
  'Authorized Data / Systems',
  'Crystal Ball Triage',
  'Approved AI / Reasoning Services',
  'Decision + Authority',
  'Human / Policy Controls',
  'AI Storm OS Gov Execution',
  'Verification + Audit',
  'Outcome + Organizational Judgment',
] as const;

export const governmentBoundaries = [
  'FedRAMP authorized',
  'IL4 accredited',
  'IL5 accredited',
  'approved to process CUI',
  'authorized for operational Department of Defense deployment',
  'classified-system authorized',
  'covered by an ATO',
] as const;

export const governmentUseCases = [
  {
    name: 'Administrative Operations',
    body: 'Turn fragmented requirements, correspondence, deadlines, leadership taskers, and organizational signals into accountable work.',
    status: 'TARGET USE CASE',
  },
  {
    name: 'Program / Acquisition Execution',
    body: 'Connect decisions, dependencies, approvals, requirements, evidence, and program signals to accountable execution.',
    status: 'TARGET USE CASE',
  },
  {
    name: 'Logistics / Readiness Support',
    body: 'Bring disparate operational signals into contextualized decision support, authority-aware routing, and outcome verification.',
    status: 'DISCOVERY USE CASE',
  },
] as const;

export const founderProfile = {
  name: 'Kristina Spencer',
  title: 'Co-Founder & CEO',
  headshot: null,
  headshotAlt: 'Kristina Spencer, Co-Founder and CEO of Essential EA.',
  shortBio:
    'Decision architecture, customer discovery, operations and go-to-market.',
  proofPoints: ['26+ year military spouse', 'Author', 'Executive operator'],
  founderMarketFit:
    'Kristina spent decades operating inside environments where fragmented information, competing priorities, changing conditions, human judgment and execution all had to work together. The operating problem came first. The software came second.',
  linkedInUrl: null,
  contactRoute: null,
} as const;

export const teamProfiles = [
  {
    name: 'Monica Vasquez',
    title: 'Co-Founder & CTO',
    roleNote:
      'Product architecture, AI systems, integrations and implementation. Monica turns operational problems into intelligent systems, integration architecture and executable product infrastructure.',
    proofPoints: ['Systems architect', 'Real-estate operator', 'Relentless problem solver'],
    headshot: null,
    headshotAlt: 'Monica Vasquez, Co-Founder and CTO of Essential EA.',
    approved: true,
  },
] as const;

export const founderThesis =
  'Complementary founders: one owns the operating problem and market; one owns the product architecture and build.';

export const investorStage = {
  stage: 'Early commercial validation',
  raising: '$1M',
  instrument: 'Angel / Pre-Seed SAFE',
  capitalPriorities: [
    'product hardening',
    'technical capacity',
    'enterprise security',
    'repeatable GTM',
    'commercial validation',
    'government architecture validation',
  ],
} as const;

export const contactConfig = {
  formsEnabled: false,
  investorFallbackHref: '#request-demo',
  demoFallbackHref: '#request-demo',
} as const;

export const finalQuestions = [
  'What deserves attention?',
  'Why now?',
  'Who owns it?',
  'What happens next?',
] as const;

export const launchEvidenceChecklist = [
  'Kristina real founder portrait',
  'Monica real founder portrait',
  'Real Operator Command Center screenshot',
  'Real Signal Intelligence screenshot',
  'Real Universal Client Hub screenshot',
  'Current revenue revalidation',
  'Approved contact path',
  'Legal / privacy review',
] as const;
