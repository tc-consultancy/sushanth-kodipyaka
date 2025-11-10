import { motion } from 'framer-motion';
import { logo } from '../assets';

const AboutSection = () => {
  return (
    <>
      <section className="w-full bg-gray-50 mt-12 rounded-t-[120px] rounded-b-[120px] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-[60px] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <img
                    src={
                      logo
                    }
                    alt="Sushanth Kodipyaka"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-[40px] -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-[30px] -z-10" />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                About Me
              </h2>

              <div className="space-y-2  text-gray-600 leading-relaxed">
                <p>
                  I'm a <strong className="text-gray-900">Software Engineer and Full Stack Developer</strong> with 4+ years of experience building enterprise-grade, scalable, and secure applications across finance, healthcare, and technology.
                </p>

                <p>
                  For me, software development has never been just about writing code — it's about <strong className="text-gray-900">solving real problems</strong>, building trust with stakeholders, and delivering systems that make a measurable impact.
                </p>

                <p>
                  My journey started with a curiosity about how businesses operate, and I quickly realized that technology is the thread connecting every process. That curiosity grew into a passion for creating solutions that are as efficient as they are impactful.
                </p>

                <p>
                  Along the way, I've deployed <strong className="text-gray-900">cloud-native systems on AWS and Azure</strong>, automated pipelines with Jenkins and GitLab, and built resilient microservices that power financial and healthcare systems used by thousands.
                </p>

                <p>
                  Today, I bring that same energy into solving complex, large-scale engineering challenges — combining strong foundations in data structures, algorithms, and system design with hands-on expertise in <strong className="text-gray-900">Java, Angular, React, Spring Boot, and cloud technologies</strong>.
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats */}
      <div className="grid grid-cols-3 max-w-3xl text-center mx-auto gap-6 mt-6 mb-12 px-4">
        <div>
          <div className="text-3xl font-bold text-gray-900 ">4+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900 ">60+</div>
          <div className="text-sm text-gray-600">Technologies</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900 ">3</div>
          <div className="text-sm text-gray-600">Major Companies</div>
        </div>
      </div>
    </>

  );
};

export default AboutSection;
