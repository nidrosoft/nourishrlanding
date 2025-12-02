"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { WaitlistModal } from "../ui/WaitlistModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"]
  );
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: headerBackground,
        borderBottomColor: headerBorder,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-xl">N</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900">Nourishr</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MagneticButton 
              className="px-5 py-2.5 text-sm bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              onClick={() => setIsWaitlistOpen(true)}
            >
              Join Waitlist
            </MagneticButton>
            <MagneticButton className="px-5 py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Download App
            </MagneticButton>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 border-t border-gray-100">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors py-3 px-4 rounded-xl"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  className="flex flex-col gap-3 pt-4 mt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button 
                    className="w-full py-3 px-4 text-gray-700 font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsWaitlistOpen(true);
                    }}
                  >
                    Join Waitlist
                  </button>
                  <button className="w-full py-3 px-4 text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Download App
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </motion.header>
  );
}
