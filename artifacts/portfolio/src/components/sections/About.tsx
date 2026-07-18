import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans tracking-tight">
              A <span className="text-primary font-mono">&lt;Dev/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <div className="font-mono text-sm text-muted-foreground space-y-4">
              <p className="flex justify-between border-b border-border/50 pb-2">
                <span>Localização</span>
                <span className="text-foreground text-right">Brasil · Remoto</span>
              </p>
              <p className="flex justify-between border-b border-border/50 pb-2">
                <span>Formação</span>
                <span className="text-foreground text-right">Ciência da Computação</span>
              </p>
              <p className="flex justify-between border-b border-border/50 pb-2">
                <span>Foco</span>
                <span className="text-foreground text-right">Front-end &amp; UI Design</span>
              </p>
              <p className="flex justify-between pb-2">
                <span>Status</span>
                <span className="text-primary animate-pulse">Disponível</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 prose prose-invert max-w-none"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground font-mono">
              Produto, não só código.
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Sou <strong className="text-foreground">Desenvolvedora Front-end</strong> com foco em <strong className="text-foreground">UI Design</strong>, estudante de Ciência da Computação e alguém que acredita que um bom produto começa com uma interface que faz sentido para quem a usa.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Trabalho com <strong className="text-primary">React</strong>, <strong className="text-primary">TypeScript</strong> e <strong className="text-primary">Node.js</strong> para criar aplicações do zero — da concepção ao deploy em produção. Minha casa é o front-end, mas não tenho medo de atravessar a porta do back-end quando o projeto pede: já implementei APIs REST, integração com banco de dados e rastreabilidade via <strong className="text-foreground">blockchain</strong>, usando IA como ferramenta de apoio no processo, não como substituta do raciocínio.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              O que me diferencia? Não entrego apenas código que funciona. Entrego <strong className="text-foreground">experiências que convertem</strong>, com atenção a cada detalhe de usabilidade, acessibilidade e performance.
            </p>
            <blockquote className="border-l-2 border-primary/60 pl-6 py-1 text-lg text-foreground/70 italic not-prose">
              "Bons desenvolvedores resolvem o problema. Ótimos desenvolvedores fazem o usuário nem perceber que havia um problema."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
