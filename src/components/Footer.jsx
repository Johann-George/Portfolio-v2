
function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Top Text */}
      <div className="text-center mb-10">
        <p className="text-[11px] md:text-xs tracking-[0.3em] text-zinc-400 dark:text-zinc-500 uppercase font-mono">
          &ndash; Let&apos;s build something &ndash;
        </p>
      </div>

      {/* Divider */}
      <hr className="border-zinc-200 dark:border-zinc-700 mb-10" />

      {/* Bottom Content */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[15px] font-medium text-zinc-800 dark:text-zinc-200">
        
        {/* Left Side: Email & Phone */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          
          {/* Email */}
          <a href="mailto:johanngeorge2003@gmail.com" className="flex items-center space-x-3 hover:text-black dark:hover:text-white transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>johanngeorge2003@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+917994135415" className="flex items-center space-x-3 hover:text-black dark:hover:text-white transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+91 79941 35415</span>
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-8">
          <a href="https://www.linkedin.com/in/johann-v-george/" className="text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
