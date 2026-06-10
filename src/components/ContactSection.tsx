"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  {
    name: "YouTube",
    handle: "@SufyanPUBG",
    url: "https://youtube.com",
    color: "#FF0000",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@sufyan_pubg",
    url: "https://instagram.com",
    color: "#E1306C",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    handle: "Sufyan#PUBG",
    url: "https://discord.com",
    color: "#5865F2",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@sufyanpubg",
    url: "https://tiktok.com",
    color: "#000000",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.7A4.82 4.82 0 0115.5 2h-3.25v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.2a6.13 6.13 0 00-.79-.05 6.14 6.14 0 00-6.14 6.14 6.14 6.14 0 006.14 6.14 6.14 6.14 0 006.13-6.14V8.7a8.07 8.07 0 004.72 1.51V6.96a4.85 4.85 0 01-.73-.27z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080808] tactical-grid overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

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
            — Get in Touch —
          </p>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            CONTACT & SOCIAL
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="font-rajdhani text-white/50 text-lg max-w-xl mx-auto">
            Want to collab, sponsor, or just drop a message? I&apos;m always open to connecting
            with fellow gamers and brands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="font-orbitron font-bold text-white text-xl tracking-widest">
              FIND ME ON
            </h3>
            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center justify-between p-5 bg-[#111] border border-gold/15 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors duration-300"
                      style={{ color: s.color === "#000000" ? "#ffd700" : s.color }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-white text-base">{s.name}</div>
                      <div className="font-rajdhani text-white/40 text-sm">{s.handle}</div>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Email */}
            <div className="p-5 bg-[#111] border border-gold/15">
              <div className="flex items-center gap-3 mb-1">
                <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="font-rajdhani text-white/40 text-xs tracking-widest uppercase">Email</span>
              </div>
              <span className="font-rajdhani font-semibold text-white text-base">sufyan.pubg@gmail.com</span>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-orbitron font-bold text-white text-xl tracking-widest mb-8">
              SEND A MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-[#111] border border-gold/20 focus:border-gold/60 text-white font-rajdhani text-base px-5 py-4 outline-none placeholder:text-white/25 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#111] border border-gold/20 focus:border-gold/60 text-white font-rajdhani text-base px-5 py-4 outline-none placeholder:text-white/25 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-rajdhani text-white/50 text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message here..."
                  className="w-full bg-[#111] border border-gold/20 focus:border-gold/60 text-white font-rajdhani text-base px-5 py-4 outline-none placeholder:text-white/25 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-rajdhani font-bold text-base uppercase tracking-widest py-4 transition-all duration-300 ${
                  sent
                    ? "bg-green-600 text-white"
                    : "bg-gold text-black hover:bg-gold-light"
                }`}
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
