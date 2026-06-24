import clinicImg from '../assets/clinic_management.jpg';
import ragImg from '../assets/advanced_rag.jpg';
import loanImg from '../assets/loan_management.jpg';

function Projects() {
  const projects = [
    {
      id: "01",
      category: "WEB DEVELOPMENT",
      title: "Clinic Management System",
      description: "Designed and developed user interfaces for appointment management, patient records, and role-specific dashboards. Built secure backend APIs with Spring Boot, implementing role-based access control and data validation to maintain system integrity. Deployed a production-simulated environment using AWS Elastic Beanstalk and MySQL, ensuring reliability and fault tolerance.",
      tech: "React, Bootstrap, Spring Boot, MySQL",
      timeline: "July 2025 – August 2025",
      image: clinicImg,
      githubUrl: "https://github.com/Johann-George/Clinic-Management-System-Backend.git",
    },
    {
      id: "02",
      category: "AI",
      title: "Conversational AI Chatbot using RAG",
      description: "Designed and implemented a Retrieval-Augmented Generation (RAG) architecture integrating LLMs with vector search databases. Performed end-to-end development including data ingestion, query execution, and interface design using Streamlit. Troubleshot model inconsistencies and optimized retrieval workflows to improve accuracy and response quality.",
      tech: "Python, Streamlit, LangChain, ChromaDB",
      timeline: "July 2024 – August 2025",
      image: ragImg,
      githubUrl: "https://github.com/Johann-George/Advanced-RAG.git",
    },
    {
      id: "03",
      category: "WEB DEVELOPMENT",
      title: "Loan Management System",
      description: "Analyzed requirements and designed a full-stack workflow supporting loan registration, processing, and approvals. Developed RESTful APIs with modular service layers to ensure scalability and clean separation of concerns.",
      tech: "Angular, Bootstrap, SpringBoot, MySQL",
      timeline: "May 2022 – June 2022",
      image: loanImg,
      githubUrl: "https://github.com/Johann-George/Loan-Management-System-Backend.git",
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24" aria-labelledby="projects-heading">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <h2 
          id="projects-heading"
          className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 tracking-tight"
        >
          What I've worked on.
        </h2>
      </div>

      {/* List of Cards */}
      <div className="space-y-12 md:space-y-16">
        {projects.map((project, idx) => {
          const CardContent = (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
                <div>
                  {/* Category & ID */}
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                    <span className="text-zinc-800 dark:text-zinc-200">{project.id}</span>
                    <span className="h-[1px] w-8 bg-zinc-800 dark:bg-zinc-700"></span>
                    <span>{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed font-normal text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech & Timeline Section */}
                <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[12px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                        TECH STACK
                      </span>
                      <span className="block text-zinc-700 dark:text-zinc-300 mt-2 font-normal leading-snug text-xs md:text-[13px]">
                        {project.tech}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[12px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                        TIMELINE
                      </span>
                      <span className="block text-zinc-700 dark:text-zinc-300 mt-2 font-normal leading-snug text-xs md:text-[13px]">
                        {project.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl md:rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-800 aspect-[4/3] relative group shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          );

          const cardClasses = "block bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-zinc-100/50 dark:border-zinc-700 transition-all duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 cursor-pointer";

          if (project.githubUrl) {
            return (
              <a 
                key={idx}
                href={project.githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div 
              key={idx}
              className={cardClasses}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
