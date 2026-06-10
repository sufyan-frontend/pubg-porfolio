"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2200,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      setCount(parseFloat(value.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" fill="#ffd700" />
        <circle cx="12" cy="12" r="6" stroke="#ffd700" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="12" y1="2" x2="12" y2="8" stroke="#ffd700" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="12" y2="22" stroke="#ffd700" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="8" y2="12" stroke="#ffd700" strokeWidth="1.5" />
        <line x1="16" y1="12" x2="22" y2="12" stroke="#ffd700" strokeWidth="1.5" />
      </svg>
    ),
    value: 4.2,
    suffix: "",
    prefix: "",
    decimals: 1,
    label: "K/D Ratio",
    sub: "Kills per Death",
    color: "#ffd700",
    bar: 84,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" stroke="#ffd700" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: 18,
    suffix: "%",
    prefix: "",
    decimals: 0,
    label: "Win Rate",
    sub: "Top 1 Finish",
    color: "#ffd700",
    bar: 72,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M3 10h4M17 10h4M12 3v4M12 17v4" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" fill="#ffd700" opacity="0.8" />
      </svg>
    ),
    value: 2847,
    suffix: "",
    prefix: "",
    decimals: 0,
    label: "Total Kills",
    sub: "Across All Modes",
    color: "#ffd700",
    bar: 91,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="#ffd700" strokeWidth="1.5" />
        <path d="M8 6V4a2 2 0 014 0v2" stroke="#ffd700" strokeWidth="1.5" />
        <path d="M7 13h2M11 13h2M15 13h2" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 16h4M13 16h4" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: 1203,
    suffix: "+",
    prefix: "",
    decimals: 0,
    label: "Matches Played",
    sub: "Ranked & Casual",
    color: "#ffd700",
    bar: 78,
  },
];

const additionalStats = [
  { label: "Headshot Rate", value: "34%" },
  { label: "Avg. Survival Time", value: "18m" },
  { label: "Longest Kill", value: "612m" },
  { label: "Squad MVP Awards", value: "247" },
  { label: "Top 10 Rate", value: "56%" },
  { label: "Best Weapon", value: "M416" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-28 bg-[#0d0d0d] tactical-grid overflow-hidden">
      {/* Background glow */}
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
            — Battle Records —
          </p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            COMBAT STATISTICS
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        {/* Main stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-[#111] border border-gold/15 p-7 overflow-hidden card-hover"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gold/15 group-hover:border-gold/40 transition-colors duration-300" />

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="mb-5">{s.icon}</div>

              {/* Value */}
              <div
                className="font-orbitron font-black text-4xl text-gold mb-1"
                style={{ textShadow: "0 0 20px rgba(255,215,0,0.3)" }}
              >
                <AnimatedCounter
                  target={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                />
              </div>

              {/* Label */}
              <div className="font-rajdhani font-bold text-white text-lg tracking-wide mb-0.5">
                {s.label}
              </div>
              <div className="font-rajdhani text-white/40 text-sm tracking-wide mb-5">{s.sub}</div>

              {/* Progress bar */}
              <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 + 0.4, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border border-gold/15 bg-[#111] p-8"
        >
          <h3 className="font-orbitron font-bold text-white text-lg tracking-widest mb-8 text-center">
            ADDITIONAL RECORDS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="text-center py-3 border-b border-gold/10 last:border-b-0"
              >
                <div className="font-orbitron font-bold text-gold text-xl mb-1">{s.value}</div>
                <div className="font-rajdhani text-white/40 text-xs tracking-widest uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
