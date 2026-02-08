import { BookOpen, Scale, FlaskConical, GraduationCap, Award, Target, Atom, Stethoscope } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  category: "civil" | "commerce" | "science";
  icon: any;
  description: string;
  eligibility: string;
  duration: string;
  subjects: string[];
  batchFormat: string;
  highlights: string[];
}

export const courseCategories = [
  {
    id: "civil",
    title: "Civil Services Coaching",
    description: "Comprehensive preparation for India's most prestigious examinations",
    icon: Scale,
    color: "from-navy to-navy-light",
  },
  {
    id: "commerce",
    title: "Commerce Coaching",
    description: "Expert guidance for CA, CS & CMA aspirants",
    icon: BookOpen,
    color: "from-gold-dark to-gold",
  },
  {
    id: "science",
    title: "Science Competitive Exams",
    description: "Structured coaching for engineering & medical entrance exams",
    icon: FlaskConical,
    color: "from-navy-light to-navy",
  },
];

export const courses: Course[] = [
  {
    id: "upsc",
    title: "UPSC (IAS, IPS, IFS)",
    category: "civil",
    icon: Scale,
    description: "Complete coaching for UPSC Civil Services covering Prelims, Mains, and Interview preparation with experienced faculty.",
    eligibility: "Graduate in any discipline",
    duration: "12–18 months",
    subjects: ["General Studies I–IV", "CSAT", "Essay", "Optional Subject", "Ethics", "Interview Preparation"],
    batchFormat: "Offline & Online (Weekend / Weekday)",
    highlights: ["Daily answer writing practice", "Current affairs sessions", "Mock interviews", "Test series"],
  },
  {
    id: "kpsc",
    title: "KPSC & State Services",
    category: "civil",
    icon: Award,
    description: "Targeted preparation for Karnataka Public Service Commission and other state-level competitive examinations.",
    eligibility: "Graduate in any discipline",
    duration: "10–12 months",
    subjects: ["General Studies", "Kannada Language", "Indian Constitution", "Karnataka History", "Current Affairs"],
    batchFormat: "Offline & Online",
    highlights: ["State-specific focus", "Kannada medium available", "Weekly tests", "Previous year paper analysis"],
  },
  {
    id: "optional-subjects",
    title: "Optional Subject Coaching",
    category: "civil",
    icon: Target,
    description: "Specialized coaching for UPSC optional subjects with subject-matter experts.",
    eligibility: "UPSC aspirants",
    duration: "6–8 months",
    subjects: ["Public Administration", "Sociology", "History", "Geography", "Political Science"],
    batchFormat: "Offline & Online",
    highlights: ["Subject experts", "Answer writing practice", "Previous year analysis", "Study material provided"],
  },
  {
    id: "ca",
    title: "CA (Foundation, Inter, Final)",
    category: "commerce",
    icon: BookOpen,
    description: "Comprehensive Chartered Accountancy coaching from Foundation to Final level with exceptional pass rates.",
    eligibility: "10+2 for Foundation, CA Foundation cleared for Inter",
    duration: "4–8 months per level",
    subjects: ["Accounting", "Law", "Costing", "Taxation", "Auditing", "Financial Management", "Strategic Management"],
    batchFormat: "Offline & Online (Regular / Fast Track)",
    highlights: ["90%+ pass rate", "Ranker-producing faculty", "Extensive practice tests", "Doubt-clearing sessions"],
  },
  {
    id: "cs",
    title: "CS (Company Secretary)",
    category: "commerce",
    icon: GraduationCap,
    description: "Professional coaching for all levels of the Company Secretary examination.",
    eligibility: "10+2 for Foundation",
    duration: "4–6 months per level",
    subjects: ["Company Law", "Securities Law", "Corporate Governance", "Tax Laws", "Economic Laws"],
    batchFormat: "Offline & Online",
    highlights: ["Industry-experienced faculty", "Practical training guidance", "Mock tests", "Placement support"],
  },
  {
    id: "cma",
    title: "CMA / ICWA",
    category: "commerce",
    icon: Award,
    description: "Cost and Management Accountancy coaching for all three levels — Foundation, Intermediate, and Final.",
    eligibility: "10+2 for Foundation",
    duration: "4–6 months per level",
    subjects: ["Cost Accounting", "Management Accounting", "Financial Accounting", "Business Laws", "Direct & Indirect Taxation"],
    batchFormat: "Offline & Online",
    highlights: ["Experienced CMA faculty", "Comprehensive study material", "Regular assessments", "Career guidance"],
  },
  {
    id: "iit-jee",
    title: "IIT-JEE (Main & Advanced)",
    category: "science",
    icon: Atom,
    description: "Rigorous preparation for IIT-JEE with a proven track record of selections into top IITs and NITs.",
    eligibility: "Class 11 & 12 / 12th Pass",
    duration: "1–2 years",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    batchFormat: "Offline (Regular / Integrated with PU)",
    highlights: ["IIT alumni faculty", "Daily problem-solving sessions", "All-India test series", "Integrated PU + JEE program"],
  },
  {
    id: "kcet",
    title: "KCET",
    category: "science",
    icon: Target,
    description: "Focused coaching for Karnataka Common Entrance Test for engineering and medical admissions.",
    eligibility: "PU / 12th students",
    duration: "6–12 months",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    batchFormat: "Offline & Online",
    highlights: ["Karnataka syllabus focus", "Previous year analysis", "Weekly mock tests", "Board exam integration"],
  },
  {
    id: "neet",
    title: "NEET",
    category: "science",
    icon: Stethoscope,
    description: "Medical entrance exam preparation with biology-focused coaching and extensive practice.",
    eligibility: "PU / 12th (Science – Biology)",
    duration: "1–2 years",
    subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    batchFormat: "Offline (Regular / Long Term)",
    highlights: ["NEET specialist faculty", "NCERT-focused approach", "Daily practice tests", "Doubt clearing sessions"],
  },
  {
    id: "foundation",
    title: "Foundation Courses (PU Level)",
    category: "science",
    icon: GraduationCap,
    description: "Early preparation for competitive exams alongside PU board studies.",
    eligibility: "Class 10 pass",
    duration: "2 years (Integrated with PU)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Board Exam Preparation"],
    batchFormat: "Offline (Integrated with PU College)",
    highlights: ["Board + competitive exam integration", "Strong fundamentals", "Regular assessments", "Mentorship program"],
  },
];
