---
name: setup-project
description: Bootstrap the full monorepo from scratch — scaffold both frontend and backend, install dependencies, and wire them together ready for development.
---

Bootstrap the salon monorepo. The project root is the current directory.

## Step 1 — Frontend
```bash
cd frontend
npx create-next-app@latest . --typescript --app --tailwind=false --eslint --src-dir --import-alias "@/*"
npm install @mui/material @mui/x-date-pickers @emotion/react @emotion/styled framer-motion react-hook-form @hookform/resolvers zod qrcode.react
npm install --save-dev @types/qrcode.react
```

Create the following directory structure under `frontend/src/`:
- `theme/` (index.ts, palette.ts, typography.ts, components.ts)
- `components/sections/` (Hero, Services, Pricing, Gallery, AboutUs, Testimonials, Booking, Contact)
- `components/ui/` (GoldButton, OutlinedGoldButton, SectionHeading, GoldDivider, WhatsAppButton, WhatsAppQR)
- `config/` (contact.ts, services.ts)
- `lib/` (api.ts)
- `hooks/` (useScrollAnimation.ts, useAppointmentForm.ts)

## Step 2 — Backend
```bash
npm i -g @nestjs/cli
nest new backend --package-manager npm
cd backend
npm install @nestjs/mongoose mongoose @nestjs/config class-validator class-transformer @nestjs/swagger
nest g module appointments
nest g controller appointments
nest g service appointments
```

## Step 3 — Environment files
Create `backend/.env` and `backend/.env.example` with the variables from CLAUDE.md.
Create `frontend/.env.local` and `frontend/.env.local.example` with the variables from CLAUDE.md.

## Step 4 — Wire up
- In `backend/src/main.ts`: enable `ValidationPipe` globally, configure CORS for `FRONTEND_URL`
- In `frontend/src/app/layout.tsx`: wrap children with MUI `ThemeProvider` and `CssBaseline`
- In `frontend/src/app/page.tsx`: import and render all section components in order

After scaffolding, run `npm run dev` in both directories and confirm no errors.
