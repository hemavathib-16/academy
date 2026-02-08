import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { step: "01", title: "Choose Your Course", desc: "Browse our programs and select the course that matches your career goals." },
  { step: "02", title: "Fill Application", desc: "Complete the online application form with your academic details." },
  { step: "03", title: "Counselling Session", desc: "Attend a free counselling session with our academic advisors." },
  { step: "04", title: "Entrance Assessment", desc: "Take a diagnostic test to help us customize your learning plan." },
  { step: "05", title: "Enroll & Start", desc: "Complete fee payment and start your journey with BMS Academy." },
];

const fees = [
  { course: "UPSC (Full Course)", duration: "12-18 months", fee: "₹1,20,000" },
  { course: "KPSC Coaching", duration: "10-12 months", fee: "₹80,000" },
  { course: "CA Foundation", duration: "4 months", fee: "₹45,000" },
  { course: "CA Inter", duration: "6-8 months", fee: "₹65,000" },
  { course: "CA Final", duration: "6-8 months", fee: "₹75,000" },
  { course: "IIT-JEE (2 Year)", duration: "24 months", fee: "₹1,50,000" },
  { course: "NEET (1 Year)", duration: "12 months", fee: "₹1,00,000" },
  { course: "KCET Coaching", duration: "6-12 months", fee: "₹60,000" },
];

const faqs = [
  { q: "What documents are needed for admission?", a: "You'll need your academic mark sheets, ID proof (Aadhaar), passport-size photos, and a completed application form. For specific courses, additional documents may be required." },
  { q: "Are there scholarships available?", a: "Yes! We offer merit-based scholarships (up to 100%) based on our scholarship entrance test. We also provide concessions for economically weaker sections and siblings studying at BMS." },
  { q: "Can I switch between batches?", a: "Yes, batch switching is allowed within the first month, subject to availability. Please contact the academic office for the process." },
  { q: "Do you offer online classes?", a: "Yes, most of our courses are available in both offline and online modes. Our online platform includes live classes, recorded lectures, and interactive doubt-clearing sessions." },
  { q: "What is the refund policy?", a: "Full refund is available within 7 days of enrollment. Partial refunds (with deductions) are available up to 30 days. No refunds after 30 days." },
  { q: "Is hostel accommodation available?", a: "While we don't have our own hostel, we assist students in finding suitable PG accommodations near our campus in Jayanagar." },
];

const Admissions = () => {
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Fees" title="Fee Structure" subtitle="Transparent and competitive pricing for all programs" />
          <div className="bg-card rounded-xl card-shadow border border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-6 py-4 font-semibold">Course</th>
                    <th className="text-left px-6 py-4 font-semibold">Duration</th>
                    <th className="text-left px-6 py-4 font-semibold">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.course} className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                      <td className="px-6 py-4 font-medium text-foreground">{f.course}</td>
                      <td className="px-6 py-4 text-muted-foreground">{f.duration}</td>
                      <td className="px-6 py-4 font-semibold text-gold-dark">{f.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">* Fees are indicative and subject to revision. GST applicable. EMI options available.</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Financial Aid" title="Scholarships & Concessions" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Merit Scholarship", desc: "Up to 100% fee waiver based on scholarship entrance test performance" },
              { title: "Sibling Discount", desc: "10% discount for siblings already enrolled at BMS Academy" },
              { title: "EWS Concession", desc: "Special fee concessions for students from economically weaker sections" },
              { title: "Early Bird Offer", desc: "5% discount for enrollments completed before the deadline" },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 card-shadow border border-border/50 flex gap-4">
                <CheckCircle2 className="text-gold-dark shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQs" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 card-shadow">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold-dark py-5">
                  <span className="flex items-center gap-3"><HelpCircle className="text-gold-dark shrink-0" size={18} /> {f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
