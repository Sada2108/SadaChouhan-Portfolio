import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

export default function BottomCards() {
  return (
    <section className="px-8 md:px-16 pb-24 max-w-[1400px] mx-auto w-full relative z-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between min-h-[240px]"
        >
          <div className="flex items-center justify-between w-full mb-8">
            <div className="flex items-center gap-1 text-xs bg-white/10 rounded-full px-3 py-1 text-white">
              <Check className="w-3 h-3" /> Trusted by top-tier teams
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white font-display mb-1">3+</div>
            <div className="text-sm text-white/50 font-medium">Internships & real-world projects</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between min-h-[240px]"
        >
          <div className="flex justify-end w-full mb-8">
            <a href="#projects" className="flex items-center gap-2 text-sm text-white hover:text-white/70 transition uppercase tracking-widest font-bold">
              View Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white font-display mb-1 tracking-tight">Full-Stack & AI Developer</h3>
            <div className="text-sm text-white/50 font-medium">(2026)</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
