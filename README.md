# Portfolio — Tassia dos Santos

> Front-end Developer & UI Designer

[English](#english) | [Português](#português)

---

## English

### Overview

A personal portfolio website with a **HUD/tactical sci-fi aesthetic** — built to showcase projects, technical philosophy, and blog articles. The site features animated elements, responsive design, and a dark theme inspired by futuristic interfaces.

### Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, TypeScript, Vite, TailwindCSS v4, Framer Motion, shadcn/ui, wouter |
| **Backend** | Express 5, Node.js, Pino (logging) |
| **Database** | PostgreSQL, Drizzle ORM |
| **Validation** | Zod (`zod/v4`), drizzle-zod |
| **Build** | esbuild (CJS bundle), pnpm workspaces |
| **Codegen** | Orval (from OpenAPI spec) |

### Getting Started

**Prerequisites**

- Node.js 24+
- pnpm
- PostgreSQL (for API server)

**Installation**

```bash
pnpm install
```

**Running**

```bash
# Portfolio frontend
pnpm --filter @workspace/portfolio run dev

# API server (port 5000)
pnpm --filter @workspace/api-server run dev

# Mockup sandbox
pnpm --filter @workspace/mockup-sandbox run dev
```

**Build & Typecheck**

```bash
pnpm run build        # typecheck + build all packages
pnpm run typecheck    # typecheck only
```

**Database**

```bash
pnpm --filter @workspace/db run push    # push schema changes (dev only)
```

### Project Structure

```
portfolio/
├── frontend/               # Portfolio frontend (React + Vite)
├── backend/                # Express 5 API server
├── lib/
│   ├── db/                 # Drizzle ORM schema & config
│   ├── api-spec/           # OpenAPI specification
│   ├── api-client-react/   # React Query hooks (generated)
│   └── api-zod/            # Zod validation schemas (generated)
└── scripts/                # Utility scripts
```

### Features

- **HUD/Tactical UI** — Custom design system with animated rings, corner brackets, glowing elements, and scanline effects
- **Animated Sections** — Hero, About, Philosophy, Projects, Skills — all with scroll-triggered animations via Framer Motion
- **Blog** — Article pages with markdown-like rendering, tags, and reading time
- **Responsive** — Mobile-first design that works across all screen sizes
- **Dark Theme** — Full dark mode with semantic color tokens

### Featured Projects

| Project | Description | Stack |
|---------|-------------|-------|
| **CodeX** | Enterprise HUD site for lead capture | React, TypeScript, Vite, TailwindCSS v4, Supabase, Framer Motion |
| **Escudo Consultoria** | SST consulting platform with multi-step forms | React, Node.js, Express, PostgreSQL, Drizzle ORM, Zod |
| **CuidaMed** | Home care platform with fullstack architecture | React 19, Node.js, Express, Vitest, TailwindCSS |

### License

MIT

---

## Português

### Visão Geral

Site portfólio pessoal com **estética HUD/tactical sci-fi** — construído para mostrar projetos, filosofia técnica e artigos do blog. O site possui elementos animados, design responsivo e tema escuro inspirado em interfaces futuristas.

### Stack Tecnológica

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | React 19, TypeScript, Vite, TailwindCSS v4, Framer Motion, shadcn/ui, wouter |
| **Backend** | Express 5, Node.js, Pino (logging) |
| **Banco de Dados** | PostgreSQL, Drizzle ORM |
| **Validação** | Zod (`zod/v4`), drizzle-zod |
| **Build** | esbuild (bundle CJS), pnpm workspaces |
| **Codegen** | Orval (a partir de spec OpenAPI) |

### Como Começar

**Pré-requisitos**

- Node.js 24+
- pnpm
- PostgreSQL (para o API server)

**Instalação**

```bash
pnpm install
```

**Executando**

```bash
# Frontend do portfólio
pnpm --filter @workspace/portfolio run dev

# API server (porta 5000)
pnpm --filter @workspace/api-server run dev

# Sandbox de mockups
pnpm --filter @workspace/mockup-sandbox run dev
```

**Build & Typecheck**

```bash
pnpm run build        # typecheck + build de todos os pacotes
pnpm run typecheck    # somente typecheck
```

**Banco de Dados**

```bash
pnpm --filter @workspace/db run push    # push de mudanças de schema (dev only)
```

### Estrutura do Projeto

```
portfolio/
├── frontend/               # Frontend principal do portfólio (React + Vite)
├── backend/                # API server Express 5
├── lib/
│   ├── db/                 # Schema & config Drizzle ORM
│   ├── api-spec/           # Especificação OpenAPI
│   ├── api-client-react/   # Hooks React Query (gerados)
│   └── api-zod/            # Schemas de validação Zod (gerados)
└── scripts/                # Scripts utilitários
```

### Funcionalidades

- **UI HUD/Tactical** — Design system customizado com anéis animados, cantos com brackets, elementos brilhantes e efeitos de scanline
- **Seções Animadas** — Hero, About, Philosophy, Projects, Skills — todas com animações ao scroll via Framer Motion
- **Blog** — Páginas de artigos com renderização estilo markdown, tags e tempo de leitura
- **Responsivo** — Design mobile-first que funciona em todos os tamanhos de tela
- **Tema Escuro** — Modo escuro completo com tokens de cor semânticos

### Projetos em Destaque

| Projeto | Descrição | Stack |
|---------|-----------|-------|
| **CodeX** | Site HUD enterprise para captação de leads | React, TypeScript, Vite, TailwindCSS v4, Supabase, Framer Motion |
| **Escudo Consultoria** | Plataforma SST com formulários multi-etapas | React, Node.js, Express, PostgreSQL, Drizzle ORM, Zod |
| **CuidaMed** | Plataforma de assistência domiciliar fullstack | React 19, Node.js, Express, Vitest, TailwindCSS |

### Licença

MIT
