"use client";

import { motion, useInView } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { useRef } from "react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#" },
    { label: "Download", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter", color: "hover:bg-blue-500" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 cursor-pointer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4 group"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-2xl">N</span>
              </motion.div>
              <span className="text-2xl font-bold">Nourishr</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              Your AI meal companion. Decide what to eat in 5 seconds, not
              hours. Eat smarter. Live better.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 pb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white text-lg mb-1">Stay in the loop</h4>
              <p className="text-gray-400 text-sm">Get the latest updates and tips delivered to your inbox.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-white/10 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors w-64"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Copyright and Made with love on same line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nourishr. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1.5">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            by{" "}
            <motion.a
              href="https://www.linkedin.com/in/cyriac-zeh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Cyriac Zeh
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
