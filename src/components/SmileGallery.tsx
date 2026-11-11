import React, { useState, useRef, useCallback } from 'react';
import { 
  Smile, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { SMILE_GALLERY } from '../data/mockData';
import { SmileCase, SmileCategory } from '../types';

interface SmileGalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SmileGallery: React.FC<SmileGalleryProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<SmileCategory>('all');
  const [activeCase, setActiveCase] = useState<SmileCase>(SMILE_GALLERY[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Transformations (18)' },
    { id: 'veneers', label: 'Porcelain Veneers' },
    { id: 'whitening', label: 'Zoom! Whitening' },
    { id: 'invisalign', label: 'Invisalign®' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'restorative', label: 'Restorative & Bonding' },
  ] as const;

  const filteredCases = selectedCategory === 'all' 
    ? SMILE_GALLERY 
    : SMILE_GALLERY.filter(c => c.category === selectedCategory);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="smile-gallery-section" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Smile Transformation Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Patients. Life-Changing Smiles.
          </h2>
          
          <p className="text-slate-600 text-base">
            Drag the interactive slider across each case study to view before and after results created by Dr. Eldar Heras, DDS and our cosmetic ceramists.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                const matching = cat.id === 'all' 
                  ? SMILE_GALLERY[0] 
                  : SMILE_GALLERY.find(c => c.category === cat.id) || SMILE_GALLERY[0];
                setActiveCase(matching);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Before / After Slider Showcase Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Interactive Comparison Slider */}
            <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-900/5 flex flex-col justify-center">
              
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                  <span>Drag or swipe the divider to compare</span>
                </span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {activeCase.procedure}
                </span>
              </div>

              {/* Slider stage */}
              <div 
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handleMouseMove}
                onPointerUp={handlePointerUp}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none shadow-md bg-slate-200 border border-slate-200"
              >
                {/* AFTER Image (Background full) */}
                <img 
                  src={activeCase.afterImage} 
                  alt={`${activeCase.patientName} After Treatment`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* AFTER Label Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none shadow-md border border-slate-700">
                  AFTER
                </div>

                {/* BEFORE Image (Clipped layer) */}
                <div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={activeCase.beforeImage} 
                    alt={`${activeCase.patientName} Before Treatment`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ 
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%' 
                    }}
                    referrerPolicy="no-referrer"
                  />
                  {/* BEFORE Label Badge */}
                  <div className="absolute top-4 left-4 bg-blue-950/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none shadow-md border border-blue-700">
                    BEFORE
                  </div>
                </div>

                {/* Draggable Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Handle button in center */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center border-2 border-blue-600">
                    <SlidersHorizontal className="w-4 h-4 text-blue-700" />
                  </div>
                </div>
              </div>

              {/* Slider Helper Range Bar */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[11px] font-bold text-blue-700 uppercase">Before</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition} 
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                  aria-label="Before after comparison slider position"
                />
                <span className="text-[11px] font-bold text-slate-900 uppercase">After</span>
              </div>

            </div>

            {/* Right Col: Case Study & Clinical Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {activeCase.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Patient: {activeCase.patientName} (Age {activeCase.age})
                    </p>
                  </div>
                </div>

                {/* Patient quote */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100/80">
                  <p className="text-sm italic text-blue-950 leading-relaxed font-medium">
                    {activeCase.quote}
                  </p>
                </div>

                {/* Case facts grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Treatment Time</span>
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{activeCase.treatmentTime}</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Total Visits</span>
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{activeCase.visits} Appointments</span>
                    </span>
                  </div>

                  <div className="col-span-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Treating Specialist</span>
                    <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                      {activeCase.doctorName}
                    </span>
                  </div>
                </div>

                {/* Clinical summary */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Clinical Notes</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeCase.story}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeCase.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking CTA for this result */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  id="gallery-book-similar-btn"
                  onClick={() => {
                    const serviceMap: Record<string, string> = {
                      veneers: 'porcelain-veneers',
                      whitening: 'zoom-whitening',
                      invisalign: 'invisalign',
                      implants: 'dental-implants',
                      restorative: 'biomimetic-fillings'
                    };
                    onOpenBooking(serviceMap[activeCase.category] || undefined);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for Similar Result</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip of all cases */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>Browse More Patient Cases</span>
            <span className="text-xs text-slate-500 font-normal">({filteredCases.length} available)</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredCases.map((caseItem) => {
              const isSelected = activeCase.id === caseItem.id;
              return (
                <div
                  key={caseItem.id}
                  onClick={() => {
                    setActiveCase(caseItem);
                    setSliderPosition(50);
                  }}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer text-left group ${
                    isSelected 
                      ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20' 
                      : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2 bg-slate-100">
                    <img 
                      src={caseItem.afterImage} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-1 right-1 bg-slate-900/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      After
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-700">
                    {caseItem.patientName}
                  </p>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {caseItem.procedure}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
