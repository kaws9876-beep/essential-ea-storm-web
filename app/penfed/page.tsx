import type { Metadata } from 'next';
import { HomePage } from '@/components/site/homepage';

export const metadata: Metadata = {
  title: 'EA STORM | Keep What Matters Moving.',
  description:
    'EA STORM identifies what needs attention, gets it to the right owner, and keeps it moving through the outcome.',
};

export default function PenFedPage() {
  return <HomePage campaign="penfed" />;
}
