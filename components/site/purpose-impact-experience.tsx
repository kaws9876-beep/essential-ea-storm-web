'use client';

import Image from 'next/image';
import { useState, type KeyboardEvent } from 'react';

const themes = [
  {
    id: 'military-community',
    label: 'Military community',
    commitment: 'Military community and military families.',
    imageSrc: '/brand/purpose/military-community.webp',
    imageAlt:
      'Four women collaborating around a laptop and notebook in a naturally lit professional workspace.',
    imageWidth: 764,
    imageHeight: 507,
  },
  {
    id: 'military-spouse-employment',
    label: 'Military-spouse opportunity',
    commitment:
      'Meaningful remote employment opportunities for military spouses.',
    imageSrc: '/brand/purpose/military-spouse-employment.webp',
    imageAlt:
      'A professional woman working at a laptop beside a large window.',
    imageWidth: 765,
    imageHeight: 510,
  },
  {
    id: 'special-needs-community',
    label: 'Special-needs community',
    commitment:
      'Serve individuals with special needs and their families through philanthropic initiatives.',
    imageSrc: '/brand/purpose/special-needs-family.webp',
    imageAlt:
      'A family of five gathered closely around a smiling child using a supportive chair.',
    imageWidth: 764,
    imageHeight: 510,
  },
  {
    id: 'military-marriage-ministry',
    label: 'Marriage and family',
    commitment:
      'Strengthen marriages and families through ongoing work with Valor & Vows, a military marriage ministry.',
    imageSrc: '/brand/purpose/military-marriage.webp',
    imageAlt:
      'A military service member and civilian spouse sitting closely together in a naturally lit home.',
    imageWidth: 765,
    imageHeight: 507,
  },
] as const;

function PurposeMedia({ theme }: { theme: (typeof themes)[number] }) {
  return (
    <figure className="ea-purpose-media">
      <Image
        className="ea-purpose-media__image"
        src={theme.imageSrc}
        alt={theme.imageAlt}
        width={theme.imageWidth}
        height={theme.imageHeight}
        sizes="(max-width: 960px) calc(100vw - 40px), 55vw"
      />
    </figure>
  );
}

export function PurposeImpactExperience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = themes[selectedIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let nextIndex: number | undefined;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (selectedIndex + 1) % themes.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (selectedIndex - 1 + themes.length) % themes.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = themes.length - 1;
    }

    if (nextIndex === undefined) return;

    event.preventDefault();
    setSelectedIndex(nextIndex);
    requestAnimationFrame(() => {
      document.getElementById(`purpose-tab-${themes[nextIndex].id}`)?.focus();
    });
  }

  return (
    <div className="ea-purpose-experience">
      <div className="ea-purpose-stage">
        <PurposeMedia key={selected.id} theme={selected} />
        <div className="ea-purpose-stage__story">
          <div
            className="ea-purpose-tabs"
            role="tablist"
            aria-label="Purpose and impact commitments"
            aria-orientation="vertical"
          >
            {themes.map((theme, index) => (
              <button
                id={`purpose-tab-${theme.id}`}
                key={theme.id}
                type="button"
                role="tab"
                aria-selected={selectedIndex === index}
                aria-controls="purpose-impact-panel"
                tabIndex={selectedIndex === index ? 0 : -1}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={handleKeyDown}
              >
                <span>0{index + 1}</span>
                {theme.label}
              </button>
            ))}
          </div>
          <div
            key={selected.id}
            id="purpose-impact-panel"
            className="ea-purpose-panel"
            role="tabpanel"
            aria-labelledby={`purpose-tab-${selected.id}`}
          >
            <p className="ea-label">{selected.label}</p>
            <h3>{selected.commitment}</h3>
          </div>
        </div>
      </div>

      <div className="ea-purpose-mobile" aria-label="Purpose and impact commitments">
        {themes.map((theme) => (
          <article key={theme.id}>
            <PurposeMedia theme={theme} />
            <div>
              <p className="ea-label">{theme.label}</p>
              <h3>{theme.commitment}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
