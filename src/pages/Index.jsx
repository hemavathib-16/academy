import { Link } from "react-router-dom";
import { ArrowRight, Download, Phone, Shield, Users, Award, BookOpen, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import { courseCategories, courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import classroomImg from "@/assets/eng.jpg";
import libraryImg from "@/assets/eng.jpg";
import bg from "@/assets/bg.jpg";
const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bg} alt="BMS Academy Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
              BMS Professional Coaching Academy
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Shape Your Future with{" "}
              <span className="text-gradient-gold">BMS Academy</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Expert coaching for UPSC, CA, IIT-JEE, NEET & more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-accent-foreground rounded-xl font-semibold hover:bg-gold-dark transition-colors gold-shadow text-base"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
              >
                <Download size={18} /> Download Brochure
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
              >
                <Phone size={18} /> Book Free Counselling
              </Link>
            </div>
          </motion.div>
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
              className="relative"
            >
              <img src={classroomImg} alt="BMS Academy Classroom" className="rounded-2xl card-shadow w-full" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 card-shadow border border-border">
                <div className="font-display text-3xl font-bold text-gold">4+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
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
                      Explore Courses <ArrowRight size={14} />
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
                className="bg-card rounded-xl p-6 card-shadow border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
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

      {/* Gallery Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading badge="Campus" title="Our Learning Environment" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[classroomImg, libraryImg, classroomImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden aspect-video"
              >
                <img src={img} alt={`Campus ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/infrastructure" className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:gap-3 transition-all">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join BMS Academy and take the first step towards a successful career. Admissions are open for 2026-27 batches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-accent-foreground rounded-xl font-semibold hover:bg-gold-dark transition-colors gold-shadow text-base"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-base"
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
