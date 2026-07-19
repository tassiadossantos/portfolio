export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  date: string;
  content: string; // markdown-like, rendered as HTML sections
}

export const articles: Article[] = [
  {
    slug: 'design-system-hud-animado',
    title: 'Design System do zero: do conceito ao componente HUD animado',
    excerpt:
      'Como construí um design system customizado com TailwindCSS v4, Framer Motion e shadcn/ui — e por que cada decisão de componente importa mais do que você pensa.',
    readTime: '8 min',
    tags: ['design-system', 'react', 'tailwindcss'],
    date: 'Abr 2026',
    content: `
## O problema que me levou a criar um design system

Quando comecei o desenvolvimento do **CodeX**, um sistema enterprise de gestão de equipes com HUD em tempo real, a primeira tentativa foi a mais ingênua possível: um componente por vez, estilo inline, cores hardcoded. Em três semanas, o projeto tinha 47 tons de cinza diferentes e ninguém — inclusive eu — sabia qual usar onde.

A decisão de parar tudo e construir um design system antes de continuar foi difícil. Parecia perda de tempo. No final, foi o que salvou o projeto.

## Fundação: tokens de design antes de qualquer componente

O primeiro passo foi definir os **design tokens** — as variáveis que carregam significado semântico, não apenas valores visuais.

\`\`\`css
:root {
  --color-primary: 25 100% 50%;      /* laranja vivo */
  --color-surface: 224 71% 4%;       /* fundo escuro */
  --color-border: 216 34% 17%;       /* bordas sutis */
  --color-muted: 215 16% 57%;        /* texto secundário */
}
\`\`\`

A diferença entre \`--color-primary\` e \`--color-orange-500\` pode parecer cosmética. Não é. Quando o cliente pediu para testar uma paleta azul no meio do desenvolvimento, trocar um token levou 2 minutos. Trocar uma cor hardcoded levaria dias.

## Arquitetura dos componentes

Escolhi uma estrutura em três camadas:

**1. Primitivos** — sem opinião visual, só estrutura (Box, Stack, Grid)

**2. Compostos** — primitivos com estilo e variantes (Card, Badge, Button)

**3. Padrões** — componentes de negócio (MetricCard, StatusBadge, HUDPanel)

O \`shadcn/ui\` entrou como base para os compostos. A decisão foi estratégica: em vez de construir tudo do zero, eu *extendo* componentes auditados e acessíveis, focando minha energia nos padrões específicos do produto.

## O componente HUD: onde animação encontra dado real

O painel HUD foi o maior desafio técnico. Ele precisava mostrar métricas em tempo real com animações fluidas, sem causar layout shift nem travar a interface.

\`\`\`tsx
function MetricCard({ value, label, trend }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative bg-surface border border-border/50 p-6"
    >
      <AnimatedCounter value={value} />
      <TrendIndicator direction={trend} />
      <span className="text-muted text-xs font-mono">{label}</span>
    </motion.div>
  );
}
\`\`\`

O \`AnimatedCounter\` usa \`useMotionValue\` e \`useTransform\` do Framer Motion para interpolar o número visualmente — quando o valor muda de 847 para 912, o usuário vê a transição, não o salto.

## O que aprendi

**Tokens semânticos salvam refatorações.** Nomes como \`--color-surface\` descrevem intenção; \`--gray-900\` descreve aparência. A intenção envelhece melhor.

**Animação tem custo cognitivo.** Cada animação que adicionei precisou de uma justificativa: ela comunica mudança de estado? Ela guia o olho? Se a resposta fosse "parece legal", eu removia.

**Design system não é biblioteca de componentes.** É um vocabulário compartilhado. O valor real aparece quando uma segunda tela é construída em metade do tempo — porque as decisões já foram tomadas.

O CodeX hoje tem 23 componentes no design system. Cada nova feature leva menos tempo do que a anterior. Esse é o retorno do investimento.
    `,
  },
  {
    slug: 'formularios-multi-etapas-react-hook-form-zod',
    title: 'Formulários multi-etapas com React Hook Form + Zod: validação real',
    excerpt:
      'Lições práticas de quem implementou calculadoras de multas trabalhistas e formulários de orçamento com validação inteligente em produção.',
    readTime: '6 min',
    tags: ['react', 'typescript', 'zod'],
    date: 'Fev 2026',
    content: `
## Formulários são subestimados

A maioria dos tutoriais de formulário mostra um campo de e-mail e um botão. O mundo real é diferente: calculadoras de multas trabalhistas com 12 variáveis interdependentes, formulários de orçamento com lógica condicional, dados sensíveis que precisam passar por LGPD.

Foi esse mundo que encontrei no **Escudo Consultoria** — uma plataforma de consultoria trabalhista onde o formulário *é* o produto. Não tem como esconder um formulário ruim atrás de outra feature.

## Por que multi-etapas?

Formulários longos assustam. Um formulário com 20 campos em uma tela tem taxa de abandono muito maior do que o mesmo formulário dividido em 5 etapas de 4 campos cada. A psicologia por trás é simples: o progresso visível reduz a sensação de esforço.

A divisão que usei para a calculadora de multas:

- **Etapa 1**: Dados do vínculo (admissão, demissão, tipo de contrato)
- **Etapa 2**: Remuneração (salário base, benefícios, comissões)
- **Etapa 3**: Situação da rescisão (motivo, aviso prévio)
- **Etapa 4**: Revisão e confirmação

## A arquitetura com React Hook Form

O segredo para multi-etapas sem duplicação de código é um único \`useForm\` na camada pai, passado via contexto para os filhos:

\`\`\`tsx
const FormContext = createContext<UseFormReturn<FormData> | null>(null);

export function MultiStepForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onChange',
  });

  return (
    <FormContext.Provider value={methods}>
      <StepIndicator currentStep={step} totalSteps={4} />
      {step === 1 && <VinculoStep />}
      {step === 2 && <RemuneracaoStep />}
      {step === 3 && <RescisaoStep />}
      {step === 4 && <RevisaoStep />}
    </FormContext.Provider>
  );
}
\`\`\`

Cada step usa \`useFormContext()\` para acessar \`register\`, \`watch\` e \`formState\`. Nenhum estado duplicado.

## Validação por etapa com Zod

O desafio é validar só os campos da etapa atual ao avançar, sem disparar erros dos campos que ainda não aparecem:

\`\`\`ts
const vinculoSchema = z.object({
  dataAdmissao: z.string().min(1, 'Data obrigatória'),
  dataDemissao: z.string().min(1, 'Data obrigatória'),
  tipoContrato: z.enum(['clt', 'temporario', 'experiencia']),
}).refine(
  (data) => new Date(data.dataDemissao) > new Date(data.dataAdmissao),
  { message: 'Demissão deve ser após admissão', path: ['dataDemissao'] }
);

async function handleNext() {
  const fields = stepFields[currentStep];
  const valid = await trigger(fields); // valida só os campos do step atual
  if (valid) setStep(s => s + 1);
}
\`\`\`

O \`refine\` do Zod foi o que resolveu a validação cruzada entre campos — uma regra que depende de dois valores ao mesmo tempo. Tentei fazer isso com \`validate\` do RHF antes; o Zod é muito mais legível.

## LGPD na prática

Como o formulário coleta dados trabalhistas sensíveis, precisei implementar:

- **Consentimento explícito** antes de qualquer dado ser coletado
- **Mascaramento** de CPF e dados pessoais na etapa de revisão
- **Sessão efêmera** — nada persiste no localStorage sem autorização

O checkbox de consentimento usa um campo controlado com validação Zod:

\`\`\`ts
consentimento: z.literal(true, {
  errorMap: () => ({ message: 'Você precisa aceitar para continuar' }),
}),
\`\`\`

\`z.literal(true)\` é elegante: só aceita \`true\`, não \`false\`, não \`undefined\`. O campo é obrigatório por definição.

## O que ficou como lição

**Valide por etapa, submeta uma vez.** Validação parcial por etapa + submissão única no final é o padrão mais seguro e menos frustrante para o usuário.

**Erros devem aparecer onde o usuário está.** Mostrar erros de etapas anteriores quando o usuário está na etapa 3 é confuso. O estado de erro fica no schema, a exibição fica na etapa.

**Formulário bom é formulário invisível.** Quando funciona, o usuário não pensa no formulário. Pensa na tarefa que está completando.
    `,
  },
  {
    slug: 'blockchain-agronegocio-polygon-nodejs',
    title: 'Blockchain no agronegócio: rastreabilidade com Polygon e Node.js',
    excerpt:
      'Como integrei a rede Polygon para garantir imutabilidade criptográfica em um sistema B2B de rastreabilidade agrícola — do smart contract à UI.',
    readTime: '10 min',
    tags: ['blockchain', 'nodejs', 'fullstack'],
    date: 'Dez 2025',
    content: `
## Por que blockchain no agronegócio?

Quando o cliente do **AgroTech** me apresentou o problema, a solução blockchain não era óbvia. O desafio era: como garantir que um registro de lote agrícola — sua origem, tratamentos, condições de transporte — não pudesse ser adulterado por nenhuma das partes da cadeia?

Banco de dados tradicional com controle de acesso? Qualquer administrador com acesso ao servidor pode editar. Assinatura digital centralizada? Requer confiança em uma autoridade central. Blockchain? Imutabilidade criptográfica distribuída — ninguém altera sem deixar rastro visível.

A escolha foi a rede **Polygon** (anteriormente Matic), uma sidechain compatível com Ethereum. O motivo: taxas de transação na casa de centavos, compatibilidade com Solidity e ferramentas EVM, e velocidade suficiente para uso B2B real.

## Arquitetura geral

O sistema tem três camadas:

**Smart contract (Solidity)** — registra e lê eventos imutáveis na blockchain

**API Node.js (Express)** — intermedia entre o frontend e a blockchain, gerencia wallets e assina transações

**Frontend React** — interface para produtores, transportadores e compradores

\`\`\`
Produtor → React UI → Node.js API → Polygon RPC → Smart Contract
                                                        ↓
Comprador ← React UI ← Node.js API ←── consulta ───────┘
\`\`\`

## O smart contract

O contrato é deliberadamente simples. Blockchain não é banco de dados — dados grandes e complexos ficam fora dela. O que entra é o *hash* do registro e os metadados mínimos:

\`\`\`solidity
contract AgroTrace {
  struct Lote {
    string id;
    bytes32 dataHash;   // hash SHA-256 dos dados completos
    address registrador;
    uint256 timestamp;
  }

  mapping(string => Lote) private lotes;
  event LoteRegistrado(string id, bytes32 dataHash, address registrador);

  function registrarLote(string memory id, bytes32 dataHash) public {
    require(lotes[id].timestamp == 0, "Lote ja registrado");
    lotes[id] = Lote(id, dataHash, msg.sender, block.timestamp);
    emit LoteRegistrado(id, dataHash, msg.sender);
  }

  function consultarLote(string memory id) public view returns (Lote memory) {
    require(lotes[id].timestamp != 0, "Lote nao encontrado");
    return lotes[id];
  }
}
\`\`\`

A regra \`require(lotes[id].timestamp == 0)\` garante que um lote registrado nunca pode ser substituído. Imutabilidade por design.

## Integração Node.js com ethers.js

A API assina as transações usando uma wallet custodial — o produtor não precisa ter MetaMask ou entender de blockchain:

\`\`\`ts
import { ethers } from 'ethers';
import { AgroTrace__factory } from './typechain';

const provider = new ethers.JsonRpcProvider(process.env.POLYGON_RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = AgroTrace__factory.connect(CONTRACT_ADDRESS, signer);

export async function registrarLote(id: string, dados: LoteDados) {
  const dataHash = ethers.id(JSON.stringify(dados)); // keccak256
  const tx = await contract.registrarLote(id, dataHash);
  await tx.wait(); // aguarda confirmação
  return tx.hash;
}
\`\`\`

O \`tx.wait()\` bloqueia até a transação ser minerada. Para Polygon, isso leva em média 2 segundos — aceitável para fluxo B2B, inaceitável para UX de consumidor. No nosso caso, o frontend mostra um estado de "processando" enquanto aguarda.

## O frontend: tornando blockchain invisível

O maior desafio de UX foi esconder a complexidade da blockchain do usuário final. Produtores rurais não sabem o que é um hash. Compradores não querem ver endereços de wallet.

A solução foi uma timeline visual:

\`\`\`tsx
function RastreabilidadeTimeline({ loteId }: { loteId: string }) {
  const { data: eventos } = useQuery({
    queryKey: ['lote', loteId],
    queryFn: () => fetchEventosLote(loteId),
  });

  return (
    <div className="relative border-l-2 border-primary/30 ml-4">
      {eventos?.map((evento, i) => (
        <TimelineItem
          key={i}
          titulo={evento.tipo}
          data={formatarData(evento.timestamp)}
          verificado={evento.hashValido}   // compara hash local vs blockchain
          txHash={evento.txHash}            // link opcional para o explorer
        />
      ))}
    </div>
  );
}
\`\`\`

O ícone de "verificado" aparece quando o hash dos dados locais bate com o hash registrado na blockchain. Se não bate, aparece um alerta vermelho — indicando possível adulteração fora da cadeia. Isso é o valor real do sistema.

## O que aprendi sobre blockchain em produção

**Blockchain não substitui banco de dados.** Ela complementa. Os dados detalhados ficam no Postgres; só o hash vai para a cadeia. Custo e performance viáveis.

**UX de espera importa.** 2 segundos de espera parece pouco, mas sem feedback visual parece travado. Skeleton, loading state e mensagem de "confirmando na rede" fazem toda diferença.

**Chave privada é segredo absoluto.** Gerenciar a wallet custodial com variável de ambiente não é suficiente para produção séria — KMS (Key Management Service) é o caminho correto. No MVP usamos dotenv; em produção, AWS KMS.

**Polygon foi a escolha certa.** Gas fees abaixo de R$0,05 por transação tornaram o modelo economicamente viável. Ethereum mainnet teria inviabilizado o projeto.

O AgroTech mostrou que blockchain tem casos de uso reais — quando o problema que você quer resolver é genuinamente sobre imutabilidade e confiança distribuída, não sobre adotar tecnologia nova por parecer inovador.
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
