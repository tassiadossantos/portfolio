import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Github, Linkedin, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nome precisa ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem precisa ter pelo menos 10 caracteres'),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = (_data: z.infer<typeof formSchema>) => {
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans tracking-tight">
                Vamos <span className="text-primary font-mono">Conversar?</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Se você procura uma desenvolvedora que entrega <strong className="text-foreground">produto, não só código</strong>, me encontra aqui.
              </p>
            </div>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-foreground/90">
                <div className="w-12 h-12 bg-secondary/30 flex items-center justify-center border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Localização</p>
                  <p className="text-muted-foreground">Brasil · Disponível para remoto</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">Redes &amp; Perfis</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tassiadossantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-10 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all font-mono text-xs"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tassiadossantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-10 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all font-mono text-xs"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://wa.me/5571996171605?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20(%3E_%20FE.DEV)%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20%F0%9F%9A%80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-10 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all font-mono text-xs"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/10 border border-border/50 p-8 md:p-10 relative"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1"></div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-mono text-foreground mb-2">Mensagem Recebida!</h3>
                  <p className="text-muted-foreground">Obrigada pelo contato. Retorno em breve.</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => { setIsSubmitted(false); form.reset(); }}
                  className="mt-4 font-mono rounded-none border-primary/50 text-primary hover:bg-primary/10"
                >
                  Enviar outra mensagem
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-mono text-xl text-foreground">Enviar mensagem</h3>
                    <p className="text-sm text-muted-foreground font-mono mb-6">Preencha os campos abaixo</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            className="bg-background border-border/50 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary font-mono text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu e-mail"
                            type="email"
                            className="bg-background border-border/50 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary font-mono text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Como posso te ajudar?"
                            className="bg-background border-border/50 rounded-none min-h-[150px] resize-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary font-mono text-sm p-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-none font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary disabled:opacity-50 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
