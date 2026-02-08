import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Quote className="mx-auto mb-6 text-gold/30" size={48} />
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-8 italic">
            "{t.quote}"
          </p>
          <div>
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-gold-dark">{t.name.charAt(0)}</span>
            </div>
            <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-gold-dark font-medium">{t.achievement}</p>
            <p className="text-xs text-muted-foreground mt-1">{t.course} – {t.year}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
          className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors mt-2 ${i === current ? "bg-gold" : "bg-border"}`}
          />
        ))}
        <button
          onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
          className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
