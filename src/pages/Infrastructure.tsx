import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, BookOpen, Wifi, Library, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import classroomImg from "@/assets/classroom.jpg";
import libraryImg from "@/assets/library.jpg";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with projectors, whiteboards, and digital teaching aids" },
  { icon: Library, title: "Library & Reading Room", desc: "Well-stocked library with 10,000+ books, journals, and a dedicated quiet study area" },
  { icon: BookOpen, title: "Study Material", desc: "Comprehensive in-house study material, notes, and question banks for all courses" },
  { icon: Wifi, title: "Digital Learning", desc: "Online learning portal with recorded lectures, live classes, and practice tests" },
];

const galleryImages = [
  { src: classroomImg, title: "Classroom" },
  { src: libraryImg, title: "Library" },
  { src: classroomImg, title: "Study Hall" },
  { src: libraryImg, title: "Reading Room" },
  { src: classroomImg, title: "Lab" },
  { src: libraryImg, title: "Computer Room" },
];

const Infrastructure = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Campus</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Infrastructure & Facilities</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">A modern learning environment designed for focused preparation and academic excellence</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Facilities" title="World-Class Learning Facilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 card-shadow border border-border/50 text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-gold-dark" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading badge="Gallery" title="Campus Gallery" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden aspect-video cursor-pointer group" onClick={() => setModalImg(img.src)}>
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4" onClick={() => setModalImg(null)}>
          <button className="absolute top-6 right-6 text-card p-2 rounded-full bg-foreground/50 hover:bg-foreground/70" onClick={() => setModalImg(null)}>
            <X size={24} />
          </button>
          <img src={modalImg} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl" />
        </div>
      )}
    </div>
  );
};

export default Infrastructure;
