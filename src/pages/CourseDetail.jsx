import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
        <Link to="/courses" className="text-gold-dark font-semibold">← Back to Courses</Link>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div>
      <section className="gradient-hero py-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/courses" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-sm">
              <ArrowLeft size={16} /> Back to Courses
            </Link>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Icon className="text-gold" size={32} />
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">{course.title}</h1>
                <p className="text-primary-foreground/70 text-lg">{course.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Course Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </div>

              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Subjects Covered</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.subjects.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 card-shadow border border-border/50 sticky top-24">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">Quick Info</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="text-gold-dark" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-medium text-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-gold-dark" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground">Eligibility</p>
                      <p className="text-sm font-medium text-foreground">{course.eligibility}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-gold-dark" size={20} />
                    <div>
                      <p className="text-xs text-muted-foreground">Batch Format</p>
                      <p className="text-sm font-medium text-foreground">{course.batchFormat}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gold text-accent-foreground rounded-xl font-semibold hover:bg-gold-dark transition-colors gold-shadow"
                >
                  Enquire Now
                </Link>
                <Link
                  to="/admissions"
                  className="block w-full text-center px-6 py-3 mt-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Apply Now <ArrowRight size={14} className="inline ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
