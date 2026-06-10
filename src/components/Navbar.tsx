"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Highlights", href: "#highlights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_30px_rgba(255,215,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3" onClick={() => handleNav("Home")}>
          <div className="w-9 h-9 border-2 border-gold/80 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors duration-300 gold-border-glow">
            <span className="font-orbitron text-gold text-xs font-bold -rotate-45">S</span>
          </div>
          <span className="font-orbitron text-white font-bold text-lg tracking-widest group-hover:text-gold transition-colors duration-300">
            SUFYAN
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => handleNav(l.label)}
                className={`font-rajdhani text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-200 relative group ${
                  active === l.label ? "text-gold" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${
                    active === l.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          onClick={() => handleNav("Contact")}
          className="hidden md:flex items-center gap-2 font-rajdhani font-semibold text-sm tracking-[0.1em] uppercase px-5 py-2.5 border border-gold/60 text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          Hire Me
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-gold origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-gold"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-gold origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => handleNav(l.label)}
                    className={`font-rajdhani font-semibold text-base uppercase tracking-widest block py-1 border-b border-white/5 ${
                      active === l.label ? "text-gold" : "text-white/70"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link
                  href="#contact"
                  onClick={() => handleNav("Contact")}
                  className="mt-2 block text-center font-rajdhani font-semibold uppercase tracking-widest py-3 border border-gold/60 text-gold"
                >
                  Hire Me
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
