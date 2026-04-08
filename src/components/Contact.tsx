import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative z-20 w-full bg-white text-black py-24 md:py-32 px-8 md:px-16" id="contact">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:w-1/2 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display font-black text-[clamp(4rem,8vw,7rem)] uppercase leading-[0.9] tracking-tighter mb-8 text-black">
              LET'S<br />CONNECT<br />TOGETHER
            </h2>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0 font-medium font-mono text-sm">
            <a href="mailto:sadachouhan21@gmail.com" className="text-black/60 underline hover:text-black transition uppercase tracking-widest w-fit">
              sadachouhan21@gmail.com
            </a>
            <a href="tel:7428706920" className="text-black/60 underline hover:text-black transition uppercase tracking-widest w-fit">
              +91 7428706920
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2 flex flex-col justify-center w-full"
        >
          <form action="https://formsubmit.co/sadachouhan21@gmail.com" method="POST" className="flex flex-col gap-10 w-full lg:max-w-xl">
            <div className="relative">
              <input type="text" placeholder="FULL NAME" required className="w-full border-b-2 border-black/10 bg-transparent text-black text-sm py-4 outline-none placeholder:text-black/30 placeholder:font-mono focus:border-black transition-colors font-bold uppercase tracking-widest" />
            </div>
            <div className="relative">
              <input type="email" placeholder="EMAIL ADDRESS" required className="w-full border-b-2 border-black/10 bg-transparent text-black text-sm py-4 outline-none placeholder:text-black/30 placeholder:font-mono focus:border-black transition-colors font-bold uppercase tracking-widest" />
            </div>
            <div className="relative">
              <input type="tel" placeholder="PHONE (OPTIONAL)" className="w-full border-b-2 border-black/10 bg-transparent text-black text-sm py-4 outline-none placeholder:text-black/30 placeholder:font-mono focus:border-black transition-colors font-bold uppercase tracking-widest" />
            </div>
            <div className="relative">
              <textarea placeholder="MESSAGE" required rows={3} className="w-full border-b-2 border-black/10 bg-transparent text-black text-sm py-4 outline-none placeholder:text-black/30 placeholder:font-mono focus:border-black transition-colors resize-none font-bold uppercase tracking-widest"></textarea>
            </div>
            <button type="submit" className="rounded-full bg-black text-white w-full py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-black/80 transition-colors flex items-center justify-center gap-2 mt-4 group">
              SEND <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-0 right-4 lg:right-8 text-5xl md:text-6xl drop-shadow-2xl"
        >
          ⚡
        </motion.div>
      </div>
    </section>
  );
}
