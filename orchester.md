# Salon Project Orchestration

Master build plan for the luxury salon SPA. Follow phases in order. Each phase maps to one or more agents and commands.

---

## Phase 1 — Backend Scaffold

**Agent**: `backend-dev`
**Output**: Working NestJS app at `backend/` connected to MongoDB

### Steps
1. `nest new backend --package-manager npm`
2. Install packages:
   ```bash
   cd backend
   npm install @nestjs/mongoose mongoose @nestjs/config class-validator class-transformer @nestjs/swagger
   ```
3. Generate appointments module:
   ```bash
   nest g module appointments
   nest g controller appointments --no-spec
   nest g service appointments --no-spec
   ```
4. Create files:
   - `src/appointments/appointments.schema.ts` — Mongoose schema + timestamps
   - `src/appointments/dto/create-appointment.dto.ts` — class-validator DTO
   - `src/appointments/enums/service-type.enum.ts` — ServiceType enum
5. Wire `main.ts`:
   - `app.useGlobalPipes(new ValidationPipe({ whitelist: true }))`
   - `app.enableCors({ origin: configService.get('FRONTEND_URL') })`
   - `SwaggerModule.setup('api', app, document)`
6. Create `.env` + `.env.example`

**Done when**: `npm run start:dev` runs without errors and `POST /appointments` returns 201.

---

## Phase 2 — Frontend Scaffold

**Agent**: `frontend-dev`
**Output**: Working Next.js 14 app at `frontend/` with MUI and required dependencies

### Steps
1. ```bash
   npx create-next-app@latest frontend --typescript --app --eslint --src-dir --import-alias "@/*" --no-tailwind
   ```
2. Install packages:
   ```bash
   cd frontend
   npm install @mui/material @mui/x-date-pickers @emotion/react @emotion/styled framer-motion react-hook-form @hookform/resolvers zod qrcode.react dayjs
   npm install --save-dev @types/node
   ```
3. Create directory structure:
   ```
   src/
     theme/           (index.ts, palette.ts, typography.ts, components.ts)
     components/
       sections/      (Hero, Services, Pricing, Gallery, AboutUs, Testimonials, Booking, Contact)
       ui/            (GoldButton, OutlinedGoldButton, SectionHeading, GoldDivider, WhatsAppButton, WhatsAppQR)
     config/          (contact.ts, services.ts)
     lib/             (api.ts)
     hooks/           (useScrollAnimation.ts, useAppointmentForm.ts)
   ```
4. Create `.env.local` + `.env.local.example`

**Done when**: `npm run dev` runs without errors and `localhost:3000` loads.

---

## Phase 3 — Design System

**Agent**: `design-system`
**Output**: Full MUI luxury theme wired into the app

### Tokens
| Token | Value |
|-------|-------|
| `palette.background.default` | `#0A0A0A` |
| `palette.primary.main` | `#C9A84C` (Gold) |
| `palette.primary.light` | `#E8C97A` |
| `palette.text.primary` | `#FAFAFA` |
| `palette.text.secondary` | `rgba(250,250,250,0.6)` |

### Files to create
- `src/theme/palette.ts`
- `src/theme/typography.ts` — Cormorant Garamond (display) + Raleway (body)
- `src/theme/components.ts` — Button, Card, TextField, AppBar overrides
- `src/theme/index.ts` — merges all, exports `luxuryTheme`
- `src/app/layout.tsx` — wraps with `ThemeProvider` + `CssBaseline`, loads fonts via `next/font/google`

### Reusable UI primitives to create
- `GoldButton` — filled, gold bg, black text
- `OutlinedGoldButton` — outlined, transparent bg, gold text
- `SectionHeading` — serif, gold underline bar
- `GoldDivider` — 1px gold horizontal rule
- `WhatsAppButton` — fixed bottom-right FAB
- `WhatsAppQR` — QR code image via `qrcode.react`

**Done when**: `app/page.tsx` renders with dark background and gold accents visible.

---

## Phase 4 — Landing Page Sections

**Agent**: `frontend-dev`
**Command**: `/scaffold-section <name>` per section

### Section order in `app/page.tsx`
| # | Component | Background |
|---|-----------|------------|
| 1 | `Hero` | Full-bleed image |
| 2 | `Services` | `#0A0A0A` |
| 3 | `Pricing` | `#111111` |
| 4 | `Gallery` | `#0A0A0A` |
| 5 | `AboutUs` | `#111111` |
| 6 | `Testimonials` | `#0A0A0A` |
| 7 | `Booking` | `#111111` |
| 8 | `Contact` | `#0A0A0A` |

### Hero section requirements
- Full-viewport-height (`100vh`)
- Background image via `next/image` with `fill` + `priority`
- Dark overlay (`rgba(0,0,0,0.55)`)
- Centered headline + sub-headline + `GoldButton` CTA → scrolls to `#booking`
- Smooth scroll via CSS `scroll-behavior: smooth` on `<html>`

### Services section requirements
- 4 cards: Haircut & Styling, Makeup, Facial & Skincare, Spa & Massage
- Each card: Unsplash image, title, short description, optional price chip
- MUI `Grid` 2-col (mobile) → 4-col (desktop)

### Pricing section requirements
- 3 packages: Basic, Premium, Bridal
- MUI `Card` with gold border on the featured (Premium) card
- Price, bullet list of inclusions, `GoldButton` CTA

### Gallery section requirements
- 6–9 images in a `Masonry`-style grid
- Hover: scale + gold overlay + "View" icon

### About Us section requirements
- Left: paragraph about the salon
- Right: 3 animated counters (years, clients, awards)
- Below: team member cards (name, role, avatar)

### Testimonials section requirements
- `Swiper.js` or MUI-based carousel
- Each slide: stars, quote, customer name + avatar

### Contact section requirements
- Left: address, phone, email, `WhatsAppQR`
- Right: contact form (name, email, message) — sends to a separate `POST /contact` or uses mailto fallback
- Optional: Google Maps embed iframe

**Done when**: All 8 sections render, scroll anchors work, and animations fire on scroll.

---

## Phase 5 — Appointment Booking System

**Agent**: `booking-system`
**Output**: End-to-end booking — form → API → MongoDB

### Frontend form fields
`Name` | `Phone` | `Email` | `Service (dropdown)` | `Date (DatePicker)` | `Time (select)` | `Message (optional)`

### Validation (zod schema)
```ts
z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/),
  email: z.string().email(),
  service: z.nativeEnum(ServiceType),
  date: z.string(),  // ISO date string
  time: z.string().min(1),
  message: z.string().optional(),
})
```

### API call
`POST /appointments` via `src/lib/api.ts` → show success `Dialog` with WhatsApp CTA on 201.

**Done when**: Form submits successfully, data appears in MongoDB, success dialog renders.

---

## Phase 6 — WhatsApp Integration

**Agent**: `booking-system`
**Output**: Floating button + QR code, both pointing to configured WhatsApp link

- `WhatsAppButton` fixed bottom-right, visible on all sections
- `WhatsAppQR` rendered inside Contact section
- Both read from `src/config/contact.ts` which reads `NEXT_PUBLIC_WHATSAPP_*` env vars

**Done when**: Clicking the floating button opens WhatsApp with the pre-filled message.

---

## Phase 7 — Integration & Validation

**Command**: `/check-theme`
**Output**: Zero theme violations, working full build

### Checklist
- [ ] `npm run type-check` passes in `frontend/`
- [ ] `npm run lint` passes in both `frontend/` and `backend/`
- [ ] `npm run build` succeeds in `frontend/`
- [ ] `npm run build` succeeds in `backend/`
- [ ] All 8 sections visible on mobile viewport (375px)
- [ ] Booking form submits and saves to MongoDB
- [ ] WhatsApp button visible and functional
- [ ] `/check-theme` reports zero violations

---

## Agent ↔ Phase Map

| Phase | Primary Agent | Secondary |
|-------|--------------|-----------|
| 1 — Backend | `backend-dev` | — |
| 2 — Frontend scaffold | `frontend-dev` | — |
| 3 — Design system | `design-system` | `frontend-dev` |
| 4 — Sections | `frontend-dev` | `design-system` |
| 5 — Booking | `booking-system` | `backend-dev` |
| 6 — WhatsApp | `booking-system` | `frontend-dev` |
| 7 — Validation | all | `/check-theme` |
