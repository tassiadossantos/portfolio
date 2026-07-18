import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[160px]" />
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="font-mono text-primary tracking-widest uppercase text-sm font-semibold">
              Sistema inicializado
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            <span className="block text-foreground">Desenvolvedora</span>
            <span className="block text-primary mt-2">
              Front-end &amp; UI.{' '}
              <span className="text-foreground/40 font-mono text-3xl md:text-4xl lg:text-5xl align-middle">
                (&gt;_ FE.DEV)
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl font-light leading-relaxed border-l-2 border-primary/60 pl-6 py-2 italic">
            "Transformo ideias complexas em interfaces que as pessoas realmente querem usar."
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="h-14 px-8 text-base font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary hover:shadow-[0_0_24px_rgba(255,107,0,0.4)]"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-mono rounded-none border-primary/50 text-foreground hover:bg-primary/10 transition-all"
            >
              Entrar em Contato
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground font-mono text-xs"
      >
        <span className="tracking-widest uppercase">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
