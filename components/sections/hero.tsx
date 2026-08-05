"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* ── LEFT PANEL ── */}
      <div className="flex flex-col justify-center px-12 lg:px-16 pt-32 pb-20 relative z-10">
        {/* Badge */}
        <motion.div
          custom={0.0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 text-xs font-medium px-4 py-2 rounded-full w-fit mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
          Your Private Journal App
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4"
        >
          Reflect · Grow · Remember
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-gray-900 dark:text-white mb-6"
        >
          A space to think{" "}
          <em className="not-italic gradient-text">clearly, </em>
          and feel <em className="not-italic gradient-text">understood</em>
        </motion.h1>

        {/* Body */}
        <motion.p
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm font-light mb-10"
        >
          Track moods, write daily thoughts, and build healthy journaling habits
          — with complete privacy. Your journal is encrypted and only yours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.baltorotech.myjournal"
            className="btn-primary flex items-center gap-2 text-sm rounded-full px-7 py-3.5 shadow-lg shadow-primary-500/30 hover:-translate-y-0.5 transition-transform"
          >
            <Download className="w-4 h-4" />
            Get on Google Play
          </a>
          {/* <button className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            Watch demo
          </button> */}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-8"
        >
          {[
            { num: "500K+", label: "Active users" },
            { num: "4.9 ★", label: "App rating" },
            { num: "100%", label: "Encrypted" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-8">
              {i > 0 && (
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
              )}
              <div>
                <p className="font-serif text-xl font-semibold text-gray-900 dark:text-white leading-none">
                  {stat.num}
                </p>
                <p className="text-xs text-gray-400 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative hidden lg:flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950"
      >
        {/* BG accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-accent-500/15 blur-3xl" />

        {/* Floating left text card */}
        <motion.div
          animate={{ y: [-8, 2, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute left-6 top-1/2 -translate-y-28 max-w-[160px] bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-primary-100 dark:border-primary-900 z-10"
        >
          <p className="text-[10px] text-gray-400 mb-1">Daily practice</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white font-serif leading-snug">
            A few quiet minutes, every day
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div
          animate={{ y: [-18, 0, -18] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          {/* Shell */}
          <div className="w-56 h-[460px] bg-gray-900 rounded-[36px] p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.35)] relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-10" />
            {/* Screen */}
            <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[28px] overflow-hidden">
              <Image
                src="/assets/1.jpeg"
                alt="MyJournal screenshot"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/0" />
            </div>
          </div>
        </motion.div>

        {/* Floating right text card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-6 bottom-1/3 max-w-[160px] bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-accent-100 dark:border-accent-900 z-10"
        >
          <p className="text-[10px] text-gray-400 mb-1">Private by design</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white font-serif leading-snug">
            Encrypted, just for you
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
