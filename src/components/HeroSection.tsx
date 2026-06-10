"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${5 + i * 4.2}%`,
  size: i % 3 === 0 ? 5 : i % 3 === 1 ? 3 : 4,
  duration: 9 + (i % 7) * 1.8,
  delay: (i % 11) * 0.8,
  drift: `${-60 + i * 5}px`,
}));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* Background image — very subtle */}
      <div className="absolute inset-0">
        <Image
          src="/image/pubgprofile.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.07] scale-110"
          priority
          aria-hidden={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Tactical grid */}
      <div className="absolute inset-0 tactical-grid opacity-60 pointer-events-none" />

      {/* Gold corner accents */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/30 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/30 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30 pointer-events-none" />

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {particles.map((p) => (
          <span
            key={p.id}
            className="gold-particle"
            data-drift={p.drift}
            style={
              {
                left: p.left,
                width: p.size,
                height: p.size,
                "--duration": `${p.duration}s`,
                "--delay": `${p.delay}s`,
                "--drift": p.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gold" />
              <span className="font-rajdhani text-gold text-sm font-semibold tracking-[0.35em] uppercase">
                Professional PUBG Player · Pakistan
              </span>
              <span className="w-8 h-[2px] bg-gold" />
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-orbitron font-black text-6xl sm:text-7xl xl:text-8xl leading-none tracking-tight mb-2"
            >
              <span className="text-gold-gradient">SUFYAN</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="font-rajdhani text-white/50 text-lg tracking-[0.3em] uppercase mb-8"
            >
              Entry Fragger · Squad IGL · Sniper
            </motion.p>

            {/* Rank badge */}
            <motion.div {...fadeUp(0.4)} className="inline-flex items-center gap-3 px-5 py-2.5 border border-gold/40 bg-gold/5 mb-10">
              <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-rajdhani font-bold text-gold text-sm tracking-[0.2em] uppercase">
                Gold — Ranked Player
              </span>
              <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>

            {/* Mini stats strip */}
            <motion.div {...fadeUp(0.5)} className="flex justify-center lg:justify-start gap-8 mb-10">
              {[["4.2", "K/D Ratio"], ["18%", "Win Rate"], ["2,847", "Total Kills"]].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="font-orbitron font-bold text-gold text-xl">{val}</div>
                  <div className="font-rajdhani text-white/40 text-xs tracking-widest uppercase">{lbl}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="#stats"
                className="group flex items-center gap-3 font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-4 bg-gold text-black hover:bg-gold-light transition-colors duration-300"
              >
                View Stats
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#highlights"
                className="font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-4 border border-gold/50 text-gold hover:bg-gold/10 transition-colors duration-300"
              >
                Watch Highlights
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-6 rounded-full border border-gold/15 animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute -inset-12 rounded-full border border-gold/08 animate-[pulse_4s_ease-in-out_1s_infinite]" />

            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-[pulse-ring_3s_ease-out_infinite]" />

            {/* Gold frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 xl:w-[380px] xl:h-[380px] float-animation">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-gold z-10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-gold z-10" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gold z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-gold z-10" />

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden border-2 border-gold/40 gold-border-glow">
                <Image
                  src="/image/pubgprofile.png"
                  alt="Sufyan — Professional PUBG Player from Pakistan"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1280px) 320px, 380px"
                  className="object-cover object-center"
                  priority
                />
                {/* Gold overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-gold/5" />
              </div>

              {/* Scan line */}
              <div className="scan-line" />

              {/* "PLAYER" tag */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold text-black font-orbitron text-xs font-bold px-4 py-1.5 tracking-[0.25em]">
                PUBG PLAYER
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-rajdhani text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        </motion.div>
      </div>
    </section>
  );
}
