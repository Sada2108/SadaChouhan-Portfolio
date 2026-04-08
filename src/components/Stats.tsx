import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '6+', label: 'Google Cloud Certifications' },
    { value: '3', label: 'Internships Completed' },
    { value: '2', label: 'Industry Simulations' },
    { value: '4+', label: 'Live GitHub Projects' }
  ];

  return (
    <section className="relative z-10 w-full py-24 px-8 md:px-16 max-w-[1400px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
            key={i} 
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-[clamp(3.5rem,6vw,5rem)] md:text-7xl font-black text-white font-display mb-4 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-bold max-w-[150px] leading-relaxed">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
