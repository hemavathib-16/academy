import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import TestimonialSlider from "@/components/TestimonialSlider";

const achievements = [
  { category: "UPSC Civil Services", results: ["12 IAS selections (2020-2025)", "8 IPS selections", "25+ state service selections", "AIR 42 (Priya Sharma, 2024)"] },
  { category: "CA Examinations", results: ["98% pass rate in Foundation", "AIR 7 in CA Final (2024)", "50+ students in Top 100 AIR", "Consistent All India Rankers since 2015"] },
  { category: "IIT-JEE", results: ["AIR 156 (Karthik Nair, 2023)", "200+ IIT selections", "500+ NIT selections", "85% students in top engineering colleges"] },
  { category: "NEET", results: ["695/720 highest score (2023)", "150+ MBBS selections", "Top medical college placements", "90% selection rate"] },
  { category: "KPSC & State Exams", results: ["30+ KAS officers produced", "100+ SDA/FDA selections", "First attempt success rate: 65%", "Kannada medium support"] },
  { category: "KCET & Foundation", results: ["Top 100 ranks every year", "95% students in preferred colleges", "Integrated PU+coaching program", "Board exam toppers"] },
];

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

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Achievements" title="Our Results Across Programs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div key={a.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow border border-border/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Trophy className="text-gold-dark" size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">{a.category}</h3>
                <ul className="space-y-2">
                  {a.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="text-gold-dark shrink-0 mt-0.5" size={14} />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading badge="Toppers" title="Notable Achievers" subtitle="Some of the brightest stars from BMS Academy" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Priya Sharma", rank: "AIR 42 – IAS", exam: "UPSC 2024" },
              { name: "Rahul Deshmukh", rank: "AIR 7 – CA Final", exam: "CA Nov 2024" },
              { name: "Karthik Nair", rank: "AIR 156", exam: "IIT-JEE 2023" },
              { name: "Ananya Reddy", rank: "695/720", exam: "NEET 2023" },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow border border-border/50 text-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-gold-dark">{t.name.charAt(0)}</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{t.name}</h4>
                <p className="text-gold-dark font-semibold text-sm mt-1">{t.rank}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.exam}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="What Our Students Say" />
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Results;
