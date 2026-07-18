import { motion } from 'framer-motion';

function HudPanel({ children, className = '', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      className={`relative border border-border/60 hover:border-primary/40 transition-all duration-500 bg-background/60 backdrop-blur-sm group hover:glow-orange ${className}`}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-px -translate-y-px" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50 translate-x-px -translate-y-px" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50 -translate-x-px translate-y-px" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 translate-x-px translate-y-px" />
      {children}
    </motion.div>
  );
}

const stats = [
  { label: 'Localização', value: 'Brasil · Remoto', highlight: false },
  { label: 'Formação',    value: 'Ciência da Computação', highlight: false },
  { label: 'Foco',        value: 'Front-end & UI Design', highlight: false },
  { label: 'Status',      value: 'Disponível', highlight: true },
];

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border/30 hud-grid">

      {/* Decorative scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ top: 0 }} />
      </div>

      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14"
        >
          <div className="h-px w-10 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase">Protocolo · Identificação</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left — stats panel */}
          <div className="lg:col-span-4 space-y-4">
            <HudPanel delay={0.1}>
              <div className="p-6">
                <p className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase mb-4">
                  Perfil · Dev.01
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-6">
                  A <span className="text-primary text-glow font-mono">&lt;Dev/&gt;</span>
                </h2>
                <div className="space-y-3">
                  {stats.map((s) => (
                    <div key={s.label} className="flex justify-between items-center border-b border-border/40 pb-3 last:border-0">
                      <span className="font-mono text-xs text-muted-foreground tracking-wide">{s.label}</span>
                      <span className={`font-mono text-xs text-right ${s.highlight ? 'text-primary animate-hud-blink' : 'text-foreground'}`}>
                        {s.highlight && <span className="mr-1">●</span>}
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </HudPanel>

            {/* Mini metric cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '3+', label: 'Projetos' },
                { val: '100%', label: 'Dedicação' },
              ].map((m) => (
                <HudPanel key={m.label} delay={0.2}>
                  <div className="p-4 text-center">
                    <p className="font-mono text-2xl font-bold text-primary text-glow">{m.val}</p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-1">{m.label}</p>
                  </div>
                </HudPanel>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <HudPanel className="lg:col-span-8" delay={0.15}>
            <div className="p-8 md:p-10">
              <p className="font-mono text-[10px] text-primary/60 tracking-[0.2em] uppercase mb-6">
                Briefing · Missão
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-foreground font-mono">
                Produto, não só código.
              </h3>
              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p>
                  Sou <strong className="text-foreground">Desenvolvedora Front-end</strong> com foco em <strong className="text-foreground">UI Design</strong>, estudante de Ciência da Computação e alguém que acredita que um bom produto começa com uma interface que faz sentido para quem a usa.
                </p>
                <p>
                  Trabalho com <strong className="text-primary">React</strong>, <strong className="text-primary">TypeScript</strong> e <strong className="text-primary">Node.js</strong> para criar aplicações do zero — da concepção ao deploy em produção. Minha casa é o front-end, mas não tenho medo de atravessar a porta do back-end quando o projeto pede: já implementei APIs REST, integração com banco de dados e rastreabilidade via <strong className="text-foreground">blockchain</strong>, usando IA como ferramenta de apoio no processo, não como substituta do raciocínio.
                </p>
                <p>
                  O que me diferencia? Não entrego apenas código que funciona. Entrego <strong className="text-foreground">experiências que convertem</strong>, com atenção a cada detalhe de usabilidade, acessibilidade e performance.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-primary pl-5 py-1 text-foreground/60 italic text-sm">
                "Bons desenvolvedores resolvem o problema. Ótimos desenvolvedores fazem o usuário nem perceber que havia um problema."
              </blockquote>
            </div>
          </HudPanel>

        </div>
      </div>
    </section>
  );
}
