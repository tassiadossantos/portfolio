import { motion } from 'framer-motion';

const philosophies = [
  {
    title: 'Interface que faz sentido',
    desc: 'Um bom produto começa por uma interface que o usuário entende sem precisar pensar.',
  },
  {
    title: 'Código limpo é respeito',
    desc: 'Código limpo não é perfeccionismo — é respeito pelo próximo dev, que pode ser você mesma em três meses.',
  },
  {
    title: 'Performance como detalhe',
    desc: 'Carregamento rápido, animações suaves e lazy loading não são extras — são parte da experiência.',
  },
  {
    title: 'Acessibilidade para todos',
    desc: 'Interfaces que excluem pessoas com deficiência são interfaces incompletas. WCAG não é opcional.',
  },
  {
    title: 'IA como ferramenta',
    desc: 'Uso IA para acelerar, não para substituir o raciocínio. O julgamento técnico é insubstituível.',
  },
  {
    title: 'Do front ao back',
    desc: 'Minha casa é o front-end, mas não tenho medo de atravessar a porta do back-end quando o projeto pede.',
  },
  {
    title: 'Produto, não só código',
    desc: 'Entrego experiências que convertem, não apenas código que compila.',
  },
  {
    title: 'Evolução contínua',
    desc: 'Tecnologia não para. Aprender constantemente não é opção — é parte do ofício.',
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/8 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight"
          >
            Princípios &amp; <span className="text-primary font-mono">Filosofia</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-border/50 bg-secondary/20 p-8 group hover:border-primary/50 transition-all hover:-translate-y-1 relative"
            >
              <div className="absolute top-0 right-0 p-3 font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all">
                0{i + 1}
              </div>
              <h3 className="font-mono text-primary mb-4 text-sm uppercase tracking-widest mt-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
