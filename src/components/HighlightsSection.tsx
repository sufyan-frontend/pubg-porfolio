"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    src: "/image/pubgprofile.png",
    alt: "Sufyan PUBG — Profile Shot",
    tag: "Profile",
    title: "My PUBG Identity",
    desc: "Representing Pakistan in every match.",
  },
  {
    src: "/image/highlight1.jpeg",
    alt: "Sufyan PUBG — Gameplay Highlight 1",
    tag: "Top Kill",
    title: "Precision Kill",
    desc: "Long-range elimination — 400m headshot.",
  },
  {
    src: "/image/highlight2.jpeg",
    alt: "Sufyan PUBG — Gameplay Highlight 2",
    tag: "Chicken Dinner",
    title: "Winner Winner",
    desc: "Squad Chicken Dinner — final zone clutch.",
  },
];

const achievements = [
  { icon: "🏆", title: "Chicken Dinner Master", desc: "100+ Solo Wins" },
  { icon: "🎯", title: "Marksman", desc: "600m+ snipe on record" },
  { icon: "⚡", title: "Entry Fragger", desc: "Top squad killer" },
  { icon: "🛡️", title: "Squad IGL", desc: "50+ squad wins as leader" },
];

export default function HighlightsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="highlights" className="relative py-28 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-rajdhani text-gold text-sm font-semibold tracking-[0.4em] uppercase mb-3">
            — Top Moments —
          </p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            HIGHLIGHTS
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="font-rajdhani text-white/50 text-lg max-w-xl mx-auto">
            A collection of my best PUBG moments — from clutch plays to Chicken Dinners.
          </p>
        </motion.div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden border border-gold/15 cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={h.src}
                  alt={h.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hovered === i ? "scale-110" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 ${
                    hovered === i ? "opacity-90" : "opacity-60"
                  }`}
                />
                {/* Gold border on hover */}
                <div
                  className={`absolute inset-0 border-2 transition-all duration-300 pointer-events-none ${
                    hovered === i ? "border-gold/70" : "border-transparent"
                  }`}
                />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-gold text-black font-rajdhani font-bold text-xs px-3 py-1 tracking-widest uppercase">
                {h.tag}
              </div>

              {/* Text overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 ${
                  hovered === i ? "translate-y-0" : "translate-y-2"
                }`}
              >
                <div className="font-orbitron font-bold text-white text-lg mb-1">{h.title}</div>
                <div
                  className={`font-rajdhani text-white/60 text-sm transition-all duration-300 ${
                    hovered === i ? "opacity-100 max-h-10" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {h.desc}
                </div>
                {/* Corner accent on hover */}
                <div
                  className={`absolute bottom-3 right-3 w-5 h-5 border-r border-b border-gold transition-opacity duration-300 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="font-orbitron font-bold text-white text-xl tracking-widest mb-8 text-center">
            ACHIEVEMENTS
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                whileHover={{ scale: 1.03 }}
                className="group flex items-center gap-4 p-5 bg-[#111] border border-gold/15 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div>
                  <div className="font-rajdhani font-bold text-white text-base">{a.title}</div>
                  <div className="font-rajdhani text-white/40 text-sm">{a.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-5 p-8 border border-gold/20 bg-[#111]">
            <div className="w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center">
              <svg className="w-7 h-7 text-gold fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.7 12.12 12.12 0 00-1.5-2.52 5.19 5.19 0 00-2.32.66A12.1 12.1 0 0110 4.09C6.57 5 4.5 9 4.5 12c0 3.71 2.3 6.92 5.5 7.5v-3.17a3.51 3.51 0 01-1-.34 3.46 3.46 0 01-1.73-3c0-.91.5-1.75 1.28-2.21a3.5 3.5 0 014 .62 3.46 3.46 0 01.95 2.41v3.1A7.5 7.5 0 0019.5 12a7.37 7.37 0 00.09-5.31zM10 9l2 1.15L14 9v2.15l-2 1.15-2-1.15V9z" />
              </svg>
            </div>
            <div>
              <p className="font-rajdhani text-white/60 text-sm tracking-widest uppercase mb-1">
                Watch Full Gameplay
              </p>
              <p className="font-orbitron font-bold text-white text-xl">Subscribe on YouTube</p>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-rajdhani font-bold uppercase tracking-widest px-8 py-3.5 bg-gold text-black hover:bg-gold-light transition-colors duration-300"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch Now
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
