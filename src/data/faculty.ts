export interface FacultyMember {
  id: number;
  name: string;
  expertise: string;
  experience: string;
  category: "civil" | "commerce" | "science";
  qualification: string;
}

export const faculty: FacultyMember[] = [
  { id: 1, name: "Dr. Ramesh Kumar", expertise: "General Studies & Public Administration", experience: "20+ years", category: "civil", qualification: "Ph.D. in Political Science, Former IAS Officer" },
  { id: 2, name: "Prof. Sunita Rao", expertise: "Indian History & Culture", experience: "15+ years", category: "civil", qualification: "M.A., NET Qualified, Author of 5 books" },
  { id: 3, name: "Mr. Arvind Hegde", expertise: "Current Affairs & International Relations", experience: "12+ years", category: "civil", qualification: "M.A. in IR, Journalist turned Educator" },
  { id: 4, name: "CA Pradeep Jain", expertise: "Accounting & Financial Management", experience: "18+ years", category: "commerce", qualification: "CA, CMA, M.Com, All India Ranker" },
  { id: 5, name: "CA Neha Agarwal", expertise: "Taxation & Auditing", experience: "14+ years", category: "commerce", qualification: "CA, LL.B, DISA" },
  { id: 6, name: "CS Meera Iyer", expertise: "Company Law & Governance", experience: "10+ years", category: "commerce", qualification: "CS, LL.M, Corporate Governance Expert" },
  { id: 7, name: "Dr. Suresh Patil", expertise: "Physics (IIT-JEE & NEET)", experience: "16+ years", category: "science", qualification: "Ph.D. in Physics, IIT Bombay Alumni" },
  { id: 8, name: "Prof. Lakshmi Devi", expertise: "Chemistry", experience: "13+ years", category: "science", qualification: "M.Sc., NET Qualified, 500+ IIT selections" },
  { id: 9, name: "Mr. Vijay Anand", expertise: "Mathematics (JEE Advanced)", experience: "15+ years", category: "science", qualification: "M.Sc. Mathematics, IIT Madras Alumni" },
  { id: 10, name: "Dr. Kavitha Murthy", expertise: "Biology (NEET)", experience: "12+ years", category: "science", qualification: "MBBS, MD, Medical Entrance Specialist" },
  { id: 11, name: "Prof. Anil Shetty", expertise: "Economics & Indian Economy", experience: "17+ years", category: "civil", qualification: "M.A., Ph.D. in Economics" },
  { id: 12, name: "CMA Rajesh Verma", expertise: "Cost & Management Accounting", experience: "11+ years", category: "commerce", qualification: "CMA, MBA Finance" },
];

export const news = [
  { id: 1, title: "UPSC CSE 2025 Notification Released", date: "Feb 5, 2026", category: "Exam Update", description: "UPSC has released the Civil Services Examination 2025 notification. Last date to apply: March 15, 2026." },
  { id: 2, title: "BMS Academy Students Shine in CA Results", date: "Jan 20, 2026", category: "Achievement", description: "12 students from BMS Academy secured All India Ranks in the CA Final November 2025 examination." },
  { id: 3, title: "Free NEET Mock Test Series Starts", date: "Jan 15, 2026", category: "Event", description: "Register now for our free NEET 2026 mock test series starting February 1st. Open to all aspirants." },
  { id: 4, title: "New Batch: KPSC Prelims 2026", date: "Jan 10, 2026", category: "New Batch", description: "Fresh batch for KPSC Prelims preparation starts on February 10, 2026. Limited seats available." },
  { id: 5, title: "Republic Day Celebrations at BMS Campus", date: "Jan 26, 2026", category: "Event", description: "BMS Academy celebrated Republic Day with a special guest lecture by a retired IAS officer." },
  { id: 6, title: "Scholarship Exam for JEE/NEET 2026", date: "Dec 20, 2025", category: "Scholarship", description: "Up to 100% scholarship available based on performance in our scholarship entrance test." },
];
