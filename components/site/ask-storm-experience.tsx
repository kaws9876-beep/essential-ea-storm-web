'use client';

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useState, type CSSProperties } from 'react';

const scenarios = [
  {
    trigger: 'We keep solving the same problems.',
    title: 'A recurring handoff keeps returning.',
    steps: [
      ['Signal', 'The same workflow breakdown appears across multiple cycles.'],
      ['Why this surfaced', 'Repeated delays, rework and missed handoffs are connected across the operating history.'],
      ['What may be driving it', 'A process boundary is unclear—not simply another isolated mistake.'],
      ['Who should own it', 'The operational owner responsible for the handoff and decision rights.'],
      ['What happens next', 'Review the pattern, clarify the handoff and approve the revised workflow.'],
      ['How we know it worked', 'The next cycle moves without the same delay or rework.'],
    ],
  },
  {
    trigger: "I don't know what deserves attention.",
    title: 'One signal combination carries more consequence.',
    steps: [
      ['Signal', 'Several customer and operating changes are happening at once.'],
      ['Why this surfaced', 'An open opportunity, reduced activity and an approaching deadline now intersect.'],
      ['What may be driving it', 'The opportunity may be stalled because ownership and timing are disconnected.'],
      ['Who should own it', 'The accountable relationship owner, with leadership judgment only where required.'],
      ['What happens next', 'Confirm ownership, review context and approve the appropriate follow-up.'],
      ['How we know it worked', 'A response is recorded and the resulting status becomes visible.'],
    ],
  },
  {
    trigger: 'Too much important work depends on me.',
    title: 'Leadership has become the routing layer.',
    steps: [
      ['Signal', 'Important work repeatedly returns to leadership for direction.'],
      ['Why this surfaced', 'Ownership, authority and next actions are unclear across the workflow.'],
      ['What may be driving it', 'Teams are escalating execution questions that do not all require executive judgment.'],
      ['Who should own it', 'Appropriate operating owners move the work; leadership retains consequential decisions.'],
      ['What happens next', 'Route execution to the accountable owner and surface only the judgment that leadership must provide.'],
      ['How we know it worked', 'Work advances with visible ownership while leadership regains space to lead.'],
    ],
  },
];

export function AskStormExperience({ demoHref }: { demoHref: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sequenceKey, setSequenceKey] = useState(0);
  const scenario = scenarios[selectedIndex];

  function selectScenario(index: number) {
    setSelectedIndex(index);
    setSequenceKey((current) => current + 1);
  }

  return (
    <div className="ea-guided">
      <div className="ea-guided__choices" aria-label="Choose an illustrative operating problem">
        {scenarios.map((item, index) => (
          <button
            key={item.trigger}
            type="button"
            aria-pressed={selectedIndex === index}
            onClick={() => selectScenario(index)}
          >
            <span className="ea-index">0{index + 1}</span>
            <span>{item.trigger}</span>
            <ArrowDown size={18} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div
        key={sequenceKey}
        className="ea-guided__sequence"
        aria-label={`Illustrative EA STORM sequence: ${scenario.trigger}`}
      >
        <p className="ea-guided__title" aria-live="polite">
          {scenario.title}
        </p>
        <ol>
          {scenario.steps.map(([label, value], index) => (
            <li key={label} style={{ '--step': index } as CSSProperties}>
              <span className="ea-guided__rail" aria-hidden="true" />
              <div>
                <p className="ea-label">{label}</p>
                <p>{value}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          className="ea-guided__cta"
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="platform_click"
        >
          See what EA STORM could surface in your organization
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
