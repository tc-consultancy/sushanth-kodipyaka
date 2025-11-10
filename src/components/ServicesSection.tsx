import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What I Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade applications across finance, healthcare, and AI — solving real problems with scalable technology
          </p>
        </motion.div>

        {/* Two main cards like your reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left card - Enterprise Systems */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-[80px] px-8 py-12  md:py-12 md:px-12 min-h-[400px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Abstract decoration shapes */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-[60px] opacity-50"></div>
            <div className="absolute top-20 right-8 w-16 h-16 bg-blue-100 rounded-[30px]"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Enterprise<br />
                Financial Systems
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Building mission-critical banking applications at JPMorgan Chase. Secure, scalable microservices handling thousands of transactions daily.
              </p>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-sm text-gray-500">Finance & Banking</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Active</span>
              </div>
            </div>
          </motion.div>

          {/* Right card - Healthcare Solutions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gray-100 rounded-[80px] px-8 py-12  md:py-12 md:px-12 min-h-[400px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Medical illustration */}
            <div className="absolute  hidden top-8 right-8 w-32 h-32 bg-white rounded-[40px] md:flex items-center justify-center">
              <div className="text-5xl">⚕️</div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray-600 mb-6">
                Healthcare Tech
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Patient Care<br />
                Platforms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Developed healthcare applications at Cognizant serving thousands of patients. HIPAA-compliant systems with real-time data processing.
              </p>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-sm text-gray-500">2.5 years experience</span>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Large bottom card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-[80px] px-8 py-12  md:py-12 md:px-12 min-h-[300px] flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Abstract shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-[70px] opacity-40"></div>
          <div className="absolute top-10 left-1/3 w-20 h-20 bg-purple-100 rounded-[40px] opacity-60"></div>
          
          <div className="flex-1 relative z-10 mb-6 md:mb-0">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              AI & Machine Learning Innovation
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
              Master's in Artificial Intelligence from University of North Texas. Specialized in Deep Learning, NLP, and Large Language Models using TensorFlow, PyTorch, and Apache Spark.
            </p>
          </div>
          <div className="ml-0 md:ml-12 text-center md:text-right relative z-10">
            <div className="text-5xl font-bold text-gray-900 mb-2">2 Years</div>
            <p className="text-gray-700 font-medium mb-4">Advanced AI Research</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <span className="px-3 py-1 bg-white rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">NLP</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From JPMorgan Chase's financial systems to Cognizant's healthcare platforms, delivering enterprise solutions that scale
          </p>
        
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;