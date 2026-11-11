import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  User, 
  Menu, 
  X, 
  HelpCircle,
  AlertCircle,
  Star
} from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface HeaderProps {
  activeTab: 'overview' | 'reviews' | 'gallery' | 'booking' | 'portal';
  setActiveTab: (tab: 'overview' | 'reviews' | 'gallery' | 'booking' | 'portal') => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenGuide: () => void;
  bookingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenGuide,
  bookingCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Home' },
    { id: 'reviews', label: 'Patient Reviews', badge: '4.9★' },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'booking', label: 'Book Appointment' },
    { id: 'portal', label: 'Patient Portal', badge: 'Active' },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Clinic Info Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-blue-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Open Today until 6:00 PM</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate max-w-[280px]">1848 S Waterman Ave, San Bernardino, CA</span>
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:flex items-center gap-1.5 text-rose-300">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Emergency 24/7: {CLINIC_INFO.emergencyPhone}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="header-guide-btn"
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-950/50 hover:bg-amber-950/80 border border-amber-600/50 px-2.5 py-1 rounded-full transition-colors"
              title="Click to view what information is needed to build and customize this dental website"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Customization Checklist</span>
            </button>

            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-blue-300 transition-colors pl-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight">Heras Dental</span>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-200/60">Demo</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Dr. Eldar Heras, DDS • San Bernardino, CA</p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  if (item.id === 'booking') {
                    onOpenBooking();
                  } else {
                    setActiveTab(item.id);
                  }
                }}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50/90 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'reviews' && (
                  <span className="px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded-md text-[10px] font-bold flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    <span>4.9</span>
                  </span>
                )}
                {item.id === 'portal' && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse" title="Demo Portal Active" />
                )}
                {item.id === 'booking' && bookingCount > 0 && (
                  <span className="px-1.5 py-0.2 bg-blue-600 text-white rounded-full text-[10px] font-bold">
                    {bookingCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Patient Portal Switcher */}
          <button
            id="header-portal-quick-btn"
            onClick={() => setActiveTab('portal')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              activeTab === 'portal'
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
              EW
            </div>
            <div className="text-left">
              <span className="block leading-tight">Emma Watson</span>
              <span className="text-[10px] text-blue-600 font-medium">Portal Access</span>
            </div>
          </button>

          {/* Book Appointment CTA */}
          <button
            id="header-book-btn"
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-book-cta-top"
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);
                if (item.id === 'booking') {
                  onOpenBooking();
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium text-sm flex items-center justify-between ${
                activeTab === item.id ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'reviews' && (
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                  4.9 ★ (540+ Reviews)
                </span>
              )}
              {item.id === 'portal' && (
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                  Emma W. Logged In
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full py-2.5 px-3 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>What Information is Needed to Build This?</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
