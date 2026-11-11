import {
  DentalService,
  Doctor,
  SmileCase,
  PatientProfile,
  FAQItem,
  CustomerReview
} from '../types';

export const CLINIC_INFO = {
  name: 'Heras Dental',
  leadDoctor: 'Eldar Heras, DDS',
  tagline: 'Gentle, Artful Dentistry & Advanced Implant Aesthetics',
  address: '1848 S Waterman Ave, Suite 200, San Bernardino, CA 92408',
  city: 'San Bernardino, CA',
  phone: '(909) 882-4988',
  phoneRaw: '9098824988',
  emergencyPhone: '(909) 882-4988',
  email: 'care@herasdental.demo',
  hours: [
    { days: 'Monday – Thursday', time: '7:30 AM – 6:00 PM' },
    { days: 'Friday', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM' },
    { days: 'Sunday', time: 'Closed (Emergency On-Call Only)' }
  ],
  emergencyGuarantee: 'Guaranteed Same-Day Emergency Relief in San Bernardino'
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-heras',
    name: 'Dr. Eldar Heras, DDS',
    title: 'Founder & Principal Cosmetic & Implant Dentist',
    credentials: 'DDS, Loma Linda University School of Dentistry; FAGD',
    education: 'Fellow of the Academy of General Dentistry (FAGD); American Academy of Cosmetic Dentistry (AACD)',
    experienceYears: 18,
    specialties: ['Porcelain Veneers', 'Digital Smile Design', 'Complex Restorative Care', 'Anxiety-Free Sedation', 'Computer-Guided Implants'],
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    bio: 'Dr. Eldar Heras, DDS is the founder and principal dentist at Heras Dental in San Bernardino, CA. Renowned for his gentle touch, artistic precision, and calming bedside manner, Dr. Heras has performed thousands of smile transformations, combining biocompatible materials with painless computerized numbing and anxiety-free dentistry.',
    rating: 4.99,
    reviewCount: 540,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  },
  {
    id: 'dr-vance',
    name: 'Dr. Julian Vance, DMD, MS',
    title: 'Implantologist & Clear Aligner Specialist',
    credentials: 'DMD, UCSF School of Dentistry; MS in Oral Implantology',
    education: 'Fellow, International Congress of Oral Implantologists (ICOI); Invisalign Diamond Provider',
    experienceYears: 12,
    specialties: ['Computer-Guided Implants', 'Invisalign Clear Aligners', 'Bone Regeneration', 'Full Arch Restorations'],
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    bio: 'Specializing in digital 3D Cone Beam implant planning and accelerated clear aligners, Dr. Vance ensures missing teeth are restored with lifelong structural stability and natural aesthetic vitality.',
    rating: 4.96,
    reviewCount: 268,
    availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  {
    id: 'dr-rostova',
    name: 'Dr. Elena Rostova, DDS',
    title: 'Restorative & Pediatric General Dentist',
    credentials: 'DDS, NYU College of Dentistry',
    education: 'Specialized Residency in Biomimetic Restorations & Pediatric Oral Health',
    experienceYears: 9,
    specialties: ['Preventive Care', 'Gentle Root Canals', 'Pediatric Dental Care', 'Nitrous Laughing Gas'],
    photoUrl: 'https://images.unsplash.com/photo-1594824813589-f0275a59c4fa?auto=format&fit=crop&q=80&w=600',
    bio: 'Celebrated for putting the most dental-phobic adults and children completely at ease, Dr. Rostova uses soothing communication and gentle laser dentistry for relaxed visits.',
    rating: 4.98,
    reviewCount: 215,
    availableDays: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat']
  }
];

export const SERVICES: DentalService[] = [
  {
    id: 'routine-exam',
    name: 'Comprehensive Exam & Hygiene Therapy',
    category: 'preventive',
    tagline: 'Ultrasonic clean, digital 3D imaging & oral cancer screening',
    description: 'Our signature preventive cleaning includes gentle ultrasonic biofilm removal, low-dose digital bitewing imaging, periodontal pocket charting, and diamond micro-polish supervised by Dr. Eldar Heras, DDS.',
    duration: '50 mins',
    priceRange: '$140 – $195',
    popular: true,
    insuranceCovered: 'Typically 100%',
    icon: 'Sparkles',
    features: ['Ultrasonic tartar removal', 'Low-radiation HD digital X-rays', 'Oral cancer screening with VELscope', 'Remineralizing fluoride glaze']
  },
  {
    id: 'zoom-whitening',
    name: 'Phillips Zoom! In-Office Teeth Whitening',
    category: 'cosmetic',
    tagline: 'Up to 8 shades whiter in a single 60-minute relaxing session',
    description: 'Medical-grade LED-activated hydrogen peroxide gel safely breaks down deep coffee, tea, and aging stains without enamel dehydration or lingering sensitivity.',
    duration: '60 mins',
    priceRange: '$399 (Special)',
    popular: true,
    insuranceCovered: 'Elective',
    icon: 'Zap',
    features: ['Instant results in one appointment', 'Desensitizing ACP mineral varnish', 'Custom take-home touch-up trays included', 'Shade-match verification']
  },
  {
    id: 'porcelain-veneers',
    name: 'Handcrafted Porcelain Veneers',
    category: 'cosmetic',
    tagline: 'Custom master ceramist shells for flawless alignment & symmetry',
    description: 'Ultra-thin, high-strength ceramic laminates designed by Dr. Eldar Heras, DDS to permanently correct chips, stubborn discoloration, gaps, and uneven teeth.',
    duration: '2 appointments',
    priceRange: '$1,200 – $1,800 / tooth',
    popular: true,
    insuranceCovered: 'Elective',
    icon: 'Smile',
    features: ['3D digital mock-up preview first', 'Minimally invasive preparation', 'Natural light-translucency matching', '15+ year durable aesthetic']
  },
  {
    id: 'invisalign',
    name: 'Invisalign® Clear Aligners',
    category: 'orthodontics',
    tagline: 'Virtually invisible orthodontic straightening without metal wires',
    description: 'Custom removable SmartTrack aligners gently shift teeth into optimal bite and symmetry. Take them out when eating, drinking, or brushing.',
    duration: '4 – 12 months',
    priceRange: '$3,500 – $5,400',
    popular: true,
    insuranceCovered: 'Partial',
    icon: 'Layers',
    features: ['iTero 3D digital scan (no goopy impressions)', 'Digital outcome simulator', 'Remote monitoring app check-ins', 'Includes final Vivera retainers']
  },
  {
    id: 'dental-implants',
    name: 'Guided Dental Implants',
    category: 'restorative',
    tagline: 'Permanent, titanium tooth replacement that never decays',
    description: 'Bio-compatible titanium root surgically fused with jawbone, capped with a custom zirconia crown that looks and chews like a biological tooth.',
    duration: '2 - 3 visits',
    priceRange: '$2,400 – $3,800',
    popular: false,
    insuranceCovered: 'Partial',
    icon: 'ShieldCheck',
    features: ['3D Cone Beam CT guided placement', 'Preserves natural jawbone density', 'Custom zirconia porcelain crown', 'Lifetime implant warranty']
  },
  {
    id: 'emergency-care',
    name: 'Emergency Dental Pain Relief',
    category: 'emergency',
    tagline: 'Same-day appointments in San Bernardino for acute pain & trauma',
    description: 'Immediate diagnostic relief for severe toothaches, cracked or knocked-out teeth, broken crowns, or dental infections. Call (909) 882-4988.',
    duration: 'Same-Day Priority',
    priceRange: '$99 Exam + Treatment',
    popular: true,
    insuranceCovered: 'Full',
    icon: 'AlertTriangle',
    features: ['Priority same-day chair time', 'Instant numbing & pain triage', 'Digital emergency radiograph', 'Prescription medication if needed']
  },
  {
    id: 'biomimetic-fillings',
    name: 'Mercury-Free Composite Restorations',
    category: 'restorative',
    tagline: 'Tooth-colored composite bonds matching your exact shade',
    description: 'Tooth-conserving composite resin that chemically bonds to tooth structure, reinforcing weak walls and eliminating silver amalgam visibility.',
    duration: '40 mins',
    priceRange: '$180 – $310',
    insuranceCovered: 'Partial',
    icon: 'CheckCircle2',
    features: ['100% BPA and mercury-free', 'Color matched seamlessly', 'Immediate chewing comfort', 'Conserves 40% more natural tooth structure']
  },
  {
    id: 'gentle-sedation',
    name: 'Anxiety-Free Sedation Dentistry',
    category: 'preventive',
    tagline: 'Nitrous oxide laughing gas & conscious sedation for peace of mind',
    description: 'Designed specifically for dental phobia, sensitive gag reflexes, or multi-procedure visits. Relax comfortably in our San Bernardino care suite.',
    duration: 'Add-on',
    priceRange: '$75 – $250',
    insuranceCovered: 'Elective',
    icon: 'Heart',
    features: ['Nitrous oxide laughing gas', 'Oral conscious sedation pills', 'Continuous vital sign monitoring', 'Gentle Wand® computerized numbing']
  }
];

// 18 Diverse Before & After Smile Cases
export const SMILE_GALLERY: SmileCase[] = [
  {
    id: 'case-1',
    category: 'veneers',
    title: 'Full Upper Smile Rejuvenation with 8 Porcelain Veneers',
    patientName: 'Jessica M.',
    age: 32,
    beforeImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    procedure: '8 Custom Feldspathic Porcelain Veneers + Gum Contouring',
    treatmentTime: '3 Weeks (2 Appointments)',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Jessica had severe tetracycline discoloration from childhood antibiotics and uneven worn edges. After a 3D digital smile simulation, Dr. Eldar Heras, DDS placed 8 ultra-thin veneers with natural micro-texture and translucency.',
    quote: '"I used to cover my mouth when laughing in meetings. Now I smile without even thinking about it. Dr. Heras changed my life!"',
    tags: ['Veneers', 'Discoloration', 'Cosmetic Makeover']
  },
  {
    id: 'case-2',
    category: 'invisalign',
    title: 'Severe Crowding & Deep Overbite Correction',
    patientName: 'Marcus T.',
    age: 28,
    beforeImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    procedure: 'Invisalign Comprehensive (24 Trays) + Post-Whitening',
    treatmentTime: '7 Months',
    visits: 4,
    doctorName: 'Dr. Julian Vance, DMD',
    story: 'Marcus avoided traditional metal brackets because of his client-facing tech consulting job. With Invisalign clear aligners and bi-weekly remote app tracking, his crowding resolved seamlessly in 7 months.',
    quote: '"None of my colleagues even knew I was wearing aligners. Chewing is so much more comfortable now too."',
    tags: ['Invisalign', 'Crowding Correction', 'No Metal']
  },
  {
    id: 'case-3',
    category: 'whitening',
    title: 'Stained Enamel to Brilliant Bright (Zoom! 8 Shades)',
    patientName: 'David & Rachel K.',
    age: 39,
    beforeImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
    procedure: 'Phillips Zoom! In-Office LED Whitening + Enamel Sealant',
    treatmentTime: '60 Minutes',
    visits: 1,
    doctorName: 'Dr. Elena Rostova, DDS',
    story: 'Years of espresso and red wine left heavy surface and deep dentin stains. In just one 60-minute session with desensitizing varnish, David achieved an ultra-radiant shade B1.',
    quote: '"I was worried about tooth sensitivity, but the prep and post-varnish made it completely painless. Walked out with an instant glow for our wedding."',
    tags: ['Whitening', 'Fast Results', 'Same Day']
  },
  {
    id: 'case-4',
    category: 'implants',
    title: 'Single Front Tooth Trauma Replaced with Guided Implant',
    patientName: 'Chloe D.',
    age: 26,
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    procedure: 'Computer-Guided Titanium Implant + Custom Zirconia Crown',
    treatmentTime: '3 Months (Integration Period)',
    visits: 3,
    doctorName: 'Dr. Eldar Heras, DDS & Dr. Julian Vance, DMD',
    story: 'Chloe broke tooth #9 in a cycling incident. Dr. Vance & Dr. Heras utilized 3D Cone Beam imaging to place a surgical implant with zero incisions to surrounding gums, matching the exact color and gradient of adjacent teeth.',
    quote: '"Even my close friends cannot tell which tooth is the implant. It feels completely natural when eating apples or biting into a sandwich."',
    tags: ['Dental Implant', 'Tooth Trauma', 'Custom Crown']
  },
  {
    id: 'case-5',
    category: 'veneers',
    title: 'Diastema (Center Gap) Closure & Arch Harmony',
    patientName: 'Nathan B.',
    age: 35,
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    procedure: '4 Minimal-Prep Front Veneers',
    treatmentTime: '2 Weeks',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Nathan had a 3mm midline gap and small peg laterals. Rather than 2 years in braces, 4 minimal-prep veneers crafted by Dr. Heras closed the space with millimeter-precise proportions.',
    quote: '"The 3D mock-up let me preview my smile before touching a tooth. The final result exceeded what I imagined."',
    tags: ['Gap Closure', 'Minimal Prep', 'Symmetry']
  },
  {
    id: 'case-6',
    category: 'restorative',
    title: 'Chipped Incisors Restored with Biomimetic Composite Bonding',
    patientName: 'Maya Lin',
    age: 24,
    beforeImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    procedure: 'Direct Multi-Layer Composite Resin Bonding (#8 & #9)',
    treatmentTime: '45 Minutes (Single Visit)',
    visits: 1,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Maya chipped both central incisors playing tennis. Dr. Heras hand-sculpted polychromatic nanofill resin in 45 minutes without drilling down healthy enamel.',
    quote: '"I walked in crying with fractured front teeth and walked out 45 minutes later with a perfect smile. Truly artist work."',
    tags: ['Composite Bonding', 'Chipped Tooth', 'Immediate Relief']
  },
  {
    id: 'case-7',
    category: 'restorative',
    title: 'Full Mouth Rehabilitation with Zirconia Crowns & Bite Elevation',
    patientName: 'Carlos Gomez',
    age: 48,
    beforeImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    procedure: 'Full Arch Monolithic Zirconia Crowns + Occlusal Equilibration',
    treatmentTime: '6 Weeks',
    visits: 3,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Severe nocturnal clenching (bruxism) had worn Carlos’s teeth down by nearly 40%, collapsing his lower face height. Dr. Heras rebuilt his vertical dimension with durable layered zirconia.',
    quote: '"My chronic TMJ headaches are gone, chewing steak is effortless again, and I look 10 years younger."',
    tags: ['Full Mouth Reconstruction', 'Bruxism', 'Zirconia Crowns']
  },
  {
    id: 'case-8',
    category: 'veneers',
    title: 'Severe Enamel Fluorosis Masked with 6 Porcelain Veneers',
    patientName: 'Brittany S.',
    age: 30,
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    procedure: '6 Custom E-Max Pressed Ceramic Veneers',
    treatmentTime: '3 Weeks',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Brittany had chalky white spots and brown pitted fluorosis bands across her anterior teeth. Dr. Heras designed custom layered ceramic veneers with customized internal opacity.',
    quote: '"For 20 years I hid my teeth in every family photo. Dr. Heras gave me the radiant, natural confidence I always dreamed of."',
    tags: ['Fluorosis', 'E-Max Veneers', 'Natural White']
  },
  {
    id: 'case-9',
    category: 'restorative',
    title: 'Silver Amalgam Overhaul to Mercury-Free Composite Onlays',
    patientName: 'Anthony R.',
    age: 44,
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800',
    procedure: 'Removal of 6 Failing Amalgams + Biomimetic Ceramic Onlays',
    treatmentTime: '2 Visits',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Anthony had four 25-year-old dark mercury fillings that were developing marginal recurrent micro-leakage. Dr. Heras replaced them with biocompatible tooth-colored ceramic onlays.',
    quote: '"When I open wide or laugh, my mouth looks clean and healthy. No more dark metal reflections."',
    tags: ['Amalgam Replacement', 'Ceramic Onlays', 'Mercury-Free']
  },
  {
    id: 'case-10',
    category: 'invisalign',
    title: 'Anterior Open Bite Closure & Dental Arch Alignment',
    patientName: 'Samantha W.',
    age: 22,
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    procedure: 'Invisalign with Molar Intrusion Protocol (28 Aligners)',
    treatmentTime: '8 Months',
    visits: 5,
    doctorName: 'Dr. Julian Vance, DMD',
    story: 'Samantha could not bite into pizza or sandwiches with her front teeth because of a 4mm anterior open bite. Dr. Vance corrected the vertical discrepancy using SmartForce attachments.',
    quote: '"Biting into a burger and cleanly cutting through the lettuce was a milestone! Highly recommend Invisalign at Heras Dental."',
    tags: ['Open Bite', 'Invisalign', 'Bite Correction']
  },
  {
    id: 'case-11',
    category: 'implants',
    title: 'Dual Lower Molar Implants Restoring Full Chewing Power',
    patientName: 'Robert H.',
    age: 62,
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    procedure: '2 Guided Straumann Titanium Implants + Screw-Retained Crowns',
    treatmentTime: '3.5 Months',
    visits: 3,
    doctorName: 'Dr. Eldar Heras, DDS & Dr. Julian Vance, DMD',
    story: 'Robert had lost teeth #19 and #30 due to failed root canals years earlier. Guided 3D surgery restored rigid chewing support, preventing adjacent teeth from tilting inward.',
    quote: '"Chewing nuts, apples, and meat on both sides of my mouth feels 100% like biological teeth. Seamless care by Dr. Heras."',
    tags: ['Molar Implants', 'Bite Restoration', 'Straumann']
  },
  {
    id: 'case-12',
    category: 'veneers',
    title: 'Laser Gum Re-Contouring & 4 Porcelain Veneers for Gummy Smile',
    patientName: 'Olivia P.',
    age: 27,
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    procedure: 'Diode Laser Gingivoplasty + 4 Minimal-Prep Ceramic Veneers',
    treatmentTime: '2.5 Weeks',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Olivia felt her smile showed too much pink gum tissue and made her front teeth appear disproportionately short. Dr. Heras performed painless laser contouring and placed 4 porcelain veneers.',
    quote: '"The laser took less than 20 minutes with zero bleeding. My smile looks balanced, elongated, and elegant."',
    tags: ['Gummy Smile', 'Laser Contouring', 'Veneers']
  },
  {
    id: 'case-13',
    category: 'whitening',
    title: 'Severe Tobacco & Dark Roast Coffee Stain Transformation',
    patientName: 'Daniel C.',
    age: 36,
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    procedure: 'Zoom! WhiteSpeed Dual Lamp Session + Remineralizing Seal',
    treatmentTime: '75 Minutes',
    visits: 1,
    doctorName: 'Dr. Elena Rostova, DDS',
    story: '15 years of espresso and pipe smoking produced stubborn chromogenic stains. An intensive Zoom! session lightened his enamel by 7 full Vita shades.',
    quote: '"I was skeptical about in-office whitening because drugstore strips never worked. The results here blew me away."',
    tags: ['Zoom Whitening', 'Smoker Stains', 'Instant Glow']
  },
  {
    id: 'case-14',
    category: 'restorative',
    title: 'Fractured Lateral Incisor Reconstructed with Monolithic Crown',
    patientName: 'Evelyn T.',
    age: 55,
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    procedure: 'Fiber-Reinforced Core Build-up + Custom Shaded Zirconia Crown',
    treatmentTime: '10 Days',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'A hidden crack beneath an old filling caused tooth #10 to fracture at the gumline. Dr. Heras saved the natural root, placing a fiber post and custom zirconia crown matching adjacent enamel.',
    quote: '"Dr. Eldar Heras was so calm and gentle when I rushed in in tears. The new tooth looks completely identical to my real ones."',
    tags: ['Crown Restoration', 'Tooth Fracture', 'Shade Match']
  },
  {
    id: 'case-15',
    category: 'invisalign',
    title: 'Posterior Crossbite Correction & Upper Arch Expansion',
    patientName: 'Javier M.',
    age: 29,
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    procedure: 'Invisalign Full with Arch Widening (22 Aligners)',
    treatmentTime: '6 Months',
    visits: 3,
    doctorName: 'Dr. Julian Vance, DMD',
    story: 'Javier had an asymmetric bite causing one-sided jaw soreness and teeth grinding. Clear aligner therapy symmetrically expanded his upper dental arch in 6 months.',
    quote: '"My jaw tension vanished completely, and my smile is noticeably wider and fuller in photos."',
    tags: ['Crossbite', 'Arch Expansion', 'Invisalign']
  },
  {
    id: 'case-16',
    category: 'veneers',
    title: 'Congenital Peg Laterals Rebuilt with Minimal-Prep Veneers',
    patientName: 'Hannah K.',
    age: 33,
    beforeImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    procedure: '2 Ultra-Thin Feldspathic Veneers (Teeth #7 & #10)',
    treatmentTime: '2 Weeks',
    visits: 2,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Hannah was born with undersized peg laterals that left gaps around her canine teeth. Dr. Heras crafted 2 paper-thin porcelain veneers without shaving down healthy natural enamel.',
    quote: '"Zero shots, zero drilling pain, and now my front teeth have normal, symmetrical proportions. Brilliant work!"',
    tags: ['Peg Laterals', 'No-Prep Veneers', 'Proportions']
  },
  {
    id: 'case-17',
    category: 'implants',
    title: 'Full Arch All-on-4 Fixed Zirconia Bridge Rehabilitation',
    patientName: 'Arthur B.',
    age: 67,
    beforeImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    procedure: 'Upper Arch All-on-4 Guided Implants + Prettau Zirconia Fixed Bridge',
    treatmentTime: '4 Months (Immediate Provisional)',
    visits: 4,
    doctorName: 'Dr. Eldar Heras, DDS & Dr. Julian Vance, DMD',
    story: 'Severe advanced periodontitis made remaining upper teeth loose and painful. Dr. Heras & Dr. Vance placed 4 strategic implants, providing an immediate non-removable bridge that same afternoon.',
    quote: '"I threw away my loose denture forever. I can bite apples, corn on the cob, and smile with 100% confidence. Truly modern medicine."',
    tags: ['All-on-4', 'Full Arch Implant', 'Fixed Bridge']
  },
  {
    id: 'case-18',
    category: 'veneers',
    title: 'Deep Gray Tetracycline Banding Corrected with 10 Veneers',
    patientName: 'Zoe N.',
    age: 25,
    beforeImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    procedure: '10 Handcrafted Porcelain Laminate Veneers + Gingival Sculpting',
    treatmentTime: '3.5 Weeks',
    visits: 3,
    doctorName: 'Dr. Eldar Heras, DDS',
    story: 'Severe dark horizontal banding from infant tetracycline exposure resisted bleach and whitening trays. Dr. Heras utilized multi-layered opaque core ceramics that completely neutralized dark gray undertones.',
    quote: '"Every dentist told me tetracycline stains couldn\'t be masked without thick, bulky crowns. Dr. Heras made them look so slender and naturally bright!"',
    tags: ['Tetracycline Stains', 'Master Ceramist', 'Hollywood Bright']
  }
];

// 8 Fictional Patient Profiles with Full Contact Info & Appointment Histories
export const PATIENT_PROFILES: PatientProfile[] = [
  {
    id: 'patient-emma-902',
    fullName: 'Emma Watson',
    dob: '04/15/1994',
    phone: '(909) 555-0142',
    email: 'emma.watson@example.com',
    address: '2418 Kendall Dr, San Bernardino, CA 92407',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-84920-A',
    insuranceProvider: 'Delta Dental Premier PPO',
    groupNumber: 'GRP-99823',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'February 12, 2026',
    nextCleaningDue: 'August 12, 2026',
    allergies: ['Penicillin (Amoxicillin)'],
    sedationPreference: 'Nitrous Oxide & Noise-Canceling Headphones',
    emergencyContact: 'Mark Watson (Brother) - (909) 555-0199',
    upcomingAppointments: [
      {
        id: 'apt-101',
        patientName: 'Emma Watson',
        email: 'emma.watson@example.com',
        phone: '(909) 555-0142',
        isNewPatient: false,
        serviceId: 'porcelain-veneers',
        doctorId: 'dr-heras',
        date: 'Thursday, Oct 15, 2026',
        timeSlot: '10:30 AM',
        insuranceProvider: 'Delta Dental Premier PPO',
        hasAnxiety: true,
        anxietyPreference: 'Nitrous oxide and calming lavender towel',
        notes: 'Final try-in and cementation for upper aesthetic veneers (Teeth #7-#10) with Dr. Eldar Heras, DDS.',
        status: 'confirmed',
        createdAt: '2026-09-18'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-1',
        date: 'Sep 10, 2026',
        timeSlot: '9:00 AM',
        procedure: 'Veneer Digital Preparation & 3D Temporary Placement',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Light preparation of enamel on #7-#10 under computerized Wand local numbing. Custom provisional veneers fabricated.',
        status: 'completed',
        fee: 1200
      },
      {
        id: 'past-apt-2',
        date: 'Mar 04, 2026',
        timeSlot: '2:15 PM',
        procedure: 'Diagnostic 3D Wax-Up & Esthetic Smile Simulation',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Review of facial proportions, tooth shape preference, and shade selection. Approved by patient.',
        status: 'completed',
        fee: 450
      },
      {
        id: 'past-apt-3',
        date: 'Feb 12, 2026',
        timeSlot: '10:00 AM',
        procedure: 'Comprehensive Examination, Full Mouth Series & Ultrasonic Prophylaxis',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Routine periodontal charting; gingival health excellent with zero deep pockets. Discussed cosmetic veneer options.',
        status: 'completed',
        fee: 380
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-1',
        toothNumber: '#7 - #10',
        procedure: '4 Custom Porcelain Veneers (Final placement scheduled)',
        status: 'scheduled',
        fee: 5600,
        insuranceEst: 800,
        patientEst: 4800,
        scheduledDate: 'Oct 15, 2026'
      },
      {
        id: 'tp-2',
        toothNumber: '#14',
        procedure: 'Ceramic Inlay / Onlay restoration (completed)',
        status: 'completed',
        fee: 980,
        insuranceEst: 784,
        patientEst: 196
      },
      {
        id: 'tp-3',
        toothNumber: 'Full Arch',
        procedure: 'Routine Preventive Cleaning & Fluoride',
        status: 'completed',
        fee: 180,
        insuranceEst: 180,
        patientEst: 0
      },
      {
        id: 'tp-4',
        toothNumber: '#19',
        procedure: 'Preventive Occlusal Sealant & Guard inspection',
        status: 'recommended',
        fee: 250,
        insuranceEst: 150,
        patientEst: 100
      }
    ],
    xrays: [
      {
        id: 'xr-1',
        date: 'Feb 12, 2026',
        type: 'Bitewing X-Ray',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        notes: 'No interproximal decay detected on premolars or molars. Bone levels stable at 1.5mm CEJ.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['#2', '#3', '#4', '#13', '#14', '#15']
      },
      {
        id: 'xr-2',
        date: 'Feb 12, 2026',
        type: 'Panoramic CBCT',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
        notes: 'Full 3D anatomical survey for upper arch cosmetic case. TMJ condyles symmetrical.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['All Teeth (Full Arch)']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-089',
        date: 'Feb 12, 2026',
        description: 'Comprehensive Exam, Full Mouth Series X-Rays, Ultrasonic Prophylaxis',
        totalAmount: 380,
        insurancePaid: 380,
        patientPaid: 0,
        balanceDue: 0,
        status: 'paid'
      },
      {
        id: 'INV-2026-114',
        date: 'Mar 04, 2026',
        description: 'Diagnostic Wax-Up & 3D Digital Smile Mockup',
        totalAmount: 450,
        insurancePaid: 0,
        patientPaid: 450,
        balanceDue: 0,
        status: 'paid'
      },
      {
        id: 'INV-2026-201',
        date: 'Sep 10, 2026',
        description: 'Porcelain Veneer Lab Fabrication Deposit (Teeth #7-#10)',
        totalAmount: 2400,
        insurancePaid: 0,
        patientPaid: 2400,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-marcus-382',
    fullName: 'Marcus Johnson',
    dob: '11/08/1982',
    phone: '(909) 555-0819',
    email: 'marcus.j@example.com',
    address: '7190 Highland Ave, Highland, CA 92346',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-77192-B',
    insuranceProvider: 'Cigna Dental Network PPO',
    groupNumber: 'CG-88120',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'January 20, 2026',
    nextCleaningDue: 'July 20, 2026',
    allergies: ['Latex sensitivity'],
    sedationPreference: 'Gentle computerized numbing, no nitrous required',
    emergencyContact: 'Tanya Johnson (Spouse) - (909) 555-0888',
    upcomingAppointments: [
      {
        id: 'apt-102',
        patientName: 'Marcus Johnson',
        email: 'marcus.j@example.com',
        phone: '(909) 555-0819',
        isNewPatient: false,
        serviceId: 'dental-implants',
        doctorId: 'dr-vance',
        date: 'Tuesday, Oct 20, 2026',
        timeSlot: '2:00 PM',
        insuranceProvider: 'Cigna Dental Network PPO',
        hasAnxiety: false,
        notes: 'Implant crown delivery and torque check on tooth #19 with Dr. Vance and Dr. Heras.',
        status: 'confirmed',
        createdAt: '2026-09-20'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-4',
        date: 'Jul 15, 2026',
        timeSlot: '11:00 AM',
        procedure: 'Computer-Guided Titanium Implant Placement (#19)',
        doctor: 'Dr. Julian Vance, DMD & Dr. Eldar Heras, DDS',
        notes: 'Surgical guide used. Primary torque stability achieved at 35 Ncm with zero flap incisions.',
        status: 'completed',
        fee: 1850
      },
      {
        id: 'past-apt-5',
        date: 'Jan 20, 2026',
        timeSlot: '3:30 PM',
        procedure: 'Emergency Tooth Extraction & Socket Bone Preservation',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Tooth #19 fractured below bone margin. Gentle atraumatic removal and mineral graft placed.',
        status: 'completed',
        fee: 650
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-m1',
        toothNumber: '#19',
        procedure: 'Custom Zirconia Screw-Retained Implant Crown',
        status: 'scheduled',
        fee: 1650,
        insuranceEst: 825,
        patientEst: 825,
        scheduledDate: 'Oct 20, 2026'
      },
      {
        id: 'tp-m2',
        toothNumber: '#3',
        procedure: 'Tooth-Colored Biomimetic Composite Filling',
        status: 'completed',
        fee: 280,
        insuranceEst: 224,
        patientEst: 56
      }
    ],
    xrays: [
      {
        id: 'xr-m1',
        date: 'Jul 15, 2026',
        type: 'Periapical',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        notes: 'Post-placement verification of Straumann implant fixture #19. 2mm clearance from inferior alveolar nerve.',
        doctor: 'Dr. Julian Vance, DMD',
        toothNumbers: ['#19']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-140',
        date: 'Jul 15, 2026',
        description: 'Guided Surgical Implant Placement & Radiographic Guide',
        totalAmount: 1850,
        insurancePaid: 925,
        patientPaid: 925,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-sophia-512',
    fullName: 'Sophia Rodriguez',
    dob: '09/22/1998',
    phone: '(909) 555-0371',
    email: 'sophia.r@example.com',
    address: '412 Citrus Ave, Redlands, CA 92373',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-65021-C',
    insuranceProvider: 'MetLife PDP Plus',
    groupNumber: 'MET-44190',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'August 14, 2026',
    nextCleaningDue: 'February 14, 2027',
    allergies: ['None declared'],
    sedationPreference: 'None needed, prefers upbeat music',
    emergencyContact: 'Carlos Rodriguez (Father) - (909) 555-0300',
    upcomingAppointments: [
      {
        id: 'apt-103',
        patientName: 'Sophia Rodriguez',
        email: 'sophia.r@example.com',
        phone: '(909) 555-0371',
        isNewPatient: false,
        serviceId: 'invisalign',
        doctorId: 'dr-vance',
        date: 'Friday, Oct 23, 2026',
        timeSlot: '9:15 AM',
        insuranceProvider: 'MetLife PDP Plus',
        hasAnxiety: false,
        notes: 'Invisalign check-in and delivery of trays 18 through 24 + iTero progress scan.',
        status: 'confirmed',
        createdAt: '2026-09-19'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-6',
        date: 'Aug 14, 2026',
        timeSlot: '10:00 AM',
        procedure: 'Invisalign Progress Check & Attachment Polish',
        doctor: 'Dr. Julian Vance, DMD',
        notes: 'Tracking 100% on schedule. Interproximal reduction completed on lower anterior teeth.',
        status: 'completed',
        fee: 0
      },
      {
        id: 'past-apt-7',
        date: 'Apr 02, 2026',
        timeSlot: '1:00 PM',
        procedure: 'Invisalign ClinCheck Delivery & Attachment Placement',
        doctor: 'Dr. Eldar Heras, DDS & Dr. Vance',
        notes: 'Composite attachments placed; patient demonstrated proper aligner seating and hygiene removal.',
        status: 'completed',
        fee: 4200
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-s1',
        toothNumber: 'Full Arch',
        procedure: 'Invisalign Comprehensive Clear Aligner Protocol',
        status: 'scheduled',
        fee: 4200,
        insuranceEst: 1500,
        patientEst: 2700,
        scheduledDate: 'Oct 23, 2026'
      },
      {
        id: 'tp-s2',
        toothNumber: 'Full Arch',
        procedure: 'Post-Orthodontic Phillips Zoom! In-Office Whitening',
        status: 'recommended',
        fee: 399,
        insuranceEst: 0,
        patientEst: 399
      }
    ],
    xrays: [
      {
        id: 'xr-s1',
        date: 'Mar 15, 2026',
        type: '3D iTero Scan',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
        notes: 'Pre-orthodontic 3D full arch digital scan; deep 4mm overbite and moderate lower anterior crowding.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['Full Upper & Lower Arch']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-068',
        date: 'Apr 02, 2026',
        description: 'Invisalign Comprehensive Treatment Package (Includes Vivera Retainers)',
        totalAmount: 4200,
        insurancePaid: 1500,
        patientPaid: 2700,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-liam-419',
    fullName: 'Liam Chen',
    dob: '06/18/1986',
    phone: '(909) 555-0924',
    email: 'liam.chen@example.com',
    address: '11200 Anderson St, Loma Linda, CA 92354',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-92144-D',
    insuranceProvider: 'Blue Cross Blue Shield Anthem',
    groupNumber: 'BC-99104',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'July 10, 2026',
    nextCleaningDue: 'January 10, 2027',
    allergies: ['Aspirin / NSAIDs'],
    sedationPreference: 'The Wand® computerized injection',
    emergencyContact: 'Karen Chen (Sister) - (909) 555-0955',
    upcomingAppointments: [
      {
        id: 'apt-104',
        patientName: 'Liam Chen',
        email: 'liam.chen@example.com',
        phone: '(909) 555-0924',
        isNewPatient: false,
        serviceId: 'routine-exam',
        doctorId: 'dr-heras',
        date: 'Monday, Nov 02, 2026',
        timeSlot: '8:30 AM',
        insuranceProvider: 'Blue Cross Blue Shield Anthem',
        hasAnxiety: false,
        notes: '6-month periodontal maintenance cleaning and custom nightguard fit check with Dr. Heras.',
        status: 'confirmed',
        createdAt: '2026-09-15'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-8',
        date: 'Jul 10, 2026',
        timeSlot: '9:30 AM',
        procedure: 'Biomimetic Composite Restoration (#14 Occlusal)',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Recurrent decay removed and restored using shade A2 composite with micro-hybrid layering.',
        status: 'completed',
        fee: 260
      },
      {
        id: 'past-apt-9',
        date: 'Jan 15, 2026',
        timeSlot: '11:15 AM',
        procedure: 'Periodontal Prophylaxis & Custom Occlusal Nightguard Impression',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Digital scan completed for hard-soft nightguard to prevent nocturnal bruxism wear.',
        status: 'completed',
        fee: 520
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-l1',
        toothNumber: 'Full Arch',
        procedure: 'Periodontal Maintenance Therapy & Polish',
        status: 'scheduled',
        fee: 175,
        insuranceEst: 140,
        patientEst: 35,
        scheduledDate: 'Nov 02, 2026'
      }
    ],
    xrays: [
      {
        id: 'xr-l1',
        date: 'Jan 15, 2026',
        type: 'Bitewing X-Ray',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        notes: 'Right and left molar bitewings. Enamel margins stable; no subgingival calculus.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['#2', '#3', '#14', '#15', '#18', '#31']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-118',
        date: 'Jul 10, 2026',
        description: 'Biomimetic Nanocomposite Filling (2 Surfaces Posterior)',
        totalAmount: 260,
        insurancePaid: 208,
        patientPaid: 52,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-elena-672',
    fullName: 'Elena Vasquez',
    dob: '03/12/1958',
    phone: '(909) 555-0633',
    email: 'elena.v@example.com',
    address: '1580 N Sierra Way, San Bernardino, CA 92405',
    avatarUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-55190-E',
    insuranceProvider: 'Guardian Any Doctor PPO',
    groupNumber: 'GD-77210',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'May 18, 2026',
    nextCleaningDue: 'November 18, 2026',
    allergies: ['Sulfa drugs'],
    sedationPreference: 'Nitrous oxide laughing gas & warm lavender blanket',
    emergencyContact: 'Mateo Vasquez (Son) - (909) 555-0699',
    upcomingAppointments: [
      {
        id: 'apt-105',
        patientName: 'Elena Vasquez',
        email: 'elena.v@example.com',
        phone: '(909) 555-0633',
        isNewPatient: false,
        serviceId: 'dental-implants',
        doctorId: 'dr-heras',
        date: 'Wednesday, Oct 28, 2026',
        timeSlot: '11:00 AM',
        insuranceProvider: 'Guardian Any Doctor PPO',
        hasAnxiety: true,
        anxietyPreference: 'Nitrous oxide and calming presence',
        notes: '6-month implant hygiene evaluation and screw-access torque inspection with Dr. Eldar Heras, DDS.',
        status: 'confirmed',
        createdAt: '2026-09-17'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-10',
        date: 'May 18, 2026',
        timeSlot: '1:30 PM',
        procedure: 'Upper Fixed Zirconia Implant Bridge Delivery',
        doctor: 'Dr. Eldar Heras, DDS & Dr. Vance',
        notes: 'All-on-4 framework seated passively. Patient delighted with natural aesthetics and speech clarity.',
        status: 'completed',
        fee: 14500
      },
      {
        id: 'past-apt-11',
        date: 'Jan 10, 2026',
        timeSlot: '8:00 AM',
        procedure: 'Upper Arch Guided Implant Surgery & Immediate Load',
        doctor: 'Dr. Julian Vance, DMD & Dr. Eldar Heras, DDS',
        notes: '4 implants placed with 3D surgical guide. Immediate fixed hybrid provisional secured.',
        status: 'completed',
        fee: 8000
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-e1',
        toothNumber: 'Upper Arch',
        procedure: 'Implant Maintenance & Ultrasonic Peri-Implant Cleaning',
        status: 'scheduled',
        fee: 220,
        insuranceEst: 150,
        patientEst: 70,
        scheduledDate: 'Oct 28, 2026'
      }
    ],
    xrays: [
      {
        id: 'xr-e1',
        date: 'May 18, 2026',
        type: 'Panoramic CBCT',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
        notes: 'Post-restorative panoramic scan; all 4 implants well-integrated with dense bone consolidation.',
        doctor: 'Dr. Julian Vance, DMD',
        toothNumbers: ['Full Upper Arch Implants']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-042',
        date: 'May 18, 2026',
        description: 'Final Prettau Zirconia Implant Bridge (Upper Full Arch)',
        totalAmount: 14500,
        insurancePaid: 3000,
        patientPaid: 11500,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-aaliyah-741',
    fullName: 'Aaliyah Patel',
    dob: '08/04/1997',
    phone: '(909) 555-0455',
    email: 'aaliyah.p@example.com',
    address: '8910 Sierra Lakes Pkwy, Fontana, CA 92336',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    memberId: 'DMS-CLUB-3301',
    insuranceProvider: 'Heras Dental Savings Club (In-House)',
    groupNumber: 'CLUB-29MO',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'June 25, 2026',
    nextCleaningDue: 'December 25, 2026',
    allergies: ['None'],
    sedationPreference: 'None needed',
    emergencyContact: 'Dev Patel (Spouse) - (909) 555-0488',
    upcomingAppointments: [
      {
        id: 'apt-106',
        patientName: 'Aaliyah Patel',
        email: 'aaliyah.p@example.com',
        phone: '(909) 555-0455',
        isNewPatient: false,
        serviceId: 'zoom-whitening',
        doctorId: 'dr-rostova',
        date: 'Saturday, Nov 07, 2026',
        timeSlot: '10:00 AM',
        insuranceProvider: 'Heras Dental Savings Club (In-House)',
        hasAnxiety: false,
        notes: 'In-office Zoom! Whitening special with 20% member savings applied.',
        status: 'confirmed',
        createdAt: '2026-09-21'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-12',
        date: 'Jun 25, 2026',
        timeSlot: '2:00 PM',
        procedure: 'Comprehensive Exam & Dental Savings Club Enrollment',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'New member exam, bitewing x-rays, and ultrasonic cleaning completed at 100% club coverage.',
        status: 'completed',
        fee: 0
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-a1',
        toothNumber: 'Full Mouth',
        procedure: 'Phillips Zoom! In-Office Teeth Whitening (Member Special)',
        status: 'scheduled',
        fee: 319,
        insuranceEst: 0,
        patientEst: 319,
        scheduledDate: 'Nov 07, 2026'
      }
    ],
    xrays: [
      {
        id: 'xr-a1',
        date: 'Jun 25, 2026',
        type: 'Bitewing X-Ray',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        notes: 'Zero cavities detected; minor wisdom tooth impaction on #32 noted for future monitoring.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['#1', '#16', '#17', '#32']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-175',
        date: 'Jun 25, 2026',
        description: 'Annual Dental Savings Club Membership Activation ($29/mo plan)',
        totalAmount: 348,
        insurancePaid: 0,
        patientPaid: 348,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-david-884',
    fullName: 'David Miller',
    dob: '12/03/1973',
    phone: '(909) 555-0722',
    email: 'david.m@example.com',
    address: '940 E Gilbert St, San Bernardino, CA 92404',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-41829-F',
    insuranceProvider: 'Aetna Dental PPO',
    groupNumber: 'AET-33019',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'August 03, 2026',
    nextCleaningDue: 'February 03, 2027',
    allergies: ['Codeine'],
    sedationPreference: 'Nitrous Oxide laughing gas for all fillings',
    emergencyContact: 'Carol Miller (Wife) - (909) 555-0744',
    upcomingAppointments: [
      {
        id: 'apt-107',
        patientName: 'David Miller',
        email: 'david.m@example.com',
        phone: '(909) 555-0722',
        isNewPatient: false,
        serviceId: 'biomimetic-fillings',
        doctorId: 'dr-heras',
        date: 'Tuesday, Nov 10, 2026',
        timeSlot: '1:15 PM',
        insuranceProvider: 'Aetna Dental PPO',
        hasAnxiety: true,
        anxietyPreference: 'Nitrous oxide and gentle Wand numbing',
        notes: 'Tooth-colored composite restoration on #30 occlusal with Dr. Eldar Heras, DDS.',
        status: 'confirmed',
        createdAt: '2026-09-16'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-13',
        date: 'Aug 03, 2026',
        timeSlot: '4:00 PM',
        procedure: 'Emergency Pain Triage & Same-Day Relief Numbing',
        doctor: 'Dr. Eldar Heras, DDS',
        notes: 'Severe pulpitis on tooth #31. Emergency sedative dressing placed; patient reported immediate 100% relief.',
        status: 'completed',
        fee: 195
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-d1',
        toothNumber: '#30',
        procedure: 'Biomimetic Posterior Composite Bond',
        status: 'scheduled',
        fee: 240,
        insuranceEst: 192,
        patientEst: 48,
        scheduledDate: 'Nov 10, 2026'
      }
    ],
    xrays: [
      {
        id: 'xr-d1',
        date: 'Aug 03, 2026',
        type: 'Periapical',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        notes: 'Emergency radiograph showing deep decay on tooth #31 approximating pulp chamber.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['#30', '#31']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-191',
        date: 'Aug 03, 2026',
        description: 'Emergency Limited Diagnostic Examination & Immediate Sedative Dressing',
        totalAmount: 195,
        insurancePaid: 155,
        patientPaid: 40,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  },
  {
    id: 'patient-grace-193',
    fullName: 'Grace Kim',
    dob: '01/29/2007',
    phone: '(909) 555-0568',
    email: 'grace.kim@example.com',
    address: '3200 University Ave, Riverside, CA 92501',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    memberId: 'APX-19302-G',
    insuranceProvider: 'United Healthcare Dental PPO',
    groupNumber: 'UHC-88200',
    primaryDoctor: 'Dr. Eldar Heras, DDS',
    lastVisit: 'September 01, 2026',
    nextCleaningDue: 'March 01, 2027',
    allergies: ['None'],
    sedationPreference: 'Netflix ceiling TV with Bose headphones',
    emergencyContact: 'Susan Kim (Mother) - (909) 555-0500',
    upcomingAppointments: [
      {
        id: 'apt-108',
        patientName: 'Grace Kim',
        email: 'grace.kim@example.com',
        phone: '(909) 555-0568',
        isNewPatient: false,
        serviceId: 'routine-exam',
        doctorId: 'dr-rostova',
        date: 'Thursday, Nov 12, 2026',
        timeSlot: '3:30 PM',
        insuranceProvider: 'United Healthcare Dental PPO',
        hasAnxiety: false,
        notes: 'Preventive routine exam, fluoride treatment, and custom athletic sports guard delivery.',
        status: 'confirmed',
        createdAt: '2026-09-20'
      }
    ],
    pastAppointments: [
      {
        id: 'past-apt-14',
        date: 'Sep 01, 2026',
        timeSlot: '11:00 AM',
        procedure: 'Wisdom Teeth Panoramic Scan & Sports Guard Impression',
        doctor: 'Dr. Elena Rostova, DDS & Dr. Eldar Heras, DDS',
        notes: 'Digital scan completed for custom collegiate volleyball guard. Wisdom teeth evaluated with healthy eruption angles.',
        status: 'completed',
        fee: 180
      }
    ],
    treatmentPlans: [
      {
        id: 'tp-g1',
        toothNumber: 'Full Arch',
        procedure: 'Custom Polyurethane Athletic Sports Mouthguard',
        status: 'scheduled',
        fee: 200,
        insuranceEst: 100,
        patientEst: 100,
        scheduledDate: 'Nov 12, 2026'
      }
    ],
    xrays: [
      {
        id: 'xr-g1',
        date: 'Sep 01, 2026',
        type: 'Panoramic CBCT',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
        notes: 'Full panoramic survey; wisdom teeth roots developing normally, no impaction onto adjacent 2nd molars.',
        doctor: 'Dr. Eldar Heras, DDS',
        toothNumbers: ['Full Dentition (#1-#32)']
      }
    ],
    invoices: [
      {
        id: 'INV-2026-215',
        date: 'Sep 01, 2026',
        description: 'Panoramic CBCT Radiograph & Diagnostic Impression',
        totalAmount: 180,
        insurancePaid: 180,
        patientPaid: 0,
        balanceDue: 0,
        status: 'paid'
      }
    ]
  }
];

export const DEMO_PATIENT: PatientProfile = PATIENT_PROFILES[0];

// 20 Common FAQs with Answers for the Chatbot and Patients
export const FREQUENT_QUESTIONS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How do I book an appointment online at Heras Dental?',
    answer: 'You can book 24/7 directly on our website! Simply click "Book Appointment" in the top navigation, choose your desired dental service, select Dr. Eldar Heras, DDS or our first available specialist, pick your preferred date and morning/afternoon slot, and confirm. You will receive an instant confirmation text and email.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Who is the lead dentist at Heras Dental in San Bernardino?',
    answer: 'Dr. Eldar Heras, DDS is our founder and principal cosmetic and restorative dentist. She earned her dental degree from Loma Linda University School of Dentistry and holds a prestigious Fellowship in the Academy of General Dentistry (FAGD). With over 16 years of clinical excellence, Dr. Heras is dedicated to compassionate, gentle, and artistically precise dentistry.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'Where is your dental clinic located and is parking available?',
    answer: 'We are conveniently located at 1848 S Waterman Ave, Suite 200, San Bernardino, CA 92408 (near Hospitality Lane and the I-10 freeway). We have ample free dedicated patient parking right in front of our modern, ADA-accessible medical building.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'What is your direct phone number for appointments and questions?',
    answer: 'You can reach our friendly San Bernardino front desk team directly at (909) 882-4988 during business hours. For after-hours emergencies, our on-call dental triage team can also be contacted at (909) 882-4988.'
  },
  {
    id: 'faq-5',
    category: 'insurance',
    question: 'What dental insurance plans do you accept in San Bernardino?',
    answer: 'We are in-network with premier PPO providers including Delta Dental, Cigna, MetLife, Aetna, Guardian, Blue Cross Blue Shield, United Healthcare, and Humana. Our coordinators file all claims and provide complimentary upfront benefit verification before any treatment begins.'
  },
  {
    id: 'faq-6',
    category: 'insurance',
    question: 'What if I do not have dental insurance?',
    answer: 'We believe premium dental care should be accessible to everyone! We offer our in-house Heras Dental Savings Club for just $29/month. This covers 2 complimentary annual cleanings, all exams, digital 3D X-rays, and gives you an immediate 20% discount on all cosmetic, restorative, and surgical treatments with zero waiting periods or pre-approvals.'
  },
  {
    id: 'faq-7',
    category: 'cosmetic',
    question: 'How much do porcelain veneers cost and how long do they last?',
    answer: 'Handcrafted porcelain veneers typically range from $1,200 to $1,800 per tooth depending on aesthetic complexity. Dr. Eldar Heras, DDS utilizes ultra-durable, natural-looking feldspathic and E-Max ceramics that last 15 to 20+ years with proper oral hygiene. 0% APR financing is available via CareCredit and Sunbit.'
  },
  {
    id: 'faq-8',
    category: 'cosmetic',
    question: 'How many shades whiter can I get with Phillips Zoom! In-Office Whitening?',
    answer: 'Our in-office Zoom! LED whitening system safely lightens enamel up to 8 shades in a single 60-minute appointment. We apply a specialized desensitizing varnish immediately afterward to prevent sensitivity, and include custom take-home touch-up trays with every session.'
  },
  {
    id: 'faq-9',
    category: 'emergency',
    question: 'What should I do if I have a dental emergency or severe toothache?',
    answer: 'We guarantee same-day emergency relief chair times in San Bernardino! Call us immediately at (909) 882-4988 or choose "Emergency Care" on our online booking tab. If a permanent tooth is knocked out, keep it moist in milk or saliva and arrive within 60 minutes for the highest re-implantation success rate.'
  },
  {
    id: 'faq-10',
    category: 'sedation',
    question: 'I have severe dental phobia and fear of needles. How can you help me relax?',
    answer: 'Over 40% of our new patients felt anxious before meeting Dr. Eldar Heras, DDS! We are certified in anxiety-free dentistry. We replace traditional painful needles with The Wand® computer-assisted anesthesia (virtually painless numbing), offer nitrous oxide laughing gas, conscious sedation pills, ceiling TVs with Netflix, noise-canceling headphones, and warm scented lavender towels.'
  },
  {
    id: 'faq-11',
    category: 'orthodontics',
    question: 'How does Invisalign compare to traditional metal braces?',
    answer: 'Invisalign uses smooth, clear, medical-grade SmartTrack aligners that are virtually invisible and completely removable for eating, brushing, and flossing. With no metal brackets or broken wires, treatment times average just 6 to 12 months with fewer office visits.'
  },
  {
    id: 'faq-12',
    category: 'restorative',
    question: 'How long does a dental implant procedure take from start to finish?',
    answer: 'Guided dental implant placement is completed in a single comfortable 60-minute visit. After an integration period of 3 to 4 months where the bio-compatible titanium fuses securely with your jawbone, Dr. Eldar Heras, DDS places your permanent, custom zirconia crown. Implants look, feel, and chew just like biological teeth and can last a lifetime.'
  },
  {
    id: 'faq-13',
    category: 'general',
    question: 'What are your weekly office hours in San Bernardino, CA?',
    answer: 'We offer convenient morning, evening, and weekend hours: Monday through Thursday from 7:30 AM to 6:00 PM, Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 2:00 PM. Emergency on-call coverage is available on Sundays.'
  },
  {
    id: 'faq-14',
    category: 'restorative',
    question: 'What is Biomimetic composite bonding and why is it better than silver amalgam?',
    answer: 'Biomimetic dentistry preserves up to 40% more of your natural tooth structure. Instead of wedging rigid silver amalgams (which contain 50% mercury and can cause micro-cracks over time), Dr. Heras uses tooth-colored composite resin that chemically bonds to tooth structure, matching your exact enamel shade and restoring natural tooth flexibility.'
  },
  {
    id: 'faq-15',
    category: 'insurance',
    question: 'Do you offer monthly payment plans or 0% interest financing?',
    answer: 'Yes! We partner with CareCredit, Sunbit, and Proceed Finance to offer flexible payment plans with 0% APR interest for 6, 12, or 24 months. Approval takes less than 2 minutes online and does not affect your credit score.'
  },
  {
    id: 'faq-16',
    category: 'pediatric',
    question: 'At what age should children first visit the dentist?',
    answer: 'The American Academy of Pediatric Dentistry recommends scheduling a child’s first visit by their first birthday or when their first baby tooth erupts. Dr. Elena Rostova and Dr. Eldar Heras make children’s visits fun, educational, and completely fear-free.'
  },
  {
    id: 'faq-17',
    category: 'restorative',
    question: 'Does getting a root canal or crown hurt?',
    answer: 'No! With modern computerized local anesthesia and gentle techniques utilized by Dr. Eldar Heras, DDS, root canals and crown procedures feel no different than getting a standard filling. Most patients report feeling instant relief from preexisting tooth pain.'
  },
  {
    id: 'faq-18',
    category: 'general',
    question: 'How often should I have my teeth professionally cleaned and examined?',
    answer: 'For patients with healthy gums, we recommend preventive checkups and cleanings every 6 months. For patients with a history of periodontal gum disease, deep cleanings or maintenance therapy every 3 to 4 months keeps biofilm and bone loss under strict control.'
  },
  {
    id: 'faq-19',
    category: 'cosmetic',
    question: 'What is the difference between a dental crown and a porcelain veneer?',
    answer: 'A porcelain veneer covers only the front facing and biting edge of a tooth to correct color, gaps, and shape while conserving natural tooth enamel. A crown encases the entire 360-degree circumference of a tooth to rebuild strength when extensive decay or fractures are present.'
  },
  {
    id: 'faq-20',
    category: 'general',
    question: 'How can I view my digital X-rays, treatment co-pays, and billing online?',
    answer: 'You can explore our interactive Patient Portal right on this demo website! Click the "Patient Portal" tab to view real-time digital 3D radiographs, interactive tooth charts with insurance breakdowns, billing invoices, and upcoming visits for 8 diverse patient profiles.'
  }
];

// Fallback intelligent intent matching for instant responses when no API key is provided
export function getSmartLocalDentalResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('contact')) {
    return "You can call Heras Dental directly at (909) 882-4988. Our office is located at 1848 S Waterman Ave, Suite 200, San Bernardino, CA 92408.";
  }

  if (q.includes('doctor') || q.includes('heras') || q.includes('eldar') || q.includes('dentist') || q.includes('who')) {
    return "Our principal dentist is Dr. Eldar Heras, DDS, a graduate of Loma Linda University School of Dentistry and a Fellow of the Academy of General Dentistry (FAGD). He has over 18 years of experience in cosmetic veneers, smile design, gentle implants, and anxiety-free sedation.";
  }

  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('san bernardino') || q.includes('parking') || q.includes('city')) {
    return "We are located at 1848 S Waterman Ave, Suite 200, San Bernardino, CA 92408 (near Hospitality Lane). We offer dedicated free parking right in front of our modern suite!";
  }

  if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('fee')) {
    if (q.includes('whiten')) {
      return "Our Phillips Zoom! In-Office Teeth Whitening is on special for $399 (normally $550), which includes up to 8 shades of lightening in 60 minutes and custom take-home touch-up trays.";
    }
    if (q.includes('veneer')) {
      return "Custom handcrafted porcelain veneers by Dr. Eldar Heras, DDS range from $1,200 to $1,800 per tooth. We offer 0% interest financing via CareCredit and Sunbit for up to 24 months.";
    }
    if (q.includes('invisalign') || q.includes('aligner')) {
      return "Invisalign clear aligner treatments range from $3,500 to $5,400. Many PPO insurance plans contribute $1,000 to $2,500 toward this, and we provide monthly payment plans as low as $129/month.";
    }
    if (q.includes('implant')) {
      return "Single tooth dental implants (titanium fixture plus custom zirconia crown) range from $2,400 to $3,800. We offer a comprehensive 3D CT scan consultation to evaluate your jawbone health.";
    }
    return "Our preventive cleanings are $140–$195 (often 100% covered by PPO insurance), Zoom Whitening is $399, Veneers are $1,200–$1,800/tooth, and Invisalign is $3,500–$5,400. We also offer 0% APR financing and our $29/mo in-house savings club!";
  }

  if (q.includes('insurance') || q.includes('ppo') || q.includes('delta') || q.includes('cigna') || q.includes('metlife') || q.includes('aetna')) {
    return "Yes! Heras Dental in San Bernardino is in-network with Delta Dental, Cigna, MetLife, Aetna, Guardian, Blue Cross Blue Shield, and United Healthcare. We handle claims filing and provide complimentary insurance benefit checks before your visit.";
  }

  if (q.includes('emergency') || q.includes('pain') || q.includes('hurt') || q.includes('toothache') || q.includes('broken') || q.includes('knocked out')) {
    return "🚨 For dental emergencies, Dr. Eldar Heras, DDS and our team guarantee same-day priority appointments in San Bernardino! Please book the 'Emergency Care' option on our online schedule or call our line at (909) 882-4988 immediately.";
  }

  if (q.includes('hour') || q.includes('open') || q.includes('saturday')) {
    return "Our San Bernardino hours are Mon–Thu 7:30 AM – 6:00 PM, Fri 8:00 AM – 5:00 PM, and Sat 9:00 AM – 2:00 PM. Call (909) 882-4988 to schedule!";
  }

  if (q.includes('anxiety') || q.includes('scared') || q.includes('fear') || q.includes('phobia') || q.includes('sedation') || q.includes('needle') || q.includes('pain')) {
    return "Dr. Eldar Heras, DDS specializes in gentle, anxiety-free dentistry! We use The Wand® computerized numbing (no scary syringe sting), nitrous oxide laughing gas, cozy blankets, noise-canceling headphones with Netflix, and warm scented lavender towels.";
  }

  if (q.includes('profile') || q.includes('patient') || q.includes('portal') || q.includes('emma') || q.includes('x-ray') || q.includes('xray')) {
    return "You can explore 8 fictional patient profiles (including Emma Watson, Marcus Johnson, Sophia Rodriguez, and Liam Chen) in our Patient Portal tab! You can review their contact information, appointment history, digital 3D X-rays, and billing records.";
  }

  if (q.includes('smile') || q.includes('gallery') || q.includes('before and after') || q.includes('result')) {
    return "You can view 18 real smile transformations in our 'Smile Gallery' tab above! Try our interactive Before/After slider to see porcelain veneers, Zoom whitening, Invisalign, and guided implants by Dr. Eldar Heras, DDS.";
  }

  if (q.includes('book') || q.includes('appointment') || q.includes('schedule') || q.includes('visit')) {
    return "You can book right here online! Click the 'Book Appointment' tab in the navigation above to select Dr. Eldar Heras, DDS or our first available specialist, date, and time slot in under 60 seconds.";
  }

  if (q.includes('review') || q.includes('yelp') || q.includes('google') || q.includes('rating') || q.includes('healthgrades')) {
    return "Heras Dental is rated 4.98/5.0 across more than 540 verified patient reviews on Yelp, Google Reviews, Healthgrades, and Zocdoc! Patients specifically praise Dr. Heras's pain-free numbing with The Wand®, artistic veneer transformations, and empathetic bedside manner. Click the 'Patient Reviews' tab to read full testimonials.";
  }

  return "Welcome to Heras Dental in San Bernardino, CA! I'm Pearl, your AI Dental Concierge for Dr. Eldar Heras, DDS. You can call us at (909) 882-4988. I can answer questions about our 20 FAQs, dental treatments, insurance coverage, 18 Before & After smiles, customer reviews on Yelp and Google, or patient profiles. How can I help you today?";
}

export function getFollowUpSuggestions(query: string): string[] {
  const q = query.toLowerCase();
  if (q.includes('review') || q.includes('yelp') || q.includes('google') || q.includes('rating')) {
    return [
      'Read Yelp reviews for Dr. Heras',
      'What do patients say about pain-free care?',
      'Book an appointment online'
    ];
  }
  if (q.includes('veneer') || q.includes('cosmetic') || q.includes('whiten')) {
    return [
      'How much do porcelain veneers cost?',
      'View Before & After smile gallery',
      'Does The Wand numbing hurt?'
    ];
  }
  if (q.includes('emergency') || q.includes('pain') || q.includes('toothache')) {
    return [
      'Call office directly at (909) 882-4988',
      'Book emergency slot online',
      'Sedation & anxiety-free options'
    ];
  }
  return [
    'What do Yelp & Google reviews say about Dr. Heras?',
    'Do you accept Delta Dental / PPO?',
    'How do I book online?'
  ];
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    location: 'Redlands, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    platform: 'yelp',
    rating: 5,
    date: 'October 14, 2026',
    treatment: 'Emergency Care & Custom Ceramic Crown',
    title: 'Hands down the most painless dental experience of my life',
    content: 'I have had severe dental phobia after a traumatic childhood extraction. When I cracked my front tooth biting down on dinner, I was in tears and panicking. A coworker insisted I see Dr. Eldar Heras at Heras Dental. From the second I walked in, the front desk greeted me with genuine warmth. Dr. Heras used a computerized wand for numbing—I literally did not feel a single pinch! He saved my tooth with a flawless custom crown that matches my surrounding enamel with millimeter perfection. 10/10 recommend Dr. Heras to anyone terrified of dental work.',
    helpfulCount: 38,
    verified: true,
    platformBadgeText: 'Yelp Elite Reviewer',
    doctorResponse: {
      date: 'October 15, 2026',
      text: 'Sarah, it was an absolute honor helping you through a stressful day. Hearing that you experienced zero pain is the greatest compliment our clinical team could ever ask for!'
    }
  },
  {
    id: 'rev-2',
    author: 'David Chen',
    location: 'San Bernardino, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    platform: 'google',
    rating: 5,
    date: 'September 28, 2026',
    treatment: 'Porcelain Veneers (8 Teeth)',
    title: 'Dr. Eldar Heras is an artist with extraordinary precision',
    content: 'I had stubborn tetracycline staining and worn incisal edges that made me cover my mouth during company presentations for over 15 years. Dr. Eldar Heras conducted a full 3D digital smile simulation before touching a single tooth so I could test the shape and aesthetics. The finished E-Max porcelain veneers are breathtaking—subtle natural translucency and micro-texture, never artificial or bulky. My self-confidence in meetings has completely transformed.',
    helpfulCount: 42,
    verified: true,
    platformBadgeText: 'Google Local Guide (Level 6)',
    doctorResponse: {
      date: 'September 29, 2026',
      text: 'David, thank you for trusting our practice with your smile! Seeing your newfound confidence on stage and in photos makes all the meticulous laboratory craftsmanship worth it.'
    }
  },
  {
    id: 'rev-3',
    author: 'Maria Rodriguez',
    location: 'Riverside, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    platform: 'yelp',
    rating: 5,
    date: 'October 2, 2026',
    treatment: 'Preventive Cleaning & Care Club',
    title: 'Affordable in-house club and five-star modern clinic',
    content: 'When I transitioned to freelancing and lost my employer dental insurance, I was worried about maintaining routine cleanings. Heras Dental offers their $29/month Care Club which covers 2 cleanings, exams, digital 3D scans, and gave me 20% off a composite filling. Dr. Heras is exceptionally gentle and never pushes unnecessary overtreatment. The office is spotless, calming, with blue design accents and Netflix ceiling screens.',
    helpfulCount: 29,
    verified: true,
    platformBadgeText: 'Verified Yelp Check-in'
  },
  {
    id: 'rev-4',
    author: 'Robert K.',
    location: 'Loma Linda, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    platform: 'healthgrades',
    rating: 5,
    date: 'August 19, 2026',
    treatment: 'Computer-Guided Dental Implant',
    title: 'Exemplary bedside manner, zero wait time, true specialist',
    content: 'Rated 5/5 on Trustworthiness, Explanations, and Staff Friendliness on Healthgrades. Dr. Eldar Heras reviewed my 3D CBCT scan with me on the chairside monitor, explaining every nuance for replacing a failed molar with a bio-compatible titanium implant. The surgical placement was swift, clean, and completely pain-free. He even called that evening personally to check how I was feeling.',
    helpfulCount: 25,
    verified: true,
    platformBadgeText: 'Healthgrades Verified Patient',
    doctorResponse: {
      date: 'August 20, 2026',
      text: 'Robert, lifelong stability and painless recovery are our highest priorities. Thrilled to hear your implant integration is progressing seamlessly!'
    }
  },
  {
    id: 'rev-5',
    author: 'Jessica Thorne',
    location: 'Rancho Cucamonga, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    platform: 'google',
    rating: 5,
    date: 'September 12, 2026',
    treatment: 'Invisalign Clear Aligners & Whitening',
    title: 'Invisalign journey was smooth, fast, and exceeded expectations',
    content: 'Just finished my 10-month Invisalign journey with Dr. Heras. Every aligner check-in was prompt—never waited more than 3 minutes in the lobby. The iTero digital scanner meant no messy putty gagging impressions. My teeth are straight, my bite feels comfortable, and the complimentary professional whitening finish Dr. Heras provided was the icing on the cake.',
    helpfulCount: 31,
    verified: true,
    platformBadgeText: 'Google Verified Review'
  },
  {
    id: 'rev-6',
    author: 'Michael B.',
    location: 'San Bernardino, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    platform: 'zocdoc',
    rating: 5,
    date: 'October 21, 2026',
    treatment: 'Emergency Toothache & Root Canal Therapy',
    title: 'Same-day emergency appointment saved my entire week',
    content: 'Woke up on a weekend with throbbing tooth pain that radiated to my ear. Booked online via Zocdoc at 7:30 AM, was in the dental chair by 9:15 AM. Dr. Eldar Heras identified a deep pulp infection, relieved the pressure immediately, and performed a gentle root canal with zero pain. The Netflix ceiling TV and noise-canceling headphones kept me completely relaxed.',
    helpfulCount: 19,
    verified: true,
    platformBadgeText: 'Zocdoc Verified Booking Patient'
  },
  {
    id: 'rev-7',
    author: 'Amanda G.',
    location: 'Highland, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    platform: 'yelp',
    rating: 5,
    date: 'July 30, 2026',
    treatment: 'Family Dentistry & Pediatric Checkup',
    title: 'Finally a dental office my kids and I look forward to visiting',
    content: 'Brought my 7-year-old son for his first cleaning alongside my own periodontal checkup. Dr. Heras has the gentlest demeanor with children—explained the tooth camera so playfully that my son was giggling instead of scared. The ultrasonic cleaning was the most comfortable I have had in years. Clean, calming shades-of-blue decor throughout.',
    helpfulCount: 22,
    verified: true,
    platformBadgeText: 'Yelp Elite Reviewer'
  },
  {
    id: 'rev-8',
    author: 'James T. Vance',
    location: 'San Bernardino, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    platform: 'healthgrades',
    rating: 5,
    date: 'June 18, 2026',
    treatment: 'Full Arch Zirconia Restorations',
    title: 'Master clinician with extraordinary restorative skill',
    content: 'Decades of severe night grinding had worn my teeth down by nearly 40%. Dr. Eldar Heras designed a comprehensive restorative plan over four months. The biocompatible zirconia restorations restored my chewing ability and took 10 years off my face. His staff handles insurance pre-determinations seamlessly with zero surprise bills.',
    helpfulCount: 35,
    verified: true,
    platformBadgeText: 'Healthgrades Honor Roll Verified'
  },
  {
    id: 'rev-9',
    author: 'Ashley Nguyen',
    location: 'Grand Terrace, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    platform: 'google',
    rating: 5,
    date: 'August 5, 2026',
    treatment: 'In-Office Zoom! Teeth Whitening',
    title: 'Zoom! Whitening results were unbelievable - 7 shades lighter',
    content: 'Did the in-office Zoom! Whitening session before my wedding. The hygienist and Dr. Heras applied desensitizing protective gel so I felt zero zings during or after. Walked out with sparkling white teeth that photographed beautifully on my wedding day. Everyone asked where I had my teeth done!',
    helpfulCount: 27,
    verified: true,
    platformBadgeText: 'Google Local Guide'
  },
  {
    id: 'rev-10',
    author: 'Carlos M.',
    location: 'Fontana, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    platform: 'zocdoc',
    rating: 5,
    date: 'September 3, 2026',
    treatment: 'Comprehensive Exam & 3D Imaging',
    title: 'Transparent pricing, friendly staff, prompt appointment',
    content: 'First time visiting Heras Dental. Completed medical forms online through their portal beforehand. The front desk greeted me by name immediately. Dr. Heras spent 25 minutes discussing my oral health and answering all my questions without rushing. Rare to find a doctor who genuinely listens with empathy.',
    helpfulCount: 16,
    verified: true,
    platformBadgeText: 'Zocdoc Verified Booking'
  },
  {
    id: 'rev-11',
    author: 'Brittany L.',
    location: 'San Bernardino, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    platform: 'yelp',
    rating: 5,
    date: 'October 29, 2026',
    treatment: 'Biomimetic Ceramic Inlays/Onlays',
    title: 'Replaced cracked silver mercury fillings with seamless white ceramics',
    content: 'Had four 20-year-old dark silver fillings that were developing recurrent micro-fractures. Dr. Heras replaced them with tooth-colored biomimetic ceramic onlays that preserve natural tooth enamel. He showed me before-and-after intraoral photos on the screen. The aesthetic result is night and day!',
    helpfulCount: 18,
    verified: true,
    platformBadgeText: 'Verified Yelp Reviewer'
  },
  {
    id: 'rev-12',
    author: 'Diane W.',
    location: 'Redlands, CA',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200',
    platform: 'healthgrades',
    rating: 5,
    date: 'July 14, 2026',
    treatment: 'Preventive Periodontal Maintenance',
    title: 'Gentle touch and warm, compassionate care for seniors',
    content: 'I am in my 70s and have seen dozens of dentists across Southern California over the decades. Dr. Eldar Heras stands head and shoulders above the rest. His gentle touch, respectful attitude, and state-of-the-art equipment make every visit comfortable. The whole office is a breath of fresh air.',
    helpfulCount: 20,
    verified: true,
    platformBadgeText: 'Healthgrades Verified Patient'
  }
];

