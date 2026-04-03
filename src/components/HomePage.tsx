import { MeshGradient } from "./MeshGradient";
import { FocusInView } from "./FocusInView";
import { ExperienceSection } from "./ExperienceSection";
import { CourseworkSection } from "./CourseworkSection";
import { GooeyText } from "./ui/gooey-text-morphing";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

interface HomePageProps {
  onNavigate: (page: "projects") => void;
}

// Define the transition zone and target scroll position
const TRANSITION_START = 0;
const TRANSITION_END = 500; // End of hero fade animation
const TARGET_SCROLL = 600; // Perfect position after transition completes

export function HomePage({ onNavigate }: HomePageProps) {
  const { scrollY } = useScroll();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Transform values for parallax effect
  const heroY = useTransform(scrollY, [0, 800], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, TRANSITION_END], [1, 0]);
  const heroScale = useTransform(scrollY, [0, TRANSITION_END], [1, 0.95]);

  const experienceY = useTransform(scrollY, [400, 1200], [100, -50]);
  const courseworkY = useTransform(scrollY, [1000, 1600], [100, -50]);
  const ctaY = useTransform(scrollY, [1200, 2000], [100, 0]);

  // Handle scroll snap behavior - intercepts scroll gestures in transition zone
  useEffect(() => {
    let touchStartY = 0;
    let isTouching = false;

    const snapTo = (position: number) => {
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;
      window.scrollTo({ top: position, behavior: "smooth" });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    // Handle wheel events — snap down to TARGET_SCROLL or up to 0
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;
      if (currentScroll >= TRANSITION_START && currentScroll < TARGET_SCROLL && !isScrollingRef.current) {
        e.preventDefault();
        snapTo(e.deltaY > 0 ? TARGET_SCROLL : 0);
      }
    };

    // Handle touch events for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      isTouching = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      const currentScroll = window.scrollY;
      const touchDelta = touchStartY - e.touches[0].clientY;
      if (currentScroll >= TRANSITION_START && currentScroll < TARGET_SCROLL && Math.abs(touchDelta) > 10 && !isScrollingRef.current) {
        e.preventDefault();
        isTouching = false;
        snapTo(touchDelta > 0 ? TARGET_SCROLL : 0);
      }
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <MeshGradient />

        <div className="relative z-10 text-center px-6">
          <FocusInView>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider text-black/50 mb-2">
                Software Engineer
              </div>
              <div className="text-sm text-black/60">CSE @ UCLA</div>
            </div>
          </FocusInView>

          <FocusInView delay={0.08}>
            <h1 className="mb-6 text-black/90 text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Hey! I'm <span className="text-black">Travis</span>.
            </h1>
          </FocusInView>

          <FocusInView delay={0.16}>
            <div className="font-bold h-10 mb-12 opacity-60">
              <GooeyText
                texts={["C++ Optimization", "AI Wearables", "Deep Learning"]}
                morphTime={1}//morph duration
                cooldownTime={2}//hold time btwn transititions
                textClassName="text-lg text-black"
              />
            </div>
          </FocusInView>
        </div>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.01, 
            delay: 0.01, 
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="text-sm ">Scroll down to see my work</div>
          <ChevronDown className="w-5 h-5 text-black/40 animate-bounce" />
        </motion.div>

        {/* Timestamp (bottom left) - pops in after name */}
        <motion.div
          className="absolute bottom-8 left-8 text-xs text-black"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div>LAST UPDATED</div>
          <div>4.1.26</div>
        </motion.div>

        {/* Location (bottom right) - pops in after name */}
        <motion.div
          className="absolute bottom-8 right-8 text-xs text-black text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div>SF Bay Area</div>
          <div>Los Angeles</div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-14 px-6 max-w-4xl mx-auto"
        style={{ y: experienceY }}
      >
        <FocusInView>
          <h2
            className="pt-20 pb-0 text-black/90"
            style={{ marginBottom: "2rem" }}
          >
            Experience
          </h2>
        </FocusInView>
        <ExperienceSection />
      </motion.section>

      {/* Coursework Section */}
      <motion.section
        className="py-20 px-6 max-w-4xl mx-auto"
        style={{ y: courseworkY }}
      >
        <FocusInView>
          <h2 className="pt-20 pb-0 text-black/90"
            style={{ marginBottom: "2rem" }}
          >Coursework</h2>
        </FocusInView>
        <CourseworkSection />
      </motion.section>

      {/* CTA to Projects */}
      <motion.section className="py-32 px-6 text-center" style={{ y: ctaY }}>
        <FocusInView>
          <button
            onClick={() => onNavigate("projects")}
            className="group px-8 py-4 rounded-full bg-black text-white hover:bg-black/90 transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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
