import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FocusInView } from "./FocusInView";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  date: string;
  shortDescription: string;
  details: string[];
  techStack: string[];
  impact?: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Design Studio",
    logo: "https://images.unsplash.com/photo-1618354691229-88d47f285158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBsb2dvfGVufDF8fHx8MTc2NjY0MDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    role: "Product Designer & Engineer",
    date: "Jun 2024 - Present",
    shortDescription:
      "Leading design systems and building component libraries for modern web applications",
    details: [
      "Architected and implemented a comprehensive design system used across 5+ products",
      "Built reusable React components with TypeScript and Tailwind CSS",
      "Collaborated with cross-functional teams to define product requirements",
      "Conducted user research and usability testing to inform design decisions",
    ],
    techStack: ["React", "TypeScript", "Tailwind", "Figma", "Framer Motion"],
    impact: "40% reduction in development time for new features",
  },
  {
    id: "2",
    company: "Tech Startup",
    logo: "https://images.unsplash.com/photo-1692372374563-9ab54f303b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGxvZ298ZW58MXx8fHwxNzY2NjQwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    role: "Frontend Developer Intern",
    date: "Jun 2023 - Aug 2023",
    shortDescription:
      "Developed interactive web experiences with focus on performance and accessibility",
    details: [
      "Built responsive web interfaces using React and modern CSS techniques",
      "Optimized application performance, improving load time by 60%",
      "Implemented accessibility features following WCAG 2.1 guidelines",
      "Participated in code reviews and contributed to engineering best practices",
    ],
    techStack: ["React", "JavaScript", "CSS", "Git"],
    impact: "Shipped features used by 10k+ monthly active users",
  },
  {
    id: "3",
    company: "Research Lab",
    logo: "https://images.unsplash.com/photo-1700314040142-3389dd76fd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYiUyMGxvZ298ZW58MXx8fHwxNzY2NjQwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    role: "Undergraduate Researcher",
    date: "Jan 2023 - May 2024",
    shortDescription:
      "Researching human-computer interaction and designing novel interaction techniques",
    details: [
      "Conducted literature reviews on gesture-based interfaces",
      "Designed and prototyped experimental interaction systems",
      "Analyzed user study data using statistical methods",
      "Co-authored research paper submitted to CHI conference",
    ],
    techStack: ["Python", "Unity", "C#", "R"],
    impact: "Presented research at university symposium",
  },
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <FocusInView key={exp.id} delay={index * 0.08}>
          <motion.div
            className="rounded-2xl bg-[#f2f2f2] overflow-hidden cursor-pointer"
            style={{
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
            whileHover={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleExpand(exp.id)}
          >
            {/* Card Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-3">
                {/* Company Logo */}
                <div
                  className="flex-shrink-0 rounded-xl overflow-hidden bg-white"
                  style={{
                    width: "100px",
                    height: "100px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  <ImageWithFallback
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-2">{exp.company}</div>
                  <div className="text-sm text-black/60 mb-1">{exp.role}</div>
                  <div className="text-xs text-black/40">{exp.date}</div>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-black/40" />
                </motion.div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-black/70">{exp.shortDescription}</p>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.25 }}
                      className="mt-6 pt-6 border-t border-black/5"
                    >
                      {/* Details */}
                      <div className="mb-6">
                        <div className="text-sm mb-3 text-black/80">
                          What I did
                        </div>
                        <ul className="space-y-2">
                          {exp.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-black/60 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-black/30"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <div className="text-sm mb-3 text-black/80">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-white/60 text-xs text-black/70"
                              style={{
                                border: "1px solid rgba(0,0,0,0.06)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      {exp.impact && (
                        <div className="text-sm text-black/50 italic">
                          {exp.impact}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </FocusInView>
      ))}
    </div>
  );
}
