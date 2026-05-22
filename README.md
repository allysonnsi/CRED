
# CRED MAIS

## Instalação

```bash
npm install
cp .env.example .env
npm run dev
```

## Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

## Deploy Vercel

Adicionar variáveis:
- DATABASE_URL
- JWT_SECRET
