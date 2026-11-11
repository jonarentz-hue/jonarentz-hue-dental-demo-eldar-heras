import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  FileText, 
  CreditCard, 
  Image as ImageIcon, 
  ShieldAlert, 
  Download, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Smile,
  Eye,
  Plus,
  Heart,
  Users,
  Check
} from 'lucide-react';
import { PATIENT_PROFILES, CLINIC_INFO } from '../data/mockData';
import { AppointmentBooking, PatientProfile } from '../types';

interface PatientPortalProps {
  customBookings: AppointmentBooking[];
  onOpenBooking: () => void;
}

export const PatientPortal: React.FC<PatientPortalProps> = ({ 
  customBookings,
  onOpenBooking 
}) => {
  const [selectedPatientId, setSelectedPatientId] = useState<string>(PATIENT_PROFILES[0].id);
  const [activePortalTab, setActivePortalTab] = useState<'appointments' | 'treatment' | 'xrays' | 'billing' | 'intake'>('appointments');
  const [selectedXray, setSelectedXray] = useState<any | null>(null);
  
  const currentPatient: PatientProfile = PATIENT_PROFILES.find(p => p.id === selectedPatientId) || PATIENT_PROFILES[0];
  const [selectedTooth, setSelectedTooth] = useState<string | null>(
    currentPatient.treatmentPlans[0]?.toothNumber || '#7 - #10'
  );

  // Combine current patient's upcoming appointments with session bookings
  const patientBookings = currentPatient.id === PATIENT_PROFILES[0].id
    ? [...currentPatient.upcomingAppointments, ...customBookings]
    : currentPatient.upcomingAppointments;

  const totalOutOfPocket = currentPatient.treatmentPlans.reduce((acc, item) => acc + item.patientEst, 0);

  return (
    <div className="py-12 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* PATIENT PROFILE SWITCHER (Demo Interactive Feature) */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Select Patient Profile ({PATIENT_PROFILES.length} Fictional Demo Accounts)
              </span>
            </div>
            <span className="text-[11px] text-slate-500">
              Click any patient to explore their contact info, clinical records, and appointment history
            </span>
          </div>

          {/* Quick Avatar Switcher Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-3">
            {PATIENT_PROFILES.map((p) => {
              const isSelected = p.id === currentPatient.id;
              return (
                <button
                  key={p.id}
                  id={`select-patient-${p.id}`}
                  onClick={() => {
                    setSelectedPatientId(p.id);
                    setSelectedTooth(p.treatmentPlans[0]?.toothNumber || null);
                  }}
                  className={`flex flex-col items-center p-2 rounded-2xl border text-center transition-all ${
                    isSelected 
                      ? 'bg-blue-50 border-blue-600 shadow-sm ring-2 ring-blue-600/20' 
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="relative mb-1.5">
                    <img 
                      src={p.avatarUrl} 
                      alt={p.fullName} 
                      className={`w-11 h-11 rounded-full object-cover border-2 ${
                        isSelected ? 'border-blue-600' : 'border-white'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    {isSelected && (
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-bold leading-tight truncate w-full ${
                    isSelected ? 'text-blue-950 font-black' : 'text-slate-800'
                  }`}>
                    {p.fullName}
                  </span>
                  <span className="text-[10px] text-slate-500 truncate w-full mt-0.5">
                    {p.treatmentPlans[0]?.procedure ? p.treatmentPlans[0].procedure.split(' ')[0] : 'General'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PATIENT MASTER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left: Avatar & Personal Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src={currentPatient.avatarUrl}
                  alt={currentPatient.fullName}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active Patient Portal Session" />
              </div>
              
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {currentPatient.fullName}
                  </h2>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Member #{currentPatient.memberId}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <strong>{currentPatient.phone}</strong>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentPatient.email}</span>
                  </span>
                  <span>•</span>
                  <span>DOB: {currentPatient.dob}</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentPatient.address}</span>
                  </span>
                  <span>•</span>
                  <span>Lead Doctor: <strong>{currentPatient.primaryDoctor}</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Insurance & Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Dental Insurance</span>
                <span className="text-xs font-bold text-blue-900 block">{currentPatient.insuranceProvider}</span>
                <span className="text-[10px] text-slate-500 font-mono">Policy ID: {currentPatient.groupNumber}</span>
              </div>

              <button
                id="portal-new-appointment-btn"
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>

          {/* Medical Alerts & Care Preferences Strip */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200/80 font-medium">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Allergies: <strong>{currentPatient.allergies.join(', ') || 'No Known Drug Allergies'}</strong></span>
              </div>

              <div className="flex items-center gap-1.5 text-blue-800 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200/80 font-medium">
                <Heart className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Comfort Protocol: <strong>{currentPatient.sedationPreference}</strong></span>
              </div>
            </div>

            <div className="text-slate-600 text-xs">
              Emergency Contact: <strong className="text-slate-800">{currentPatient.emergencyContact || 'On file'}</strong>
            </div>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
          {[
            { id: 'appointments', label: 'Appointments & History', icon: Calendar, count: patientBookings.length + currentPatient.pastAppointments.length },
            { id: 'treatment', label: 'Treatment Plan & Tooth Chart', icon: Smile, count: currentPatient.treatmentPlans.length },
            { id: 'xrays', label: 'Digital X-Rays & 3D Scans', icon: ImageIcon, count: currentPatient.xrays.length },
            { id: 'billing', label: 'Billing & Statements', icon: CreditCard, count: currentPatient.invoices.length },
            { id: 'intake', label: 'Health History & Consents', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activePortalTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`portal-tab-${tab.id}`}
                onClick={() => setActivePortalTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-blue-500 text-slate-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: Appointments (Upcoming + Full History) */}
        {activePortalTab === 'appointments' && (
          <div className="space-y-8">
            
            {/* Upcoming Appointments Sub-Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Upcoming Scheduled Appointments ({patientBookings.length})</span>
                  </h3>
                  <p className="text-xs text-slate-500">Reserved chair time with Dr. Eldar Heras, DDS and clinical team in San Bernardino.</p>
                </div>
              </div>

              {patientBookings.length === 0 ? (
                <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-3">
                  <Calendar className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-700">No upcoming appointments scheduled.</p>
                  <p className="text-xs text-slate-500">Routine hygiene visit is due on {currentPatient.nextCleaningDue}.</p>
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Schedule Appointment</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {patientBookings.map((apt) => (
                    <div 
                      key={apt.id}
                      className="bg-white rounded-3xl p-6 border border-blue-200 shadow-md relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full pointer-events-none -z-0" />
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-md">
                              Confirmed Reservation
                            </span>
                            <h4 className="text-base font-bold text-slate-900 mt-2">
                              {apt.serviceId === 'porcelain-veneers' 
                                ? 'Porcelain Veneers - Try-In & Delivery' 
                                : apt.serviceId.replace('-', ' ').toUpperCase()}
                            </h4>
                          </div>

                          <span className="font-mono text-xs font-bold text-slate-400">
                            #{apt.id}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                          <div className="flex items-center gap-2 font-bold text-slate-800">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span>{apt.date} at {apt.timeSlot}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span>{CLINIC_INFO.address}</span>
                          </div>
                        </div>

                        {apt.notes && (
                          <div className="text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                            <strong>Clinical Care Note:</strong> {apt.notes}
                          </div>
                        )}

                        {apt.hasAnxiety && (
                          <div className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100 flex items-center gap-2">
                            <span>✨</span>
                            <span>Comfort Protocol: <strong>{apt.anxietyPreference || currentPatient.sedationPreference}</strong></span>
                          </div>
                        )}

                        <div className="flex items-center gap-3 pt-2">
                          <button 
                            onClick={() => alert(`Appointment ${apt.id} reschedule request forwarded to San Bernardino front desk.`)}
                            className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold"
                          >
                            Reschedule
                          </button>
                          <a 
                            href={`tel:${CLINIC_INFO.phoneRaw}`}
                            className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call Office</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FULL PAST APPOINTMENT HISTORY SUB-SECTION */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Complete Past Appointment History ({currentPatient.pastAppointments.length} Visits)</span>
                  </h4>
                  <p className="text-xs text-slate-500">Official chronological treatment records and clinical examination chartings.</p>
                </div>
                <button
                  onClick={() => alert(`Exporting complete dental history chart for ${currentPatient.fullName}...`)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>Export History (PDF)</span>
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {currentPatient.pastAppointments.map((past) => (
                  <div key={past.id} className="py-4 space-y-2 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{past.procedure}</span>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase">
                          {past.status}
                        </span>
                      </div>
                      <span className="text-slate-500 font-semibold">{past.date} {past.timeSlot && `• ${past.timeSlot}`}</span>
                    </div>

                    <p className="text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100/80 leading-relaxed">
                      <strong>Doctor Notes:</strong> {past.notes}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 pt-1">
                      <span>Attending Provider: <strong className="text-slate-800">{past.doctor}</strong></span>
                      {past.fee !== undefined && (
                        <span>Procedure Value: <strong className="text-slate-800">${past.fee.toLocaleString()}</strong></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Treatment Plan & Tooth Chart */}
        {activePortalTab === 'treatment' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Treatment Plan for {currentPatient.fullName}</h3>
              <p className="text-xs text-slate-500">
                Transparent view of all completed, scheduled, and recommended procedures with insurance co-pay estimates.
              </p>
            </div>

            {/* Interactive Tooth Arch Diagram Preview */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
                Maxillary & Mandibular Dental Arch Overview
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentPatient.treatmentPlans.map((tp) => {
                  const isSelected = selectedTooth === tp.toothNumber;
                  return (
                    <div
                      key={tp.id}
                      onClick={() => setSelectedTooth(tp.toothNumber)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900 font-mono">{tp.toothNumber}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          tp.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : tp.status === 'scheduled'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {tp.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-700 mt-2 line-clamp-1">{tp.procedure}</p>
                      <div className="text-[11px] text-slate-500 mt-1 flex justify-between">
                        <span>Fee: ${tp.fee}</span>
                        <span className="font-bold text-blue-700">Copay: ${tp.patientEst}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                    <th className="py-3 px-2">Tooth</th>
                    <th className="py-3 px-2">Procedure</th>
                    <th className="py-3 px-2">Status</th>
                    <th className="py-3 px-2 text-right">Fee</th>
                    <th className="py-3 px-2 text-right">Insurance Est.</th>
                    <th className="py-3 px-2 text-right">Patient Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentPatient.treatmentPlans.map((plan) => (
                    <tr key={plan.id} className="hover:bg-slate-50/80">
                      <td className="py-3 px-2 font-mono font-bold text-slate-900">{plan.toothNumber}</td>
                      <td className="py-3 px-2 font-medium text-slate-800">{plan.procedure}</td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          plan.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : plan.status === 'scheduled'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {plan.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right text-slate-600">${plan.fee.toLocaleString()}</td>
                      <td className="py-3 px-2 text-right text-emerald-600 font-semibold">-${plan.insuranceEst.toLocaleString()}</td>
                      <td className="py-3 px-2 text-right font-black text-slate-900">${plan.patientEst.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-blue-900 font-bold">Estimated Total Patient Responsibility:</span>
              <span className="text-base sm:text-lg font-black text-blue-900">${totalOutOfPocket.toLocaleString()}.00</span>
            </div>
          </div>
        )}

        {/* TAB 3: Digital X-Rays */}
        {activePortalTab === 'xrays' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Digital Radiographs for {currentPatient.fullName}</h3>
                <p className="text-xs text-slate-500">Low-radiation high-resolution diagnostic imaging on file with Dr. Eldar Heras, DDS.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPatient.xrays.map((xr) => (
                <div key={xr.id} className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-md">
                  <div 
                    className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 mb-4 group cursor-pointer"
                    onClick={() => setSelectedXray(xr)}
                  >
                    <img 
                      src={xr.imageUrl} 
                      alt={xr.type}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                    
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {xr.type}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-blue-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Enlarge Radiograph</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{xr.type}</span>
                      <span className="text-slate-400">{xr.date}</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <strong>Diagnostic Findings:</strong> {xr.notes}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>Doctor: {xr.doctor}</span>
                      <span>Teeth: {xr.toothNumbers.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for viewing X-Ray */}
            {selectedXray && (
              <div 
                className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setSelectedXray(null)}
              >
                <div 
                  className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl space-y-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900">{selectedXray.type} - {selectedXray.date}</h4>
                    <button 
                      onClick={() => setSelectedXray(null)}
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden bg-black max-h-[60vh]">
                    <img 
                      src={selectedXray.imageUrl} 
                      alt="Zoomed Xray" 
                      className="w-full h-auto object-contain mx-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-xs text-slate-600">{selectedXray.notes}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Billing & Statements */}
        {activePortalTab === 'billing' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Billing History for {currentPatient.fullName}</h3>
              <p className="text-xs text-slate-500">Download itemized claim receipts for flexible spending (FSA/HSA) or tax records.</p>
            </div>

            <div className="divide-y divide-slate-100">
              {currentPatient.invoices.map((inv) => (
                <div key={inv.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900">{inv.id}</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase">
                        {inv.status}
                      </span>
                    </div>
                    <p className="font-medium text-slate-800">{inv.description}</p>
                    <span className="text-slate-400 text-[11px]">{inv.date}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900 block">${inv.totalAmount.toLocaleString()}</span>
                      <span className="text-[10px] text-slate-400">Balance: ${inv.balanceDue.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={() => alert(`Receipt ${inv.id}.pdf generated and downloaded for ${currentPatient.fullName}.`)}
                      className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5"
                      title="Download PDF Receipt"
                    >
                      <Download className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-xs hidden sm:inline">Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Health History & Consents */}
        {activePortalTab === 'intake' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Health History & Digital Consents</h3>
              <p className="text-xs text-slate-500">Encrypted HIPAA-compliant intake forms on file for {currentPatient.fullName}.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block">General Medical Clearance</span>
                <p className="text-slate-600">Last updated: {currentPatient.lastVisit}</p>
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Digitally Signed & Verified</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block">HIPAA Privacy Notice & Treatment Authorization</span>
                <p className="text-slate-600">Primary Provider: Dr. Eldar Heras, DDS</p>
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Signed & Active in San Bernardino</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
