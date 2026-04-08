import { motion } from 'framer-motion';

const experiences = [
  {
    num: '01',
    company: 'HackVeda Solutions',
    role: 'Python Developer Intern',
    period: 'Sept 2025 – Jan 2026',
    desc: 'Designed full-stack apps for police resource access; labeled 20,000 images for computer vision model training'
  },
  {
    num: '02',
    company: 'Bluestock',
    role: 'SDE Intern',
    period: 'Jan – Feb 2026',
    desc: 'Built Company Registration Module with ReactJS 19, Firebase auth, JWT sessions, and Node.js REST APIs'
  },
  {
    num: '03',
    company: 'Unlox Academy',
    role: 'Campus Ambassador',
    period: 'Sept – Oct 2025',
    desc: 'Drove student awareness for Job Bridge Program at IGDTUW; managed community engagement channels'
  },
  {
    num: '04',
    company: 'IGDTUW',
    role: 'B.Tech CSE + AI Student',
    period: '2024 – 2029',
    desc: 'Currently pursuing Computer Science with Artificial Intelligence at Indira Gandhi Delhi Technical University for Women, Central Delhi'
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 w-full bg-[#f2f2f2] text-black py-24 px-8 md:px-16" id="experience">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display font-black text-[clamp(4rem,10vw,8rem)] leading-none tracking-tighter uppercase mb-4">
            The Journey
          </h2>
          <div className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black/50">
            From learning to shipping
          </div>
        </motion.div>

        <div className="flex flex-col w-full">
          {experiences.map((exp, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.12 }}
              key={exp.num}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16 py-10 md:py-16 border-b border-black/10 w-full hover:bg-black/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-xl"
            >
              <div className="font-mono font-black text-[clamp(3.5rem,8vw,6rem)] text-black/15 shrink-0 lg:w-40 leading-none">
                {exp.num}
              </div>
              <div className="flex flex-col gap-2 lg:w-1/3 shrink-0">
                <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter">{exp.company}</h3>
                <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-black/60">{exp.role}</div>
                <div className="font-mono text-xs text-black/40 mt-1 uppercase tracking-widest">{exp.period}</div>
              </div>
              <div className="text-sm text-black/70 max-w-md leading-relaxed mt-4 lg:mt-0 font-medium">
                {exp.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
