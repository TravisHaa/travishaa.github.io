import { FocusInView } from "./FocusInView";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  techStack: string[];
  problem: string;
  solution?: string;
  outcome?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projectData: { [key: string]: ProjectData } = {
  "1": {
    id: "1",
    title: "Amuse",
    subtitle: "Apple VisionOS Hand gesture-controlled music controller",
    heroImage: "/logos/amuse.png",
    description:
      "Amuse is a music controller application built for Apple VisionOS that leverages hand gesture recognition to provide an immersive, touch-free music control experience. Users can control playback and navigate playlists using intuitive hand movements in 3D space.",
    techStack: [
      "Swift",
      "SwiftUI",
      "VisionOS",
      "GestureKit",
      "MusicKit",
      "RealityKit",
    ],
    problem:
      "Traditional music controllers require physical interaction with screens or devices, which can be inconvenient in mixed reality environments. Users need a more natural and immersive way to control music while wearing spatial computing headsets. (I'm also just too lazy to reach for my phone when I want to turn the volume down)",
    solution:
      "Developed a VisionOS application that uses GestureKit to map natural hand movements to music control functions. Implemented smooth gesture detection for play/pause, track navigation, and opening the album panel. Created an intuitive 3D interface that responds to hand proximity and gestures. As much as I'd love to launch this app, I'm unable to do so as App Review requires manual testing, and I don't have a Vision Pro (Yes, a Redditor demo'd it for me). ",

    githubUrl: "https://github.com/TravisHaa/amuse-visionos",
  },
  // "2": {
  //   id: "2",
  //   title: "FittedUp",
  //   subtitle: "IOS App for automated Clothes Reselling",
  //   heroImage: "/logos/fittedup.png",
  //   description:
  //     "FittedUp is an iOS application that streamlines the process of reselling clothes by automating listing creation, price suggestions, and marketplace integration. The app uses GPT's vision API to identify clothing items and generate optimized listings based off three images of the clothing item.",
  //   techStack: ["Swift", "SwiftUI", "UIKit", "GPT API", "Firebase"],
  //   problem:
  //     "Reselling clothes manually is time-consuming and requires significant effort to photograph, describe, and price items. Many people have closets full of unworn clothes but lack the time or knowledge to effectively resell them.",
  //   solution:
  //     "Built an iOS app to automatically identify clothing items from photos, extract key features, and generate compelling product descriptions. Integrated price suggestion algorithms based on brand, condition, and market trends. Streamlined the listing process to take minutes instead of hours.",
  //   outcome:
  //     "Reduced listing creation time by 80%. Successfully integrated with major reselling platforms. Helped users monetize their unused clothing more effectively.",
  //   githubUrl: undefined,
  // },
  "3": {
    id: "3",
    title: "EMG2QWERTY Keystroke Prediction",
    subtitle: "Converting EMG signals to keystrokes with Meta EMG Encoder",
    heroImage: "/logos/emg2qwerty.gif",
    description:
      "This project explores the potential for hands-free typing through muscle signal interpretation. This is honestly one of my favorite projects, not only because of its novel usage of deep learning, but its potential application in the AI wearables industry.",
    techStack: ["Python", "PyTorch", "NumPy", "Meta EMG Encoder"],
    problem:
      "Traditional keyboard input methods are not accessible for individuals with limited hand mobility or dexterity. There is a need for alternative input methods that can interpret user intent from muscle signals.",
    solution:
      "Utilized Meta EMG Encoder to measure keystroke classification accuracy using various architectures including CNNs (75.41%) LSTMs (77.52%), GRUs (77.05%), CNN + LSTM (79.47%), and CNN + GRU (80.16%) on emg2qwerty dataset.",
    outcome:
      "Achieved 80.55% accuracy by fine-tuning using CNN + GRU + Gaussian Noise and analyzed other combinations of fine-tuning methods including Frequency masks, Downsampling, and Random Cropping to optimize performance.",
    githubUrl: "https://github.com/TravisHaa/C147EMG2QWERTY",
  },
  "4": {
    id: "4",
    title: "Computer Science Course Planner",
    subtitle: "Course Planner for UCLA CS/CSE Students",
    heroImage: "/logos/planner.png",
    description:
      "A web application designed specifically for UCLA Computer Science and Computer Science & Engineering students to plan their academic course schedules. The tool helps students visualize prerequisites, track degree progress, and optimize their course selections.",
    techStack: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    problem:
      "UCLA CS/CSE students struggle to plan their course schedules due to complex prerequisite chains and degree requirements. Manual planning on Excel Sheets is error-prone and time-consuming, leading to delayed graduation or missed prerequisites.",
    solution:
      "Created an interactive course planner that visualizes the CS/CSE curriculum as a graph, highlighting prerequisites and degree requirements. Implemented automatic prerequisite checking and degree progress tracking. Built a recommendation system that suggests optimal course sequences based on student goals.",
    githubUrl: "https://github.com/AudreyW05/Four-Year-Plan-Frontend ",
  },
  "5": {
    id: "5",
    title: "Marble Madness Game C++",
    subtitle: "A game made using C++",
    heroImage: "/logos/marbles.png",
    description:
      "This was genuinely one of my favorite class projects because seeing the in-game physics come to life was extremely satisfying, and it was probably the smoothest implementation I've ever had with a project.",
    techStack: ["C++"],
    problem:
      "Creating engaging physics-based games requires precise collision detection, realistic physics simulation, and smooth rendering. Many game engines abstract these complexities, but building from scratch provides deeper understanding.",
    githubUrl: "https://github.com/TravisHaa/cs32proj3",
  },
};

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="pt-32 px-6 text-center">
        <p>Project not found</p>
        <button
          onClick={onBack}
          className="mt-4 text-black/60 hover:text-black"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        {/* Hero Image */}
        <FocusInView>
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden mb-8 bg-[#f2f2f2]">
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FocusInView>

        {/* Title */}
        <FocusInView delay={0.08}>
          <h1 className="mb-3 text-black/90">{project.title}</h1>
        </FocusInView>

        <FocusInView delay={0.12}>
          <p className="text-lg text-black/60 mb-8">{project.subtitle}</p>
        </FocusInView>

        {/* Description */}
        <FocusInView delay={0.16}>
          <p className="text-black/70 mb-12 leading-relaxed">
            {project.description}
          </p>
        </FocusInView>

        {/* Tech Stack */}
        <FocusInView delay={0.2}>
          <div className="mb-12">
            <div className="text-sm mb-4 text-black/50">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-[#f2f2f2] text-sm text-black/70"
                  style={{
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FocusInView>

        {/* Problem → Solution → Outcome */}
        <div className="space-y-12">
          <FocusInView delay={0.24}>
            <div>
              <div className="text-sm mb-3 text-black/50">Problem</div>
              <p className="text-black/70 leading-relaxed">{project.problem}</p>
            </div>
          </FocusInView>

          {project.solution && (
            <FocusInView delay={0.28}>
              <div>
                <div className="text-sm mb-3 text-black/50">Solution</div>
                <p className="text-black/70 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </FocusInView>
          )}

          {project.outcome && (
            <FocusInView delay={0.32}>
              <div>
                <div className="text-sm mb-3 text-black/50">Outcome</div>
                <p className="text-black/70 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </FocusInView>
          )}
        </div>

        {/* Links */}
        {project.githubUrl || project.demoUrl ? (
          <FocusInView delay={0.36}>
            <div className="mt-16 flex gap-4">
              {project.githubUrl &&
              typeof project.githubUrl === "string" &&
              project.githubUrl.trim() !== "" ? (
                <a
                  href={project.githubUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              ) : null}
              {project.demoUrl &&
              typeof project.demoUrl === "string" &&
              project.demoUrl.trim() !== "" ? (
                <a
                  href={project.demoUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f2f2f2] text-black hover:bg-[#e8e8e8] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </FocusInView>
        ) : null}
      </div>
    </div>
  );
}
