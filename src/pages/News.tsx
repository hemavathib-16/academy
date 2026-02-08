import { motion } from "framer-motion";
import { Calendar, Bell, Award, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { news } from "@/data/faculty";

const categoryIcons: Record<string, any> = {
  "Exam Update": Calendar,
  "Achievement": Award,
  "Event": Bell,
  "New Batch": BookOpen,
  "Scholarship": Award,
};

const News = () => {
  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Updates</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">News & Announcements</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Stay updated with the latest notifications, events, and academic calendar</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {news.map((item, i) => {
              const Icon = categoryIcons[item.category] || Bell;
              return (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl p-6 card-shadow border border-border/50 hover-lift flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="text-gold-dark" size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded-full">{item.category}</span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
