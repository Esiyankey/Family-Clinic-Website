import { 
  FaClipboardList,
  FaVial,
  FaLeaf,
  FaVideo 
} from "react-icons/fa6";
import { GiHeartBeats } from "react-icons/gi";

export const servicesData = [
  {
    id: 1,
    icon: FaClipboardList,
    title: "Annual Physicals",
    slug: "annual-physicals",
    description: "Comprehensive preventive exams for early detection and overall peace of mind.",
    longDescription:
      "Our Annual Physicals are complete head-to-toe assessments designed to detect potential health issues early and promote long-term wellness. During your visit, our clinicians review your medical history, conduct vital health screenings, and build a personalized plan to help you stay healthy all year. These exams ensure early detection of chronic conditions, lifestyle-related risks, and emerging concerns that may otherwise go unnoticed.",
    image: "/images/services/annual-physical.jpg",
    benefits: [
      "Early detection of potential health conditions",
      "Personalized preventive care recommendations",
      "Baseline tracking for blood pressure, heart rate, and vitals",
      "Updated vaccinations and routine screenings"
    ],
    procedure: [
      "Medical history review",
      "Physical examination and vital signs check",
      "Laboratory tests and preventive screenings",
      "Discussion of results and personalized wellness plan"
    ],
    cta: "Book Your Annual Physical",
  },

  {
    id: 2,
    icon: GiHeartBeats,
    title: "Chronic Care Management",
    slug: "chronic-care-management",
    description: "Personalized care plans for conditions like diabetes, hypertension, and asthma.",
    longDescription:
      "Our Chronic Care Management program provides structured, continuous support for patients managing long-term conditions such as diabetes, hypertension, asthma, arthritis, and heart disease. We combine regular monitoring, medication management, lifestyle coaching, and digital follow-ups to ensure improved quality of life and better health outcomes.",
    image: "/images/services/chronic-care.jpg",
    benefits: [
      "Customized care plans tailored to each condition",
      "Regular follow-up and progress monitoring",
      "Education on nutrition, medication, and daily habits",
      "Reduced emergency visits through proactive care"
    ],
    procedure: [
      "Initial chronic condition evaluation",
      "Development of personalized management plan",
      "Monthly or bi-weekly follow-ups (in-person or virtual)",
      "Ongoing medication and lifestyle adjustments"
    ],
    cta: "Start Chronic Care Management",
  },

  {
    id: 3,
    icon: FaVial,
    title: "Laboratory Testing",
    slug: "laboratory-testing",
    description: "Reliable on-site diagnostics with fast digital results.",
    longDescription:
      "Our Laboratory Testing services provide fast, accurate diagnostic results to support effective treatment. We offer comprehensive bloodwork, urine analysis, infection screening, pregnancy tests, wellness panels, and more. All tests are performed by certified technicians using modern diagnostic equipment, with results delivered securely online.",
    image: "/images/services/lab-testing.jpg",
    benefits: [
      "Fast and reliable diagnostic testing",
      "Digital or secure email delivery of results",
      "Accurate data to support treatment decisions",
      "Wide range of in-house tests available"
    ],
    procedure: [
      "Physician order or walk-in request",
      "Sample collection by trained technicians",
      "Laboratory processing and quality verification",
      "Results delivered digitally with follow-up explanation"
    ],
    cta: "Book a Laboratory Test",
  },

  {
    id: 4,
    icon: FaLeaf,
    title: "Wellness Programs",
    slug: "wellness-programs",
    description: "Personalized guidance on nutrition, exercise, and stress management.",
    longDescription:
      "Our Wellness & Lifestyle Programs help patients build healthier habits through expert-led coaching. We focus on nutrition planning, fitness guidance, weight management, sleep improvement, and stress reduction strategies. These programs help reduce chronic disease risk and improve long-term wellness.",
    image: "/images/services/wellness-programs.jpg",
    benefits: [
      "Personalized nutrition and fitness guidance",
      "Stress reduction and mental wellness support",
      "Healthy habit-building frameworks",
      "Holistic improvement in overall lifestyle"
    ],
    procedure: [
      "Wellness assessment and goal setting",
      "Nutrition and exercise planning",
      "Weekly or bi-weekly coaching sessions",
      "Progress review and lifestyle adjustments"
    ],
    cta: "Join a Wellness Program",
  },

  {
    id: 5,
    icon: FaVideo,
    title: "Telemedicine",
    slug: "telemedicine",
    description: "Virtual consultations for follow-ups and non-emergency medical concerns.",
    longDescription:
      "Our Telemedicine service allows you to consult with a healthcare provider from the comfort of your home. Ideal for follow-ups, medication reviews, chronic condition check-ins, mild symptoms, and counseling sessions. Secure video calls ensure privacy, convenience, and timely care when you need it.",
    image: "/images/services/telemedicine.jpg",
    benefits: [
      "Convenient remote access to healthcare",
      "Secure and private consultations",
      "Perfect for follow-ups and non-emergency care",
      "Saves time and reduces clinic visits"
    ],
    procedure: [
      "Online appointment booking",
      "Secure video call session with provider",
      "Assessment and treatment recommendations",
      "Digital prescriptions or follow-up scheduling"
    ],
    cta: "Book a Telemedicine Visit",
  },
];
