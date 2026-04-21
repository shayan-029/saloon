# 💇‍♀️ Salon Web Application (SPA) Requirements

## 📌 Project Overview
Build a modern, premium Salon Website as a Single Page Application (SPA) using:
- Frontend: Next.js (App Router) + TypeScript + Material UI (MUI)
- Backend: NestJS + MongoDB (Mongoose)
- Design: High-end luxury salon style (Black + Gold + White theme)

The website should function as a **sales landing page + appointment booking system**.

---

## 🎯 Goals
- Create a visually attractive salon website
- Allow users to book appointments online
- Provide WhatsApp-based communication via QR code
- Showcase services, pricing, and portfolio
- Optimize for mobile-first experience

---

## 🧩 Core Features

### 1. Landing Page (SPA Sections)

#### 1.1 Hero Section
- Full-screen banner with high-quality (4K/8K) salon/model images
- Headline + CTA ("Book Appointment")
- Smooth scroll animation

#### 1.2 Services Section
- List of services:
  - Haircut & Styling
  - Makeup
  - Facial & Skincare
  - Spa & Massage
- Each service includes:
  - Image
  - Description
  - Price (optional)

👉 Inspired by common salon offerings like hair, skincare, and makeup services :contentReference[oaicite:1]{index=1}

---

#### 1.3 Pricing Section
- Cards or table layout
- Packages (Basic / Premium / Bridal)
- CTA button

---

#### 1.4 Portfolio / Gallery
- High-quality real images (Unsplash/Pexels)
- Before/After transformations
- Grid layout with hover effects

---

#### 1.5 About Us
- Salon introduction
- Experience stats (e.g., years, clients)
- Team highlights

---

#### 1.6 Testimonials
- Customer reviews
- Rating system (stars)
- Carousel slider

---

#### 1.7 Contact Section
- Contact form
- Google Map embed (optional)
- Phone / Email

---

## 📅 2. Appointment Booking System

### Features:
- Form Fields:
  - Name
  - Phone
  - Email
  - Service
  - Date
  - Time
  - Message

- Validation:
  - Required fields
  - Email format
  - Phone format

- Backend:
  - Store data in MongoDB
  - API: POST /appointments

👉 Inspired by online booking systems used in salon platforms :contentReference[oaicite:2]{index=2}

---

## 💬 3. WhatsApp Integration

### Features:
- Floating WhatsApp button
- WhatsApp QR Code:
  - Scan → opens WhatsApp chat
  - Pre-filled message like:
    "Hi, I want to book an appointment"

- Click-to-chat link:



---

## ⚙️ 4. Backend (NestJS APIs)

### Modules:
- Appointment Module

### APIs:
- POST /appointments → Create booking
- GET /appointments → List bookings
- DELETE /appointments → Remove booking (optional)

### Database:
- MongoDB Schema:
```ts
{
  name: string,
  phone: string,
  email: string,
  service: string,
  date: Date,
  time: string,
  message: string,
  createdAt: Date
}