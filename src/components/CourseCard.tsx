import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  const Icon = course.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/courses/${course.id}`}
        className="group block bg-card rounded-xl p-6 card-shadow hover-lift border border-border/50"
      >
        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
          <Icon className="text-gold-dark" size={24} />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs">{course.duration}</span>
          <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs">{course.batchFormat.split("(")[0].trim()}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark group-hover:gap-3 transition-all">
          Learn More <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
