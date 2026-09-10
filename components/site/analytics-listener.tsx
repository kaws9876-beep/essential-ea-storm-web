'use client';

import { useEffect, useRef } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

const thresholds = [
  { percent: 50, event: 'scroll_50' },
  { percent: 90, event: 'scroll_90' },
] as const satisfies ReadonlyArray<{ percent: number; event: AnalyticsEvent }>;

export function AnalyticsListener({ campaign }: { campaign?: string }) {
  const fired = useRef(new Set<AnalyticsEvent>());

  useEffect(() => {
    if (campaign === 'penfed' && !fired.current.has('penfed_entry')) {
      fired.current.add('penfed_entry');
      track('penfed_entry', { campaign });
    }
  }, [campaign]);

  useEffect(() => {
    function handleScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = (window.scrollY / scrollable) * 100;

      for (const threshold of thresholds) {
        if (
          progress >= threshold.percent &&
          !fired.current.has(threshold.event)
        ) {
          fired.current.add(threshold.event);
          track(threshold.event, { path: window.location.pathname });
        }
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById('government');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !fired.current.has('gov_section_view')) {
          fired.current.add('gov_section_view');
          track('gov_section_view', { path: window.location.pathname });
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest<HTMLElement>('[data-analytics-event]');
      const eventName = trigger?.dataset.analyticsEvent as
        | AnalyticsEvent
        | undefined;

      if (eventName) {
        track(eventName, { path: window.location.pathname });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
