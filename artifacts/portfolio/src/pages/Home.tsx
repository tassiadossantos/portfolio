import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Philosophy } from '@/components/sections/Philosophy';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
