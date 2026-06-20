
import { useEffect, useRef, useState } from 'react';

function ExperienceCard({ exp, idx }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 1. Initial entry transition (from bottom of viewport)
      if (rect.top < viewportHeight - 50) {
        setIsVisible(true);
      }

      // 2. Flip transition: turn the card as soon as it is fully seen in the viewport (bottom is above viewport bottom)
      if (rect.bottom < viewportHeight - 20) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const number = String(idx + 1).padStart(2, '0');

  return (
    <div 
      ref={cardRef}
      className="perspective-1000 h-[520px] md:h-[480px] w-full transition-all duration-[1000ms] ease-out"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${idx * 200}ms`
      }}
    >
      <div 
        className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{
          transitionDelay: `${idx * 100}ms`
        }}
      >
        {/* Front Side (Initial Design) - Border is present, shadow is none */}
        <div className="absolute inset-0 backface-hidden bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-300 dark:border-zinc-800/40 shadow-none flex flex-col justify-between select-none">
          {/* Top Right: Light grey large numbers */}
          <div className="flex justify-end">
            <span className="font-serif text-[7.5rem] md:text-[8.5rem] font-bold text-zinc-100 dark:text-zinc-800/40 leading-none select-none tracking-tighter">
              {number}
            </span>
          </div>
          {/* Bottom Left: Company name & Role */}
          <div className="mt-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
              {exp.company}
            </h3>
            <p className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mt-3">
              {exp.role}
            </p>
          </div>
        </div>

        {/* Back Side (Detailed View) - Border is present, shadow appears when turned */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-300 dark:border-zinc-800/40 flex flex-col justify-between transition-shadow duration-500 ${isFlipped ? 'shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)]' : 'shadow-none'}`}>
          <div>
            {/* Header Info */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
                {exp.company}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-normal">
                {exp.role}
              </p>
              <div className="mt-4 text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase space-y-1">
                <div>{exp.dateRange}</div>
                <div>{exp.location}</div>
              </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-800/80 my-6" />

            {/* Description Body */}
            <p className="text-sm md:text-[14px] text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed md:leading-loose">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      company: "Quadance Technologies",
      role: "Associate Software Engineer",
      dateRange: "Current",
      location: "TECHNOPARK PHASE 1, TRIVANDRUM",
      description: (
        <>
          Currently working with <strong>React, Tailwind, Django, and PostgreSQL</strong>. Collaborating closely with designers using <strong>Figma</strong> to build and deliver responsive user interfaces.
        </>
      )
    },
    {
      company: "Quadance Technologies",
      role: "Project Trainee",
      dateRange: "OCT 2025 - MAR 2026",
      location: "TECHNOPARK PHASE 1, TRIVANDRUM",
      description: (
        <>
          <strong>Building core competency</strong> in Python development and machine learning fundamentals to support software design and automation tasks. Developing foundational knowledge in <strong>AI model design, data handling, and automation techniques</strong>.
        </>
      )
    },
    {
      company: "Nissan Digital LLP",
      role: "Software Developer Intern",
      dateRange: "JUL 2024 - MAR 2025",
      location: "TECHNOPARK PHASE 3, TRIVANDRUM",
      description: (
        <>
          Worked on implementing <strong>Behaviour Driven Development scripts using Java, Selenium, and Cucumber</strong> to perform Regression tests. <strong>Integrated Jenkins with Bitbucket</strong> to streamline code execution, supporting continuous integration workflows. Collaborated on <strong>code reviews and knowledge-sharing sessions</strong>, ensuring adherence to best practices and clean coding standards.
        </>
      )
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24" aria-labelledby="experience-heading">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 
          id="experience-heading"
          className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 tracking-tight"
        >
          Where I've worked.
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
