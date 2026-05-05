import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { submitContactInquiry } from "@/lib/api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await submitContactInquiry(form);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (error) {
      toast.error(error.message || "Could not send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">Get in Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Have questions? We're here to help. Reach out to us and we'll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl p-6 lg:p-8 card-shadow border border-border/50">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Interested Course</label>
                      <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold">
                        <option value="">Select a course</option>
                        <option>UPSC Coaching</option>
                        <option>CA Foundation / Inter / Final</option>
                        <option>CS</option>
                        <option>CMA / ICWA</option>
                        <option>IIT-JEE</option>
                        <option>NEET</option>
                        <option>KCET</option>
                        <option>Foundation Course</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none" placeholder="Tell us what you're looking for..." />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground rounded-xl font-semibold hover:bg-gold-dark transition-colors gold-shadow disabled:opacity-60 disabled:cursor-not-allowed">
                    <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: "Address", text: "Admission Office BMS ACADEMY FOR PROFESSIONAL COURSES, BMS Engineering campus, Bull Temple Road, Basavanagudi, Bengaluru - 560019, Karnataka" },
                    { icon: Phone, title: "Phone", text: "+91 9036510011/ +91 8971736008/ +91 8029909656" },
                    { icon: Mail, title: "Email", text: "info@bmsacademy.in / admissions@bmsacademy.in" },
                    { icon: Clock, title: "Office Hours", text: "Mon – Sat: 8 AM – 8 PM | Sun: 9 AM – 1 PM" },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <Icon className="text-gold-dark" size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{title}</p>
                        <p className="text-sm text-muted-foreground">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map(({ icon: Icon, label }) => (
                    <a key={label} href="#" className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold hover:text-accent-foreground text-foreground transition-colors" title={label}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden card-shadow h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5535693097!2d77.5800!3d12.9300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQ4LjAiTiA3N8KwMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="BMS Academy Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
