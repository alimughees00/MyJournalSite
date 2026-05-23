"use client";

import { motion } from "framer-motion";
import { PlayCircle, Download } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
    float: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-950 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium">
                ✨ Your Private Journal App
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Your Private Space to{" "}
              <span className="gradient-text">Reflect & Grow</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Track moods, write daily thoughts, and build healthy journaling
              habits with complete privacy. Your journal is encrypted and only
              yours.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.baltorotech.myjournal"
                className="btn-primary group text-base"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download on Google Play
              </a>
              <button className="btn-secondary group text-base">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  500K+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Active Users
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  4.9★
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  App Rating
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  100%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Private
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
            viewport={{ once: true }}
            className="relative h-96 sm:h-[500px] lg:h-[600px]"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 rounded-3xl blur-3xl"></div>

            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10"></div>

              {/* Screen Content - Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 flex flex-col items-center justify-center">
                <div className="space-y-4 text-center px-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto shadow-lg"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Today&apos;s Mood
                  </h3>
                  <p className="text-sm text-gray-600">April 21, 2026</p>
                  <div className="grid grid-cols-5 gap-2 pt-4">
                    {["😊", "😌", "😢", "😤", "😴"].map((emoji, i) => (
                      <div
                        key={i}
                        className="text-2xl p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Scroll to explore
        </p>
        <svg
          className="w-5 h-5 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
