"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const screenshots = [
  {
    id: 1,
    title: "Mood Tracking",
    description: "Log your daily mood with detailed tracking and insights.",
    image: "/assets/1.jpeg",
  },
  {
    id: 2,
    title: "Writing Journal",
    description: "Express your thoughts freely in your secure private space.",
    image: "/assets/2.jpeg",
  },
  {
    id: 3,
    title: "Mood Analytics",
    description: "Visualize patterns and trends in your emotional journey.",
    image: "/assets/3.jpeg",
  },
  {
    id: 4,
    title: "Reminders",
    description: "Stay consistent with gentle, customizable notifications.",
    image: "/assets/4.jpeg",
  },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="screenshots"
      className="section-padding bg-white dark:bg-gray-950"
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
            📱 Screenshots
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore the{" "}
            <span className="gradient-text">MyJournal Experience</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A beautiful, intuitive interface designed to make journaling
            effortless and enjoyable.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -4 }}
              className={`relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-8 border-gray-800 ${
                activeIndex === index ? "ring-2 ring-primary-600 scale-105" : ""
              }`}
            >
              {/* Phone Frame */}
              <div className="w-full h-full bg-gray-900 rounded-xl flex flex-col relative">
                {/* Status Bar */}
                <div className="h-10 bg-black rounded-b-2xl flex items-center justify-center shrink-0">
                  <div className="text-white text-xs">9:41</div>
                </div>

                {/* Screenshot Image */}
                <div className="relative flex-1 ">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Featured Screenshot Detail */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 sm:p-12"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Phone Mockup */}
            <div className="relative w-full sm:w-1/3 h-96 border-8 border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              {/* Status Bar */}
              <div className="h-8 bg-black flex items-center justify-center shrink-0 relative z-10">
                <div className="text-white text-xs"></div>
              </div>

              {/* Screenshot Image */}
              <div className="relative w-full h-full">
                <Image
                  src={screenshots[activeIndex].image}
                  alt={screenshots[activeIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                {screenshots[activeIndex].title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                {screenshots[activeIndex].description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  "Intuitive user interface",
                  "Lightning-fast performance",
                  "Seamless synchronization",
                  "Beautiful animations",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>

                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {screenshots.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary-600 w-8"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
