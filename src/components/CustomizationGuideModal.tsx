import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  Building2, 
  UserCheck, 
  FileSpreadsheet, 
  ShieldCheck, 
  Camera, 
  CalendarClock, 
  Lock, 
  Bot, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const checklist = [
    {
      category: '1. Practice Branding & Identity',
      icon: Building2,
      items: [
        'Practice Name & Tagline (e.g., "Heras Dental - Gentle Cosmetic & Implant Dentistry")',
        'Logo files (SVG or high-res transparent PNG) & preferred color palette (e.g., ocean teal, medical blue, clean charcoal)',
        'Physical office address, phone numbers, and after-hours emergency line',
        'Weekly operating hours (including Saturday or evening extended hours)'
      ]
    },
    {
      category: '2. Doctors & Clinical Team Profiles',
      icon: UserCheck,
      items: [
        'Provider names, titles, and dental degrees (e.g., DDS, DMD, MS, FAGD, FAACD)',
        'Professional headshots / doctor portraits (high-resolution)',
        'Short bios, dental school alma maters, hospital residencies, and years of clinical practice',
        'Clinical specialties for each doctor (e.g., cosmetic veneers, Invisalign Diamond provider, sedation, pediatric dentistry)'
      ]
    },
    {
      category: '3. Treatment Catalog & Transparent Pricing',
      icon: FileSpreadsheet,
      items: [
        'Menu of services offered (Preventive, Cosmetic, Restorative, Orthodontics, Oral Surgery, Emergency)',
        'Pricing policy (exact fees, typical price ranges, or promotional specials like "$399 Zoom! Whitening")',
        'Procedure duration estimates for appointment scheduling',
        'Comfort technology highlights (e.g., The Wand painless anesthesia, nitrous oxide laughing gas, IV sedation, ceiling TVs)'
      ]
    },
    {
      category: '4. Insurance Networks & Financing Options',
      icon: ShieldCheck,
      items: [
        'List of in-network PPO dental insurance providers (e.g., Delta Dental, Cigna, MetLife, Aetna, Guardian)',
        'In-house dental membership plan details for uninsured patients (e.g., monthly/yearly cost and benefits)',
        '0% APR patient financing partners (e.g., CareCredit, Sunbit, Proceed Finance)'
      ]
    },
    {
      category: '5. Patient Smile Gallery Cases (Before & After)',
      icon: Camera,
      items: [
        'High-definition clinical Before & After dental photographs with patient HIPAA consent forms signed',
        'Case details: procedure performed, treatment duration (e.g. "3 weeks", "7 months"), number of visits',
        'Patient quotes, age, and initial aesthetic concerns (e.g. discoloration, gap closure, crowding, dental trauma)'
      ]
    },
    {
      category: '6. Online Appointment Scheduling Integration',
      icon: CalendarClock,
      items: [
        'Practice Management Software (PMS) used: e.g., Dentrix, Curve Dental, Open Dental, Eaglesoft',
        'Preferred online scheduling API or widget: e.g., NexHealth, LocalMed, CareStack, Modento, or direct calendar sync',
        'Emergency appointment buffer rules (how many same-day emergency slots to hold open daily)'
      ]
    },
    {
      category: '7. Patient Portal System Specs',
      icon: Lock,
      items: [
        'Existing portal system vendor (e.g., Dentrix Hub, Curve Hero portal, Modento, Weave, or custom SSO)',
        'Features required: digital intake forms, upcoming visit rescheduling, digital radiograph viewer, online payments/billing',
        'Patient authentication method (PIN/SMS verification, email magic link, or username/password)'
      ]
    },
    {
      category: '8. AI Dental Chatbot Knowledge & Guardrails',
      icon: Bot,
      items: [
        'Practice FAQ document (parking instructions, cancellation policy, sedation guidelines)',
        'Emergency triage escalation rules (when to display 911 hotline vs next-day appointment)',
        'Tone and personality preferences (warm & compassionate vs formal clinical)'
      ]
    }
  ];

  const handleCopy = () => {
    const text = checklist.map(sec => `${sec.category}\n` + sec.items.map(i => `  - ${i}`).join('\n')).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                What Information is Needed to Build Your Custom Website?
              </h3>
              <p className="text-xs text-slate-300">
                Checklist of content & assets required to transform this demo into your practice's live website
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-950 text-xs leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-sm font-bold text-blue-900 mb-1">
                You can provide any or all of the items below:
              </strong>
              <span>
                Even with just a few details (such as your practice name, doctor names, and preferred color), this demo application can be instantly updated and customized to match your exact dental brand.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{sec.category}</span>
                  </div>
                  <ul className="space-y-1.5 pl-5 list-disc text-slate-600 text-xs">
                    {sec.items.map((item, i) => (
                      <li key={i} className="leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
            <span>{copied ? 'Checklist Copied to Clipboard!' : 'Copy Checklist to Clipboard'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            Got It, Back to Demo
          </button>
        </div>

      </div>
    </div>
  );
};
