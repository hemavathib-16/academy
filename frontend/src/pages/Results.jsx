import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";

const Results = () => {
  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Our Pride</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Results & Success Stories</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">A track record that speaks for itself — our students' success is our greatest achievement</p>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Feedback from Students */}
      <section className="section-padding bg-background border-t border-border/50">
        <div className="container-custom">
          <SectionHeading badge="Feedback" title="Feedback from Students" subtitle="Hear about the real experiences of our successful CA aspirants" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border/50 relative"
            >
              <div className="absolute top-8 right-8 text-gold/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.603C18.847 13.714 20 11.237 20 7.82202V3H14V9.85101C14 11.97 14.887 13.067 16.32 13.235L14.017 21ZM4.01697 21L6.41097 14.603C8.84697 13.714 10 11.237 10 7.82202V3H4V9.85101C4 11.97 4.88697 13.067 6.31997 13.235L4.01697 21Z" />
                </svg>
              </div>
              <p className="text-muted-foreground leading-relaxed italic relative z-10 mb-6">
                "It all started in my I PUC with an introduction about the professional course, which blew my mind and it was also my father's dream that I become a Chartered Accountant. Through BMS Academy, I was able to fulfill my dream as well as my father's. They gave us the best coaching for CPT i.e CA Foundation and IPCC i.e Intermediate with best teachers who were all qualified. I heartfully thank the BMS Academy for its support and guidance."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-display font-bold text-gold-dark">S1</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Student 1</h4>
                  <p className="text-xs text-gold-dark font-medium">CA Aspirant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border/50 relative"
            >
              <div className="absolute top-8 right-8 text-gold/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.603C18.847 13.714 20 11.237 20 7.82202V3H14V9.85101C14 11.97 14.887 13.067 16.32 13.235L14.017 21ZM4.01697 21L6.41097 14.603C8.84697 13.714 10 11.237 10 7.82202V3H4V9.85101C4 11.97 4.88697 13.067 6.31997 13.235L4.01697 21Z" />
                </svg>
              </div>
              <p className="text-muted-foreground leading-relaxed italic relative z-10 mb-6">
                "It's been my pleasure to convey my few words about BMS Academy. It helped me to improve both my professional and personal life. Due to career counseling programs we as collective groups of CA aspirants got to know how the profession works and what the society expects from us. Lecturers were CA by profession and well experienced trainers who taught in-depth concepts and tried to cover all syllabus which made our exams easy. I always felt BMS as my home. We were encouraged to study hard and go conceptual for every sentence we read. The lecturers were very interactive during classes and motivating every aspirants. Apart from professional life I got best friends who stood with me in every stage of my life till now. Not only studies we were encouraged to participate in sports activities which helps to have a fresh mind throughout our curriculum. Yeah, I always want to say BMS Academy helped me to carry my character in a very positive way."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-display font-bold text-gold-dark">S2</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Student 2</h4>
                  <p className="text-xs text-gold-dark font-medium">CA Aspirant</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
