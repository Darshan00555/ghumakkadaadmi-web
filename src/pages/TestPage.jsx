import React from 'react';

import { LeadCapturePage } from '@/components/ui/animated-characters-lead-capture';
import { Button } from '@/components/ui/button';

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="mb-4 text-2xl">Test Page</h1>
      <div className="mb-8">
        <h2 className="mb-2 text-xl">Button Test</h2>
        <Button>Click Me</Button>
      </div>
      <div>
        <h2 className="mb-2 text-xl">Lead Capture Test</h2>
        <LeadCapturePage onComplete={() => alert('Done')} />
      </div>
    </div>
  );
}
