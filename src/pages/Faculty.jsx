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
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Learn from the best — our faculty includes IAS officers, CA rankers, IIT alumni, and industry experts</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Faculty" },
              { id: "civil", label: "Civil Services" },
              { id: "commerce", label: "Commerce" },
              { id: "science", label: "Science" },
            ].map((cat) => (
              <button key={cat.id} onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${filter === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((f, i) => (
              <motion.div key={f.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 card-shadow border border-border/50 text-center hover-lift">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <User className="text-muted-foreground" size={32} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.name}</h3>
                <p className="text-sm text-gold-dark font-medium mt-1">{f.expertise}</p>
                <p className="text-xs text-muted-foreground mt-2">{f.qualification}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground font-medium">
                  {f.experience} experience
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
