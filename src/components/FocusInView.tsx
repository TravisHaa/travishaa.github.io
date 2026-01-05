import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface FocusInViewProps {
  children: ReactNode;
  delay?: number;
}

export function FocusInView({ children, delay = 0 }: FocusInViewProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: 'blur(12px)',
        y: 24
      }}
      animate={isInView ? {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0
      } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
