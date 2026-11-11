import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Heart,
  Star
} from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface FooterProps {
  onNavigateTab: (tab: 'overview' | 'reviews' | 'gallery' | 'booking' | 'portal') => void;
  onOpenGuide: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenGuide,
  onOpenBooking
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          
          {/* Col 1 & 2: Practice Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">Heras Dental</span>
                <p className="text-blue-400 text-xs font-semibold">Dr. Eldar Heras, DDS • San Bernardino, CA</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Dedicated to compassionate, high-precision dentistry in an anxiety-free environment. Featuring computerized painless numbing (The Wand®), digital smile design, and same-day emergency relief.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Office: {CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>24/7 Dental Emergency: {CLINIC_INFO.emergencyPhone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/50 px-3 py-1.5 rounded-xl hover:bg-amber-950 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>What information do you need from me?</span>
              </button>
            </div>
          </div>

          {/* Col 3: Patient Reviews & Ratings */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Patient Reviews</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-blue-300 transition-colors flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Yelp Reviews (4.9 ★)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-blue-300 transition-colors flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Google Reviews (4.9 ★)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-blue-300 transition-colors flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Healthgrades Honor Roll</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-blue-300 transition-colors flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Zocdoc Verified Bookings</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  • View All 540+ Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Demo Features</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenBooking} className="hover:text-blue-300 transition-colors font-semibold text-blue-400">
                  • Online Appointment Booking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('gallery')} className="hover:text-blue-300 transition-colors">
                  • Patient Smile Gallery Slider
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('portal')} className="hover:text-blue-300 transition-colors font-semibold text-blue-400">
                  • Integrated Patient Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('reviews')} className="hover:text-blue-300 transition-colors">
                  • Yelp & Google Reviews Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenGuide} className="hover:text-blue-300 transition-colors text-amber-300 font-semibold">
                  • Customization Info Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Office Hours</h4>
            <div className="space-y-1.5 text-slate-400">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="flex flex-col py-0.5 border-b border-slate-800/80">
                  <span className="text-slate-300 font-medium">{h.days}</span>
                  <span className="text-blue-400 font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Guaranteed same-day emergency relief chair times held daily.
            </p>
          </div>

        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Heras Dental Demo • Dr. Eldar Heras, DDS. Developed for demonstration purposes. HIPAA compliant design structure.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Care</span>
            <span>•</span>
            <span>Patient Rights</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
