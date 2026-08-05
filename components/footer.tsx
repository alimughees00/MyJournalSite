"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Screenshots", href: "#screenshots" },
      { name: "Benefits", href: "#benefits" },
      { name: "FAQs", href: "#faq" },
    ],
    Company: [{ name: "About Us", href: "#" }],
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="container-max">
        {/* Main Footer */}
        <div className="py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <img
                    src="/assets/my-journal.png"
                    alt="MyJournal"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-bold text-lg text-white">MyJournal</span>
              </div>

              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                Your private space to reflect and grow.
              </p>
            </motion.div>

            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.Product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-3">Contact</h3>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:feedback@baltorotech.com"
                  className="hover:text-primary-400 transition-colors break-all"
                >
                  feedback@baltorotech.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span>© {currentYear} MyJournal</span>
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
          </div>

          <p className="text-center sm:text-right">Made for your wellness</p>
        </motion.div>
      </div>
    </footer>
  );
}
