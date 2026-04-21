import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Gallery from '@/components/sections/Gallery';
import AboutUs from '@/components/sections/AboutUs';
import Testimonials from '@/components/sections/Testimonials';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <AboutUs />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
  );
}
