import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const SisterInstitutions = () => {
  const institutions = [
    {
      id: 1,
      name: "BMS College Of Engineering (BMSCE)",
      shortName: "BMSCE",
      type: "Engineering College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "director.admin@bmsce.ac.in",
      website: "https://bmsce.ac.in",
      description: "Premier engineering institution offering undergraduate and postgraduate programs in various engineering disciplines."
    },
    {
      id: 2,
      name: "BMS College of Law (BMSCL)",
      shortName: "BMSCL",
      type: "Law College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmscl.ac.in",
      website: "https://bmscl.ac.in",
      description: "Comprehensive legal education institution offering LLB and LLM programs with focus on practical legal training."
    },
    {
      id: 3,
      name: "BMS P U College For Women (BMSPU)",
      shortName: "BMSPU",
      type: "PU College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmspu.ac.in",
      website: "https://bmspu.ac.in",
      description: "Exclusive women's PU college providing quality pre-university education with emphasis on holistic development."
    },
    {
      id: 4,
      name: "B.M.S. College for Women (BMSCW)",
      shortName: "BMSCW",
      type: "Degree College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmscw.ac.in",
      website: "https://bmscw.ac.in",
      description: "Leading women's degree college offering undergraduate programs in arts, science, and commerce streams."
    },
    {
      id: 5,
      name: "BMS Institute of Technology & Management (BMSIT)",
      shortName: "BMSIT",
      type: "Engineering & Management College",
      location: "Avalahalli, Bengaluru",
      phone: "080-28561576",
      email: "info@bmsit.ac.in",
      website: "https://bmsit.ac.in",
      description: "Modern technical institution offering engineering and management programs with industry-focused curriculum."
    },
    {
      id: 6,
      name: "B.M.S. School Of Architecture (BMSSA)",
      shortName: "BMSSA",
      type: "Architecture College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmssa.ac.in",
      website: "https://bmssa.ac.in",
      description: "Premier architecture institution providing comprehensive education in architectural design and planning."
    },
    {
      id: 7,
      name: "BMS Evening College of Arts and Commerce (BMSCEAC)",
      shortName: "BMSCEAC",
      type: "Evening College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmseve.ac.in",
      website: "https://bmseve.ac.in",
      description: "Evening college offering flexible education programs in arts and commerce for working professionals."
    },
    {
      id: 8,
      name: "BMS College of Architecture (BMSCA)",
      shortName: "BMSCA",
      type: "Architecture College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmsca.ac.in",
      website: "https://bmsca.ac.in",
      description: "Specialized architecture college focusing on innovative design education and sustainable architecture."
    },
    {
      id: 9,
      name: "BMS College of Commerce and Management (BMSCCM)",
      shortName: "BMSCCM",
      type: "Commerce & Management College",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmsccm.ac.in",
      website: "https://bmsccm.ac.in",
      description: "Comprehensive commerce and management education institution offering BBA, B.Com, and MBA programs."
    },
    {
      id: 10,
      name: "BMS Academy for Professional Courses (BMSAPC)",
      shortName: "BMSAPC",
      type: "Professional Academy",
      location: "Bull Temple Road, Bengaluru",
      phone: "080-26614358",
      email: "info@bmsaca.ac.in",
      website: "https://bmsaca.ac.in",
      description: "Professional training academy offering specialized courses in competitive exams and professional certifications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Sister Institutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the prestigious institutions under BMS Educational Trust, each committed to excellence in education and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionHeading
              title="Our Educational Network"
              subtitle="BMS Educational Trust proudly operates a network of premier educational institutions across various disciplines"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {institution.shortName}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {institution.type}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {institution.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{institution.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{institution.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="truncate">{institution.email}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={institution.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              For admissions, inquiries, or more information about any of our institutions,
              please contact us directly or visit our main campus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  P.O No. 1908, Bull Temple Road,<br />
                  Bengaluru-560019
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: 080-26614358<br />
                  Phone: 080-26611636
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  director.admin@bmsce.ac.in
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SisterInstitutions;