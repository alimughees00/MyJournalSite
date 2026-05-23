"use client";

import { motion } from "framer-motion";
import { Lock, Heart, Bell, Wifi, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Private Journal Lock",
    description:
      "Biometric and PIN protection keeps your thoughts completely private and secure.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Mood Tracking",
    description:
      "Log your daily emotions and track patterns to understand your emotional wellness.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Bell,
    title: "Daily Reminders",
    description:
      "Get gentle notifications to encourage consistent journaling habits.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Wifi,
    title: "Offline Journaling",
    description:
      "Write anywhere, anytime. Sync seamlessly when you're back online.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Clean & Minimal UI",
    description:
      "Beautiful, distraction-free interface designed for mindful reflection.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Secure Personal Notes",
    description:
      "End-to-end encrypted storage ensures your data is yours alone.",
    color: "from-red-500 to-pink-500",
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="section-padding bg-gray-50 dark:bg-gray-900"
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
            ⚡ Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need{" "}
            <span className="gradient-text">for Better Journaling</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the powerful features that make MyJournal the perfect
            companion for your daily reflection and personal growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="card p-8"
              >
                {/* Icon Background */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Indicator */}
                <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { label: "Entries Created", value: "10M+" },
            { label: "Hours Journaled", value: "50M+" },
            { label: "Moods Tracked", value: "100M+" },
            { label: "Privacy Score", value: "A+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
