
function AboutMeCard({ showBorderAndShadow = false }) {
  const borderClasses = showBorderAndShadow 
    ? "border-zinc-100/50 dark:border-zinc-800/40" 
    : "border-transparent";
    
  const shadowClasses = showBorderAndShadow
    ? "shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)] shadow-[0_30px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
    : "shadow-none";

  return (
    <div className={`w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 md:p-14 border ${borderClasses} ${shadowClasses} min-h-[500px] flex flex-col justify-between transition-all duration-[1200ms] ease-in-out`}>
      
      <div className="flex flex-col justify-between h-full flex-1">
        {/* Intro Text */}
        <div>
          <h1 id="about-heading" className="font-serif text-[3.8rem] sm:text-[4.8rem] md:text-[5.5rem] text-zinc-900 dark:text-zinc-50 tracking-tight leading-[0.95] mb-8 md:mb-10">
            Hi.<br />
            I'm <span className="italic font-light">Johann.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed md:leading-loose max-w-[460px]">
            A Software Developer who turns complex problems into elegant, high-performance web applications. I've spent close to 9 months at Quadance Technologies developing and optimizing user-centric digital products.
          </p>
        </div>

        {/* Info Grid */}
        <div>
          <hr className="border-zinc-100 dark:border-zinc-800/80 my-8 md:my-10" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4">
            <div>
              <div className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Role</div>
              <div className="text-sm md:text-[15px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                Software<br />Developer
              </div>
            </div>
            <div>
              <div className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Location</div>
              <div className="text-sm md:text-[15px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                Trivandrum,<br />India
              </div>
            </div>
            <div>
              <div className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Experience</div>
              <div className="text-sm md:text-[15px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                9 Months
              </div>
            </div>
            <div>
              <div className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">Focus</div>
              <div className="text-sm md:text-[15px] font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                Web<br />Development
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutMeCard;
