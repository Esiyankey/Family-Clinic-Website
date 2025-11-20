import { FaClipboardList, FaTooth, FaHeart, FaHeartPulse, FaEye } from 'react-icons/fa6';



export const servicesData = [
  {
    id: 1,
    icon: FaClipboardList,
    title: 'General Treatment',
    slug: 'general-treatment',
    description: 'Expert care and comprehensive treatment plans to ensure your well-being.',
    longDescription:
      'Our General Treatment services cover routine health checks, diagnosis of common conditions, preventive care, and personalized treatment plans tailored to meet your health needs. We ensure that every patient receives holistic and compassionate care.',
    image: '/images/services/general-treatment.jpg',
    benefits: [
      'Accurate diagnosis and personalized care',
      'Preventive health monitoring',
      'Access to certified medical professionals',
    ],
    procedure: [
      'Initial consultation and health history review',
      'Diagnosis and assessment',
      'Treatment plan design',
      'Follow-up and continuous monitoring',
    ],
    cta: 'Book a General Treatment Appointment',
  },
  {
    id: 2,
    icon: FaTooth,
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    description: 'Brighten your smile with our advanced teeth whitening services.',
    longDescription:
      'Our Teeth Whitening service uses the latest safe and effective whitening technology to help you achieve a visibly brighter smile. This treatment removes stains caused by food, drinks, smoking, and age-related discoloration.',
    image: '/images/services/teeth-whitening.jpg',
    benefits: [
      'Instant and long-lasting whitening results',
      'Safe for sensitive teeth',
      'Boosts confidence and smile appearance',
    ],
    procedure: [
      'Initial dental evaluation',
      'Teeth cleaning and preparation',
      'Application of whitening gel',
      'Light activation for accelerated results',
      'Post-treatment care instructions',
    ],
    cta: 'Schedule a Teeth Whitening Session',
  },
  {
    id: 3,
    icon: FaHeart,
    title: 'Heart Surgery',
    slug: 'heart-surgery',
    description: 'Advanced heart surgery techniques for a healthier heart.',
    longDescription:
      'Our Heart Surgery service is performed by top cardiovascular surgeons using state-of-the-art techniques. We offer comprehensive surgical treatments for various heart conditions to ensure improved cardiovascular health.',
    image: '/images/services/heart-surgery.jpg',
    benefits: [
      'Highly skilled cardiac surgeons',
      'Advanced surgical technology',
      'Improved blood flow and heart function',
    ],
    procedure: [
      'Preoperative assessment and diagnosis',
      'Surgical planning',
      'Operation using advanced techniques',
      'Postoperative intensive care',
      'Recovery monitoring and follow-up',
    ],
    cta: 'Book a Heart Surgery Consultation',
  },
  {
    id: 4,
    icon: FaHeartPulse,
    title: 'Ear Treatment',
    slug: 'ear-treatment',
    description: 'Effective treatments for various ear conditions and hearing issues.',
    longDescription:
      'We provide specialized Ear Treatments for infections, hearing loss, tinnitus, and balance disorders. Our team uses advanced diagnostic tools and treatment options for all age groups.',
    image: '/images/services/ear-treatment.jpg',
    benefits: [
      'Accurate ear examinations and diagnosis',
      'Treatment for infections and hearing issues',
      'Advanced hearing support solutions',
    ],
    procedure: [
      'Ear examination and hearing test',
      'Diagnosis of the condition',
      'Treatment through medication or therapy',
      'Follow-up to ensure full recovery',
    ],
    cta: 'Book an Ear Treatment Appointment',
  },
  {
    id: 5,
    icon: FaEye,
    title: 'Vision Problems',
    slug: 'vision-problems',
    description: 'Comprehensive eye care to address and correct vision problems.',
    longDescription:
      'We treat a wide range of vision problems through examinations, corrective lenses, laser procedures, and specialized eye treatments. Your eye health is our priority.',
    image: '/images/services/vision-problems.jpg',
    benefits: [
      'Accurate vision assessment',
      'Solutions for blurry or impaired vision',
      'Access to modern vision correction techniques',
    ],
    procedure: [
      'Eye examination and vision screening',
      'Diagnosis and identification of problem',
      'Prescription of lenses or treatment plan',
      'Follow-up to monitor progress',
    ],
    cta: 'Schedule an Eye Care Appointment',
  },
  {
    id: 6,
    icon: FaEye,
    title: 'Blood Transfusion',
    slug: 'blood-transfusion',
    description: 'Safe and efficient blood transfusion services for your health needs.',
    longDescription:
      'Our Blood Transfusion service ensures safe, sterile, and reliable transfusion processes for patients who require blood replacement due to anemia, surgery, or medical conditions.',
    image: '/images/services/blood-transfusion.jpg',
    benefits: [
      'Highly safe and monitored transfusions',
      'Certified medical team',
      'Immediate improvement for low blood levels',
    ],
    procedure: [
      'Medical evaluation and blood tests',
      'Blood type matching and preparation',
      'Transfusion performed in a sterile environment',
      'Post-transfusion observation',
    ],
    cta: 'Book a Blood Transfusion Appointment',
  },
];
