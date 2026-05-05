import { useState } from "react";
import { motion } from "framer-motion";
import { faculty as facultyData } from "@/data/faculty";
import SectionHeading from "@/components/SectionHeading";
import { User } from "lucide-react";

const Faculty = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? facultyData : facultyData.filter((f) => f.category === filter);

  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Our Team</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Our Faculty</h1>
            <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto">Our faculty members are highly qualified and experienced in their respective fields. They have a deep understanding of their subjects and practical experience. They are dedicated to helping students achieve their goals and are available throughout the course, providing individual attention and guidance.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Faculty" },
              { id: "commerce", label: "Commerce Faculty" },
            ].map((cat) => (
              <button key={cat.id} onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${filter === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((f, i) => (
              <motion.div key={f.id} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(245,158,11,0.08)" }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                className="group bg-card rounded-xl p-5 border border-gold/5 hover:border-gold/15 text-center overflow-hidden relative transition-all duration-300 shadow-sm">
                
                <div className="relative z-10">
                  {/* Avatar - light background */}
                  <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 200 }} className="w-20 h-20 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-4 border border-gold/10 group-hover:border-gold/20 transition-colors duration-300">
                    <User className="text-gold-dark/70 group-hover:text-gold-dark transition-colors duration-300" size={36} />
                  </motion.div>
                  
                  {/* Name - simple text */}
                  <h3 className="font-display text-lg font-semibold text-foreground">{f.name}</h3>
                  
                  {/* Expertise */}
                  <p className="text-sm font-medium text-gold-dark/80 mt-2">{f.expertise}</p>
                  
                  {/* Qualification */}
                  <p className="text-xs text-muted-foreground mt-1.5">{f.qualification}</p>
                  
                  {/* Experience badge - light style */}
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-gold/8 border border-gold/10 text-xs font-medium text-gold-dark/70">
                    {f.experience}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
