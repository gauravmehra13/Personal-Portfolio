import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Sudoviz",
      role: "Software Development Engineer",
      period: "Oct 2023 - Present",
      description:
        "Working as a Software Engineer focusing on frontend development and application architecture.",
      achievements: [
        "Built the frontend for an application security dashboard, enabling users to scan/import vulnerabilities, visualize data, and manage issues with features like triaging, Jira integration, and automated workflows",
        "Led the frontend development of an AI-powered repository chat application, enabling Git integration, interactive Q&A on codebases, and vulnerability assessment workflows",
        "Revamped the company's website using Next.js, improving performance by over 60% and significantly boosting the SEO",
        "Spearheaded the deployment of frontend applications using Docker, GitHub workflows, and Azure Container Apps, ensuring a seamless and efficient CI/CD pipeline",
        "Managed and optimized the database using Azure Cosmos DB, troubleshooting API issues through log analysis to enhance system reliability",
        "Worked closely with UI/UX designers and backend teams to develop user-friendly applications, emphasizing quality, collaboration, and scalability",
        "Improved application performance by reducing bundle size, optimizing asset loading, and implementing data caching for a smoother user experience",
      ],
      color: "border-primary-500 dark:border-primary-400",
    },
    {
      company: "RexelByte",
      role: "Frontend Developer",
      period: "Apr 2023 - Oct 2023",
      description:
        "Developed full-stack web applications with React, Node.js, and MongoDB, working in an agile environment for various clients.",
      achievements: [
        "Created dynamic, client-focused web solutions with strong emphasis on speed, SEO, and scalability using Next.js and TailwindCSS.",
        "Engineered modular, high-performance frontends with emphasis on bundle size optimization, smart imports, andscalable architecture across diverse projects.",
      ],
      color: "border-secondary-500 dark:border-secondary-400",
    },
    {
      company: "PrepBytes",
      role: "Software Developer Apprentice",
      period: "Jan 2023 - Apr 2023",
      description:
        "Apprentice in an agile team, worked on modular code and real-time frontend-backend integration.",
      achievements: [
        "Gained practical knowledge of code modularity, maintainability, and collaborative development in an agile environment.",
        "Enhanced understanding of frontend-backend integration and real-time event-driven programming.",
      ],
      color: "border-accent-500 dark:border-accent-400",
    },
  ];

  const activeExperiences = experiences.filter(
    (exp) => !exp.company.includes("/*")
  );
  const isSingleExperience = activeExperiences.length === 1;

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and career highlights"
        />

        <div
          ref={ref}
          className={`space-y-12 relative ${
            isSingleExperience ? "max-w-4xl mx-auto" : ""
          }`}
        >
          {/* Timeline line - Only show when multiple experiences */}
          {!isSingleExperience && (
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          )}

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`flex flex-col md:flex-row relative ${
                isSingleExperience ? "md:justify-center" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot - Only show when multiple experiences */}
              {!isSingleExperience && (
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-3 w-7 h-7 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-500 dark:border-primary-400 z-10 hidden md:block"></div>
              )}

              {/* Content layout */}
              <div
                className={`${
                  isSingleExperience
                    ? "w-full md:w-3/4"
                    : `md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-16 md:text-left md:self-end"
                          : "md:pl-16 md:ml-auto"
                      }`
                }`}
              >
                <div
                  className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft border-l-4 ${exp.color}`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium mb-3 text-primary-600 dark:text-primary-400">
                      {exp.company}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2
                            className="flex-shrink-0 text-green-500 dark:text-green-400 mr-2 mt-1"
                            size={16}
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
