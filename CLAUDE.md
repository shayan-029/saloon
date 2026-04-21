# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Premium luxury salon web application — SPA landing page + appointment booking system.

- **Frontend**: Next.js 14 (App Router) + TypeScript + Material UI (MUI v5)
- **Backend**: NestJS + MongoDB (Mongoose)
- **Design language**: High-end luxury — Black (`#0A0A0A`) + Gold (`#C9A84C`) + White (`#FAFAFA`)

Monorepo structure:
```
salon/
  frontend/   # Next.js app
  backend/    # NestJS app
```

---

## Frontend

### Stack
- Next.js 14 App Router (`app/` directory, server/client components)
- TypeScript strict mode
- MUI v5 with a custom luxury theme (see `frontend/src/theme/`)
- Framer Motion for scroll/entrance animations

### Dev commands
```bash
cd frontend
npm install
npm run dev        # localhost:3000
npm run build
npm run lint
npm run type-check # tsc --noEmit
```

### Architecture
- `app/page.tsx` — root SPA page; imports and composes all section components top-to-bottom
- `app/layout.tsx` — wraps with `ThemeProvider`, global fonts, and `<Analytics />`
- `src/components/sections/` — one component per landing section (Hero, Services, Pricing, Gallery, AboutUs, Testimonials, Contact)
- `src/components/ui/` — reusable primitives (GoldButton, SectionHeading, etc.)
- `src/theme/` — MUI theme override; palette, typography, and component defaults all defined here
- `src/hooks/` — custom hooks (e.g., `useScrollAnimation`, `useAppointmentForm`)
- `src/lib/api.ts` — typed fetch wrappers for backend calls

### Key design rules
- The luxury color palette must be applied via the MUI theme, never hard-coded in components.
- All section components accept no required props — data is co-located or fetched via server components.
- Images come from Unsplash/Pexels (use `next/image` with `priority` on the Hero image).
- Mobile-first: MUI `sx` breakpoints start from `xs`.

---

## Backend

### Stack
- NestJS with TypeScript
- Mongoose for MongoDB
- Class-validator + class-transformer for DTO validation

### Dev commands
```bash
cd backend
npm install
npm run start:dev   # localhost:3001, watch mode
npm run build
npm run lint
npm run test        # unit tests (Jest)
npm run test:e2e
```

### Architecture
- `src/appointments/` — single NestJS module covering the booking feature
  - `appointments.controller.ts` — route handlers
  - `appointments.service.ts` — business logic
  - `appointments.schema.ts` — Mongoose schema
  - `dto/create-appointment.dto.ts` — validated DTO
- `src/main.ts` — bootstraps app, enables CORS for frontend origin, sets global validation pipe
- Environment variables live in `.env` (never committed); see `.env.example`

### API surface
| Method | Path | Description |
|--------|------|-------------|
| POST | `/appointments` | Create booking |
| GET | `/appointments` | List all bookings |
| DELETE | `/appointments/:id` | Remove booking |

### MongoDB schema
```ts
{ name, phone, email, service, date: Date, time, message, createdAt: Date }
```

---

## WhatsApp Integration

- Floating button (bottom-right, always visible) links to `https://wa.me/<number>?text=<pre-filled message>`
- QR code generated client-side with `qrcode.react` pointing to the same URL
- Phone number and pre-filled message stored in `frontend/src/config/contact.ts`

---

## Environment Variables

**Backend** (`.env`):
```
MONGODB_URI=mongodb://localhost:27017/salon
PORT=3001
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`.env.local`):
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=92XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi, I want to book an appointment
```
