import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { articles } from '@/data/articles';

export function Blog() {
  return (
    <section id="articles" className="py-24 relative border-t border-border/30 bg-secondary/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
              Artigos &amp; <span className="text-primary font-mono">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link
                href={`/artigos/${article.slug}`}
                className="block h-full group cursor-pointer"
              >
                <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-all rounded-none flex flex-col hover:shadow-[0_0_20px_rgba(255,107,0,0.07)]">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                      <span>/</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-grow">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
