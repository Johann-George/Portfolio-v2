
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
          <div 
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-zinc-100/50 dark:border-zinc-800/40 flex flex-col justify-between"
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
