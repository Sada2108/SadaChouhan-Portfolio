import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black text-white pt-24 pb-8 px-8 md:px-16" id="contact-footer">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-black text-3xl uppercase tracking-tighter">Sada Chouhan</h3>
            <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-bold leading-relaxed">Developer.<br/>Builder.<br/>Thinker.</p>
            <p className="text-white/20 text-xs font-mono mt-4">©️ 2026</p>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-1">Navigate</h4>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">Home</a>
            <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">About</a>
            <a href="#projects" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">Projects</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">Contact</a>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-1">Work</h4>
            <a href="https://github.com/Sada2108" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">GitHub</a>
            <a href="https://hackerrank.com/profile/sadachouhan21" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">HackerRank</a>
            <a href="/Sada_Chouhan_Resume.pdf" target="_blank" download className="mt-4 rounded-full border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition w-fit font-bold flex items-center gap-2">
              Download Resume <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-1">Connect</h4>
            <a href="https://linkedin.com/in/sada-chouhan" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">LinkedIn</a>
            <a href="https://github.com/Sada2108" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">GitHub</a>
            <a href="mailto:sadachouhan21@gmail.com" className="text-sm font-bold uppercase tracking-widest hover:text-white/70 transition w-fit">Email</a>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono font-bold text-center md:text-left">Built with React + Tailwind + Framer<br className="hidden md:block"/> Designed with purpose</p>
          <div className="flex gap-4">
            <a href="https://github.com/Sada2108" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sada-chouhan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
