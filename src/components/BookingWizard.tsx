import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Heart, 
  Check, 
  AlertCircle,
  Download,
  Share2,
  Sparkles
} from 'lucide-react';
import { SERVICES, DOCTORS } from '../data/mockData';
import { AppointmentBooking } from '../types';

interface BookingWizardProps {
  initialServiceId?: string;
  onBookingComplete: (booking: AppointmentBooking) => void;
  onClose?: () => void;
  onNavigateToPortal: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialServiceId,
  onBookingComplete,
  onClose,
  onNavigateToPortal
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Oct 14');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');
  
  // Patient details
  const [isNewPatient, setIsNewPatient] = useState<boolean>(true);
  const [patientName, setPatientName] = useState<string>('Jordan Reed');
  const [email, setEmail] = useState<string>('jordan.reed@example.com');
  const [phone, setPhone] = useState<string>('(555) 892-4192');
  const [insuranceProvider, setInsuranceProvider] = useState<string>('Delta Dental PPO');
  const [hasAnxiety, setHasAnxiety] = useState<boolean>(false);
  const [anxietyPreference, setAnxietyPreference] = useState<string>('Noise-canceling headphones & Netflix');
  const [notes, setNotes] = useState<string>('');

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const selectedDoctor = DOCTORS.find(d => d.id === selectedDoctorId);

  const availableDates = [
    { label: 'Today (Emergency)', value: 'Today, Oct 13', isUrgent: true },
    { label: 'Tomorrow', value: 'Tomorrow, Oct 14' },
    { label: 'Thursday', value: 'Thursday, Oct 15' },
    { label: 'Friday', value: 'Friday, Oct 16' },
    { label: 'Saturday', value: 'Saturday, Oct 17' },
    { label: 'Next Monday', value: 'Monday, Oct 19' },
  ];

  const morningSlots = ['8:30 AM', '9:15 AM', '10:00 AM', '11:15 AM'];
  const afternoonSlots = ['1:15 PM', '2:00 PM', '3:30 PM', '4:15 PM', '5:00 PM'];

  const insuranceOptions = [
    'Delta Dental PPO',
    'Cigna Dental Network',
    'MetLife PDP Plus',
    'Aetna Dental',
    'Guardian Any Doctor',
    'Blue Cross Blue Shield',
    'Uninsured (Enroll in $29/mo Heras Dental Care Club)',
    'Pay Out-of-Pocket / Self-Pay'
  ];

  const comfortOptions = [
    'The Wand® Painless Computerized Numbing',
    'Nitrous Oxide (Laughing Gas)',
    'Noise-Canceling Bose Headphones with Netflix',
    'Warm Scented Lavender Face Towel',
    'Frequent hand-signal pause check-ins'
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: AppointmentBooking = {
      id: `apt-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName,
      email,
      phone,
      isNewPatient,
      serviceId: selectedServiceId,
      doctorId: selectedDoctorId,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      insuranceProvider,
      hasAnxiety,
      anxietyPreference: hasAnxiety ? anxietyPreference : undefined,
      notes: notes.trim() || undefined,
      status: 'confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setConfirmedBooking(newBooking);
    onBookingComplete(newBooking);
    setStep(5);
  };

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-8 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Fast & Secure Booking</span>
                <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full border border-blue-200">
                  Instant Confirmation
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Schedule Your Dental Visit
              </h2>
            </div>

            {/* Stepper bubbles */}
            <div className="hidden sm:flex items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      step === s
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : step > s
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  {s < 4 && <div className={`w-6 h-0.5 ${step > s ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
                </div>
              ))}
            </div>
          </div>

          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Step 1: Select Reason for Visit</h3>
                <p className="text-xs text-slate-500">Choose the dental treatment or consultation you would like to schedule.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SERVICES.map((srv) => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-slate-200/80 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="font-bold text-sm text-slate-900">{srv.name}</div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{srv.description}</p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100/80 text-xs">
                        <span className="font-semibold text-slate-700">{srv.priceRange}</span>
                        <span className="text-slate-500 font-medium">{srv.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  id="booking-step1-next"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <span>Select Doctor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Doctor */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Step 2: Choose Your Dental Provider</h3>
                <p className="text-xs text-slate-500">You may request a specific doctor or choose first available for maximum time slots.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Available Option */}
                <div
                  onClick={() => setSelectedDoctorId('any')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3.5 ${
                    selectedDoctorId === 'any'
                      ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                      : 'border-slate-200/80 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg shrink-0">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">First Available Dentist</h4>
                    <p className="text-xs text-slate-500">Fastest appointment availability across all specialists</p>
                  </div>
                </div>

                {/* Named Doctors */}
                {DOCTORS.map((doc) => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                          : 'border-slate-200/80 bg-white hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={doc.photoUrl}
                        alt={doc.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-slate-900 truncate">{doc.name}</h4>
                        </div>
                        <p className="text-xs text-blue-700 font-semibold truncate">{doc.title}</p>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{doc.credentials}</p>
                        <span className="text-[10px] text-amber-600 font-bold mt-1 inline-block">
                          ★ {doc.rating} ({doc.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center gap-1.5 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  id="booking-step2-next"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <span>Select Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Choose Date & Time */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Step 3: Select Date & Time Slot</h3>
                <p className="text-xs text-slate-500">Chair time is automatically reserved and confirmed immediately.</p>
              </div>

              {/* Date selection pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Available Dates
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {availableDates.map((dt) => (
                    <button
                      key={dt.value}
                      type="button"
                      onClick={() => setSelectedDate(dt.value)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedDate === dt.value
                          ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-sm'
                          : dt.isUrgent
                          ? 'border-rose-200 bg-rose-50/60 text-rose-800 hover:bg-rose-100 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      <span className="block text-[11px] opacity-80">{dt.label}</span>
                      <span className="block text-xs font-bold mt-0.5">{dt.value.split(',')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-4 pt-2">
                <div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
                    Morning Appointments
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {morningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedTimeSlot === slot
                            ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/30'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
                    Afternoon Appointments
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {afternoonSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedTimeSlot === slot
                            ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500/30'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center gap-1.5 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  id="booking-step3-next"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <span>Patient Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info & Insurance */}
          {step === 4 && (
            <form onSubmit={handleConfirmBooking} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Step 4: Patient Details & Comfort Preferences</h3>
                <p className="text-xs text-slate-500">Tell us about you so our clinical team can prepare your personalized suite.</p>
              </div>

              {/* Patient type toggle */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsNewPatient(true)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    isNewPatient ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  I am a New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setIsNewPatient(false)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    !isNewPatient ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  Returning Patient
                </button>
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600 bg-slate-50/50"
                    placeholder="e.g. Jordan Reed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone (for SMS Reminders)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600 bg-slate-50/50"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600 bg-slate-50/50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Dental Insurance Coverage</label>
                  <select
                    value={insuranceProvider}
                    onChange={(e) => setInsuranceProvider(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-blue-600 bg-white"
                  >
                    {insuranceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Anxiety & Comfort amenities box */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-bold text-blue-950">Dental Anxiety or Sensitive Reflexes?</span>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasAnxiety}
                      onChange={(e) => setHasAnxiety(e.target.checked)}
                      className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-blue-900">Yes, please accommodate me</span>
                  </label>
                </div>

                {hasAnxiety && (
                  <div className="pt-2 border-t border-blue-100">
                    <label className="block text-xs font-medium text-blue-900 mb-1">Preferred Comfort Amenities:</label>
                    <select
                      value={anxietyPreference}
                      onChange={(e) => setAnxietyPreference(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-blue-200 text-xs bg-white text-slate-800"
                    >
                      {comfortOptions.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Concerns, Symptoms, or Smile Goals (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="e.g. slight sensitivity to cold on upper left molar, or interested in closing front gap..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-blue-600 bg-slate-50/50"
                />
              </div>

              {/* Booking Summary Strip */}
              <div className="p-3.5 rounded-xl bg-slate-100/90 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-slate-900">{selectedService.name}</span>
                  <span className="text-slate-500"> with </span>
                  <span className="font-semibold text-blue-800">
                    {selectedDoctor ? selectedDoctor.name : 'First Available Doctor'}
                  </span>
                </div>
                <div className="font-bold text-slate-900">
                  {selectedDate} at {selectedTimeSlot}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center gap-1.5 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  id="booking-submit-btn"
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Booking Confirmation Pass */}
          {step === 5 && confirmedBooking && (
            <div className="text-center space-y-6 py-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Appointment Confirmed & Reserved
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                  We Look Forward to Seeing You, {confirmedBooking.patientName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
                  A calendar invite and SMS confirmation have been sent to <strong>{confirmedBooking.phone}</strong>.
                </p>
              </div>

              {/* Digital Boarding Pass */}
              <div className="max-w-md mx-auto rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 p-6 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <span className="text-xs text-slate-500 uppercase font-bold">Confirmation Code</span>
                  <span className="text-sm font-mono font-black text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200">
                    {confirmedBooking.id.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Service</span>
                    <span className="font-bold text-slate-800">{selectedService.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Specialist</span>
                    <span className="font-bold text-slate-800">
                      {selectedDoctor ? selectedDoctor.name : 'First Available Doctor'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Date & Time</span>
                    <span className="font-bold text-blue-800">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Clinic Location</span>
                    <span className="font-bold text-slate-800">1848 S Waterman Ave, Suite 200, San Bernardino, CA</span>
                  </div>
                </div>

                {confirmedBooking.hasAnxiety && (
                  <div className="mt-2 pt-2 border-t border-blue-100 text-[11px] text-blue-900 bg-white/70 p-2 rounded-lg">
                    ✨ <strong>Anxiety Protocol Activated:</strong> {confirmedBooking.anxietyPreference}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    // Simulate calendar file download
                    alert(`Calendar appointment "${selectedService.name}" saved to your calendar!`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Add to Apple / Google Calendar</span>
                </button>

                <button
                  id="booking-view-portal-btn"
                  onClick={onNavigateToPortal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
                >
                  <User className="w-4 h-4" />
                  <span>View in Patient Portal</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
