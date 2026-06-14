
function Header({ darkMode, setDarkMode }) {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center z-10">
      <span className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-200">
        Johann's Portfolio
      </span>
      
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 active:scale-95 text-zinc-700 dark:text-zinc-300"
          title="Toggle theme"
          aria-label="Toggle light and dark mode"
        >
          {darkMode ? (
            // Sun Icon
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            // Moon Icon
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Resume Button */}
        <button
          className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 active:scale-95 group"
        >
          <span>Resume</span>
          <svg 
            className="w-4 h-4 text-zinc-500 group-hover:translate-y-[2px] transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
