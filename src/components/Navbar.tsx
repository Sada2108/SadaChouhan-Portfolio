import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-8 md:px-16 py-5 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/[0.06] z-50">
      <div className="font-display font-bold text-white text-lg">
        Sada Chouhan
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
        <a href="#about-me" className="hover:opacity-70 transition">About</a>
        <a href="#projects" className="hover:opacity-70 transition">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition">Contact</a>
      </div>
      <a 
        href="/Sada_Chouhan_Resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/30 px-6 py-3 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition flex items-center gap-2"
      >
        Resume <ArrowUpRight className="w-3 h-3" />
      </a>
    </nav>
  );
}
