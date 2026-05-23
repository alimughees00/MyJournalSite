"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Student",
    avatar: "EJ",
    initials: "🎓",
    rating: 5,
    text: "Finally found the perfect journal app! It's so private and secure. I can write freely without worrying about my thoughts being exposed.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    avatar: "MC",
    initials: "💻",
    rating: 5,
    text: "The UI is absolutely stunning and the performance is incredible. I love how smooth everything is. Best journaling app I've tried.",
    color: "from-purple-400 to-pink-400",
  },
  {
    name: "Lisa Williams",
    role: "Therapist",
    avatar: "LW",
    initials: "🧠",
    rating: 5,
    text: "I recommend MyJournal to all my clients. It's an excellent tool for self-reflection and tracking emotional patterns.",
    color: "from-green-400 to-emerald-400",
  },
  {
    name: "James Rodriguez",
    role: "Entrepreneur",
    avatar: "JR",
    initials: "🚀",
    rating: 5,
    text: "Helps me keep track of my thoughts, ideas, and personal growth. The mood tracking feature is game-changing for understanding myself.",
    color: "from-orange-400 to-red-400",
  },
  {
    name: "Sophie Laurent",
    role: "Content Creator",
    avatar: "SL",
    initials: "✨",
    rating: 5,
    text: "The dark mode is chef's kiss. The app is so beautiful and I love the minimalist design. It doesn't distract from writing.",
    color: "from-pink-400 to-rose-400",
  },
  {
    name: "David Park",
    role: "Designer",
    avatar: "DP",
    initials: "🎨",
    rating: 5,
    text: "As a designer, I appreciate the attention to detail. Every animation is smooth, every interaction feels intentional. Bravo!",
    color: "from-indigo-400 to-blue-400",
  },
];

export function Testimonials() {
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
    <section className="section-padding bg-white dark:bg-gray-950">
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
            ⭐ Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved by 500K+ Happy Users
            <span className="gradient-text"> Worldwide</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See what people are saying about MyJournal and how it&apos;s changed
            their lives.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="card p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                {/* User Info */}
                <div className="flex items-center gap-4 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <span className="text-xl">{testimonial.initials}</span>
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1 mb-4">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified User
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50K+", label: "5-Star Reviews" },
            { number: "#1", label: "Journaling App" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
