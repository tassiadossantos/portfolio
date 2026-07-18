import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 hud-grid"
    >
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-orange-900/15 rounded-full blur-[100px]" />
      </div>

      {/* Decorative rotating rings — top right */}
      <div className="absolute top-20 right-12 w-72 h-72 opacity-25 pointer-events-none hidden lg:block">
        <div className="animate-hud-rotate-cw absolute inset-0 rounded-full border border-primary/60" />
        <div className="animate-hud-rotate-ccw absolute inset-6 rounded-full border border-primary/40 border-dashed" />
        <div className="animate-hud-rotate-cw absolute inset-14 rounded-full border border-primary/50" style={{ animationDuration: '10s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary glow-orange-strong" />
        </div>
        {/* Arc segments */}
        <svg className="absolute inset-0 animate-hud-rotate-ccw" viewBox="0 0 288 288" style={{ animationDuration: '30s' }}>
          <circle cx="144" cy="144" r="130" fill="none" stroke="hsl(25 100% 50%)" strokeWidth="1"
            strokeDasharray="40 180" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Decorative ring — bottom left */}
      <div className="absolute bottom-24 left-8 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
        <div className="animate-hud-rotate-ccw absolute inset-0 rounded-full border border-primary/50 border-dashed" />
        <div className="animate-hud-rotate-cw absolute inset-4 rounded-full border border-primary/30" style={{ animationDuration: '8s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Top HUD bracket */}
        <div className="absolute -top-4 left-6 md:left-12 flex items-center gap-3 pointer-events-none select-none">
          <span className="font-mono text-xs text-primary/50 tracking-widest">SYS:00x2FA</span>
          <div className="w-16 h-px bg-primary/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl relative"
        >
          {/* Panel corners */}
          <div className="absolute -top-5 -left-5 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-5 -left-5 w-6 h-6 border-b-2 border-l-2 border-primary/50" />

          {/* Status label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="animate-hud-blink w-2 h-2 rounded-full bg-primary glow-orange" />
            <span className="font-mono text-primary tracking-[0.25em] uppercase text-xs font-semibold">
              Sistema Inicializado
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.05]">
            <span className="block text-foreground">Desenvolvedora</span>
            <span className="block text-primary mt-2 text-glow">
              Front-end &amp; UI.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/75 mb-10 max-w-2xl font-light leading-relaxed border-l-2 border-primary pl-5 py-1 italic">
            "Transformo ideias complexas em interfaces que as pessoas realmente querem usar."
          </p>

          {/* HUD stat row */}
          <div className="flex items-center gap-6 mb-10 font-mono text-xs text-muted-foreground">
            <span>
              <span className="text-primary">▸</span> React · TypeScript
            </span>
            <div className="h-px w-6 bg-border" />
            <span>
              <span className="text-primary">▸</span> UI Design
            </span>
            <div className="h-px w-6 bg-border" />
            <span>
              <span className="text-primary">▸</span> Brasil · Remoto
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollTo('#projects')}
              size="lg"
              className="h-13 px-8 text-sm font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary glow-orange hover:glow-orange-strong tracking-widest uppercase"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollTo('#contact')}
              size="lg"
              variant="outline"
              className="h-13 px-8 text-sm font-mono rounded-none border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all tracking-widest uppercase"
            >
              Entrar em Contato
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground font-mono text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
