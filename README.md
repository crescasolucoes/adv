# Almeida & Rocha Advocacia

Website institucional completo para escritório de advocacia premium, com design moderno, foco em conversão e experiência profissional.

## 🎯 Características

- ✅ **6 páginas completas** (Home, Sobre, Áreas, Equipe, Conteúdos, Contato)
- ✅ **Design premium** com tema escuro (#0F1115) e acentos dourados (#C9A227)
- ✅ **100% responsivo** (mobile, tablet, desktop)
- ✅ **Integração WhatsApp** em todos os CTAs
- ✅ **Formulário de contato** com validação
- ✅ **Animações suaves** com Framer Motion
- ✅ **SEO otimizado** com meta tags completas
- ✅ **Acessibilidade** (WCAG AA)
- ✅ **Copy profissional** em português brasileiro

## 🚀 Como Usar

### Instalação

```bash
cd /home/jonorusc/projects/advogacia
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## ⚙️ Configuração

### 1. Atualizar Informações de Contato

Edite `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  contact: {
    phone: "(11) 99999-9999",        // Seu telefone
    email: "contato@seusite.com.br", // Seu e-mail
    whatsapp: "5511999999999",       // Seu WhatsApp (IMPORTANTE!)
    address: {
      street: "Seu endereço completo",
      city: "Sua Cidade",
      state: "UF",
      zip: "00000-000",
    },
  },
  // ...
};
```

### 2. Personalizar Conteúdo

- **Áreas de Atuação:** Edite `PRACTICE_AREAS` em `lib/constants.ts`
- **FAQ:** Edite `FAQ_ITEMS` em `lib/constants.ts`
- **Depoimentos:** Edite `TESTIMONIALS` em `lib/constants.ts`
- **Equipe:** Edite o array `team` em `app/equipe/page.tsx`

## 📁 Estrutura do Projeto

```
advogacia/
├── app/                    # Páginas Next.js
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Home
│   ├── sobre/             # Página Sobre
│   ├── areas/             # Áreas de Atuação
│   ├── equipe/            # Equipe
│   ├── conteudos/         # Blog
│   ├── contato/           # Contato
│   └── obrigado/          # Thank You
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── home/             # Seções da Home
│   └── ui/               # Componentes UI
├── lib/                  # Utilitários
│   ├── utils.ts         # Funções helper
│   └── constants.ts     # Constantes do site
└── tailwind.config.ts   # Configuração Tailwind
```

## 🎨 Design System

### Cores

```css
Background:  #0F1115  /* Preto/azul escuro */
Foreground:  #EDEDED  /* Cinza claro */
Accent:      #C9A227  /* Dourado premium */
Muted:       #64748B  /* Cinza médio */
```

### Tipografia

- **Títulos:** EB Garamond (Serifada, elegante)
- **Corpo:** Lato (Sans-serif, profissional)

## 📱 Páginas

1. **Home (/)** - Landing page completa com todas as seções
2. **Sobre (/sobre)** - História, valores e diferenciais
3. **Áreas (/areas)** - Detalhamento das 6 áreas de atuação
4. **Equipe (/equipe)** - Perfis dos advogados
5. **Conteúdos (/conteudos)** - Blog/artigos
6. **Contato (/contato)** - Formulário e informações
7. **Obrigado (/obrigado)** - Confirmação de envio

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Hook Form** - Formulários
- **Zod** - Validação

## 📝 Licença

Projeto desenvolvido para Almeida & Rocha Advocacia.

## 🆘 Suporte

Para dúvidas ou customizações, consulte a documentação completa em `walkthrough.md`.
