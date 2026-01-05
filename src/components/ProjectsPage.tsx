import { FocusInView } from './FocusInView';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  award?: string;
  date: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Design System',
    subtitle: 'Component library for modern web apps',
    award: 'Featured on ProductHunt',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    subtitle: 'Reimagining financial services',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    title: 'Portfolio Generator',
    subtitle: 'AI-powered portfolio builder',
    award: 'Best Design Award',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Meditation App',
    subtitle: 'Mindfulness for busy people',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'E-commerce Platform',
    subtitle: 'Next-gen shopping experience',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'Task Manager',
    subtitle: 'Beautiful productivity tool',
    date: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'
  }
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

        <FocusInView delay={0.08}>
          <p className="text-lg text-black/60 mb-16 max-w-2xl">
            A collection of work spanning product design, web development, and interactive experiences
          </p>
        </FocusInView>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <FocusInView key={project.id} delay={index * 0.05}>
              <motion.button
                onClick={() => onProjectClick(project.id)}
                className="group w-full text-left"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div 
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#f2f2f2]"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
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
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      {project.award}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="text-xs text-black/40 mb-2">{project.date}</div>
                <div className="mb-1 text-black/90">{project.title}</div>
                <div className="text-sm text-black/60">{project.subtitle}</div>
              </motion.button>
            </FocusInView>
          ))}
        </div>
      </div>
    </div>
  );
}
