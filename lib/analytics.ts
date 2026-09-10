export type AnalyticsEvent =
  | 'hero_demo_click'
  | 'platform_click'
  | 'gov_section_view'
  | 'investor_click'
  | 'contact_submit'
  | 'scroll_50'
  | 'scroll_90'
  | 'penfed_entry';

type AnalyticsPayload = Record<string, string | number | boolean | null>;

type AnalyticsAdapter = {
  track: (event: AnalyticsEvent, payload?: AnalyticsPayload) => void;
};

const adapters: AnalyticsAdapter[] = [];

export function registerAnalyticsAdapter(adapter: AnalyticsAdapter) {
  adapters.push(adapter);
}

export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  for (const adapter of adapters) {
    adapter.track(event, payload);
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('[analytics]', event, payload);
  }
}
