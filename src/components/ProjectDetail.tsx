import { FocusInView } from './FocusInView';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  techStack: string[];
  problem: string;
  solution: string;
  outcome: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projectData: { [key: string]: ProjectData } = {
  '1': {
    id: '1',
    title: 'Design System',
    subtitle: 'Component library for modern web apps',
    heroImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop',
    description: 'A comprehensive design system built to scale across multiple products, featuring reusable components, design tokens, and detailed documentation.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Figma'],
    problem: 'Teams were rebuilding the same components repeatedly, leading to inconsistent UX and wasted engineering time. There was no single source of truth for design patterns.',
    solution: 'Created a centralized component library with comprehensive documentation, design tokens for consistent styling, and automated testing. Components are built with accessibility and customization in mind.',
    outcome: '40% reduction in development time for new features. Adopted by 5+ product teams. Improved design consistency across all products.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  '2': {
    id: '2',
    title: 'Mobile Banking App',
    subtitle: 'Reimagining financial services',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop',
    description: 'A modern mobile banking experience designed for Gen Z users, focusing on simplicity, clarity, and delightful interactions.',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Jest'],
    problem: 'Traditional banking apps are complex and intimidating. Users struggle with basic tasks like transfers and bill payments.',
    solution: 'Designed a clean, gesture-based interface with clear visual hierarchy. Implemented smart categorization and spending insights. Added biometric authentication for security.',
    outcome: 'User satisfaction increased by 35%. Task completion time reduced by 50%. Featured in App Store.',
    githubUrl: 'https://github.com'
  },
  '3': {
    id: '3',
    title: 'Portfolio Generator',
    subtitle: 'AI-powered portfolio builder',
    heroImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&h=900&fit=crop',
    description: 'An AI-powered tool that helps designers and developers create beautiful portfolio websites in minutes.',
    techStack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    problem: 'Many talented creators lack the time or technical skills to build a professional portfolio website.',
    solution: 'Built an AI assistant that generates portfolio layouts based on user input. Users can customize templates, add projects, and deploy with one click.',
    outcome: 'Over 1,000 portfolios created in first month. 95% user satisfaction rate. Won Best Design Award.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  '4': {
    id: '4',
    title: 'Meditation App',
    subtitle: 'Mindfulness for busy people',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop',
    description: 'A minimal meditation app designed for people who think they don\'t have time to meditate.',
    techStack: ['React Native', 'Expo', 'Firebase', 'Web Audio API'],
    problem: 'Existing meditation apps are overwhelming with too many features. Users need something simple for quick daily practice.',
    solution: 'Created a focused experience with 1-5 minute guided sessions. Beautiful, calming interface with subtle animations and high-quality audio.',
    outcome: 'Average daily active usage of 12 minutes. 4.8 star rating. 10k+ downloads.',
    githubUrl: 'https://github.com'
  },
  '5': {
    id: '5',
    title: 'E-commerce Platform',
    subtitle: 'Next-gen shopping experience',
    heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&h=900&fit=crop',
    description: 'A modern e-commerce platform with AR product previews and personalized recommendations.',
    techStack: ['React', 'Three.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    problem: 'Online shopping lacks the tactile experience of physical stores. Customers want to see how products look in their space.',
    solution: 'Integrated AR product visualization using WebXR. Built smart recommendation engine based on user behavior. Streamlined checkout process.',
    outcome: '60% increase in conversion rate. 25% reduction in returns. Processed $1M+ in transactions.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  '6': {
    id: '6',
    title: 'Task Manager',
    subtitle: 'Beautiful productivity tool',
    heroImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&h=900&fit=crop',
    description: 'A task management app that focuses on what matters: getting things done with minimal friction.',
    techStack: ['React', 'TypeScript', 'Supabase', 'Radix UI'],
    problem: 'Most todo apps are either too simple or too complex. Users need something powerful yet approachable.',
    solution: 'Designed an elegant interface with smart features like natural language input, keyboard shortcuts, and project organization. Focused on speed and clarity.',
    outcome: '5k+ active users. Average of 15 tasks completed per user per day. Featured on ProductHunt.',
    githubUrl: 'https://github.com'
  }
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
        <button onClick={onBack} className="mt-4 text-black/60 hover:text-black">
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
                    border: '1px solid rgba(0,0,0,0.06)'
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

          <FocusInView delay={0.28}>
            <div>
              <div className="text-sm mb-3 text-black/50">Solution</div>
              <p className="text-black/70 leading-relaxed">{project.solution}</p>
            </div>
          </FocusInView>

          <FocusInView delay={0.32}>
            <div>
              <div className="text-sm mb-3 text-black/50">Outcome</div>
              <p className="text-black/70 leading-relaxed">{project.outcome}</p>
            </div>
          </FocusInView>
        </div>

        {/* Links */}
        <FocusInView delay={0.36}>
          <div className="mt-16 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors"
                style={{
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f2f2f2] text-black hover:bg-[#e8e8e8] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </FocusInView>
      </div>
    </div>
  );
}
