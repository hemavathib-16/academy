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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bg} alt="BMS Academy Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent dark:from-background/95 dark:via-background/80" />
        </div>
        
        {/* Decorative ambient blobs */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-gold/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] max-w-md max-h-md bg-gold-dark/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="relative container-custom py-20 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md text-gold-light text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(235,186,81,0.2)]"
            >
              BMS Professional Coaching Academy
            </motion.span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Shape Your Future with{" "}
              <span className="text-gold drop-shadow-md">BMS Academy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
              Expert coaching for UPSC, CA, IIT-JEE, NEET & more. Unlock your true potential today.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/admissions"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-black rounded-xl font-bold hover:scale-105 transition-all outline-none ring-2 ring-gold/50 shadow-[0_0_20px_rgba(235,186,81,0.4)] text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">Apply Now <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} size={20} /></span>
                <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
              </Link>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> Download Brochure
              </a>
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
      <section className="relative py-24 sm:py-32 overflow-hidden mx-4 sm:mx-8 mb-8 rounded-[2rem]">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-[80px]"></div>
        
        <div className="relative container-custom text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-bold tracking-widest uppercase mb-6">
              Take The Next Step
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              Join BMS Academy and take the first step towards a successful career. Admissions are open for 2026-27 batches.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/admissions"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-gold text-black rounded-xl font-bold shadow-[0_0_20px_rgba(235,186,81,0.3)] hover:scale-105 transition-all text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">Apply Now <ArrowRight strokeWidth={2.5} size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all text-lg hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" /> Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
