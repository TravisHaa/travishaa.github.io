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
  link?: string;
  link2?: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Neural Engineering and Computation Lab",
    logo: "/logos/unitreego2.avif",
    role: "Deep Learning Undergraduate Researcher",
    date: "Oct 2025 - Present",
    shortDescription: "Training a Unitree Go2 quadruped using NVIDIA Isaac Sim",
    details: [
      "Training a unitree Go2 quadruped equipped with a D1 servo arm to perform dexterous manipulation and locomotion tasks with reinforcement and imitation learning.",
      "Utilizing ROS2 and Isaac Sim omnigraphs to teleoperate Go2 quadruped and stream join states.",
    ],
    techStack: ["Isaac Sim", "ROS2", "PyTorch"],
    link: "https://www.kaolab.org/"
  },
  {
    id: "2",
    company: "Paramount Pictures",
    logo: "/logos/paramount.jpeg",
    role: "Software Engineering Intern",
    date: "Jun 2025 - Nov 2025",
    shortDescription:
      "Developed PlutoTV experiences with focus on performance and accessibility",
    details: [
      "Built generalized data-fetching utility powering both Paramount+ and PlutoTV APIs, enabling shared application logic across distributed micro-services.",
      "Developed accessibility and internationalization features (TTS, translation, etc.), expanding customer base to Brazil and various European Countries.",
      "Implemented maturity-rated content filetering methods for Kids Mode.",
      "Utilized Svelte 4 development practices to optimize for PlutoTV legacy CTV devices with a 75 MB runtime constraint.",
    ],
    techStack: ["Svelte", "TypeScript", "Git"],
    impact: "Scaled PlutoTV apps to 20 countries with < 300 ms render latency",
  },
  {
    id: "3",
    company: "Nova, Tech for Good",
    logo: "/logos/nova.svg",
    role: "Software Engineering Lead",
    date: "Jan 2023 - May 2024",
    shortDescription: "Developing software solutions for non-profits",
    details: [
      "Leading code reviews, sprint planning, and iterative development cycles across 8-member engineering + design teams building nonprofit software.",
      "Building a external P2P fundraising platform for Drop in the Bucket, integrated with Stripe Checkout and PayPal API. Automated campaign moderation and recurring-donation tracking to cut admin workload by 70%.",
      "Engineered a multi-tenant data management platform for Inner City Visions to track services provided to homeless populations, digitizing records for 1,000+ individuals with live transcription and e-signature workflows.",
    ],
    techStack: ["React", "Firebase", "TypeScript"],
    link: "https://github.com/novaforgood/ICV",
    link2: "https://www.novaforgood.org",
  },
  {
    id: "4",
    company: "Center For Heterogenous Integration and Performance Scaling",
    logo: "/logos/chips.png",
    role: "Undergraduate Researcher",
    date: "Jan 2023 - May 2024",
    shortDescription:
      "Created and sped up computer vision pipeline for MicroLED Displays and Computer Chip Component Analysis",
    details: [
      "Wrote OpenCV algorithms to achieve a 90.95% increase in micron-level accuracy and a 27% increase in algorithm performance using novel approaches (NumPy, scipy, Pandas) to mitigate image distortions, calculate die shifts, and refine template matching and edge detection techniques.",
      "Automated microLED contact-pairing in Python using OpenCV and gdspy to eliminate flexpath overlaps and streamline GDSII routing workflows, overwriting 57% more microLED contact defects.",
      "Developed A* algorithms with gdspy to calculate optimal 3D wire routing between semiconductor dies, minimizing wiring complexity and reducing signal interference in integrated circuit design.",
    ],
    techStack: ["Python", "OpenCV", "KLayout", "GDSPY"],
    impact: "Presented research at university symposium",
    link: "https://github.com/TravisHaa/CHIPS_research",
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
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card expansion when clicking link
                      className="text-sm cursor-pointer mt-1 block"
                      style={{
                        color: "#2563eb", // blue-600
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1d4ed8"; // blue-700
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#2563eb"; // blue-600
                        e.currentTarget.style.textDecoration = "none";
                      }}
                    >
                      {exp.link}
                    </a>
                  )}
                  {exp.link2 && (
                    <a
                      href={exp.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card expansion when clicking link
                      className="text-sm cursor-pointer mt-2 block"
                      style={{
                        color: "#2563eb", // blue-600
                        textDecoration: "none",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1d4ed8"; // blue-700
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#2563eb"; // blue-600
                        e.currentTarget.style.textDecoration = "none";
                      }}
                    >
                      {exp.link2}
                    </a>
                  )}
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
