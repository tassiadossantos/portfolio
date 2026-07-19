import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Shield, Briefcase, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'DevBoard',
    subtitle: 'Dashboard de Produtividade',
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    description:
      'Painel de produtividade que reúne seus commits do GitHub, streaks, idiomas e métricas em uma única interface bonita e funcional — unificando dados de produtividade como desenvolvedor em um único dashboard elegante.',
    stack: ['React', 'TypeScript', 'Vite', 'Recharts', 'Zustand', 'Tailwind CSS', 'date-fns'],
    challenge:
      'Integrar dados de múltiplas fontes (GitHub, WakaTime) em uma interface coesa, com gráficos interativos, calendário de contribuições, rastreador de streaks e temas claro/escuro.',
    result:
      'Ferramenta pessoal de produtividade que centraliza métricas de desenvolvimento, permitindo foco em entregar código ao invés de alternar entre abas.',
    github: 'https://github.com/tassiadossantos/devboard',
    live: 'https://tassiadossantos.github.io/devboard/',
  },
  {
    title: 'CodeX',
    subtitle: 'Sistemas Enterprise',
    icon: <Shield className="w-6 h-6 text-primary" />,
    description:
      'Site institucional de alta performance com estética HUD/tactical inspirada em interfaces sci-fi — focado em captação de leads corporativos para uma empresa de engenharia enterprise.',
    stack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS v4', 'Supabase', 'Framer Motion', 'shadcn/ui'],
    challenge:
      'Criar uma identidade visual HUD (arc reactor, scanlines, brackets SVG) com componentes reutilizáveis, terminal de boot animado e formulário integrado ao Supabase.',
    result:
      'Presença digital com identidade visual forte que comunica autoridade técnica — transformando visitantes em leads qualificados via formulário integrado.',
    github: 'https://github.com/tassiadossantos/codex',
    live: 'https://tassiadossantos.github.io/codex/',
  },
  {
    title: 'Escudo Consultoria',
    subtitle: 'SST · Site Institucional & Leads',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    description:
      'Presença digital completa de uma consultoria em Segurança e Saúde do Trabalho — plataforma que atua como vendedor 24h gerando leads qualificados.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'TailwindCSS'],
    challenge:
      'Formulário multi-etapas com validação inteligente, calculadora de multas trabalhistas baseada em regras SST reais, blog com Markdown dinâmico e conformidade com LGPD.',
    result:
      'Plataforma institucional gerando leads qualificados por WhatsApp e e-mail enquanto fortalece a autoridade digital da consultoria.',
    github: 'https://github.com/tassiadossantos/escudo-consultoria',
    live: 'https://tassiadossantos.github.io/escudo-consultoria/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-secondary/5 border-y border-border/30">
      <div className="container mx-auto px-6 md:px-12">

        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans tracking-tight">
              Projetos em <span className="text-primary font-mono">Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trabalhos selecionados que demonstram arquitetura componentizada, performance e atenção à experiência do usuário.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Card className="h-full bg-background border-border/50 hover:border-primary/60 transition-all group overflow-hidden rounded-none hover:shadow-[0_0_30px_rgba(255,107,0,0.08)]">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-6 border-b border-border/50 bg-secondary/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.icon}
                      <div>
                        <h3 className="text-xl font-bold font-mono tracking-tight leading-tight">{project.title}</h3>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Ver repositório"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="Ver projeto ao vivo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-5 flex flex-col flex-grow">
                    <p className="text-foreground/85 leading-relaxed text-sm">{project.description}</p>

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">Desafio</h4>
                      <p className="text-xs text-foreground/75 border-l-2 border-destructive/50 pl-3 py-1 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">Resultado</h4>
                      <p className="text-xs text-foreground/75 border-l-2 border-primary/60 pl-3 py-1 leading-relaxed">
                        {project.result}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2 mt-auto">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono bg-secondary/50 text-secondary-foreground rounded-none px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
