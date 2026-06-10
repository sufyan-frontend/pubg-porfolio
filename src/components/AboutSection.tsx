"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { label: "Aiming & Precision", level: 88 },
  { label: "Squad Communication", level: 92 },
  { label: "Map Awareness", level: 85 },
  { label: "Sniping (Kar98k)", level: 90 },
  { label: "Vehicle Control", level: 80 },
  { label: "Final Circle Strategy", level: 87 },
];

const infoCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    label: "Location",
    value: "Pakistan",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
    label: "Playing Since",
    value: "2018",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5S14.67 12 15.5 12s1.5.67 1.5 1.5S16.33 15 15.5 15zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 10 18.5 10s1.5.67 1.5 1.5S19.33 12 18.5 12z" />
      </svg>
    ),
    label: "Platform",
    value: "PUBG Mobile",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
      </svg>
    ),
    label: "Current Rank",
    value: "Gold III",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "Goal",
    value: "Conqueror",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
        <path d="M7 4v2H4v14h16V6h-3V4H7zm9 0v2H8V4h8zM5 19V7h14v12H5zm7-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
    label: "Play Style",
    value: "Aggressive",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

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
            — The Player —
          </p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            ABOUT ME
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile image */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 border-2 border-gold/40 overflow-hidden gold-border-glow">
                <Image
                  src="/image/pubgprofile.png"
                  alt="Sufyan — PUBG Player Profile"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="font-orbitron font-bold text-white text-xl">SUFYAN</div>
                  <div className="font-rajdhani text-gold text-sm tracking-widest uppercase">
                    Professional PUBG Player
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-l-2 border-t-2 border-gold" />
              <div className="absolute -top-3 -right-3 w-7 h-7 border-r-2 border-t-2 border-gold" />
              <div className="absolute -bottom-3 -left-3 w-7 h-7 border-l-2 border-b-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-r-2 border-b-2 border-gold" />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col gap-1 p-4 bg-[#111] border border-gold/15 hover:border-gold/35 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {card.icon}
                    <span className="font-rajdhani text-white/40 text-xs tracking-widest uppercase">{card.label}</span>
                  </div>
                  <span className="font-rajdhani font-bold text-white text-base">{card.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Bio */}
            <div>
              <h3 className="font-orbitron font-bold text-gold text-lg tracking-widest mb-5">
                MY STORY
              </h3>
              <div className="space-y-4 font-rajdhani text-white/70 text-lg leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">Sufyan</span>, a competitive PUBG
                  Mobile player from{" "}
                  <span className="text-gold font-semibold">Pakistan</span> with 6+ years of
                  battlefield experience. I live for the thrill of the final circle, the silence before a
                  perfect shot, and the chaos of a hot drop.
                </p>
                <p>
                  My journey began in 2018, and since then I&apos;ve racked up{" "}
                  <span className="text-white font-semibold">2,800+ kills</span>, achieved a{" "}
                  <span className="text-gold font-semibold">4.2 K/D ratio</span>, and led my squad to{" "}
                  <span className="text-white font-semibold">100+ Chicken Dinners</span>. I&apos;m
                  currently grinding toward <span className="text-gold font-semibold">Conqueror</span> rank
                  to represent Pakistan in international PUBG esports.
                </p>
                <p>
                  Whether it&apos;s entry fragging with an M416, landing a 600m Kar98k snipe, or
                  calling the final zone strategy as IGL — I bring intensity, adaptability, and
                  precision to every game.
                </p>
              </div>
            </div>

            {/* Favourite weapons */}
            <div>
              <h3 className="font-orbitron font-bold text-gold text-lg tracking-widest mb-5">
                WEAPON LOADOUT
              </h3>
              <div className="flex flex-wrap gap-3">
                {["M416", "Kar98k", "AKM", "M24", "Groza", "UZI"].map((w) => (
                  <span
                    key={w}
                    className="font-rajdhani font-semibold text-sm tracking-widest uppercase px-4 py-2 border border-gold/30 text-gold/80 hover:border-gold hover:text-gold transition-colors duration-200"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-orbitron font-bold text-gold text-lg tracking-widest mb-6">
                SKILL LEVELS
              </h3>
              <div className="space-y-4">
                {skills.map((s, i) => (
                  <div key={s.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-rajdhani font-semibold text-white/80 text-sm tracking-wide">{s.label}</span>
                      <span className="font-orbitron text-gold text-xs font-bold">{s.level}%</span>
                    </div>
                    <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
