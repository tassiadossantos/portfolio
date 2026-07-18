# CuidaMed - Sistema Pragmático Futuro

---

## 🌐 English Version

### 📋 About the Project

CuidaMed is a modern platform for home clinical care, offering professional health care services from the comfort of your home. The system combines an interactive frontend with a robust backend to manage appointments, medical records, and communication with patients and families.

### 🚀 Key Features

#### Frontend (`/artifacts/cuidados-domiciliarios`)
- Professional landing page with responsive design
- Services section (home caregiver, hospital accompaniment, physiotherapy, nursing)
- Customer testimonials
- Contact and scheduling form
- Smooth animations with Framer Motion
- Modern UI components using Tailwind CSS and shadcn/ui

#### Backend (`/artifacts/api-server`)
- RESTful API with Express.js
- Structured logging middleware with Pino
- Health check routes
- Scalable structure for future features

### 🛠️ Technologies Used

#### Frontend
- **React 19** - Interface building library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable components
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vitest** - Test framework
- **React Testing Library** - Testing utilities for React

#### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Static typing
- **Pino** - High-performance logging
- **Esbuild** - Fast bundler
- **Vitest** - Test framework
- **Supertest** - HTTP testing library

#### Monorepo
- **pnpm** - Package manager with workspace support

### 🔧 Installation and Execution

#### Prerequisites
- Node.js 20+
- pnpm 10+

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Sistema-Pragmatico-Futuro
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   - **Backend**:
     ```bash
     pnpm --filter @workspace/api-server dev
     ```
   - **Frontend**:
     ```bash
     pnpm --filter @workspace/cuidados-domiciliarios dev
     ```

#### Access
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
  - Health check: http://localhost:8080/api/healthz

### 🧪 Testing

The project includes comprehensive test suites for both frontend and backend:

#### Running Tests
- **All tests**: `pnpm test:run`
- **Frontend only**: `cd artifacts/cuidados-domiciliarios && pnpm test:run`
- **Backend only**: `cd artifacts/api-server && pnpm test:run`

#### Test Technologies
- **Frontend**: Vitest + React Testing Library
- **Backend**: Vitest + Supertest

### 📁 Project Structure

```
Sistema-Pragmatico-Futuro/
├── artifacts/
│   ├── api-server/          # Backend server
│   │   └── src/
│   │       ├── lib/
│   │       ├── middlewares/
│   │       ├── routes/
│   │       └── __tests__/   # Test files
│   └── cuidados-domiciliarios/ # Frontend
│       └── src/
│           ├── components/ui/
│           ├── hooks/
│           ├── pages/
│           └── __tests__/   # Test files
├── lib/                     # Shared libraries
└── scripts/
```

### 🎯 Main Scripts

- `pnpm build`: Build all projects
- `pnpm typecheck`: Run type checking on the entire project
- `pnpm --filter <package> dev`: Start development mode for a specific package
- `pnpm test`: Run test suites in watch mode
- `pnpm test:run`: Run all test suites once (ideal for CI)

### 📜 License

MIT License - see the LICENSE file for details.

---

## 🇲🇽 Versión en Español Mexicano

### 📋 Sobre el Proyecto

CuidaMed es una plataforma moderna para la asistencia clínica domiciliaria, que ofrece servicios de atención médica profesionalizados en la comodidad del hogar. El sistema combina un frontend interactivo con un backend robusto para gestionar citas, registros médicos y comunicación con pacientes y familias.

### 🚀 Funcionalidades Principales

#### Frontend (`/artifacts/cuidados-domiciliarios`)
- Página de destino profesional con diseño responsivo
- Sección de servicios ofrecidos (cuidador en domicilio, acompañamiento hospitalario, fisioterapia, enfermería)
- Testimonios de clientes
- Formulario de contacto y agendamiento
- Animaciones suaves con Framer Motion
- Componentes UI modernos usando Tailwind CSS y shadcn/ui

#### Backend (`/artifacts/api-server`)
- API RESTful con Express.js
- Middlewares de registro estructurado con Pino
- Rutas de health check
- Estructura escalable para funcionalidades futuras

### �️ Tecnologías Utilizadas

#### Frontend
- **React 19** - Biblioteca para construcción de interfaces
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de compilación y servidor de desarrollo
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes reutilizables
- **Framer Motion** - Animaciones
- **Lucide React** - Íconos
- **Vitest** - Marco de pruebas
- **React Testing Library** - Utilidades de prueba para React

#### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **Pino** - Registro de alto rendimiento
- **Esbuild** - Compilador rápido
- **Vitest** - Marco de pruebas
- **Supertest** - Biblioteca de pruebas HTTP

#### Monorepo
- **pnpm** - Gestor de paquetes con soporte para workspaces

### 🔧 Instalación y Ejecución

#### Prerrequisitos
- Node.js 20+
- pnpm 10+

#### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Sistema-Pragmatico-Futuro
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   - **Backend**:
     ```bash
     pnpm --filter @workspace/api-server dev
     ```
   - **Frontend**:
     ```bash
     pnpm --filter @workspace/cuidados-domiciliarios dev
     ```

#### Acceso
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
  - Health check: http://localhost:8080/api/healthz

### 🧪 Pruebas

El proyecto incluye suites de pruebas completas para frontend y backend:

#### Ejecutando Pruebas
- **Todas las pruebas**: `pnpm test:run`
- **Solo frontend**: `cd artifacts/cuidados-domiciliarios && pnpm test:run`
- **Solo backend**: `cd artifacts/api-server && pnpm test:run`

#### Tecnologías de Prueba
- **Frontend**: Vitest + React Testing Library
- **Backend**: Vitest + Supertest

### 📁 Estructura del Proyecto

```
Sistema-Pragmatico-Futuro/
├── artifacts/
│   ├── api-server/          # Servidor backend
│   │   └── src/
│   │       ├── lib/
│   │       ├── middlewares/
│   │       ├── routes/
│   │       └── __tests__/   # Archivos de prueba
│   └── cuidados-domiciliarios/ # Frontend
│       └── src/
│           ├── components/ui/
│           ├── hooks/
│           ├── pages/
│           └── __tests__/   # Archivos de prueba
├── lib/                     # Bibliotecas compartidas
└── scripts/
```

### 🎯 Principales Scripts

- `pnpm build`: Compila todos los proyectos
- `pnpm typecheck`: Ejecuta verificación de tipos en todo el proyecto
- `pnpm --filter <paquete> dev`: Inicia modo de desarrollo para un paquete específico
- `pnpm test`: Ejecuta suites de prueba en modo watch
- `pnpm test:run`: Ejecuta todas las suites de prueba una vez (ideal para CI)

### 📜 Licencia

MIT License - vea el archivo LICENSE para más detalles.

---

## 🇧🇷 Versão em Português Brasileiro

### �📋 Sobre o Projeto

CuidaMed é uma plataforma moderna para assistência clínica domiciliar, oferecendo serviços de cuidados de saúde profissionalizados na comodidade do lar. O sistema combina um frontend interativo com um backend robusto para gerenciar atendimentos, registros médicos e comunicação com pacientes e famílias.

### 🚀 Funcionalidades Principais

#### Frontend (`/artifacts/cuidados-domiciliarios`)
- Página inicial profissional com design responsivo
- Seção de serviços oferecidos (cuidador domiciliar, acompanhamento hospitalar, fisioterapia, enfermagem)
- Depoimentos de clientes
- Formulário de contato e agendamento
- Animações suaves com Framer Motion
- Componentes UI modernos usando Tailwind CSS e shadcn/ui

#### Backend (`/artifacts/api-server`)
- API RESTful com Express.js
- Middlewares de logging estruturado com Pino
- Rotas de health check
- Estrutura escalável para funcionalidades futuras

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Ferramenta de build e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes reutilizáveis
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Vitest** - Framework de testes
- **React Testing Library** - Utilitários de teste para React

#### Backend
- **Node.js** - Ambiente de execução
- **Express.js** - Framework web
- **TypeScript** - Tipagem estática
- **Pino** - Logging de alta performance
- **Esbuild** - Bundler rápido
- **Vitest** - Framework de testes
- **Supertest** - Biblioteca de testes HTTP

#### Monorepo
- **pnpm** - Gerenciador de pacotes com suporte a workspaces

### 🔧 Instalação e Execução

#### Pré-requisitos
- Node.js 20+
- pnpm 10+

#### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositório>
   cd Sistema-Pragmatico-Futuro
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   - **Backend**:
     ```bash
     pnpm --filter @workspace/api-server dev
     ```
   - **Frontend**:
     ```bash
     pnpm --filter @workspace/cuidados-domiciliarios dev
     ```

#### Acesso
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
  - Health check: http://localhost:8080/api/healthz

### 🧪 Testes

O projeto inclui suites de testes completas para frontend e backend:

#### Executando Testes
- **Todos os testes**: `pnpm test:run`
- **Apenas frontend**: `cd artifacts/cuidados-domiciliarios && pnpm test:run`
- **Apenas backend**: `cd artifacts/api-server && pnpm test:run`

#### Tecnologias de Teste
- **Frontend**: Vitest + React Testing Library
- **Backend**: Vitest + Supertest

### 📁 Estrutura do Projeto

```
Sistema-Pragmatico-Futuro/
├── artifacts/
│   ├── api-server/          # Servidor backend
│   │   └── src/
│   │       ├── lib/
│   │       ├── middlewares/
│   │       ├── routes/
│   │       └── __tests__/   # Arquivos de teste
│   └── cuidados-domiciliarios/ # Frontend
│       └── src/
│           ├── components/ui/
│           ├── hooks/
│           ├── pages/
│           └── __tests__/   # Arquivos de teste
├── lib/                     # Bibliotecas compartilhadas
└── scripts/
```

### 🎯 Principais Scripts

- `pnpm build`: Compila todos os projetos
- `pnpm typecheck`: Executa verificação de tipos em todo o projeto
- `pnpm --filter <pacote> dev`: Inicia modo de desenvolvimento para um pacote específico
- `pnpm test`: Executa suites de testes em modo watch
- `pnpm test:run`: Executa todas as suites de testes uma vez (ideal para CI)

### 📜 Licença

MIT License - veja o arquivo LICENSE para mais detalhes.
