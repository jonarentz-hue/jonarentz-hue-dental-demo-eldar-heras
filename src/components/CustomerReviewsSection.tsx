import React, { useState, useMemo } from 'react';
import { 
  Star, 
  Search, 
  Filter, 
  ThumbsUp, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Award, 
  ExternalLink,
  PlusCircle,
  X,
  ShieldCheck,
  Sparkles,
  Phone
} from 'lucide-react';
import { CUSTOMER_REVIEWS, CLINIC_INFO } from '../data/mockData';
import { CustomerReview, ReviewPlatform } from '../types';

interface CustomerReviewsSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({ onOpenBooking }) => {
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [selectedPlatform, setSelectedPlatform] = useState<ReviewPlatform>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('recent');
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, boolean>>({});
  
  // Write a review modal state
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('San Bernardino, CA');
  const [newPlatform, setNewPlatform] = useState<'yelp' | 'google' | 'healthgrades' | 'zocdoc'>('google');
  const [newRating, setNewRating] = useState(5);
  const [newTreatment, setNewTreatment] = useState('Preventive Care & Exam');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Available treatment categories for filtering
  const treatmentCategories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'veneers', label: 'Porcelain Veneers & Cosmetic' },
    { id: 'implant', label: 'Dental Implants' },
    { id: 'invisalign', label: 'Invisalign Aligners' },
    { id: 'emergency', label: 'Emergency & Crown' },
    { id: 'cleaning', label: 'Cleanings & Prevention' },
  ];

  // Filtered & sorted reviews
  const filteredReviews = useMemo(() => {
    return reviews
      .filter((rev) => {
        // Platform filter
        if (selectedPlatform !== 'all' && rev.platform !== selectedPlatform) {
          return false;
        }

        // Treatment filter
        if (selectedTreatment !== 'all') {
          const matchLower = (rev.treatment + ' ' + rev.title + ' ' + rev.content).toLowerCase();
          if (!matchLower.includes(selectedTreatment.toLowerCase())) {
            return false;
          }
        }

        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const match = 
            rev.author.toLowerCase().includes(q) ||
            rev.location.toLowerCase().includes(q) ||
            rev.title.toLowerCase().includes(q) ||
            rev.content.toLowerCase().includes(q) ||
            rev.treatment.toLowerCase().includes(q);
          if (!match) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'helpful') {
          return b.helpfulCount - a.helpfulCount;
        }
        return 0; // preserve order for recent
      });
  }, [reviews, selectedPlatform, selectedTreatment, searchQuery, sortBy]);

  const handleHelpfulClick = (id: string) => {
    if (helpfulClicked[id]) return;
    setHelpfulClicked(prev => ({ ...prev, [id]: true }));
    setReviews(prev => 
      prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r)
    );
  };

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const brandName = newPlatform === 'yelp' ? 'Yelp Verified Review' :
                      newPlatform === 'google' ? 'Google Verified Review' :
                      newPlatform === 'healthgrades' ? 'Healthgrades Verified Patient' :
                      'Zocdoc Verified Booking';

    const createdReview: CustomerReview = {
      id: `rev-user-${Date.now()}`,
      author: newAuthor.trim(),
      location: newLocation.trim() || 'San Bernardino, CA',
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newAuthor)}`,
      platform: newPlatform,
      rating: newRating,
      date: 'Just now',
      treatment: newTreatment,
      title: newTitle.trim() || `${newRating}-Star Experience at Heras Dental`,
      content: newContent.trim(),
      helpfulCount: 1,
      verified: true,
      platformBadgeText: brandName,
      doctorResponse: {
        date: 'Just now',
        text: `Thank you so much, ${newAuthor.split(' ')[0]}! Dr. Eldar Heras and our clinical team are honored to provide you with compassionate, gentle care.`
      }
    };

    setReviews([createdReview, ...reviews]);
    setIsWriteModalOpen(false);
    setNewAuthor('');
    setNewTitle('');
    setNewContent('');

    setToastMessage('Thank you! Your verified review has been published.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Platform badges styling helper
  const getPlatformBadge = (platform: CustomerReview['platform']) => {
    switch (platform) {
      case 'yelp':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span>Yelp</span>
          </span>
        );
      case 'google':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Google Reviews</span>
          </span>
        );
      case 'healthgrades':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span>Healthgrades</span>
          </span>
        );
      case 'zocdoc':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Zocdoc Verified</span>
          </span>
        );
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 relative">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-blue-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-blue-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-blue-300" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Patient Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Patient Reviews for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Dr. Eldar Heras, DDS
            </span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real feedback from verified patients across Yelp, Google Reviews, Healthgrades, and Zocdoc in San Bernardino, CA. Discover why anxious patients and smile makeover candidates trust Dr. Heras.
          </p>
        </div>

        {/* Aggregated Platform Scorecards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Overall Combined Rating */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Overall Patient Satisfaction</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">4.98</span>
                <span className="text-blue-200 text-sm font-medium">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 mt-2 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-blue-800/80 flex items-center justify-between text-xs text-blue-200">
              <span>540+ Total Reviews</span>
              <span className="text-blue-300 font-semibold">99.4% Recommended</span>
            </div>
          </div>

          {/* Yelp Scorecard */}
          <div 
            onClick={() => setSelectedPlatform('yelp')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedPlatform === 'yelp'
                ? 'bg-rose-50/70 border-rose-400 shadow-md ring-2 ring-rose-300'
                : 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Yelp Reviews</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">Top Rated</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">4.9</span>
              <span className="text-slate-500 text-xs font-medium">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 my-1.5 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">184 Verified Yelp Reviews & Elite community badges</p>
          </div>

          {/* Google Reviews Scorecard */}
          <div 
            onClick={() => setSelectedPlatform('google')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedPlatform === 'google'
                ? 'bg-blue-50/70 border-blue-400 shadow-md ring-2 ring-blue-300'
                : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Google Reviews</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Verified</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">4.9</span>
              <span className="text-slate-500 text-xs font-medium">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 my-1.5 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">268 Google verified reviews from San Bernardino & Inland Empire</p>
          </div>

          {/* Healthgrades & Zocdoc Scorecard */}
          <div 
            onClick={() => setSelectedPlatform('healthgrades')}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedPlatform === 'healthgrades'
                ? 'bg-sky-50/70 border-sky-400 shadow-md ring-2 ring-sky-300'
                : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Healthgrades</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">Honor Roll</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">5.0</span>
              <span className="text-slate-500 text-xs font-medium">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 my-1.5 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">86 Patient Satisfaction surveys on bedside manner & expertise</p>
          </div>

        </div>

        {/* Clinical Quality Trust Metrics */}
        <div className="bg-blue-50/60 rounded-2xl border border-blue-100 p-4 sm:p-5 mb-10 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">99.4% Reported Pain-Free Care</span>
          </div>
          <div className="h-4 w-px bg-blue-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">&lt; 4 Minute Average Wait Time</span>
          </div>
          <div className="h-4 w-px bg-blue-200 hidden md:block" />
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">100% Transparent Price Estimates</span>
          </div>
        </div>

        {/* Filters & Actions Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews (e.g. gentle, veneers, numbing, implant)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Platform Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <button
                onClick={() => setSelectedPlatform('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedPlatform === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Platforms ({reviews.length})
              </button>
              <button
                onClick={() => setSelectedPlatform('yelp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedPlatform === 'yelp'
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Yelp ({reviews.filter(r => r.platform === 'yelp').length})
              </button>
              <button
                onClick={() => setSelectedPlatform('google')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedPlatform === 'google'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Google ({reviews.filter(r => r.platform === 'google').length})
              </button>
              <button
                onClick={() => setSelectedPlatform('healthgrades')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedPlatform === 'healthgrades'
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Healthgrades ({reviews.filter(r => r.platform === 'healthgrades').length})
              </button>
              <button
                onClick={() => setSelectedPlatform('zocdoc')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedPlatform === 'zocdoc'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Zocdoc ({reviews.filter(r => r.platform === 'zocdoc').length})
              </button>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>

          </div>

          {/* Treatment Category Filter Sub-bar */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Filter Care:</span>
            </span>
            {treatmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedTreatment(cat.id)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  selectedTreatment === cat.id
                    ? 'bg-blue-100 text-blue-900 font-bold border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}

            <div className="ml-auto text-xs text-slate-500">
              Showing <span className="font-bold text-slate-900">{filteredReviews.length}</span> reviews
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        {filteredReviews.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <MessageSquare className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No reviews found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any reviews matching "{searchQuery}". Try selecting "All Platforms" or clearing your search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPlatform('all');
                setSelectedTreatment('all');
              }}
              className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  
                  {/* Top Bar: Platform Badge & Rating */}
                  <div className="flex items-center justify-between">
                    {getPlatformBadge(rev.platform)}
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    "{rev.title}"
                  </h3>

                  {/* Review Content */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {rev.content}
                  </p>

                  {/* Treatment Tag */}
                  <div className="pt-1">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/50 inline-block">
                      {rev.treatment}
                    </span>
                  </div>

                  {/* Doctor Response (if available) */}
                  {rev.doctorResponse && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>Response from Dr. Eldar Heras, DDS:</span>
                      </div>
                      <p className="text-slate-600 italic leading-relaxed">
                        "{rev.doctorResponse.text}"
                      </p>
                    </div>
                  )}

                </div>

                {/* Bottom Bar: Author Profile & Helpful Count */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {rev.avatarUrl ? (
                      <img 
                        src={rev.avatarUrl} 
                        alt={rev.author} 
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                        {rev.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-900">{rev.author}</span>
                        {rev.verified && (
                          <span title="Verified Patient">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 block">{rev.location} • {rev.date}</span>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button
                    onClick={() => handleHelpfulClick(rev.id)}
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg transition-colors ${
                      helpfulClicked[rev.id]
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                    title="Mark review as helpful"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{rev.helpfulCount}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Section Bottom Callout */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              Ready for a Calm Dental Experience?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Join Over 500+ Happy Patients with Dr. Eldar Heras
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Whether you need routine preventive cleaning, Invisalign, porcelain veneers, or same-day emergency relief, we provide anxiety-free care with zero needle sting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call (909) 882-4988</span>
            </a>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute right-5 top-5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Patient Review Demo</span>
              <h3 className="text-2xl font-black text-slate-900">Share Your Experience</h3>
              <p className="text-xs text-slate-500">
                Your feedback helps other patients in San Bernardino discover gentle dental care.
              </p>
            </div>

            <form onSubmit={handleCreateReview} className="space-y-4">
              
              {/* Platform selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Review Platform</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['google', 'yelp', 'healthgrades', 'zocdoc'] as const).map((plat) => (
                    <button
                      type="button"
                      key={plat}
                      onClick={() => setNewPlatform(plat)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border capitalize transition-colors ${
                        newPlatform === plat
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Rating</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star 
                        className={`w-7 h-7 ${star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} 
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">{newRating}.0 Stars</span>
                </div>
              </div>

              {/* Name & City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Jessica T."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Area</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. San Bernardino, CA"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Treatment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Treatment Received</label>
                <input
                  type="text"
                  value={newTreatment}
                  onChange={(e) => setNewTreatment(e.target.value)}
                  placeholder="e.g. Porcelain Veneers, Deep Cleaning, Dental Implant"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Headline */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Review Headline</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Completely pain-free and wonderful bedside manner"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Review content */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Describe your appointment, Dr. Heras's bedside manner, pain-free technique, or clinic staff..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
                >
                  Submit Review Demo
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </section>
  );
};
