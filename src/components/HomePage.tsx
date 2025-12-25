import { MeshGradient } from './MeshGradient';
import { FocusInView } from './FocusInView';
import { ExperienceSection } from './ExperienceSection';
import { CourseworkSection } from './CourseworkSection';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: 'projects') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { scrollY } = useScroll();
  
  // Transform values for parallax effect
  const heroY = useTransform(scrollY, [0, 800], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  
  const experienceY = useTransform(scrollY, [400, 1200], [100, -50]);
  const courseworkY = useTransform(scrollY, [1000, 1600], [100, -50]);
  const ctaY = useTransform(scrollY, [1200, 2000], [100, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <MeshGradient />
        
        <div className="relative z-10 text-center px-6">
          <FocusInView>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider text-black/50 mb-2">
                Designer & Engineer
              </div>
              <div className="text-sm text-black/60">CS @ UCSD</div>
            </div>
          </FocusInView>

          <FocusInView delay={0.08}>
            <h1 className="mb-6 text-black/90 text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              I'm <span className="text-black">Travis</span>.
            </h1>
          </FocusInView>

          <FocusInView delay={0.16}>
            <p className="text-lg text-black/60 max-w-xl mx-auto mb-12">
              Building delightful experiences at the intersection of design and engineering
            </p>
          </FocusInView>
        </div>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="text-sm ">Scroll down to see my work</div>
          <ChevronDown className="w-5 h-5 text-black/40 animate-bounce" />
        </motion.div>

        {/* Timestamp (bottom left) */}
        <div className="absolute bottom-8 left-8 text-xs text-black/40">
          <div>LAST UPDATED</div>
          <div>12.25.25</div>
        </div>

        {/* Location (bottom right) */}
        <div className="absolute bottom-8 right-8 text-xs text-black/40 text-right">
          <div>SF Bay Area</div>
          <div>Los Angeles</div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-14 px-6 max-w-4xl mx-auto"
        style={{ y: experienceY }}
      >
        <FocusInView>
          <h2 className=" text-black/90">Experience</h2>
        </FocusInView>
        <ExperienceSection />
      </motion.section>

      {/* Coursework Section */}
      <motion.section
        className="py-20 px-6 max-w-4xl mx-auto"
        style={{ y: courseworkY }}
      >
        <FocusInView>
          <h2 className="text-black/90">Coursework</h2>
        </FocusInView>
        <CourseworkSection />
      </motion.section>

      {/* CTA to Projects */}
      <motion.section 
        className="py-32 px-6 text-center"
        style={{ y: ctaY }}
      >
        <FocusInView>
          <button
            onClick={() => onNavigate('projects')}
            className="group px-8 py-4 rounded-full bg-black text-white hover:bg-black/90 transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
            }}
          >
            View Projects
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </FocusInView>
      </motion.section>
    </div>
  );
}