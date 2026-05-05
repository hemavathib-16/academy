import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Users, Award, BookOpen, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { courseCategories, courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import classroomImg from "@/assets/eng.jpg";
import libraryImg from "@/assets/eng.jpg";
import bg from "@/assets/bg.png";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-background mb-16">
        <div className="w-full">
          <img
            src={bg}
            alt="BMS Academy Campus"
            className="w-full h-auto max-h-[85vh] object-cover"
          />
        </div>
      </section>

      {/* About Short */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading badge="About Us" title="A Legacy of Academic Excellence" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 2023, BMS Academy for Professional Courses has been Bangalore's trusted name in competitive exam coaching. We combine experienced faculty, proven methodologies, and a nurturing environment to help aspirants achieve their dreams.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Proven Track Record" },
                  { icon: Users, text: "Expert Faculty" },
                  { icon: BookOpen, text: "Comprehensive Material" },
                  { icon: Target, text: "Result-Oriented Approach" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="text-gold-dark" size={20} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:gap-3 transition-all">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img src={classroomImg} alt="BMS Academy Classroom" className="w-full max-h-[450px] object-cover rounded-2xl card-shadow aspect-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading
            badge="Our Programs"
            title="Programs Offered"
            subtitle="Comprehensive coaching across Civil Services, Commerce, and Science streams"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {courseCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    to={`/courses?cat=${cat.id}`}
                    className="group block bg-card rounded-xl p-8 card-shadow hover-lift border border-border/50 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                      <Icon className="text-gold-dark" size={32} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:gap-2 transition-all">
                      Explore Courses <ArrowRight size={14} className="group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Why BMS" title="Why Choose BMS Academy?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Top Results", desc: "92% success rate with multiple All India Rankers across exams" },
              { icon: Users, title: "Expert Faculty", desc: "20+ experienced educators including IIT/IAS alumni and industry professionals" },
              { icon: BookOpen, title: "Comprehensive Material", desc: "In-house study material, test series, and digital learning resources" },
              { icon: Shield, title: "Proven Methodology", desc: "Structured approach with regular assessments and personalized mentorship" },
              { icon: Target, title: "Small Batch Sizes", desc: "Limited intake ensures individual attention and doubt-clearing sessions" },
              { icon: CheckCircle2, title: "Holistic Development", desc: "Personality development, interview skills, and career guidance included" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 card-shadow border border-border/50 hover-lift relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] z-0 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                  <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 relative z-10">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed relative z-10">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Featured Courses */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading badge="Featured" title="Popular Courses" subtitle="Our most sought-after programs with proven results" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Success Stories" title="What Our Students Say" subtitle="Hear from the toppers and achievers trained at BMS Academy" />
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join BMS Academy and take the first step towards a successful career. Admissions are open for 2026-27 batches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy-light transition-colors"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border bg-white text-navy-dark rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                <Phone size={18} /> Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;