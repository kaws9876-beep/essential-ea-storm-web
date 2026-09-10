import type { Metadata } from 'next';
import { HomePage } from '@/components/site/homepage';

export const metadata: Metadata = {
  title: 'AI Storm OS | Decision & Execution Intelligence',
  description:
    'AI Storm OS turns fragmented organizational signals into accountable execution by connecting context, decision rights, ownership, execution, verification and organizational learning across existing systems and AI.',
};

export default function PenFedPage() {
  return <HomePage campaign="penfed" />;
}
