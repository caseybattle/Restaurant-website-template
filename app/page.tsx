import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Contact from '@/components/Contact';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  return (
    <ClientOnly fallback={<div className="min-h-screen bg-neutral-950"></div>}>
      <div className="bg-neutral-950 min-h-screen">
        <Hero />
        <About />
        <Featured />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </div>
    </ClientOnly>
  );
}
