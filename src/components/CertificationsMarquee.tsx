export default function CertificationsMarquee() {
  const certs = [
    { src: '/genaiacademy.jpeg', alt: 'Gen AI Academy' },
    { src: '/developgeAiapps_skillbadge.jpeg', alt: 'Develop GenAI Apps' },
    { src: '/exploregenai_skillbadge.jpeg', alt: 'Explore GenAI' },
    { src: '/inspectrichdocuments_skillbadge.jpeg', alt: 'Inspect rich documents' },
    { src: '/promptdesign_skill badge.jpeg', alt: 'Prompt Design' },
    { src: '/real world applicationusing geminiandimagen_skillbadge.jpeg', alt: 'Real World Application' },
  ];

  return (
    <section className="relative z-10 w-full overflow-hidden py-24 bg-black" id="certifications">
      <div className="flex w-[600%] sm:w-[400%] md:w-[200%] xl:w-max animate-marquee">
        <div className="flex items-center justify-around px-2 gap-4 md:gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-4 w-[280px] shrink-0 relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3] group bg-white/[0.02]">
              <img src={cert.src} alt={cert.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-around px-2 gap-4 md:gap-6">
          {certs.map((cert, i) => (
            <div key={`copy-${i}`} className="flex flex-col items-center gap-4 w-[280px] shrink-0 relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3] group bg-white/[0.02]">
              <img src={cert.src} alt={cert.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
