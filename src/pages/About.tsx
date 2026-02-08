import { motion } from "framer-motion";
import { Target, Eye, Award, Users, BookOpen, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import libraryImg from "@/assets/library.jpg";

const timeline = [
  { year: "2008", title: "Founded", desc: "BMS Academy established in Jayanagar, Bangalore" },
  { year: "2011", title: "Commerce Wing", desc: "Launched CA, CS & CMA coaching programs" },
  { year: "2014", title: "Science Division", desc: "Added IIT-JEE and NEET preparation" },
  { year: "2017", title: "Campus Expansion", desc: "Moved to a larger campus with modern facilities" },
  { year: "2020", title: "Digital Learning", desc: "Launched online and hybrid learning programs" },
  { year: "2024", title: "15,000 Alumni", desc: "Crossed 15,000+ successful students milestone" },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">About BMS Academy</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Shaping futures through excellence in professional education since 2008</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading badge="Our Story" title="A Legacy of Transforming Aspirations" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              BMS Academy for Professional Courses was founded in 2008 with a singular mission — to provide world-class coaching for competitive examinations in Bangalore. What started as a small coaching centre for Civil Services aspirants has grown into one of South India's most respected multi-disciplinary coaching institutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, we offer comprehensive programs across Civil Services, Commerce (CA/CS/CMA), and Science (IIT-JEE/NEET/KCET) streams, serving over 2,000 students annually with a team of 75+ experienced faculty members.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, val: "15,000+", label: "Alumni Network" },
                { icon: Award, val: "92%", label: "Success Rate" },
                { icon: BookOpen, val: "12+", label: "Programs" },
                { icon: Calendar, val: "18+", label: "Years" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label} className="bg-secondary rounded-xl p-4 text-center">
                  <Icon className="mx-auto text-gold-dark mb-2" size={24} />
                  <div className="font-display text-2xl font-bold text-foreground">{val}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={libraryImg} alt="BMS Academy" className="rounded-2xl card-shadow" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Our Vision", text: "To be India's most trusted coaching academy, empowering students from diverse backgrounds to achieve excellence in professional examinations and build successful careers." },
            { icon: Target, title: "Our Mission", text: "To provide accessible, high-quality coaching through experienced mentors, innovative teaching methods, and a supportive learning environment, ensuring every student reaches their full potential." },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 card-shadow border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Icon className="text-gold-dark" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Leadership" title="Chairman's Message" />
          <div className="bg-card rounded-xl p-8 lg:p-12 card-shadow border border-border/50">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <span className="text-3xl font-display font-bold text-primary-foreground">BM</span>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "When we founded BMS Academy in 2008, our dream was simple — create an institution where students receive not just coaching, but true mentorship. Over the years, watching our students crack UPSC, top CA examinations, and secure seats in premier engineering and medical colleges has been our greatest reward."
                </p>
                <p className="text-muted-foreground leading-relaxed italic mb-6">
                  "Education is the most powerful tool to transform lives, and at BMS Academy, we remain committed to making world-class coaching accessible to every deserving student in Bangalore and beyond."
                </p>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Dr. B. M. Srinivas</p>
                  <p className="text-sm text-muted-foreground">Founder & Chairman, BMS Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Journey" title="Years of Excellence" />
          <div className="relative">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block flex-1" />
                <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0 z-10 relative">
                  <span className="text-xs font-bold text-accent-foreground">{item.year.slice(2)}</span>
                </div>
                <div className="flex-1 bg-card rounded-xl p-5 card-shadow border border-border/50">
                  <span className="text-xs font-semibold text-gold-dark">{item.year}</span>
                  <h4 className="font-display text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
};

export default About;
