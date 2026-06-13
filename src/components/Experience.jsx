import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Quadance Technologies",
      role: "Associate Software Engineer",
      dateRange: "MAR 2026 - Present",
      location: "TRIVANDRUM, INDIA",
      description: (
        <>
          <strong>Drove design for Oracle Fusion Pricing across 9 products</strong>, from foundational entities to cross-ecosystem work. Designed for <strong>scale</strong>, with lists holding up to a million priced atoms, for <strong>reuse</strong>, with patterns compounding across the suite, and for <strong>collaboration</strong>, across four product teams in three ecosystems. Shipped within Oracle's Redwood design system, <strong>extending it where pricing needed its own conventions</strong>.
        </>
      )
    },
    {
      company: "Quadance Technologies",
      role: "Project Trainee",
      dateRange: "OCT 2025 - MAR 2026",
      location: "TRIVANDRUM, INDIA",
      description: (
        <>
          <strong>Built a zero-to-one</strong> customer segment analytics dashboard for Oracle Unity (CDP). While the initial brief focused solely on visualizing segments, I transformed these static visualizations into <strong>actionable workflows</strong>. This defined the <strong>foundational product direction</strong> for the analytics vertical, earning an <strong>exclusive full-time return offer</strong>.
        </>
      )
    },
    {
      company: "Nissan Digital LLP",
      role: "Software Developer Intern",
      dateRange: "JUL 2024 - MAR 2025",
      location: "TRIVANDRUM, INDIA",
      description: (
        <>
          <strong>Co-led a 600 person organization</strong> for North East India's largest cultural festival. <strong>Spearheaded the design and delivery</strong> of 13 web portals and a mobile app alongside the engineering team. Demonstrated <strong>extreme operational leadership</strong> by designing and delegating the construction of <strong>life sized physical props</strong> on an impossible timeline.
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
          <div 
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-zinc-100/80 dark:border-zinc-800/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between"
          >
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
              <p className="text-sm md:text-[14.5px] text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed md:leading-loose">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
