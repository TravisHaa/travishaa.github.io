import { motion, useScroll, useTransform } from "motion/react";
import { FocusInView } from "./FocusInView";
import { MeshGradient } from "./MeshGradient";
import { Code2, Palette, Sparkles, Github, Linkedin, Mail } from "lucide-react";

export function AboutPage() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [200, 800], [80, -50]);

  const skills = [
    {
      icon: Code2,
      title: "Systems & Software",
      description:
        "Ship production apps and research code—from PlutoTV micro-services to vision pipelines and C++ optimization",
      technologies: ["C++", "Python", "React", "Svelte", "TypeScript", "PyTorch"],
    },
    {
      icon: Palette,
      title: "ML & Robotics",
      description:
        "Deep learning, reinforcement learning, and robotics—Isaac Sim, ROS 2, computer vision, and EMG-based interfaces",
      technologies: ["Isaac Sim", "ROS 2", "OpenCV", "RL", "Computer Vision"],
    },
    {
      icon: Sparkles,
      title: "Research & Impact",
      description:
        "Academic and industry work: semiconductor vision, accessibility, i18n, and nonprofit platforms",
      technologies: ["CHIPS", "Accessibility", "i18n", "Nova Tech for Good"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Mesh Gradient */}
      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <MeshGradient />

        {/*profile pic*/}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center md:text-left">
              <FocusInView>
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-black/50 mb-2">
                    About Me
                  </div>
                </div>
              </FocusInView>

              <FocusInView delay={0.08}>
                <h1 className="mb-6 text-black/90 text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                  From C++ to deep learning—building systems that move and scale
                </h1>
              </FocusInView>

              <FocusInView delay={0.16}>
                <p className="text-lg text-black/60 max-w-2xl mx-auto md:mx-0">
                  I'm a CSE student at UCLA passionate about speeding up software and developing new forms of interaction/perception.
                </p>
              </FocusInView>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-16"
        style={{ y: contentY }}
      >
        {/* Bio Section */}
        <section className="mb-24">
          <FocusInView>
            <h2 className="mb-8 text-black/90">My Story</h2>
          </FocusInView>

          <FocusInView delay={0.05}>
            <div className="space-y-6 text-black/70 leading-relaxed">
              <p>
                I'm studying Computer Science and Engineering at UCLA, with a
                focus on fullstack, deep learning, and computer vision. I've worked on
                everything from training a Unitree Go2 quadruped with Isaac Sim
                and RL at the Neural Engineering and Computation Lab to building
                PlutoTV experiences at Paramount and leading engineering at Nova,
                Tech for Good.
              </p>
              <p>
                I'm drawn to problems that sit at the intersection of low-level
                performance and real-world impact—whether that's speeding up
                computer-vision pipelines for microLED displays at CHIPS,
                shipping accessibility and i18n features that scale apps to 20+
                countries, or building EMG-to-keystroke prediction and VisionOS
                gesture controllers.
              </p>
              <p>
                When I'm not in the lab or shipping code, I'm usually playing pickleball, trying new foods, or biking.
              </p>
            </div>
          </FocusInView>
        </section>

        {/* Skills Grid */}
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
                      style={{
                        background: "rgba(0,0,0,0.05)",
                      }}
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

        {/* Values Section */}
        <section className="mb-24">
          <FocusInView>
            <h2 className="mb-12 text-black/90">My Approach</h2>
          </FocusInView>

          <div className="grid md:grid-cols-2 gap-8">
            <FocusInView delay={0.05}>
              <div className="space-y-3">
                <h3 className="text-black/90">User-Centered Engineering</h3>
                <p className="text-black/60 leading-relaxed">
                  Every decision I make starts with the user. I believe in
                  creating experiences that are not just beautiful, but
                  intuitive and accessible to everyone.
                </p>
              </div>
            </FocusInView>

            <FocusInView delay={0.1}>
              <div className="space-y-3">
                <h3 className="text-black/90">Rigor in Implementation</h3>
                <p className="text-black/60 leading-relaxed">
                  Whether it's squeezing performance out of vision pipelines,
                  meeting strict runtime constraints, or improving algorithmic
                  accuracy, I focus on getting the details right.
                </p>
              </div>
            </FocusInView>

            <FocusInView delay={0.15}>
              <div className="space-y-3">
                <h3 className="text-black/90">Continuous Learning</h3>
                <p className="text-black/60 leading-relaxed">
                  I stay current on ML, robotics, and systems—from new RL
                  methods to better tooling—and apply what I learn in both
                  research and product.
                </p>
              </div>
            </FocusInView>

            <FocusInView delay={0.2}>
              <div className="space-y-3">
                <h3 className="text-black/90">Collaboration</h3>
                <p className="text-black/60 leading-relaxed">
                  I've led cross-functional teams at Nova and worked closely with
                  researchers at NECL and CHIPS. I do my best work when
                  collaborating with others.
                </p>
              </div>
            </FocusInView>
          </div>
        </section>

        {/* Connect Section */}
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
                  href="https://github.com/TravisHaa"
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
