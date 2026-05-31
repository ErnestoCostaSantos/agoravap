# Belezza v1.1

Plataforma de atendimento para beleza & estética — perfil Clínica com equipe.

## Stack
- HTML5 + CSS3 + Vanilla JS (protótipo v1.1)
- Firebase (Firestore + Auth) — integração v1.2
- Deploy: Vercel via GitHub

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Configurar Firebase
cp .env.example .env
# Edite o .env com suas credenciais do Firebase Console

# 3. Rodar localmente
npm run dev
```

## Deploy (Vercel)
O deploy é automático a cada push na branch `main`.
Configure as variáveis de ambiente no painel da Vercel (Settings > Environment Variables).

## Estrutura
```
belezza/
├── index.html        # App principal (protótipo v1.1)
├── firebase.js       # Configuração Firebase
├── vite.config.js    # Build config
├── vercel.json       # Deploy config
├── .env.example      # Template de variáveis
├── .env              # Suas credenciais (NÃO commitar)
└── package.json
```

## Versões
- v1.1 — Protótipo interativo (clínica com equipe) ✅
- v1.2 — Integração Firebase real + autenticação 🔜
- v2.0 — Financeiro & Checkout 🔜
