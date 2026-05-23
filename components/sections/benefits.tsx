"use client";

import { motion } from "framer-motion";
import { Zap, Brain, TrendingUp, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Reduce Stress",
    description:
      "Release tension by writing down your thoughts and feelings. Journaling provides a safe space to process emotions and reduce anxiety.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Brain,
    title: "Build Self-Awareness",
    description:
      "Understand your patterns, triggers, and behaviors better. Gain clarity on what truly matters to you.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Improve Consistency",
    description:
      "Develop healthy habits with gentle reminders and streak tracking. Build momentum toward your personal goals.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Organize Thoughts",
    description:
      "Clarify your ideas and solve problems by externally processing them. Transform scattered thoughts into clear insights.",
    color: "from-purple-400 to-indigo-500",
  },
];

export function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="benefits"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-950 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            💪 Benefits
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why You Should Start{" "}
            <span className="gradient-text">Journaling Today</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the transformative power of daily journaling and how it can
            improve your mental health and personal growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 rounded-3xl p-8 sm:p-12 border border-primary-200 dark:border-primary-800"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-5xl">🌟</div>
            <div className="flex-1">
              <blockquote className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                &quot;MyJournal has transformed my daily routine. I feel more
                calm, centered, and in control of my emotions. It&apos;s like
                having a personal therapist in your pocket.&quot;
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Sarah M. • Product Manager
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
