import { motion } from "framer-motion";
import { Target, Eye, Award, Users, BookOpen, Calendar, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import StatsSection from "@/components/StatsSection";
import libraryImg from "@/assets/libraryy.jpg";
import Director from "@/assets/principal.jpg";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">About BMS Academy</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Shaping futures through excellence in professional education</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading badge="Our Story" title="A Legacy of Transforming Aspirations" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              BMS College of Engineering is the 1st private sector engineering college in India which was started in the year 1946 by the Founder Late Sri. B.M. Sreenivasaiah. Thereafter, his illustrious son Late Sri B.S. Narayan formed BMS Educational Trust which has established several prestigious educational institutions in the city of Bengaluru. At present more than 20,000 students are pursuing different courses in BMS Institutions. BMS Academy has been established under the guidance and leadership of Dr. B.S. Ragini Narayan, Donor Trustee, Member Secretary and Chairperson of BMS Educational Trust , Dr. P. Dayananda Pai, Life Trustee, BMS Educational Trust and Sri. Aviram Sharma, Trustee BMS Educational Trust.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, we offer comprehensive programs across Civil Services, Commerce (CA/CS/CMA), and Science (IIT-JEE/NEET/KCET) streams, serving over 2,000 students annually with a team of  75+ experienced faculty members.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, val: "2,000+", label: "Alumni Network" },
                { icon: Award, val: "92%", label: "Success Rate" },
                { icon: BookOpen, val: "15+", label: "Programs", path: "/courses" },
                { icon: Calendar, val: "3+", label: "Years" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label} className="bg-secondary rounded-xl p-4 text-center">
                  <Icon className="mx-auto text-gold-dark mb-2" size={24} />
                  <div className="font-display text-2xl font-bold text-foreground">{val}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={libraryImg}
            alt="library"
            className="w-full h-96 md:h-[520px] lg:h-[640px] object-contain bg-card rounded-2xl card-shadow"
          />
        </div>
      </section>

      {/* Board of Governors */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Members" title="Board of Members" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Dr. P. Dayananda Pai", role: "Life Trustee, BMSET", position: "Chairman" },
              { name: "Dr. B. S. Ragini Narayan", role: "DTMS & Chairperson, BMSET", position: "Member" },
                   { name: "Prof. Pankaj Choudhary", role: "Principal, BMSCCM", position: "Member Secretary" },
              { name: "Sri. Aviram Sharma", role: "Trustee BMSET", position: "Member" },
         
              { name: "Dr. C. S. Kedar", role: "IAS (Retd.), Former Addl. Chief Secretary, GOK", position: "Member" },
              { name: "Sri. Srinivasa", role: "P. C., CEO, India 4 IAS", position: "Member" },
              { name: "Dr. S. Muralidhara", role: "Principal, BMSCE", position: "Member" },
              { name: "Wg. Cdr. R. A. Raghavan", role: "Director (Admin), BMSET", position: "Member" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-card to-card/50 rounded-xl p-5 border border-gold/5 hover:border-gold/15 text-center transition-all duration-300 hover:shadow-md"
              >
                <div className="w-20 h-20 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-3 border-2 border-gold/15">
                  <Users className="text-gold-dark/70" size={36} />
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-xs text-gold-dark/80 font-medium mb-2 leading-tight">{member.role}</p>
                <div className="inline-block px-2.5 py-1 rounded-full bg-gold/8 border border-gold/10 text-xs font-medium text-gold-dark/70">
                  {member.position}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Leadership" title="Director's Message" />
          <div className="bg-card rounded-xl p-8 lg:p-12 card-shadow border border-border/50">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 rounded-xl flex items-center justify-center shrink-0">
                <img src={Director} alt="Dr. Pankaj Choudhary" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed italic mb-6 text-xl">
                  "BMS Academy for Professional Courses is an institution which is focused to nurture and train students who are trying to make their career in Administrative Services, Chartered Accountancy, Company Secretary and Judicial services. The Academy aims at providing best coaching classes at affordable fees structure."
                </p>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Dr. Pankaj Choudhary</p>
                  <p className="text-sm text-muted-foreground">Director, BMS Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Pankaj Choudhary */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <SectionHeading badge="Leadership" title="About Dr. Pankaj Choudhary" />
          <div className="bg-card rounded-xl p-8 lg:p-12 card-shadow border border-border/50">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 rounded-xl flex items-center justify-center shrink-0">
                <img src={Director} alt="Dr. Pankaj Choudhary" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Dr. Pankaj Choudhary</h3>
                  <p className="text-gold-dark font-medium">Director, BMS APC</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Prof. Pankaj Choudhary is the Principal of BMS College of Commerce and Management, Dean at BMS Centre for Executive Education and Director at BMS Academy for Professional Courses. He has more than 2 decades of work experience in various domain of industries. He has worked in organisations like IIPM, Planman Consulting and Kotak Mahindra Life Insurance company.
                  </p>
                  
                  <p>
                    Dr. Pankaj is the former Syndicate member and Academic Council Member at Bengaluru City University. Dr. Pankaj has been instrumental in establishing several Educational Institutions like IIPM- Bangalore, IIPM –Cochin, BMS Centre for Executive Education, BMS Evening College of Arts and Commerce, BMS College of Commerce & Management and BMS Academy for Professional Courses.
                  </p>
                  
                  <p>
                    His area of expertise is Finance, Accounting, Portfolio Management and Marketing management. Dr. Pankaj holds Ph.D in Management, MBA from IMI Belgium (Europe), Certificate in Planning and Entrepreneurship and B.COM(Honours) degree. He has published more than 20 research papers in national & international Journals.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">Awards and Recognitions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Eminent Speaker at Global Economic Forum, Cambridge University, UK in August 2024.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Most Iconic Principal Award for Excellence and leadership in education by Dynergic Business Solution in the year 2024.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Pride of Karnataka Award in 2023 by Anyelpsgroup.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Awarded as Power Achiever award at Bhartiya Manavta Samman Puruskar organised by Power Brands and IIPM New Delhi in 2023.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>National award for Excellence in Research for International research papers in Human Resource Management.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Awarded as Guru's of Education by Trading Minds in 2022.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-dark mt-1">•</span>
                      <span>Dewang Mehta Educational Excellence Leadership award by ET Ascent in 2022.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Our Vision", text: "To be India's most trusted coaching academy, empowering students from diverse backgrounds to achieve excellence in professional examinations and build successful careers." },
            { icon: Target, title: "Our Mission", text: "To provide accessible, high-quality coaching through experienced mentors, innovative teaching methods, and a supportive learning environment, ensuring every student reaches their full potential." },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 card-shadow border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Icon className="text-gold-dark" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values - Enhanced UI */}
      <section className="section-padding relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-secondary/30 -z-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-semibold mb-4 border border-gold/20">Our Foundation</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Core Values — The 4 E's</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The 4 E's form the bedrock of our educational philosophy. These principles guide our curriculum, pedagogy, and student support, preparing graduates for both professional excellence and civic responsibility.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: "E",
                title: "Education",
                desc: "High-quality, values-based teaching that builds knowledge, critical thinking and ethical foundations.",
                icon: BookOpen,
                color: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-600"
              },
              {
                letter: "E",
                title: "Excellence",
                desc: "Continuous improvement in pedagogy and outcomes — excellence as a practice, not a destination.",
                icon: Award,
                color: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-600"
              },
              {
                letter: "E",
                title: "Entrepreneurship",
                desc: "Fostering initiative, problem-solving and accountability so students become change agents.",
                icon: Zap,
                color: "from-amber-500/20 to-orange-500/20",
                iconColor: "text-amber-600"
              },
              {
                letter: "E",
                title: "Empowerment",
                desc: "Bridging knowledge gaps, building confidence and ensuring access to resources for student success.",
                icon: Users,
                color: "from-emerald-500/20 to-green-500/20",
                iconColor: "text-emerald-600"
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-6 card-shadow border border-border/50 overflow-hidden h-full flex flex-col"
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center shadow-sm border border-border/50 group-hover:scale-110 transition-transform duration-300 ${item.iconColor}`}>
                      <item.icon size={28} />
                    </div>
                    <span className="font-display text-6xl font-black text-foreground/5 select-none absolute right-0 -top-2 scale-150 group-hover:scale-125 transition-transform duration-500">
                      {item.letter}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
};

export default About;
