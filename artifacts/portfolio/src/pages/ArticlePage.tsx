import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { getArticleBySlug } from '@/data/articles';
import NotFound from '@/pages/not-found';

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-12 mb-4 font-sans tracking-tight text-foreground">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-bold text-foreground mb-3">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith('- **')) {
      elements.push(
        <li key={i} className="text-foreground/80 leading-relaxed mb-2 ml-4 list-disc">
          <strong className="text-foreground">{line.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
          {line.replace(/- \*\*.*?\*\*/, '')}
        </li>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-foreground/80 leading-relaxed mb-2 ml-4 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith('```')) {
      const lang = line.slice(3);
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre
          key={i}
          className="bg-secondary/60 border border-border/50 rounded-none p-5 my-6 overflow-x-auto font-mono text-sm text-foreground/90 leading-relaxed"
        >
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
    } else if (line.trim() === '') {
      // skip blank lines between elements
    } else {
      // inline bold replacement
      const parts = line.split(/(\*\*.*?\*\*)/g);
      elements.push(
        <p key={i} className="text-foreground/80 leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={j} className="text-foreground font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug);

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/30 sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar ao portfólio
            </a>
          </Link>
          <span className="text-primary font-mono font-bold text-lg">&gt;_ FE.DEV</span>
        </div>
      </header>

      {/* Article */}
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime} de leitura
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold font-sans tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-foreground/60 leading-relaxed mb-8 border-l-2 border-primary pl-4 italic">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-3 py-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 mb-12" />

          {/* Content */}
          <div className="prose-custom">{renderContent(article.content)}</div>

          {/* Footer */}
          <div className="border-t border-border/30 mt-16 pt-10">
            <Link href="/#articles">
              <a className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Ver todos os artigos
              </a>
            </Link>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
