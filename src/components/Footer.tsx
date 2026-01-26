import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  currentPage?: "home" | "projects";
  onNavigate?: (page: "home" | "projects") => void;
}

export function Footer({ currentPage, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Handle navigation link clicks
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "projects"
  ) => {
    e.preventDefault();
    
    if (page === "home") {
      // If already on home page, scroll to top
      if (currentPage === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate to home page
        onNavigate?.("home");
        // Scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    } else {
      // Navigate to projects page
      onNavigate?.(page);
      // Scroll to top of the new page after navigation
      setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Footer links organized by category
  const footerLinks = {
    Navigation: [
      { label: "Home", href: "#home", page: "home" as const },
      { label: "Projects", href: "#projects", page: "projects" as const },
    ],
    Social: [
      { label: "GitHub", href: "https://github.com/TravisHaa", icon: Github },
      { label: "LinkedIn", href: "https://linkedin.com/in/travis-ha", icon: Linkedin },
      { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=travisha110@g.ucla.edu", icon: Mail },
    ],
  };

  return (
    <footer className="relative bg-[#fafafa] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-black/90 tracking-tight">
                Travis Ha
              </h3>
              <p className="text-sm text-black/50 mt-1">
                Software Engineer
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=travisha110@g.ucla.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black/60 hover:text-black transition-colors duration-300 inline-block"
            >
              travisha110@g.ucla.edu
            </a>
            
          </motion.div>
          

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-black/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.Navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.page)}
                    className="text-sm text-black/60 hover:text-black transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-wider text-black/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.Social.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300 group"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-black/5 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Copyright */}
          <div className="text-xs text-black/40">
            © {currentYear} Travis Ha. All rights reserved.
          </div>

          {/* Additional Info */}
          <div className="flex items-center gap-6 text-xs text-black/40">
            <span>Designed & Built in California</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">UCLA CSE</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
