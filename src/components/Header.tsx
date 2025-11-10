import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed left-0 right-0 top-0 bg-gray-100/90 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <span className="font-medium">sushanth.kodipyaka@gmail.com</span>
        
         
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <a 
            href="https://www.linkedin.com/in/sushanth-kodipyaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/sushanth-kodipyaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:sushanth.kodipyaka@gmail.com"
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:hidden flex justify-between items-center px-4 py-4">
        <div className="flex items-center  text-sm text-gray-600">
          <span className="font-medium hidden md:block">sushanth.kodipyaka@gmail.com</span>
          <span className="font-medium block md:hidden">Sushanth Kodipyaka</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <a 
            href="/resume.pdf" 
            download
            className="hover:text-gray-900 transition-colors"
          >
            Resume
          </a>
          <span>/</span>
          <a 
            href="https://www.linkedin.com/in/sushanth-kodipyaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Linkedin className='size-4'/>
          </a>
          <span>/</span>
          <a 
            href="mailto:sushanth.kodipyaka@gmail.com"
            className="hover:text-gray-900 transition-colors"
          >
            <Mail className='size-4'/>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;