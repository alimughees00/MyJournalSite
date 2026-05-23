"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useState } from "react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate subscription
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setIsLoading(false);
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 500);
  };

  return (
    <section
      id="download"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 via-primary-600 to-accent-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden relative"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Start Your Journaling Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Download MyJournal now and discover the power of reflection.
                Your private space awaits.
              </p>
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.myjournal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Get on Google Play
              </a>
              <a
                href="https://apps.apple.com/app/myjournal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download on App Store
              </a>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 bg-white/20 text-white placeholder-white/60 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-75 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-primary-300 border-t-primary-600 rounded-full animate-spin"></div>
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-green-100 text-sm font-medium"
                >
                  ✓ Thanks for subscribing! Check your email for updates.
                </motion.div>
              )}

              <p className="text-white/70 text-xs mt-4">
                We&apos;ll send you tips, updates, and special offers. No spam,
                ever.
              </p>
            </motion.div>

            {/* App Store Badges - Optional */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 text-sm"
            >
              <span>⭐ 4.9★ Rating on App Stores</span>
              <span>•</span>
              <span>🔒 Privacy Guaranteed</span>
              <span>•</span>
              <span>📱 iOS & Android</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
