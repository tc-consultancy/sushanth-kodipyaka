import { motion } from 'framer-motion';
import { logo } from '../assets';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen relative flex items-center bg-gray-100 pt-20 ">
      <div className='rounded-b-[120px] h-28 w-full bg-gray-100 absolute -bottom-28' />
      <div className="max-w-7xl flex md:flex-row flex-col w-full px-4 mx-auto py-4 md:py-16">
        <div className="w-full">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-8"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="md:w-20 h-16 min-w-16 md:h-20 rounded-full overflow-hidden shadow-lg">
                <img
                  src={logo}
                  alt="Sushanth Kodipyaka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">Sushanth Kodipyaka</h2>
                <p className="text-gray-600 text-xs md:text-base">He/Him • Open to Full-Time/W2 Opportunities</p>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.5] md:leading-[1.1]"
          >
            <span className="text-gray-400">Building scalable</span> {' '}<br className=' hidden md:flex' />
            <span className="text-gray-400">enterprise</span>{' '}
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full"></div>
                <span className="text-blue-600 font-bold text-3xl">Java</span>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚛</span>
                </div>
              </span>
              <span className="text-black">solutions</span>
            </span>
            <br />
            <span className="text-gray-400">with modern</span>{' '}
            <span className="text-black">microservices,</span><br />
            <span className="inline-flex items-center gap-4">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl px-6 py-3 shadow-lg">
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
              <span className="text-black">cloud architecture.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl leading-relaxed"
          >
            Software Engineer at <strong className="text-gray-900">JPMorgan Chase</strong> with 4+ years building 
            enterprise-grade applications across finance and healthcare. Master's in AI from University of North Texas. 
            Expertise in <strong className="text-gray-900">Spring Boot</strong>, <strong className="text-gray-900">React</strong>, 
            <strong className="text-gray-900"> Angular</strong>, and <strong className="text-gray-900">AWS/Azure</strong> cloud platforms.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a 
              href="https://www.linkedin.com/in/sushanth-kodipyaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-base text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              <span>View My Projects</span>
              <span className="text-lg">↗</span>
            </a>
            <a 
              href="mailto:sushanth.kodipyaka@gmail.com"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for Hire
            </a>
          </motion.div>
        </div>
<div className='flex items-center w-full md:w-96 relative'>
  <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-8 w-80"
          >
            <div className="flex items-center gap-4 md:absolute md:-left-24 md:-rotate-12 md:top-24">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">4+</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">Years Experience</div>
                <div className="text-gray-500">Enterprise Development</div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:absolute md:left-24  md:top-1/2 md:-translate-y-1/2">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">MS</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">AI Master's Degree</div>
                <div className="text-gray-500">University of North Texas</div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:absolute md:-left-24 md:rotate-12 md:bottom-24">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">JP</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">JPMorgan Chase</div>
                <div className="text-gray-500">Software Engineer</div>
              </div>
            </div>
          </motion.div>
</div>
        
      </div>
    </section>
  );
};

export default HeroSection;