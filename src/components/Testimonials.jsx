import { useState } from 'react';

function TestimonialCard({ testimonial }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAnimationIteration = () => {
    if (!isHovered) {
      setIsAnimating(false);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 
        Mobile Global Rope
        On mobile (stacked layout), each card needs its own rope behind it.
      */}
      <div className="flex md:hidden absolute top-[20px] left-[-15%] right-[-15%] h-[8px] z-0 pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)]">
        <div className="w-[15%] bg-gradient-to-r from-transparent to-slate-300 dark:to-zinc-800" />
        <div className="flex-1 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800" />
        <div className="w-[15%] bg-gradient-to-l from-transparent to-slate-300 dark:to-zinc-800" />
      </div>

      {/* Card Container */}
      <div 
        onAnimationIteration={handleAnimationIteration}
        className={`relative z-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-h-[380px] md:min-h-[420px] flex flex-col overflow-hidden transition-transform duration-500 ease-out origin-[50%_24px] ${isAnimating ? 'animate-sway' : ''}`}
      >
        {/* 
          Circular Hole (Fake transparent hole)
          Placed perfectly at top-center. It matches the page background, 
          and has an inner shadow to look like a punched hole.
        */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-50 dark:bg-zinc-950 shadow-[inset_0_2px_5px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] border border-zinc-200/60 dark:border-zinc-800/80 z-20 flex items-center justify-center overflow-hidden">
          {/* Rope segment visible INSIDE the hole (behind the card surface) */}
          <div className="w-full h-[8px] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 pt-20 pb-8 px-8 flex flex-col justify-between flex-1">
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-[15px] leading-relaxed md:leading-loose font-normal">
              {testimonial.quote}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-wide uppercase">
              {testimonial.name}
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      {/* 
        Local Front Rope
        Starts exactly at the center of the hole (left: 50%) and goes to the right edge.
        This is placed outside the swaying card container so the rope stays intact and static.
      */}
      <div className="absolute top-[20px] left-[50%] right-0 h-[8px] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 shadow-[0_4px_6px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_6px_rgba(0,0,0,0.45)] z-20 pointer-events-none" />
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: `"I had the pleasure of working with Johann for over eight months at Nissan Digital’s IB4 (M&S Intelligence) department. From day one, he became a valuable part of the team. Johann showed strong skills in Python and Java and played a key role in implementing BDD in our product. He quickly understood the domain, picked up complex requirements, and turned them into clear, effective scenarios. His ability to learn fast and write clean, maintainable code stood out. He brought a great attitude to the team—always positive, curious, and ready to help. His passion for sports like cricket and football also added to his strong team spirit. Johann has a bright future in software development, and I’m happy to recommend him."`,
      name: "Ajesh CR",
      role: "Senior Software Engineer, Nissan Digital LLP"
    },
    {
      quote: `"I had the opportunity to work with Johann for over six months at Nissan, and I was consistently impressed by his ability to take on challenges head-on with exceptional technical expertise. He played a key role in supporting our product through deep data analysis and single-handedly developed the BDD suite to ensure top-notch product quality. Beyond his professional contributions, Johann is also a passionate football player who brings great sportsmanship and teamwork to everything he does. I have no doubt that he will be a valuable asset to any team!"`,
      name: "Hanoc George Varghese",
      role: "Product Engineer, Nissan Digital LLP"
    },
    {
      quote: `"I have worked with Johann at one of the project here at NDI, he is exceptionally good with programming in Java as well a Python. He has shown a great passion for learning and working with technology. I recommend Johann to any team looking for a talented software engineer."`,
      name: "Sreelal Chalil",
      role: "Senior Software Engineer, Nissan Digital LLP"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="w-full max-w-7xl mx-auto px-6 py-20 md:py-24 relative" aria-labelledby="testimonials-heading">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 tracking-tight"
          >
            People who vouch for my work.
          </h2>
        </div>

        {/* 3-Column Grid of Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 
            Desktop Global Rope 
            Spans the entire grid container, visible behind the cards and in the gaps.
            Fades out at the extreme left and right ends (less width than infinite 100vw).
          */}
          <div className="hidden md:flex absolute top-[20px] left-[-8%] right-[-8%] h-[8px] z-0 pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)]">
            <div className="w-[10%] bg-gradient-to-r from-transparent to-slate-300 dark:to-zinc-800" />
            <div className="flex-1 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800" />
            <div className="w-[10%] bg-gradient-to-l from-transparent to-slate-300 dark:to-zinc-800" />
          </div>

          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
