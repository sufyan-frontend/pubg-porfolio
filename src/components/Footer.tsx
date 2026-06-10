import Link from "next/link";

const links = ["Home", "Stats", "Highlights", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/15">
      {/* Top gold line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-gold/60 rotate-45 flex items-center justify-center">
              <span className="font-orbitron text-gold text-xs font-bold -rotate-45">S</span>
            </div>
            <div>
              <span className="font-orbitron font-bold text-white text-lg tracking-widest">SUFYAN</span>
              <div className="font-rajdhani text-white/30 text-xs tracking-widest uppercase">
                Professional PUBG Player
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {links.map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase()}`}
                    className="font-rajdhani text-white/40 text-sm tracking-widest uppercase hover:text-gold transition-colors duration-200"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <div className="font-rajdhani text-white/30 text-sm">Pakistan 🇵🇰</div>
            <div className="font-orbitron text-gold/60 text-xs tracking-widest">PLAY. WIN. DOMINATE.</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-rajdhani text-white/25 text-sm tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Sufyan. All rights reserved. PUBG™ is a trademark of Krafton Inc.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="font-rajdhani text-white/25 text-sm tracking-widest uppercase">
              Available for Sponsorships
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
