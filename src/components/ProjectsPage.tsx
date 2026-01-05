import { FocusInView } from "./FocusInView";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  award?: string;
  date: string;
  imageUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Amuse",
    subtitle: "Apple VisionOS Hand gesture-controlled music controller",
    date: "2025",
    imageUrl: "/logos/amuse.png",
    githubUrl: "https://github.com/TravisHaa/amuse-visionos",
  },
  {
    id: "2",
    title: "FittedUp",
    subtitle: "IOS App for automated Clothes Reselling",
    date: "2025",
    imageUrl: "/logos/fittedup.png",
    githubUrl: undefined,
  },
  {
    id: "3",
    title: "EMG2QWERTY Keystroke Prediction",
    subtitle: "Converting EMG signals to keystrokes with Meta EMG Encoder",
    date: "2025",
    imageUrl: "/logos/emg2qwerty.gif",
    githubUrl: "https://github.com/TravisHaa/C147EMG2QWERTY",
  },
  {
    id: "4",
    title: "Computer Science Course Planner",
    subtitle: "Course Planner for UCLA CS/CSE Students",
    date: "2024",
    imageUrl: "/logos/",
    githubUrl: "https://github.com/AudreyW05/Four-Year-Plan-Frontend",
  },
  {
    id: "5",
    title: "Marble Madness Game C++",
    subtitle: "A game made using C++",
    date: "2023",
    imageUrl: "/logos/marbles.png",
    githubUrl: "https://github.com/TravisHaa/cs32proj3",
  },
];

interface ProjectsPageProps {
  onProjectClick: (projectId: string) => void;
}

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FocusInView>
          <h1 className="mb-4 text-black/90">Projects</h1>
        </FocusInView>

        {/* <FocusInView delay={0.08}>
          <p className="text-lg text-black/60 mb-16 max-w-2xl">
            A collection of work spanning product design, web development, and interactive experiences
          </p>
        </FocusInView> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <FocusInView key={project.id} delay={index * 0.05}>
              <motion.div
                className="group w-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#f2f2f2] cursor-pointer"
                  onClick={() => onProjectClick(project.id)}
                  style={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Award Badge */}
                  {project.award && (
                    <div
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      {project.award}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="text-left">
                  <div className="text-xs text-black/40 mb-2">
                    {project.date}
                  </div>
                  <div className="mb-1 flex items-center gap-2">
                    <div
                      className="text-black/90 cursor-pointer"
                      onClick={() => onProjectClick(project.id)}
                    >
                      {project.title}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors px-2 py-1 rounded-md hover:bg-blue-50"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">github</span>
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-black/60">
                    {project.subtitle}
                  </div>
                </div>
              </motion.div>
            </FocusInView>
          ))}
        </div>
      </div>
    </div>
  );
}
