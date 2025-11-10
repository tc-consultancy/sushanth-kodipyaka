import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2024",
      period: "Jan 2024 - Present",
      company: "JPMorgan Chase",
      role: "Software Engineer",
      location: "Plano, Texas, United States",
      type: "Hybrid",
      description: "Building enterprise-grade financial systems with Java, Spring Boot, and microservices architecture. Leading code reviews and implementing scalable solutions for critical banking operations.",
      skills: ["Java", "Spring Boot", "Microservices", "AWS", "React", "Code Review"]
    },
    {
      year: "2023",
      period: "Jan 2023 - Dec 2024",
      company: "University of North Texas",
      role: "Master's in Artificial Intelligence",
      location: "Denton, Texas",
      type: "Full-time",
      description: "Advanced studies in Machine Learning, Deep Learning, NLP, and Large Language Models. Worked on cutting-edge AI projects using TensorFlow, PyTorch, and Apache Spark.",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "NLP", "Deep Learning"]
    },
    {
      year: "2020",
      period: "Jul 2020 - Dec 2022",
      company: "Cognizant",
      role: "Full-stack Developer",
      location: "Hyderabad, India",
      type: "Hybrid",
      description: "Developed full-stack applications for healthcare clients. Implemented CI/CD pipelines, optimized database queries, and built responsive UIs with Angular and React.",
      skills: ["Angular", "React", "Java", "MongoDB", "Jenkins", "CI/CD"]
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:pb-32 md:pt-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-start gap-4 md:gap-12"
              >
                {/* Left side - Year and pointer */}
                <div className="flex-shrink-0 w-full md:w-24 md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    {exp.year}
                  </div>
                </div>

                {/* Dot on line - hidden on mobile */}
                <div className="hidden md:block absolute left-[46px] w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg" />

                {/* Right side - Tilted card */}
                <motion.div
                  className="flex-1 w-full"
                  initial={{ rotateY: 0 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="bg-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ transform: window.innerWidth >= 768 ? 'perspective(1000px) rotateY(-2deg)' : 'none' }}
                    whileHover={{ 
                      transform: window.innerWidth >= 768 ? 'perspective(1000px) rotateY(0deg)' : 'none',
                      y: -8
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {exp.company}
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
                          {exp.role}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-white rounded-full text-xs md:text-sm font-medium text-gray-600 shadow-sm">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-600 mb-4 text-sm">
                      <span className="font-medium">{exp.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full text-xs md:text-sm font-medium text-gray-700 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
