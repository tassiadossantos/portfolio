import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Front-end',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'TailwindCSS', level: 93 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Vite', level: 90 },
      { name: 'shadcn/ui · Radix UI', level: 90 },
      { name: 'React Hook Form · Zod', level: 88 },
    ],
  },
  {
    title: 'Back-end & Banco de Dados',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Supabase', level: 80 },
      { name: 'Drizzle ORM', level: 75 },
      { name: 'API REST', level: 82 },
    ],
  },
  {
    title: 'Ferramentas & DevOps',
    skills: [
      { name: 'Git · GitHub · GitLab', level: 90 },
      { name: 'GitHub Actions', level: 78 },
      { name: 'npm · pnpm', level: 85 },
      { name: 'GitHub Copilot · IA', level: 88 },
      { name: 'Figma · UI Design', level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight"
          >
            Stack <span className="text-primary font-mono">Tecnológica</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-mono text-primary border-b border-primary/30 pb-4 mb-8">
                {category.title}
              </h3>
              <div className="space-y-7">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-foreground/90">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1 bg-secondary rounded-none" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
