import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  // Floating animation for emojis
  const floatAnim = (duration: number, delay: number) => ({
    y: [0, -30, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut" as any,
      repeat: Infinity,
      delay: delay
    }
  });

  return (
    <section className="relative z-10 w-full bg-black text-white py-32 px-8 md:px-16" id="about-me">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center relative min-h-[60vh]">
        
        {/* Floating Icons Background */}
        <motion.div animate={floatAnim(6, 0)} className="absolute top-0 left-0 text-7xl md:text-8xl drop-shadow-2xl z-0">🍀</motion.div>
        <motion.div animate={floatAnim(7, 1)} className="absolute bottom-10 left-10 text-6xl md:text-7xl drop-shadow-2xl z-0">♥️</motion.div>
        <motion.div animate={floatAnim(8, 2)} className="absolute top-1/2 right-0 text-7xl md:text-8xl drop-shadow-2xl z-0">🌸</motion.div>
        <motion.div animate={floatAnim(5, 0)} className="absolute -top-10 right-20 text-6xl drop-shadow-2xl z-0">✨</motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'backOut' as any }}
          className="font-display font-black text-[clamp(4.5rem,12vw,10rem)] tracking-tighter uppercase mb-12 text-center relative z-10"
        >
          ABOUT ME
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center relative z-10 max-w-2xl px-4"
        >
          <p className="text-base md:text-xl font-bold leading-relaxed text-white/90 mb-4 tracking-wide font-sans">
            With experience learning in public, I specialize in full-stack dev, artificial intelligence, and building scalable software.
          </p>
          <p className="text-base md:text-xl font-bold leading-relaxed text-white/90 mb-10 tracking-wide font-sans">
            I love collaborating with brilliant teams that want to stand out and deliver immense impact. Let's create something intelligent together.
          </p>

          <a href="#contact" className="mx-auto rounded-full px-8 py-4 bg-gradient-to-r from-[#5B2DEE] via-[#D357F2] to-[#F19B86] text-white font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(211,87,242,0.4)] w-fit flex items-center justify-center gap-2">
            CONTACT ME <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
