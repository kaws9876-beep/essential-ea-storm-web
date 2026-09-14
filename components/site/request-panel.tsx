'use client';

import Link from 'next/link';
import { useState } from 'react';
import { track } from '@/lib/analytics';
import type { AnalyticsEvent } from '@/lib/analytics';

type RequestPanelProps = {
  id: string;
  title: string;
  fields: string[];
  options: string[];
  enabled: boolean;
  actionHref?: string;
  actionLabel?: string;
  actionEvent?: AnalyticsEvent;
};

export function RequestPanel({
  actionEvent = 'platform_click',
  actionHref,
  actionLabel = 'Submit Request',
  id,
  title,
  fields,
  options,
  enabled,
}: RequestPanelProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      id={id}
      className="border border-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (!enabled) return;
        track('contact_submit', { form: id });
        setSubmitted(true);
      }}
    >
      <div className="flex items-start justify-between gap-5">
        <h3 className="font-serif text-4xl leading-none">{title}</h3>
        <span className="border border-current/20 px-2.5 py-1 font-sans text-[0.58rem] font-semibold uppercase leading-none tracking-[0.12em] text-current/62">
          {enabled || actionHref ? 'Open' : 'Contact Route Pending'}
        </span>
      </div>

      <div className="mt-8 grid gap-4">
        {fields.map((field) => (
          <label className="grid gap-2" key={field}>
            <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--storm-cream)_58%,transparent)]">
              {field}
            </span>
            {field.toLowerCase().includes('message') ? (
              <textarea
                className="min-h-28 border border-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] bg-transparent px-3 py-3 text-base text-[var(--storm-cream)] outline-none transition focus:border-[var(--storm-gold)] disabled:cursor-not-allowed disabled:opacity-48"
                disabled={!enabled}
              />
            ) : field.toLowerCase().includes('interest') ? (
              <select
                className="min-h-12 border border-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] bg-[var(--storm-black)] px-3 py-3 text-base text-[var(--storm-cream)] outline-none transition focus:border-[var(--storm-gold)] disabled:cursor-not-allowed disabled:opacity-48"
                disabled={!enabled}
              >
                <option value="">Select</option>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                className="min-h-12 border border-[color-mix(in_srgb,var(--storm-cream)_16%,transparent)] bg-transparent px-3 py-3 text-base text-[var(--storm-cream)] outline-none transition focus:border-[var(--storm-gold)] disabled:cursor-not-allowed disabled:opacity-48"
                disabled={!enabled}
                type={field.toLowerCase().includes('email') ? 'email' : 'text'}
              />
            )}
          </label>
        ))}
      </div>

      {actionHref ? (
        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center border border-[var(--storm-cream)] bg-[var(--storm-cream)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--storm-black)] transition hover:border-[var(--storm-gold)] hover:bg-[var(--storm-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--storm-gold)]"
          data-analytics-event={actionEvent}
          href={actionHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {actionLabel}
        </Link>
      ) : (
        <button
          className="mt-8 inline-flex min-h-12 items-center justify-center border border-[var(--storm-cream)] bg-[var(--storm-cream)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--storm-black)] transition hover:border-[var(--storm-gold)] hover:bg-[var(--storm-gold)] disabled:cursor-not-allowed disabled:border-current/20 disabled:bg-transparent disabled:text-current/42"
          disabled={!enabled}
          type="submit"
        >
          {submitted ? 'Request Received' : 'Submit Request'}
        </button>
      )}

      {!enabled && !actionHref ? (
        <p className="mt-5 text-sm leading-6 text-[color-mix(in_srgb,var(--storm-cream)_58%,transparent)]">
          Contact route required before public launch. Form delivery is
          intentionally disabled until an approved email, calendar URL, request
          form, or CRM endpoint is connected; no information entered here is
          sent.
        </p>
      ) : null}
    </form>
  );
}
