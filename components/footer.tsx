"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Screenshots", href: "#screenshots" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/myjournal", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://instagram.com/myjournal",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/myjournal",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/myjournal", label: "GitHub" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/my-journal.png"
                  alt="MyJournal"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white">MyJournal</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your private space to reflect and grow. Daily journaling made
              beautiful and secure.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#5b79ff" }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© {currentYear} MyJournal. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>for your wellness.</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:hello@myjournal.app"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              feedback@baltorotech.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
