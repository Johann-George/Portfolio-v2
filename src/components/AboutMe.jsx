import React from 'react';
import portraitImg from '../assets/johann_portrait.png';
import InteractiveAscii from './InteractiveAscii';
import AboutMeCard from './AboutMeCard';

function AboutMe() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-6 md:py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: The Card */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start">
          <AboutMeCard />
        </div>

        {/* Right Column: Halftone portrait */}
        <div className="lg:col-span-5 flex justify-center items-center lg:justify-end select-none relative">
          <div className="relative max-w-sm md:max-w-md w-full flex justify-center items-center">
            
            {/* Soft colorful background glow in dark mode */}
            <div className="absolute inset-0 -z-10 rounded-full bg-zinc-200/20 dark:bg-purple-950/10 blur-3xl w-[80%] h-[80%] mx-auto transition-colors duration-500" />
            
            {/* The ASCII portrait image with cursor glitch physics */}
            <InteractiveAscii imageSrc={portraitImg} />
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default AboutMe;
