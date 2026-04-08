import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MarqueeFeature() {
  return (
    <section className="relative w-full px-8 md:px-16 py-24 max-w-[1400px] mx-auto z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        <h2 className="font-display font-black text-[clamp(2.5rem,8vw,6rem)] leading-none text-white/50 tracking-tighter uppercase mb-12">
          Fast / <span className="text-white">Full-Stack</span>
        </h2>
        
        <div className="absolute top-0 right-0 hidden md:flex items-center justify-center -translate-y-[20%] translate-x-4">
          <div className="bg-white text-black rounded-full w-24 h-24 flex items-center justify-center text-[10px] font-bold text-center p-4">
            Google Cloud Certified
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8]">
            <div className="text-4xl font-black text-white font-display mb-1">6+</div>
            <div className="text-sm text-white/50 mb-6 tracking-wide">Google Cloud & AI Certifications</div>
            <a href="#certifications" className="inline-block rounded-full border border-white/30 px-6 py-3 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
          
          <div className="flex flex-col gap-3 font-mono text-xs uppercase text-white/50 tracking-widest pb-4 md:items-end">
            <div className="flex items-center gap-2"><span>Python</span> <span className="text-white font-bold text-sm">✓</span></div>
            <div className="flex items-center gap-2"><span>React + TypeScript</span> <span className="text-white font-bold text-sm">✓</span></div>
            <div className="flex items-center gap-2"><span>ML & GenAI</span> <span className="text-white font-bold text-sm">✓</span></div>
            <div className="flex items-center gap-2"><span>REST APIs</span> <span className="text-white font-bold text-sm">✓</span></div>
          </div>
        </div>
        
        <a href="#projects" className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 group cursor-pointer hover:border-white/30 transition-colors">
          <span className="text-xs text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">See my projects and what I've been shipping</span>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
