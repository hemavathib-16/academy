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

              {/* Detailed Brochure Content for UPSC */}
              {course.id === "upsc" && course.brochureContent && (
                <>
                  {/* About Academy */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">About BMS Academy</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{course.brochureContent.aboutAcademy}</p>
                    <div className="bg-gold/10 border border-gold/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">India4IAS Academy</h3>
                      <p className="text-sm text-muted-foreground">{course.brochureContent.india4ias}</p>
                    </div>
                  </div>

                  {/* Steering Committee */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Steering Committee Members</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {course.brochureContent.steeringCommittee.map((member, i) => (
                        <div key={i} className="bg-secondary/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                          <p className="text-xs text-gold-dark font-medium">{member.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Course Offered</h2>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">{course.brochureContent.courseDetails.name}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium ml-2">{course.brochureContent.courseDetails.duration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Teaching Hours:</span>
                          <span className="font-medium ml-2">{course.brochureContent.courseDetails.teachingHours}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{course.brochureContent.courseDetails.description}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Key Features of the Program</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.brochureContent.keyFeatures.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-gold-dark shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* UPSC CSE 2024 Results */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">UPSC CSE 2024 Results — A Stellar Triumph</h2>
                    <p className="text-muted-foreground mb-4">{course.brochureContent.results2024.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-3">Notable Ranks Achieved:</h3>
                      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
                        {course.brochureContent.results2024.notableRanks.map((rank, i) => (
                          <div key={i} className="bg-green-100 text-green-800 text-xs font-bold rounded px-2 py-1 text-center">
                            {rank}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Faculty Members */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Faculty Members</h2>
                    <p className="text-muted-foreground mb-4">Highly qualified and experienced faculty covering all subjects with deep expertise.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {course.brochureContent.faculty.map((faculty, i) => (
                        <div key={i} className="bg-secondary/50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground text-sm">{faculty.name}</h4>
                          {faculty.course && <p className="text-xs text-muted-foreground">{faculty.course}</p>}
                          <p className="text-xs text-gold-dark font-medium">{faculty.subject}</p>
                          {faculty.experience && (
                            <p className="text-xs text-muted-foreground">{faculty.experience}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Infrastructure</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.brochureContent.infrastructure.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Teaching Methodology */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Teaching Methodology</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.brochureContent.teachingMethodology}</p>
                  </div>

                  {/* Mock Tests & Evaluation */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Mock Tests & Evaluation</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.brochureContent.mockTests}</p>
                  </div>

                  {/* Admissions */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Admissions</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.brochureContent.admissions}</p>
                  </div>

                  {/* Contact Details */}
                  <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Contact Details</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Basavanagudi Branch</h3>
                        <p className="text-sm text-muted-foreground">{course.brochureContent.contactDetails.basavanagudi}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Yelahanka Branch</h3>
                        <p className="text-sm text-muted-foreground">{course.brochureContent.contactDetails.yelahanka}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {course.brochureContent && course.id !== "upsc" && (
                <>
                  {course.brochureContent.coverPage && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">{course.brochureContent.coverPage.title}</h2>
                      <p className="text-muted-foreground">{course.brochureContent.coverPage.institution}</p>
                    </div>
                  )}

                  {(course.brochureContent.about || course.brochureContent.overview || course.brochureContent.introduction) && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Program Summary</h2>
                      <p className="text-muted-foreground leading-relaxed">{course.brochureContent.about || course.brochureContent.overview || course.brochureContent.introduction}</p>
                    </div>
                  )}

                  {course.brochureContent.why?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Why Choose This Program</h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.brochureContent.why.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.brochureContent.support?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Support and Services</h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.brochureContent.support.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.brochureContent.keyFeatures?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Program Highlights</h2>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.brochureContent.keyFeatures.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="text-gold-dark shrink-0" size={16} />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.brochureContent.faculty?.length > 0 && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Faculty Members</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {course.brochureContent.faculty.map((faculty, i) => (
                          <div key={i} className="bg-secondary/50 rounded-lg p-4">
                            <h4 className="font-semibold text-foreground text-sm">{faculty.name}</h4>
                            {faculty.course && <p className="text-xs text-muted-foreground">{faculty.course}</p>}
                            <p className="text-xs text-gold-dark font-medium">{faculty.subject}</p>
                            {faculty.experience && <p className="text-xs text-muted-foreground">{faculty.experience}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.brochureContent.locations && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Locations</h2>
                      <div className="space-y-4">
                        {Object.entries(course.brochureContent.locations).map(([location, address]) => (
                          <div key={location}>
                            <h3 className="font-semibold text-foreground mb-2">{location}</h3>
                            <p className="text-sm text-muted-foreground">{address}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.brochureContent.contactDetails && (
                    <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">Contact Details</h2>
                      <div className="space-y-4">
                        {Object.entries(course.brochureContent.contactDetails).map(([label, value]) => (
                          <div key={label}>
                            <h3 className="font-semibold text-foreground mb-2">{label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                            <p className="text-sm text-muted-foreground">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
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
