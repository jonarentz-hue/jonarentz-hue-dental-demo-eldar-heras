import React from 'react';
import { 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Star, 
  Clock, 
  UserCheck, 
  Smile,
  Zap,
  Award
} from 'lucide-react';
import { DOCTORS } from '../data/mockData';

interface HeroSectionProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateTab: (tab: 'reviews' | 'gallery' | 'portal') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onNavigateTab
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-200/60">
      {/* Background aesthetic shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge with Yelp & Google mentions */}
            <div 
              onClick={() => onNavigateTab('reviews')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-semibold shadow-xs cursor-pointer hover:bg-blue-200/70 transition-colors"
            >
              <span className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>4.98 Rating across 540+ Reviews on Yelp & Google</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 hidden sm:inline" />
              <span className="text-blue-700 font-bold hidden sm:inline">San Bernardino, CA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Gentle, Artful Dentistry <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                By Dr. Eldar Heras, DDS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience modern porcelain veneers, computer-guided implants, and anxiety-free family dental care in San Bernardino, CA. Powered by painless computerized numbing, 3D smile previews, and instant online scheduling.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-book-now-btn"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                id="hero-reviews-btn"
                onClick={() => onNavigateTab('reviews')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-base border border-slate-300/80 shadow-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Read 540+ Yelp & Google Reviews</span>
              </button>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-left">
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>The Wand® Numbing</span>
                </div>
                <p className="text-slate-500 text-xs">Painless computerized delivery with zero needle sting.</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Same-Day Relief</span>
                </div>
                <p className="text-slate-500 text-xs">Emergency chair slots reserved daily for toothaches.</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Anxiety-Free Suite</span>
                </div>
                <p className="text-slate-500 text-xs">Nitrous laughing gas, Netflix TVs & noise-canceling Bose.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="rounded-3xl bg-white p-4 shadow-xl border border-slate-200/80 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                    alt="Modern pristine dental clinic interior with 3D scanner" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating badge top left */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">iTero 3D Scanning In Use</span>
                  </div>

                  {/* Floating badge bottom right */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm text-white text-xs font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Zoom! Whitening Special $399</span>
                  </div>
                </div>

                {/* Meet the Doctors Mini-strip */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Board-Certified Specialists</span>
                    <button 
                      onClick={() => onNavigateTab('reviews')}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <span>Patient Reviews</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {DOCTORS.map((doc) => (
                      <div 
                        key={doc.id}
                        onClick={() => onOpenBooking(undefined)}
                        className="flex-1 min-w-[120px] p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 transition-colors cursor-pointer text-center group"
                      >
                        <img 
                          src={doc.photoUrl} 
                          alt={doc.name} 
                          className="w-9 h-9 rounded-full object-cover mx-auto mb-1 border border-white shadow-xs group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <p className="text-[11px] font-bold text-slate-800 truncate">{doc.name.split(',')[0]}</p>
                        <p className="text-[9px] text-blue-700 font-medium truncate">{doc.specialties[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick patient portal jump banner */}
                <div 
                  onClick={() => onNavigateTab('portal')}
                  className="mt-3 p-3 rounded-xl bg-blue-950 text-white flex items-center justify-between cursor-pointer hover:bg-blue-900 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-blue-200">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Existing Patient Portal Demo</p>
                      <p className="text-[10px] text-blue-200">View upcoming visits, 3D X-rays & billing</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-300 flex items-center gap-1">
                    Demo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
