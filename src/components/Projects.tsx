import { motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'AI FAKE NEWS DETECTOR',
    imgs: ['/fakenewsdetector.png', '/fakenewsdetector2.png'],
    link: 'https://github.com/Sada2108/fake-news-detector'
  },
  {
    num: '02',
    title: 'ECOMAPS',
    imgs: ['/ecomaps.jpeg', '/ecomaps2.jpeg'],
    link: 'https://github.com/Sada2108/ecomaps'
  },
  {
    num: '03',
    title: "DEVCATION'26",
    imgs: ['/devacationrevamp.png', '/devacation2.png'],
    link: 'https://github.com/Sada2108/devacationrevamp'
  }
];

function ProjectCard({ proj, index }: { proj: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-20 md:top-24 pt-4 md:pt-8 w-full max-w-5xl mx-auto"
      style={{ zIndex: index }}
    >
      <div className="bg-black border border-white/30 rounded-[2rem] p-6 pb-0 md:p-10 md:pb-0 w-full overflow-hidden shadow-2xl flex flex-col mb-[15vh]">
        <div className="flex justify-between items-start mb-8 md:mb-12 w-full">
          <div className="flex gap-4 md:gap-8 items-start">
            <h2 className="font-display font-black text-5xl md:text-7xl text-white tracking-tighter leading-none shadow-black drop-shadow-xl">{proj.num}</h2>
            <div className="flex flex-col mt-1 md:mt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">Project</span>
              <h3 className="font-display font-black text-lg md:text-2xl text-white tracking-tighter uppercase">{proj.title}</h3>
            </div>
          </div>
          <a href={proj.link} target="_blank" rel="noreferrer" className="rounded-full border md:border-2 border-white/30 px-6 py-2 md:py-3 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors hidden sm:block">
            LIVE PROJECT
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[300px] md:h-[400px] w-full translate-y-3">
          <div className="w-full md:w-[60%] h-full rounded-tr-xl rounded-tl-xl overflow-hidden border-t border-x border-white/20 relative group bg-white/5">
            <img src={proj.imgs[0]} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out" alt="Project main" />
          </div>
          <div className="hidden md:flex flex-col w-[40%] h-full rounded-tr-xl rounded-tl-xl overflow-hidden border-t border-x border-white/20 relative group bg-white/5">
            <img src={proj.imgs[1]} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out" alt="Project secondary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative z-10 w-full bg-black text-white pt-24 pb-[20vh] px-4 sm:px-8 overflow-y-visible" id="projects">
      <div className="max-w-[1400px] mx-auto w-full relative">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex justify-center mb-16 md:mb-32 sticky top-[5vh] z-0"
        >
          <h2 className="font-display font-black text-[clamp(4.5rem,13vw,12rem)] leading-[0.8] tracking-tighter uppercase text-center text-white/5">
            PROJECTS
          </h2>
        </motion.div>

        <div className="flex flex-col relative w-full -mt-24 md:-mt-48 z-10">
          {projects.map((proj, i) => (
             <ProjectCard key={proj.num} proj={proj} index={i + 10} />
          ))}
        </div>
      </div>
    </section>
  );
}
