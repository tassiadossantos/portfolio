import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background py-10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} · Todos os direitos reservados.
          </span>
        </div>
        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Desenvolvido com React &amp; TypeScript
        </div>
      </div>
    </footer>
  );
}
