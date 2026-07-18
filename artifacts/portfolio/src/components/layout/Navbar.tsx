import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Sobre',       href: '#about' },
  { name: 'Projetos',    href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Filosofia',   href: '#philosophy' },
  { name: 'Artigos',     href: '#articles' },
  { name: 'Contato',     href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActive(href.slice(1));
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-primary/25 glow-orange'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight group"
        >
          <span className="text-primary text-glow">&gt;_ FE.DEV</span>
        </a>

        {/* System status */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-muted-foreground absolute left-1/2 -translate-x-1/2">
          <span className="animate-hud-blink w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="tracking-widest text-primary/60">SYS:ONLINE</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-xs font-mono tracking-widest uppercase transition-all duration-200 relative group ${
                active === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-200 ${
                active === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20 hud-grid overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-3"
                >
                  <span className="text-primary/40 text-xs">▸</span>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
