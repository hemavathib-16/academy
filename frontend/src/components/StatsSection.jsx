import { motion } from "framer-motion";
import { stats } from "@/data/testimonials";

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm sm:text-base text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
