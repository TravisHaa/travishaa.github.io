import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  currentPage: "home" | "projects" | "about";
  onNavigate: (page: "home" | "projects" | "about") => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  // { id: 'about', label: 'About' },
  { id: "contact", label: "Contact" },
] as const;

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [activeTab, setActiveTab] = useState<
    "home" | "projects" | "about" | "contact"
  >(currentPage);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activeElement = navRefs.current[activeTab];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(currentPage);
  }, [currentPage]);

  const handleTabClick = (id: string) => {
    if (id === "contact") {
      setActiveTab("contact");
      setShowContactDropdown(!showContactDropdown);
    } else {
      setShowContactDropdown(false);
      setActiveTab(id as "home" | "projects" | "about");
      onNavigate(id as "home" | "projects" | "about");
    }
  };

  const handleContactLink = (
    type: "email" | "linkedin" | "github",
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent click from bubbling to click-outside handler
    setShowContactDropdown(false);
    // Contact actions
    if (type === "email") {
      window.location.href = "mailto:travisha110@g.ucla.edu";
    } else if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/travis-ha-/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/TravisHaa", "_blank");
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="relative flex items-center gap-1 px-1.5 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(22px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow:
              "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          {/* Active Indicator */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(30px) saturate(180%)",
              boxShadow:
                "0 6px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.7)",
              height: "calc(100% - 12px)",
              top: "6px",
            }}
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{
              duration: 0.25,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          />

          {/* Nav Items */}
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => (navRefs.current[item.id] = el)}
              onClick={() => handleTabClick(item.id)}
              className="relative px-5 py-2.5 text-sm transition-all duration-250"
              style={{
                fontWeight: activeTab === item.id ? 600 : 400,
                transform: activeTab === item.id ? "scale(1.05)" : "scale(1)",
                letterSpacing: activeTab === item.id ? "-0.01em" : "0",
                color: "#1d1d1f",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact Dropdown */}
        <AnimatePresence>
          {showContactDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside dropdown from closing it
              className="absolute top-full mt-3 right-0 w-48 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.45)",
                backdropFilter: "blur(22px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <button
                onClick={(e) => handleContactLink("email", e)}
                className="w-full px-5 py-3 text-left text-sm hover:bg-white/30 transition-colors"
              >
                Email
              </button>
              <button
                onClick={(e) => handleContactLink("linkedin", e)}
                className="w-full px-5 py-3 text-left text-sm hover:bg-white/30 transition-colors border-t border-black/5"
              >
                LinkedIn
              </button>
              <button
                onClick={(e) => handleContactLink("github", e)}
                className="w-full px-5 py-3 text-left text-sm hover:bg-white/30 transition-colors border-t border-black/5"
              >
                GitHub
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Click outside to close dropdown */}
      {showContactDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowContactDropdown(false)}
        />
      )}
    </>
  );
}
