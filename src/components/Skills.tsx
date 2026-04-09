import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Skills() {
  const chipsStyles = "font-mono text-[10px] sm:text-xs bg-white/[0.06] border border-white/10 rounded px-2 py-1 text-white/70 tracking-wider";
  
  return (
    <section className="relative z-10 w-full px-8 md:px-16 py-24 max-w-[1400px] mx-auto border-t border-white/[0.05]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-center font-display font-black text-4xl md:text-[clamp(4rem,8vw,6rem)] tracking-tighter uppercase mb-16 px-4">
          <span className="text-white/40">My</span> <span className="text-white">Stack</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="flex flex-col justify-between">
            <h3 className="text-3xl lg:text-4xl font-display font-black text-white mb-6 leading-none tracking-tighter uppercase">
              A CS + AI student shipping real products
            </h3>
            <a href="https://github.com/Sada2108" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition uppercase tracking-widest font-bold">
              Explore GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] shadow-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Experienced</div>
              <div className="flex flex-wrap gap-2">
                <span className={chipsStyles}>Python</span>
                <span className={chipsStyles}>C</span>
                <span className={chipsStyles}>SQL</span>
                <span className={chipsStyles}>TypeScript</span>
                <span className={chipsStyles}>HTML/CSS/JS</span>
                <span className={chipsStyles}>React</span>
                <span className={chipsStyles}>Tailwind</span>
              </div>
            </div>
            
            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] shadow-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Familiar</div>
              <div className="flex flex-wrap gap-2">
                <span className={chipsStyles}>C++</span>
                <span className={chipsStyles}>R</span>
                <span className={chipsStyles}>MySQL</span>
                <span className={chipsStyles}>BASH</span>
                <span className={chipsStyles}>Node.js</span>
                <span className={chipsStyles}>Firebase</span>
              </div>
            </div>

            <div className="rounded-2xl p-6 md:p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] shadow-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 font-bold">Tools & Systems</div>
              <div className="flex flex-wrap gap-2">
                <span className={chipsStyles}>VS Code</span>
                <span className={chipsStyles}>antiGravity</span>
                <span className={chipsStyles}>Stitch MCP</span>
                <span className={chipsStyles}>Linux</span>
                <span className={chipsStyles}>macOS</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-end text-sm text-white/50 leading-relaxed lg:pb-8 max-w-sm">
            <p> building, shipping, and learning in public. Turning complex ideas into intelligent systems with a focus on impact, design, and efficiency. Passionate about AI solutions and highly scalable architectures.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
