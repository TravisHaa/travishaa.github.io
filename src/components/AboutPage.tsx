import React from "react";
import { MeshGradient } from "./MeshGradient";
import { FocusInView } from "./FocusInView";
import { motion, useTransform, useScroll } from "motion/react";
import { Code, Palette, Sparkles, Mail, Linkedin, Github } from "lucide-react";

export function AboutPage() {
  const { scrollY } = useScroll();

  // Transform values for parallax effect
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [200, 800], [80, -50]);

  // Skills/Interests data
  const skills = [
    {
      icon: Code,
      title: "Engineering",
      description:
        "Building robust, scalable applications with modern web technologies",
      technologies: ["React", "TypeScript", "Node.js", "Python", "Java"],
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Creating intuitive interfaces with attention to detail and user experience",
      technologies: ["Figma", "Tailwind", "Motion", "UI/UX", "Design Systems"],
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Exploring new technologies and pushing boundaries of what's possible",
      technologies: ["AI/ML", "Canvas", "WebGL", "Animations", "Performance"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Profile Picture */}
      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <MeshGradient />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
          {/* Profile Picture */}
          <FocusInView>
            <div className="mb-8 flex justify-center">
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/profile-picture.jpg"
                  alt="Travis"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces";
                  }}
                />
              </motion.div>
            </div>
          </FocusInView>

          <FocusInView>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider text-black/50 mb-2">
                About Me
              </div>
            </div>
          </FocusInView>

          <FocusInView delay={0.08}>
            <h1 className="mb-6 text-black/90 text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Building the future, one pixel at a time
            </h1>
          </FocusInView>

          <FocusInView delay={0.16}>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              I'm a designer and engineer passionate about creating beautiful,
              functional experiences that delight users and solve real problems.
            </p>
          </FocusInView>
        </div>
      </motion.section>

      {/* Content Sections */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-16"
        style={{ y: contentY }}
      >
        {/* My Story Section */}
        <section className="mb-24">
          <FocusInView>
            <h2 className="mb-8 text-black/90">My Story</h2>
          </FocusInView>
          <FocusInView delay={0.05}>
            <div className="space-y-6 text-black/70 leading-relaxed">
              <p>
                I'm currently studying Computer Science at UC San Diego, where
                I'm constantly exploring the intersection of design and
                technology. My journey began with a curiosity about how things
                work, which evolved into a passion for building them.
              </p>
              <p>
                What excites me most is the challenge of translating complex
                problems into elegant, intuitive solutions. Whether it's
                crafting pixel-perfect interfaces or architecting scalable
                systems, I believe that great design and engineering go hand in
                hand.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring the
                latest web technologies, contributing to open source, or staying
                up-to-date with design trends. I'm always eager to learn and
                push the boundaries of what's possible on the web.
              </p>
            </div>
          </FocusInView>
        </section>

        {/* What I Do Section */}
        <section className="mb-24">
          <FocusInView>
            <h2 className="mb-12 text-black/90">What I Do</h2>
          </FocusInView>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <FocusInView key={skill.title} delay={index * 0.1}>
                <div
                  className="group p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <div className="mb-4">
                    <div
                      className="inline-flex p-3 rounded-2xl transition-all duration-500 group-hover:scale-110"
                      style={{ background: "rgba(0,0,0,0.05)" }}
                    >
                      <skill.icon className="w-6 h-6 text-black/70" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-black/90">{skill.title}</h3>
                  <p className="text-sm text-black/60 mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.04)",
                          color: "rgba(0,0,0,0.7)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusInView>
            ))}
          </div>
        </section>

        {/* My Approach Section */}
        <section className="mb-24">
          <FocusInView>
            <h2 className="mb-12 text-black/90">My Approach</h2>
          </FocusInView>
          <div className="grid md:grid-cols-2 gap-8">
            <FocusInView delay={0.05}>
              <div className="space-y-3">
                <h3 className="text-black/90">User-Centered Design</h3>
                <p className="text-black/60 leading-relaxed">
                  Every decision I make starts with the user. I believe in
                  creating experiences that are not just beautiful, but
                  intuitive and accessible to everyone.
                </p>
              </div>
            </FocusInView>
            <FocusInView delay={0.1}>
              <div className="space-y-3">
                <h3 className="text-black/90">Attention to Detail</h3>
                <p className="text-black/60 leading-relaxed">
                  The smallest details often make the biggest difference. From
                  micro-interactions to typography, every pixel matters.
                </p>
              </div>
            </FocusInView>
            <FocusInView delay={0.15}>
              <div className="space-y-3">
                <h3 className="text-black/90">Continuous Learning</h3>
                <p className="text-black/60 leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm committed to
                  staying current and always improving my craft.
                </p>
              </div>
            </FocusInView>
            <FocusInView delay={0.2}>
              <div className="space-y-3">
                <h3 className="text-black/90">Collaboration</h3>
                <p className="text-black/60 leading-relaxed">
                  The best work happens when diverse perspectives come together.
                  I thrive in collaborative environments.
                </p>
              </div>
            </FocusInView>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="pb-16">
          <FocusInView>
            <div
              className="p-12 rounded-3xl text-center"
              style={{
                background: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <h2 className="mb-4 text-black/90">Let's Connect</h2>
              <p className="text-black/60 mb-8 max-w-xl mx-auto">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(0,0,0,0.9)",
                    color: "white",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </FocusInView>
        </section>
      </motion.div>
    </div>
  );
}
