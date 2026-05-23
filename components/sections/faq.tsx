"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is MyJournal free?",
    answer:
      "Yes! MyJournal is completely free to download and use. All core features including journaling, mood tracking, and reminders are included. We offer an optional premium subscription for advanced features like unlimited cloud storage and advanced analytics, but the basic app is free forever.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Absolutely! MyJournal is designed to work seamlessly offline. You can write, track moods, and create entries without internet. Your entries are automatically synced to our secure servers when you're back online.",
  },
  {
    question: "Is my data private?",
    answer:
      "Your privacy is our top priority. All your data is encrypted end-to-end, meaning only you can read your entries. We use military-grade encryption (AES-256) and never sell or share your personal information. You have full control over your data.",
  },
  {
    question: "Can I lock my journal?",
    answer:
      "Yes! MyJournal features strong security options including biometric authentication (fingerprint/face recognition) and PIN protection. You can set different locks for different entries or secure your entire journal with a single lock.",
  },
  {
    question: "Will cloud backup be added?",
    answer:
      "Cloud backup is already available! Your entries are automatically backed up to our secure servers. With our premium plan, you get unlimited cloud storage and can access your journals across all your devices.",
  },
  {
    question: "How do I export my journals?",
    answer:
      "You can export your journals anytime in multiple formats (PDF, TXT, JSON). Go to Settings > Export and choose your preferred format. You always own your data and can take it with you whenever you want.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            ❓ Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about MyJournal features, privacy,
            and more.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="text-lg sm:text-xl font-semibold text-left text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-8 py-4 sm:py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    &quot;{faq.answer}&quot;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team
            is here to help. Get in touch with us anytime.
          </p>
          <a
            href="mailto:feedback@baltorotech.com"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
