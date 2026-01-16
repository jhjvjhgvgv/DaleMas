import React from 'react';
import { X, Copy } from 'lucide-react';
import { BUSINESS_RESOURCES } from '../constants';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-brand-gray w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg border border-gray-800 shadow-2xl">
        <div className="sticky top-0 bg-brand-gray p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-heading font-bold text-white uppercase">Owner Resources</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="p-8 space-y-12">
          
          {/* Email Sequences */}
          <section>
            <h3 className="text-brand-green font-bold text-xl mb-4 uppercase tracking-wider flex items-center gap-2">
              Email Sequences
            </h3>
            
            <div className="space-y-6">
              <div className="bg-black p-6 rounded border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-brand-orange font-bold uppercase text-sm">Welcome Email</h4>
                  <button 
                    onClick={() => copyToClipboard(BUSINESS_RESOURCES.emailCopy.welcome)}
                    className="text-gray-500 hover:text-white flex items-center gap-1 text-xs"
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
                  {BUSINESS_RESOURCES.emailCopy.welcome}
                </pre>
              </div>

              <div className="bg-black p-6 rounded border border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-brand-orange font-bold uppercase text-sm">Upsell Email (Day 21)</h4>
                  <button 
                    onClick={() => copyToClipboard(BUSINESS_RESOURCES.emailCopy.upsell)}
                    className="text-gray-500 hover:text-white flex items-center gap-1 text-xs"
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
                  {BUSINESS_RESOURCES.emailCopy.upsell}
                </pre>
              </div>
            </div>
          </section>

          {/* Automation Setup */}
          <section>
            <h3 className="text-brand-green font-bold text-xl mb-4 uppercase tracking-wider">
              Automation Workflow (Zapier)
            </h3>
            <div className="bg-black p-6 rounded border border-gray-800">
              <ul className="space-y-4">
                {BUSINESS_RESOURCES.automationSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-brand-orange font-mono">0{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Stripe Setup */}
          <section>
            <h3 className="text-brand-green font-bold text-xl mb-4 uppercase tracking-wider">
              Stripe Payments
            </h3>
            <div className="bg-black p-6 rounded border border-gray-800 text-gray-300 space-y-4">
              <p>To accept payments, create "Payment Links" in your Stripe Dashboard for each product:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                <li>Create Product: "30-Day Challenge" - Price: $97</li>
                <li>Create Product: "Online Program" - Price: $47</li>
                <li>Create Product: "1-on-1 Coaching" - Price: $297/mo (Recurring)</li>
                <li>Copy the generated URLs and paste them into the <code>constants.ts</code> file or your CMS.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
