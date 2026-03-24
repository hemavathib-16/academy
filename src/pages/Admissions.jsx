import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AiAssistant from "@/components/AiAssistant";
import { toast } from "sonner";

const steps = [
  { step: "01", title: "Choose Your Course", desc: "Browse our programs and select the course that matches your career goals." },
  { step: "02", title: "Fill Application", desc: "Complete the online application form with your academic details." },
  { step: "03", title: "Counselling Session", desc: "Attend a free counselling session with our academic advisors." },
  { step: "04", title: "Entrance Assessment", desc: "Take a diagnostic test to help us customize your learning plan." },
  { step: "05", title: "Enroll & Start", desc: "Complete fee payment and start your journey with BMS Academy." },
];

const fees = [
  { course: "UPSC (Full Course)", duration: "12-18 months" },
  { course: "KPSC Coaching", duration: "10-12 months" },
  { course: "CA Foundation", duration: "4 months" },
  { course: "CA Inter", duration: "6-8 months" },
  { course: "CA Final", duration: "6-8 months" },
  { course: "IIT-JEE (2 Year)", duration: "24 months" },
  { course: "NEET (1 Year)", duration: "12 months" },
  { course: "KCET Coaching", duration: "6-12 months" },
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    fatherName: "",
    motherName: "",
    parentPhone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We will contact you soon.");
    setFormData({ name: "", dob: "", gender: "", phone: "", email: "", education: "", course: "", fatherName: "", motherName: "", parentPhone: "" });
  };

  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Join Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Admissions 2026-27</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Begin your journey towards success. Applications are now open for all programs.</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Process" title="How to Apply" subtitle="Follow these simple steps to join BMS Academy" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-card rounded-xl p-6 card-shadow border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-lg font-bold text-gold-dark">{s.step}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-card rounded-2xl p-8 sm:p-10 card-shadow border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Application Form</h3>
                <p className="text-muted-foreground">Fill out the form below to initiate your admission process.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                {/* Student Details Section */}
                <div>
                  <h4 className="font-display font-semibold text-gold-dark mb-4 border-b border-border/50 pb-2">Student Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="Enter student's full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Date of Birth *</label>
                      <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Gender *</label>
                      <div className="relative">
                        <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all appearance-none cursor-pointer hover:border-gold/30">
                          <option value="" disabled>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Student Phone *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="+91 0000000000" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 mt-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="student@example.com" />
                    </div>
                  </div>
                </div>

                {/* Academic Details Section */}
                <div>
                  <h4 className="font-display font-semibold text-gold-dark mb-4 border-b border-border/50 pb-2">Academic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Current Education *</label>
                      <input required type="text" name="education" value={formData.education} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="e.g. 12th Std, B.Com, PUC" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Course Opted For *</label>
                      <div className="relative">
                        <select required name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all appearance-none cursor-pointer hover:border-gold/30">
                          <option value="" disabled>Select a target course</option>
                          {fees.map(f => <option key={f.course} value={f.course}>{f.course}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parent Details Section */}
                <div>
                  <h4 className="font-display font-semibold text-gold-dark mb-4 border-b border-border/50 pb-2">Parent / Guardian Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Father's Name *</label>
                      <input required type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="Enter father's name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Mother's Name *</label>
                      <input required type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="Enter mother's name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Parent's Phone *</label>
                      <input required type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all placeholder:text-muted-foreground/50 hover:border-gold/30" placeholder="+91 0000000000" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-4 bg-gold text-accent-foreground font-semibold rounded-xl hover:bg-gold-dark hover:scale-[1.01] transition-all gold-shadow flex items-center justify-center gap-2">
                    Submit Application <CheckCircle2 size={20} />
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-4">* All fields are mandatory</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* course duration*/}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Course" title="Course Duration" subtitle="Transparent and competitive pricing for all programs" />
          <div className="bg-card rounded-xl card-shadow border border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-6 py-4 font-semibold">Course</th>
                    <th className="text-left px-6 py-4 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.course} className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                      <td className="px-6 py-4 font-medium text-foreground">{f.course}</td>
                      <td className="px-6 py-4 text-muted-foreground">{f.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">* Fees are indicative and subject to revision. GST applicable. EMI options available.</p>
        </div>
      </section>

      {/* Admission Process & Fees */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <SectionHeading badge="Information" title="Admission & Fees" subtitle="Important details regarding your enrollment" />

          {/* Admission Policy */}
          <div className="bg-card rounded-xl border border-border/50 p-6 sm:p-8 card-shadow mb-8">
            <h3 className="text-xl font-bold font-display text-foreground mb-4">Admissions</h3>
            <p className="text-muted-foreground mb-4">
              We have a simple and transparent admission process. To enrol in our courses, students need to meet the eligibility criteria and pay the course fee. We also offer scholarships to deserving students.
            </p>
            <p className="text-muted-foreground">
              The students can visit the Campus and fill the application form for the course they would like to pursue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Schedule of Fees */}
            <div className="bg-card rounded-xl border border-border/50 p-6 card-shadow flex flex-col h-full">
              <h3 className="text-lg font-bold font-display text-foreground mb-3">SCHEDULE OF FEES</h3>
              <div className="text-muted-foreground text-sm space-y-3 flex-grow">
                <p>
                  The schedule of fees for the courses offered at the academy and the charges for the service rendered at the institution will be notified at the appropriate time.
                </p>
                <p>
                  The prescribed fees + GST in full shall be paid on or before the date specified in the fees structure issued along with selection letter.
                </p>
              </div>
            </div>

            {/* Mode of Payment */}
            <div className="bg-card rounded-xl border border-border/50 p-6 card-shadow flex flex-col h-full">
              <h3 className="text-lg font-bold font-display text-foreground mb-3">MODE OF PAYMENT</h3>
              <div className="text-muted-foreground text-sm space-y-3 flex-grow">
                <p>
                  All fees are to be paid by Bank Draft payable at Bangalore in favour of <strong>BMS ACADEMY FOR PROFESSIONAL COURSES</strong>, payable at Bangalore. Cash will not be accepted.
                </p>
                <p>
                  Students can also make NEFT/RTGS/ online Paytm transfers after collecting Bank details from the admission office.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="font-semibold text-destructive text-sm flex items-center gap-2">
                  Fees once paid will not be refunded.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AI Assistant replacing FAQs */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Support" title="Need Help?" subtitle="Chat with our intelligent assistant to find courses, understand topics, or get enrollment guidance." />
          <AiAssistant />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Ready to Apply?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Secure your seat at BMS Academy today. Limited seats available for 2026-27 batches.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="px-8 py-4 bg-gold text-accent-foreground rounded-xl font-semibold hover:bg-gold-dark transition-colors gold-shadow inline-flex items-center gap-2">
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors">
              Book Free Counselling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
