import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const letter = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { ease: 'backOut' as any, duration: 0.8 } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pb-16 px-8 md:px-16 pt-32 w-full mx-auto" id="home">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-8 max-w-[1400px] mx-auto z-20 absolute top-1/4">
        {/* Left block */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col gap-2 max-w-[250px]"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Sada Chouhan</span>
          <p className="text-[10px] md:text-xs font-bold text-white/80 leading-relaxed mt-2 uppercase tracking-widest">
            A CS + AI STUDENT PASSIONATE ABOUT CRAFTING BOLD AND INTELLIGENT SYSTEMS 🔥
          </p>
        </motion.div>

        {/* Right block */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="hidden md:flex flex-col items-end"
        >
          <a href="#contact" className="rounded-full px-8 py-4 bg-gradient-to-r from-[#5B2DEE] via-[#D357F2] to-[#F19B86] text-white font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(211,87,242,0.4)]">
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="w-full flex justify-center max-w-[1400px] mx-auto relative z-10 mt-24 md:mt-48">
        <div className="relative w-full flex flex-col items-center justify-center h-[200px] sm:h-[300px] md:h-[400px]">
          
          {/* POPPING UP LETTERS - Reunited and Cleaned */}
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display font-black tracking-tighter text-[15vw] md:text-[clamp(6rem,14vw,16rem)] leading-[0.8] text-white whitespace-nowrap z-0 relative flex justify-center w-full"
          >
            {"HI, I'M SADA".split('').map((char, index) => (
              <motion.span key={index} variants={letter} className="inline-block drop-shadow-2xl relative z-0">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
           
        </div>
      </div>
    </section>
  );
}
