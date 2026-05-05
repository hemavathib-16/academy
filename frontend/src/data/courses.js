import { BookOpen, Scale, FlaskConical, GraduationCap, Award, Target, Atom, Stethoscope } from "lucide-react";



export const courses = [
  {
    id: "upsc",
    title: "UPSC (IAS, IPS, IFS)",
    category: "civil",
    icon: Scale,
    description: "Complete coaching for UPSC Civil Services covering Prelims, Mains, and Interview preparation with experienced faculty. BMS College of Engineering is India's first private engineering college, founded in 1946 by Late Sri B.M. Sreenivasaiah. His son, Late Sri B.M. Narayan, later established BMS Educational Trust, which runs several prestigious institutions in Bengaluru, serving over 20,000 students. BMS Academy for Professional Courses was set up under the leadership of Dr. B.S. Ragini Narayan, Dr. P. Dyananda Pai, and Sri Aviram Sharma.",
    eligibility: "Graduate in any discipline",
    duration: "10 months (900+ Teaching Hours)",
    subjects: [
      "General Studies I–IV",
      "CSAT",
      "Essay",
      "Ethics, Integrity & Aptitude",
      "Art & Culture",
      "Geography",
      "Economy",
      "History",
      "Governance",
      "Social Issues",
      "General Science & Technology",
      "Current Affairs"
    ],
    batchFormat: "Offline & Online (Tailored classroom programs)",
    highlights: [
      "Mentorship from aspiration to achievement",
      "Technology-integrated, customised performance tracking",
      "Pedagogy aligned to exam demands",
      "Organised preparation strategy",
      "Periodic tests simulated to UPSC CSE pattern",
      "Comprehensive coverage of Prelims and Mains syllabus",
      "Classes by top faculty",
      "Focus on conceptual clarity and current affairs",
      "Weekly classroom tests (objective and subjective)",
      "Weekly newspaper analysis sessions",
      "Prelims test series, Mains test series, and interview guidance",
      "24×7 academic support"
    ],
    brochureContent: {
      aboutAcademy: "BMS College of Engineering is India's first private engineering college, founded in 1946 by Late Sri B.M. Sreenivasaiah. His son, Late Sri B.M. Narayan, later established BMS Educational Trust, which runs several prestigious institutions in Bengaluru, serving over 20,000 students. BMS Academy for Professional Courses was set up under the leadership of Dr. B.S. Ragini Narayan, Dr. P. Dyananda Pai, and Sri Aviram Sharma. The Academy offers high-quality civil services coaching in collaboration with India4IAS Academy, aiming to bridge the gap and improve success rates in UPSC exams. Faculty are practicing professionals with deep subject expertise who use case studies, simulations, and test series to make learning effective. The campus is centrally located in Bengaluru with excellent connectivity.",

      india4ias: "India4IAS is a venture of Reimagining India Eduinnovations Pvt. Ltd., a Bengaluru-based company focused on creating a strong ecosystem for competitive exam preparation. Their founding team brings proven techniques in instruction, mentoring, and guidance for IAS aspirants.",

      steeringCommittee: [
        { name: "Dr. P. Dayananda Pai", role: "Life Trustee, BMSET", position: "Chairman" },
        { name: "Dr. B. S. Ragini Narayan", role: "DTMS & Chairperson, BMSET", position: "Member" },
        { name: "Prof. Pankaj Choudhary", role: "Principal, BMSCCM", position: "Member Secretary" },
        { name: "Sri. Aviram Sharma", role: "Trustee BMSET", position: "Member" },
        { name: "Dr. C. S. Kedar", role: "IAS (Retd.), Former Addl. Chief Secretary, GOK", position: "Member" },
        { name: "Sri. Srinivasa P. C.", role: "CEO, India 4 IAS", position: "Member" },
        { name: "Wg. Cdr. R. A. Raghavan", role: "Director (Admin), BMSET", position: "Member" }
      ],

      courseDetails: {
        name: "IAS — Prelims + Mains + Interview",
        duration: "10 months",
        teachingHours: "900+ Teaching Hours",
        description: "Tailored classroom programs with experienced trainers and a tech-based learning system"
      },

      keyFeatures: [
        "Mentorship from aspiration to achievement",
        "Technology-integrated, customised performance tracking (online and offline)",
        "Pedagogy aligned to exam demands",
        "Organised preparation strategy",
        "Periodic tests simulated to UPSC CSE pattern",
        "Comprehensive coverage of Prelims and Mains syllabus",
        "Classes by top faculty",
        "Focus on conceptual clarity and current affairs",
        "Weekly classroom tests (objective and subjective)",
        "Weekly newspaper analysis sessions",
        "Prelims test series, Mains test series, and interview guidance",
        "24×7 academic support"
      ],

      results2024: {
        description: "The academy celebrated results across Classroom Programme, Test Series, and Margadarshi tracks.",
        notableRanks: [
          41, 425, 462, 482, 523, 529, 544, 567, 588, 589, 615, 690, 724,
          805, 812, 826, 906, 910, 962, 968, 981, 982, 984
        ]
      },

      faculty: [
        { name: "Mr. M Abdul Kareem", subject: "Art & Culture", experience: "25 years experience" },
        { name: "Mr. Vilas Rathod", subject: "Geography Ecology", experience: "" },
        { name: "Mr. G Srinivas", subject: "Ethics, Integrity & Aptitude", experience: "" },
        { name: "Mr. Prashanth", subject: "Economy, History & Governance", experience: "" },
        { name: "Mr. Nikhil Gowda", subject: "Economy, History & Governance", experience: "" },
        { name: "Mr. Akshara Damle", subject: "Social Issues", experience: "" },
        { name: "Mr. Shaheed Hashmi", subject: "General Science & Technology", experience: "" },
        { name: "Mr. Basavaraj", subject: "Geography/CSAT", experience: "" },
        { name: "Mr. Prashanth Shenoy", subject: "General Science & Technology", experience: "Cambridge Certified Mentor" },
        { name: "Mr. Darshan Kumar C S", subject: "CSAT & Current Affairs", experience: "" }
      ],

      infrastructure: [
        "ICT-enabled classrooms",
        "Computer lab",
        "Well-stocked library",
        "Mobile app",
        "Study materials",
        "Notes",
        "Online resources"
      ],

      teachingMethodology: "A blend of lectures, interactive sessions, and group discussions. Faculty provide personalised attention to help students overcome weaknesses and build strengths.",

      mockTests: "Regular mock tests are conducted to track progress. Detailed feedback and analysis are provided to help students learn from their mistakes.",

      admissions: "A simple and transparent admission process. Students must meet eligibility criteria and pay the course fee. Scholarships are available for deserving students.",

      contactDetails: {
        basavanagudi: "BMS College of Engineering Campus, Bull Temple Road, Basavanagudi, Bengaluru – 560019",
        yelahanka: "BMS Institute of Technology & Management, Doddaballapura Main Road, Yelahanka, Avalahalli, Bengaluru – 560119"
      }
    }
  },
  {
    id: "professional-courses",
    title: "Professional Courses (CA/CS/CMA)",
    category: "commerce",
    icon: BookOpen,
    description: "Comprehensive coaching for Chartered Accountancy (CA), Company Secretary (CS), and Cost & Management Accountancy (CMA) with top faculty and proven success rates.",
    eligibility: "10+2 for Foundation courses",
    duration: "4–8 months per level",
    subjects: ["Accounting", "Law", "Costing", "Taxation", "Auditing", "Financial Management", "Strategic Management", "Company Law", "Securities Law", "Corporate Governance", "Cost Accounting", "Management Accounting"],
    batchFormat: "Offline & Online (Regular / Fast Track)",
    highlights: ["90%+ pass rate", "Ranker-producing faculty", "Extensive practice tests", "Doubt-clearing sessions", "Integrated B.COM + Professional courses", "Industry experts as faculty"],
    brochureContent: {
      coverPage: {
        title: "This is Your Path to Success in CA, CS, & CMA Exams",
        institution: "BMS Educational Trust — BMS Academy for Professional Courses"
      },
      introduction: "Founded in 1946 by Late Sri B.M. Sreenivasaiah, BMS College of Engineering holds the distinction of being India's first private sector engineering college. Under the guidance of the BMS Educational Trust, established by Sri B.S. Narayan, the trust has established several prestigious educational institutions in Bengaluru.\n\nBMS Academy for Professional Courses provides top-notch coaching for aspiring Chartered Accountants, Company Secretaries, and Cost Management Accountants. It provides offline/online (Live) classes for the convenience of the students. The academy's faculty comprise practising professionals who bring a unique dimension to teaching through case studies, simulations, and test series. With modern infrastructure and a central location, the academy offers convenient access for students across Bengaluru. Its primary aim is to bridge the knowledge gap and increase students' success rate by providing comprehensive training, coaching, guidance, and support.\n\nBMS Academy is recognized for empowering students and helping them achieve their career goals in the field of professional courses. The academic and administrative affairs of the academy are managed by the Steering Committee Members (SCM) appointed by BMS Educational Trust.",
      steeringCommittee: [
        { name: "Dr. P. Dayananda Pai", role: "Chairman", designation: "Life Trustee, BMSET" },
        { name: "Dr. B. S. Ragini Narayan", role: "Member", designation: "DTMS & Chairperson, BMSET" },
        { name: "Sri. Aviram Sharma", role: "Member", designation: "Trustee, BMSET" },
        { name: "Dr. C. S. Kedar, IAS (Retd.)", role: "Member", designation: "Former Addl. Chief Secretary, GOK" },
        { name: "Mr. Tushar Sinha", role: "Member", designation: "Director, Centum Academy" },
        { name: "Sri. Srinivasa P.C.", role: "Member", designation: "CEO, India4IAS" },
        { name: "Dr. Bheemsha Arya", role: "Member", designation: "Principal, BMSCE" },
        { name: "Wg. Cdr. R. A. Raghavan", role: "Member", designation: "Director (Admin), BMSET" },
        { name: "Prof. Pankaj Choudhary", role: "Member Secretary", designation: "Principal, BMSCCM" }
      ],
      coursesOffered: {
        ca: {
          foundation: "4 papers",
          intermediate: {
            group1: "3 papers",
            group2: "3 papers"
          },
          final: {
            group1: "4 papers",
            group2: "3 papers"
          }
        },
        cs: {
          foundation: "4 papers",
          executive: {
            group1: "4 papers",
            group2: "3 papers"
          },
          professional: {
            module1: "3 papers",
            module2: "3 papers",
            module3: "3 papers"
          }
        },
        cma: {
          foundation: "4 papers",
          intermediate: "8 papers",
          final: "8 papers"
        }
      },
      faculty: [
        // CA Foundation
        { name: "CA Balaji", course: "CA Foundation", subject: "Principles and Practice of Accounting" },
        { name: "CS Rajesh", course: "CA Foundation", subject: "Business Laws and Business Correspondence and Reporting" },
        { name: "CA Subhadra", course: "CA Foundation", subject: "Business Mathematics, Logical Reasoning, and Statistics" },
        { name: "CA Poorna Chandra", course: "CA Foundation", subject: "Business Economics and Business and commercial knowledge" },
        // CA Intermediate
        { name: "Mr Kaleshwar", course: "CA Intermediate", subject: "Paper I Advanced Accounting" },
        { name: "Mr Madhvaraj", course: "CA Intermediate", subject: "Paper II Corporate and other laws" },
        { name: "Mr Kanthi Lal", course: "CA Intermediate", subject: "Paper III Taxation" },
        { name: "Mr Dibyush Shah", course: "CA Intermediate", subject: "Paper IV Cost and Management Accounting" },
        { name: "CS Harish V K", course: "CA Intermediate", subject: "Paper V Auditing and Ethics" },
        { name: "CA Poorna Chandra", course: "CA Intermediate", subject: "Paper VI Financial Management" },
        // CS Foundation
        { name: "Mr Srinanth S", course: "CS Foundation", subject: "Business Communication" },
        { name: "CS Lessanuddin", course: "CS Foundation", subject: "Legal Aptitude, Logical Reasoning and Quantitative Aptitude" },
        { name: "CA Poorna Chandra", course: "CS Foundation", subject: "Economic & Business Environment" },
        { name: "Dr Deepa", course: "CS Foundation", subject: "Current Affairs, Presentation and Communication Skills" },
        // CS Executive
        { name: "CS Rajesh", course: "CS Executive", subject: "Paper I Jurisprudence, Interpretation and General Laws" },
        { name: "Mr Venkatesh", course: "CS Executive", subject: "Paper 2 Company Law and Practice" },
        { name: "Muskaan", course: "CS Executive", subject: "Paper 3 Setting up of Business, Industrial & Business laws" },
        { name: "Prof Dibyush Shah", course: "CS Executive", subject: "Paper 4 Corporate accounting and Financial Management" },
        { name: "CS Harish", course: "CS Executive", subject: "Paper 5 Capital market and Securities laws" },
        { name: "Muskaan", course: "CS Executive", subject: "Paper 6 Economic, commercial & Intellectual property laws" },
        { name: "Harshitha", course: "CS Executive", subject: "Paper 7 Tax laws and Practices" }
      ],
      successStories: {
        description: "Over the years, BMS Academy has trained many successful candidates who have become Chartered Accountants and Company Secretaries. Alumni have gone on to hold prestigious positions in the corporate world, and most have started their own practice. The academy regularly invites successful candidates to share their stories with current students, inspiring them to work harder and achieve their goals.",
        caFoundation: [
          "Dwijesh N M — 2023 Batch",
          "Sinchana B Shetty — 2023 Batch",
          "Prerana Suresh — 2023 Batch",
          "Tanushree R — 2024 Batch",
          "CA Harshitha G — Year of Passing 2024"
        ],
        csFoundation: [
          "Chaitra A (301317748) — 2024 Batch",
          "Brunda K (301317401) — 2024 Batch",
          "I Durga (301317522) — 2024 Batch",
          "Monisha (301317468) — 2024 Batch",
          "Ananya (301317578) — 2024 Batch"
        ]
      },
      infrastructure: "BMS Academy is equipped with the latest technology and facilities to enhance learning, including a well-stocked library, ICT-enabled classrooms, and a computer lab. The academy also provides a mobile app, study material, notes, and online resources to all students.",
      teachingMethodology: "A unique teaching methodology focused on conceptual understanding and application, using a combination of lectures, interactive sessions, and group discussions. Faculty members provide personalised attention and guidance, helping students overcome weaknesses and build strengths.",
      mockTests: "Regular mock tests are conducted to assess students' progress and identify areas for improvement. Detailed feedback and analysis are provided to help students understand their mistakes and work on them.",
      admissions: "A simple and transparent admission process. Students need to meet the eligibility criteria and pay the course fee. Scholarships are available for deserving students.",
      whyChooseUs: [
        "Highly Qualified and Reputed Faculty Members",
        "Integrated coaching for B.COM (Day/Evening) + CA/CS/CMA",
        "Excellent infrastructure with modern teaching aids",
        "Periodic motivation classes by industry experts and renowned professionals",
        "Limited Batch Size for personalised attention",
        "Open Discussions / Case Studies",
        "Weekly / Daily mock tests, Exams & Evaluation",
        "Completes courses in time and allows self-study",
        "Reasonable and easily affordable fee structure",
        "Fee Scholarship for Meritorious students"
      ]
    }
  },
  {
    id: "cat",
    title: "CAT 2026 Preparation Program",
    category: "commerce",
    icon: GraduationCap,
    description: "CAT 2026 preparation for top IIMs and leading B-schools, delivered in collaboration with T.I.M.E.",
    eligibility: "Final year graduation students and graduates from any discipline",
    duration: "350+ hours",
    subjects: ["Quantitative Aptitude", "Data Interpretation & Logical Reasoning", "Verbal Ability & Reading Comprehension", "Decision Making", "Current Affairs"],
    batchFormat: "Offline & Online",
    highlights: [
      "350+ hours of expert classes",
      "Special worksheets for every session",
      "12 hard copy study materials",
      "50 hours OMETS training",
      "Advanced question practice for top B-schools",
      "Decision-making training for XAT",
      "Current affairs sectional tests"
    ],
    brochureContent: {
      coverPage: {
        title: "CAT 2026 Preparation Program — Crack India's Most Prestigious MBA Entrance Exam",
        institution: "BMS Academy + T.I.M.E."
      },
      about: "The CAT is India's most competitive management entrance examination conducted every year by the IIMs for admission into premier MBA and PGDM programs.",
      why: ["Top IIMs and leading B-Schools", "High-paying corporate careers", "Leadership roles across industries", "Global career opportunities"],
      support: ["Foundation classes for non-math students", "Revision and backup sessions", "College selection assistance", "GWPI preparation after call letters"],
      contactDetails: {
        basavanagudi: "BMS College of Engineering Campus, Bull Temple Road, Basavanagudi, Bengaluru-560019",
        yelahanka: "BMS Institute of Technology & Management, Doddaballapura Main Road, Yelahanka, Avalahalli, Bengaluru-560119",
        phone: "8971736008 / 7889958269 / 9036510011"
      }
    }
  },
  {
    id: "gate",
    title: "GATE Coaching",
    category: "science",
    icon: FlaskConical,
    description: "GATE coaching in association with VANI Institute — India's first GATE coaching institute in Bangalore.",
    eligibility: "Passed out / 4th year engineering students",
    duration: "6–12 months",
    subjects: ["Engineering Mathematics", "Subject-specific engineering topics", "General Aptitude", "Physics", "Chemistry"],
    batchFormat: "Offline & Online",
    highlights: [
      "Goal clarity and career mapping",
      "M.Tech and research preparation",
      "PSU recruitment and interview coaching",
      "Strong concept building and application",
      "Mock tests with deep analysis",
      "Future-ready career choices"
    ],
    brochureContent: {
      goal: "Define your post-engineering goal early and build the right roadmap for M.Tech, research, PSUs, or abroad.",
      higherEducation: ["M.Tech – technology-focused path", "Stipend of ₹12,400/- for M.Tech", "Ph.D. option later"],
      research: ["ME/MS, MS by Research, PhD", "Research-oriented programs with project work", "Stipend ₹25,000/- per month"],
      gateFacts: ["Started in 1984", "Expanded from M.Tech admission to PSU recruitment", "12+ lakh students now appear"],
      psuPackages: ["POWERGRID 17.9L", "GAIL 11.7L", "IOCL 11.25L", "ONGC 12L", "NHAI 8L", "DRDO 7L"],
      contactDetails: {
        basavanagudi: "9036-510-011 / 8971-736-008",
        yelahanka: "91 82965 61025"
      }
    }
  },
  {
    id: "gre",
    title: "GRE Preparation Program",
    category: "commerce",
    icon: GraduationCap,
    description: "Expert GRE coaching for high scores and admission to top global universities.",
    eligibility: "Graduates and final year students planning to study abroad",
    duration: "4–6 months",
    subjects: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
    batchFormat: "Offline & Online",
    highlights: [
      "Experienced GRE instructors",
      "Structured course content",
      "Comprehensive study materials",
      "Multiple full-length mock exams",
      "Regular performance tracking and mentoring"
    ],
    brochureContent: {
      overview: "The GRE is an internationally recognized standardized test used for admission to graduate programs across the USA, Canada, UK, Australia, and Europe.",
      sections: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
      scoreRange: ["Verbal: 130-170", "Quant: 130-170", "AWA: 0-6"],
      validity: "Scores are valid for 5 years",
      whyChoose: ["Expert faculty", "Thorough practice resources", "Mock tests and analytics", "Guidance for application and funding"],
      locations: {
        basavanagudi: "BMSCE Campus, Bull Temple Road, Bengaluru-560019",
        yelahanka: "BMSIT Campus, Doddaballapura Main Rd, Yelahanka, Avalahalli, Bengaluru-560119"
      }
    }
  },
  {
    id: "pgcet",
    title: "PGCET – MBA Coaching",
    category: "commerce",
    icon: BookOpen,
    description: "Admissions Open for Academic Year 2026–2028. Program by BMS Academy in association with T.I.M.E.",
    eligibility: "Graduates in any discipline",
    duration: "2 Years (4 Semesters)",
    subjects: ["Marketing", "Finance", "Human Resource Management", "Business Analytics"],
    batchFormat: "Offline & Online",
    highlights: [
      "Guidance for Government Quota Seats",
      "Offline Examination Pattern with No Negative Marking",
      "Expert Faculty & Concept-Based Teaching",
      "Effective Shortcuts and Exam Strategies",
      "Regular Mock Tests & Doubt-Clearing Sessions"
    ],
    brochureContent: {
      coverPage: {
        title: "PGCET – MASTER OF BUSINESS ADMINISTRATION (MBA)",
        institution: "BMS ACADEMY FOR PROFESSIONAL COURSES | T.I.M.E – Triumphant Institute of Management Education Pvt. Ltd."
      },
      about: "To be a premier institution offering high-quality coaching for students aspiring to succeed in competitive examinations and build successful careers. Our mission is to bridge the gap between student preparation and exam requirements, improving performance and success rates. We provide excellent training, guidance, and academic support through experienced and practicing professionals.",
      why: [
        "Experienced Faculty & Industry Experts",
        "Case-Study Based Learning",
        "Internship & Placement Support",
        "Personality & Leadership Development"
      ],
      keyFeatures: [
        "60+ Hours of Comprehensive Classes",
        "Interview Training, Mentoring & Doubt-Solving Sessions",
        "Access to Topic-wise Tests for effective preparation",
        "Guidance for the College Selection Process",
        "Access to Student Home Portal for learning resources",
        "Hard Copy of Study Materials provided",
        "Articles and Monthly E-Magazine for updated insights"
      ],
      support: [
        "Guidance for Government Quota Seats in Affordable MBA Colleges",
        "Offline Examination Pattern with No Negative Marking",
        "Expert & Experienced Faculty with Concept-Based Teaching",
        "Effective Shortcuts and Exam Strategies to improve performance",
        "Regular Mock Tests to track progress and boost confidence",
        "Dedicated Doubt-Clearing Sessions for better understanding",
        "Comprehensive Study Materials and Practice Sets"
      ],
      contactDetails: {
        basavanagudi: "BMS College of Engineering Campus, Bull Temple Road, Basavanagudi, Bengaluru-560019",
        yelahanka: "BMS Institute of Technology & Management, Doddaballapura Main Road, Yelahanka, Avalahalli, Bengaluru-560119",
        phone: "8971736008 / 7889958269 / 9036510011"
      }
    }
  },
  {
    id: "iit-jee",
    title: "IIT-JEE (Main & Advanced)",
    category: "science",
    icon: Atom,
    description: "Exclusive JEE coaching in collaboration with Sri Chaitanya Academy, delivered with daily practice and expert doubt sessions.",
    eligibility: "Class 11 & 12 / 12th Pass",
    duration: "1–2 years",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    batchFormat: "Offline (PUC classes at BMSCW Campus)",
    highlights: [
      "PUC classes at BMSCW Campus",
      "Daily Practice Papers (DDPs)",
      "Weekly tests and monthly grand tests",
      "Concept-building workshops",
      "Doubt-clearing sessions",
      "Crash courses before exams"
    ],
    brochureContent: {
      collaboration: "BMS Academy in association with Sri Chaitanya Academy for JEE, NEET & KCET coaching.",
      location: "BMS College for Women (PUC), Bugle Rock Road, Basavanagudi, Bengaluru",
      contact: "89717 36008 / 90365 10011 | bmsiasacademy@gmail.com"
    }
  },
  {
    id: "kcet",
    title: "KCET Coaching",
    category: "science",
    icon: Target,
    description: "KCET preparation with Sri Chaitanya collaboration, focusing on Karnataka syllabus and board integration.",
    eligibility: "PU / 12th students",
    duration: "6–12 months",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    batchFormat: "Offline (PUC classes at BMSCW Campus)",
    highlights: [
      "Karnataka syllabus focus",
      "Daily practice papers",
      "Weekly tests with detailed analysis",
      "Concept workshops",
      "Doubt-clearing support",
      "Crash courses before exams"
    ],
    brochureContent: {
      collaboration: "BMS Academy in association with Sri Chaitanya Academy for KCET coaching.",
      location: "BMS College for Women (PUC), Bugle Rock Road, Basavanagudi, Bengaluru",
      contact: "89717 36008 / 90365 10011 | bmsiasacademy@gmail.com"
    }
  },
  {
    id: "neet",
    title: "NEET Coaching",
    category: "science",
    icon: Stethoscope,
    description: "NEET preparation with expert Sri Chaitanya faculty, exam-focused tests, and counseling support.",
    eligibility: "PU / 12th (Science – Biology)",
    duration: "1–2 years",
    subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    batchFormat: "Offline (PUC classes at BMSCW Campus)",
    highlights: [
      "Weekly tests and detailed analysis",
      "Concept-building workshops",
      "Doubt-clearing sessions",
      "Crash courses before exams",
      "Motivational counseling",
      "24/7 academic support"
    ],
    brochureContent: {
      collaboration: "BMS Academy in association with Sri Chaitanya Academy for NEET coaching.",
      location: "BMS College for Women (PUC), Bugle Rock Road, Basavanagudi, Bengaluru",
      contact: "89717 36008 / 90365 10011 | bmsiasacademy@gmail.com"
    }
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

export const courseCategories = [
  {
    id: "civil",
    title: "Civil Services",
    description: "Expert coaching for UPSC and other administrative service exams.",
    icon: Scale,
  },
  {
    id: "commerce",
    title: "Commerce",
    description: "Comprehensive preparation for CA, CS, CMA, and other professional courses.",
    icon: BookOpen,
  },
  {
    id: "science",
    title: "Science",
    description: "Rigorous training for IIT-JEE, NEET, KCET, and science foundation.",
    icon: Atom,
  },
];
