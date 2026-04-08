import VideoBackground from './components/VideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottomCards from './components/BottomCards';
import MarqueeFeature from './components/MarqueeFeature';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stats from './components/Stats';
import CertificationsMarquee from './components/CertificationsMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden font-sans text-white">
      <VideoBackground />
      <Navbar />
      <main className="relative z-10 w-full pt-16">
        <Hero />
        <BottomCards />
        <MarqueeFeature />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Stats />
        <CertificationsMarquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
