export type ServiceCategory = 
  | 'all'
  | 'preventive'
  | 'cosmetic'
  | 'restorative'
  | 'orthodontics'
  | 'emergency';

export interface DentalService {
  id: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  duration: string;
  priceRange: string;
  popular?: boolean;
  insuranceCovered: 'Full' | 'Partial' | 'Elective' | 'Typically 100%';
  icon: string;
  features: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string;
  education: string;
  experienceYears: number;
  specialties: string[];
  photoUrl: string;
  bio: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
}

export type SmileCategory = 'all' | 'veneers' | 'whitening' | 'invisalign' | 'implants' | 'restorative';

export interface SmileCase {
  id: string;
  category: SmileCategory;
  title: string;
  patientName: string;
  age: number;
  beforeImage: string;
  afterImage: string;
  procedure: string;
  treatmentTime: string;
  visits: number;
  doctorName: string;
  story: string;
  quote: string;
  tags: string[];
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  isNewPatient: boolean;
  serviceId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  insuranceProvider: string;
  hasAnxiety: boolean;
  anxietyPreference?: string;
  notes?: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface DentalRecord {
  id: string;
  date: string;
  type: 'Bitewing X-Ray' | 'Panoramic CBCT' | 'Periapical' | '3D iTero Scan';
  imageUrl: string;
  notes: string;
  doctor: string;
  toothNumbers: string[];
}

export interface TreatmentItem {
  id: string;
  toothNumber: string;
  procedure: string;
  status: 'completed' | 'scheduled' | 'recommended';
  fee: number;
  insuranceEst: number;
  patientEst: number;
  scheduledDate?: string;
}

export interface BillingInvoice {
  id: string;
  date: string;
  description: string;
  totalAmount: number;
  insurancePaid: number;
  patientPaid: number;
  balanceDue: number;
  status: 'paid' | 'pending_insurance' | 'due';
}

export interface PastAppointment {
  id: string;
  date: string;
  timeSlot?: string;
  procedure: string;
  doctor: string;
  notes: string;
  status: 'completed' | 'cancelled';
  fee?: number;
}

export interface PatientProfile {
  id: string;
  fullName: string;
  dob: string;
  phone: string;
  email: string;
  address?: string;
  avatarUrl: string;
  memberId: string;
  insuranceProvider: string;
  groupNumber: string;
  primaryDoctor: string;
  lastVisit: string;
  nextCleaningDue: string;
  allergies: string[];
  sedationPreference: string;
  emergencyContact?: string;
  upcomingAppointments: AppointmentBooking[];
  pastAppointments: PastAppointment[];
  treatmentPlans: TreatmentItem[];
  xrays: DentalRecord[];
  invoices: BillingInvoice[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  source?: 'gemini' | 'local-faq' | 'fallback';
  suggestions?: string[];
  actionLink?: {
    label: string;
    action: 'book' | 'gallery' | 'emergency' | 'portal';
  };
}

export interface FAQItem {
  id: string;
  category: 'general' | 'cosmetic' | 'insurance' | 'emergency' | 'sedation' | 'orthodontics' | 'restorative' | 'pediatric';
  question: string;
  answer: string;
}

export type ReviewPlatform = 'all' | 'yelp' | 'google' | 'healthgrades' | 'zocdoc';

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  avatarUrl?: string;
  platform: 'yelp' | 'google' | 'healthgrades' | 'zocdoc';
  rating: number; // typically 5.0
  date: string;
  treatment: string;
  title: string;
  content: string;
  helpfulCount: number;
  verified: boolean;
  platformBadgeText: string;
  doctorResponse?: {
    date: string;
    text: string;
  };
}
