import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light ? "bg-primary-foreground/10 text-primary-foreground/80" : "bg-gold/10 text-gold-dark"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
