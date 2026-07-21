export const clinic = {
  name: "Dr. Namratha's Skin & Hair Clinic",
  tagline: 'Advanced Dermatology, Cosmetology & Hair Care',
  doctor: 'Dr. Namratha Chintakula',
  doctorTitle: 'Consultant Dermatologist & Trichologist',
  phone: '070130 68914',
  email: 'contact@drnamratha.clinic',
  address:
    'H-N.7-1-69/2, DHARAM KARAN ROAD, BALKAMPET, Balkampet, Hyderabad, Telangana 500016',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      "Dr. NAMRATHA'S SKIN AND HAIR CLINIC, DHARAM KARAN ROAD, BALKAMPET, Balkampet, Hyderabad, Telangana 500016"
    ),
  whatsapp: '917013068914',
  hours: 'Mon – Sat: 10:00 AM – 2:00 PM | Sun: Closed',
  emergency: 'For acute skin allergic reactions, severe swelling, or urgent dermatological concerns, please contact us or visit the nearest emergency medical center.',
};

export const navItems = [
  { to: '/home', label: 'Home' },
  {
    to: '/services',
    label: 'Services',
    children: [
      { to: '/services/clinical-dermatology', label: 'Clinical Dermatology' },
      { to: '/services/cosmetic-dermatology', label: 'Aesthetic & Cosmetic' },
      { to: '/services/hair-treatments', label: 'Trichology & Hair' },
      { to: '/services/skin-procedures', label: 'Skin Procedures' },
    ],
  },
  { to: '/about', label: 'About the Doctor' },
  { to: '/testimonials', label: 'Patient Stories' },
  { to: '/contact', label: 'Contact' },
];

export const serviceCategories = [
  {
    to: '/services/clinical-dermatology',
    icon: 'stethoscope',
    title: 'Clinical Dermatology',
    blurb:
      'Expert treatment for acne, eczema, psoriasis, skin allergies, infections, and other common skin conditions.',
  },
  {
    to: '/services/cosmetic-dermatology',
    icon: 'sparkles',
    title: 'Aesthetic & Cosmetic',
    blurb:
      'Advanced treatments including chemical peels, skin rejuvenation, scar reduction, anti-aging, and skin brightening.',
  },
  {
    to: '/services/hair-treatments',
    icon: 'droplet',
    title: 'Trichology & Hair Care',
    blurb:
      'Comprehensive care for hair loss, thinning, dandruff, scalp therapies, and platelet-rich plasma (PRP) restoration.',
  },
  {
    to: '/services/skin-procedures',
    icon: 'shieldCheck',
    title: 'Skin Procedures',
    blurb:
      'Safe, minor in-clinic procedures for the removal of warts, skin tags, moles, cysts, and benign growths.',
  },
];

export const conditions = [
  { icon: 'stethoscope', name: 'Acne & breakouts' },
  { icon: 'warning', name: 'Hair fall & thinning' },
  { icon: 'shieldCheck', name: 'Warts, skin tags & moles' },
  { icon: 'sparkles', name: 'Pigmentation & tanning' },
  { icon: 'stethoscope', name: 'Eczema & dry skin' },
  { icon: 'warning', name: 'Dandruff & scalp issues' },
  { icon: 'sparkles', name: 'Dark circles & wrinkles' },
  { icon: 'shieldCheck', name: 'Skin rashes & allergies' },
];

export const cosmeticTreatments = [
  {
    title: 'Chemical Peels',
    desc: 'Tailored exfoliating peels to address active acne, dark spots, uneven tone, and dullness.',
  },
  {
    title: 'Skin Rejuvenation',
    desc: 'Microdermabrasion, microneedling, and serum therapies to boost collagen and bring back natural glow.',
  },
  {
    title: 'Anti-Aging Therapies',
    desc: 'Targeted procedures and custom routines to reduce fine lines, wrinkles, and skin laxity.',
  },
  {
    title: 'Scar & Pigment Care',
    desc: 'Advanced treatments to fade acne scars, post-inflammatory pigmentation, and sun damage.',
  },
];

export const hairTreatments = [
  {
    title: 'PRP Therapy',
    desc: 'Platelet-Rich Plasma therapy using your own growth factors to stimulate and strengthen hair follicles.',
  },
  {
    title: 'Hair Fall Management',
    desc: 'Evidence-based medical treatments to control hair shedding and address pattern baldness.',
  },
  {
    title: 'Scalp & Dandruff Care',
    desc: 'Deep cleansing and antimicrobial therapies to relieve itchy, flaky, and dry scalp conditions.',
  },
  {
    title: 'Nutritional Consultation',
    desc: 'Comprehensive assessment and supplements to build hair strength from the inside out.',
  },
];

export const skinProcedures = [
  {
    icon: 'shieldCheck',
    title: 'Wart & Tag Removal',
    desc: 'Quick, clean radiofrequency or cryotherapy to remove warts, skin tags, and keratoses.',
  },
  {
    icon: 'warning',
    title: 'Mole & Cyst Excision',
    desc: 'Precise, sterile minor surgical removal of moles, cysts, and benign lesions under local anesthesia.',
  },
  {
    icon: 'stethoscope',
    title: 'Intralesional Injections',
    desc: 'Direct medical injections for keloids, hypertrophic scars, or alopecia areata spots.',
  },
  {
    icon: 'shieldCheck',
    title: 'Biopsy & Diagnostics',
    desc: 'Small skin tissue sampling for histopathology when an accurate diagnostic confirmation is needed.',
  },
];

export const testimonials = [
  {
    name: 'Dinesh Kumar',
    role: 'Google review (5/5)',
    quote:
      'Highly professional and caring doctor. The treatment suggested for my severe acne worked wonders in just a few weeks. The clinic is very neat.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Google review (5/5)',
    quote: 'Dr. Namratha is very patient, listens to all our skin concerns, and explains the treatment plan very clearly. Very happy with the results.',
  },
  {
    name: 'Rahul Verma',
    role: 'Google review (5/5)',
    quote:
      'Visited for hair fall issue. The PRP therapy combined with the prescribed medications gave excellent results. Hair density has visibly improved.',
  },
];

export const faqs = [
  {
    q: 'What skin and hair concerns do you treat?',
    a: 'Dr. Namratha provides expert consultations and treatments for acne, scars, pigmentation, aging, eczema, hair loss, dandruff, and minor skin removals.',
  },
  {
    q: 'Are appointments required, or can I walk in?',
    a: 'While walk-ins are welcome during clinic hours, booking an appointment in advance helps minimize your waiting time.',
  },
  {
    q: 'How long does a consultation take?',
    a: 'A standard consultation takes about 15-20 minutes, allowing the doctor to examine your concern, explain details, and prescribe a tailored plan.',
  },
  {
    q: 'Are the cosmetic procedures safe?',
    a: 'Absolutely. All cosmetic treatments and minor procedures are performed by Dr. Namratha using clinical protocols and sterile instruments for optimal safety.',
  },
];
