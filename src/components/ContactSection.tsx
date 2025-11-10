const ContactSection = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto text-center px-8 py-16 md:py-20">
        <div className="mb-12">
          <div className="w-16 h-16 mx-auto mb-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
          Let’s Make It Happen
          <br />
          <span className="text-gray-600 text-2xl">Start a conversation</span>
      
        
        </h2>
        <div className="flex justify-center space-x-4 md:space-x-6 flex-wrap gap-y-4">
          <a 
            href="mailto:sushanth.kodipyaka@gmail.com"
            className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-all duration-200 font-medium text-sm inline-block"
          >
            📧 Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/sushanth-kodipyaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-medium text-sm inline-block"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;