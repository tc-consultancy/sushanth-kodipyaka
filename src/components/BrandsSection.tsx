import { motion } from 'framer-motion';

const BrandsSection = () => {
  return (
    <section className="w-full bg-gray-100 py-20 rounded-t-[120px] rounded-b-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            60+ technologies mastered across full-stack development, cloud platforms, and AI/ML
          </p>
        </motion.div>

        {/* COMPLETELY DIFFERENT LAYOUT - Grid of small cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Java & Spring Boot card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[40px] p-8 text-center relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-50 rounded-[20px]"></div>
            <div className="text-4xl mb-3">☕</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Java</div>
            <p className="text-gray-600 text-sm">Spring Boot • Microservices</p>
          </motion.div>

          {/* React & Angular card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-[40px] p-8 text-center relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-50 rounded-[30px]"></div>
            <div className="text-4xl mb-3">⚛️</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">React</div>
            <p className="text-gray-600 text-sm">Angular • Redux • TypeScript</p>
          </motion.div>

          {/* AWS & Cloud card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-[40px] p-8 text-center relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-2 left-2 w-8 h-8 bg-orange-50 rounded-[15px]"></div>
            <div className="text-4xl mb-3">☁️</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">AWS</div>
            <p className="text-gray-600 text-sm">Azure • Lambda • S3</p>
          </motion.div>

          {/* AI/ML card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-[40px] p-8 text-center relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="absolute -top-2 right-4 w-10 h-10 bg-purple-50 rounded-[20px]"></div>
            <div className="text-4xl mb-3">🤖</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">AI/ML</div>
            <p className="text-gray-600 text-sm">TensorFlow • PyTorch • NLP</p>
          </motion.div>
        </div>

        {/* Single wide card - DIFFERENT from other sections */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-[80px] p-12 relative overflow-hidden"
        >
          {/* Tech stack visualization */}
          <div className="absolute top-8 right-8 flex space-x-2">
            <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
            <div className="w-4 h-4 bg-green-300 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-[35px]"></div>
          
          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tech Behind the Scenes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Backend & Cloud</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Java • Spring Boot • Node.js • Microservices • AWS • Azure • Docker • Kubernetes • Jenkins • GitLab
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frontend & Mobile</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  React • Angular • TypeScript • Redux • HTML5 • CSS3 • JavaScript • Responsive Design
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data & AI/ML</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  TensorFlow • PyTorch • NLP • MongoDB • MySQL • Oracle • Cassandra • Apache Spark • Kafka
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;