---
name: scaffold-section
description: Scaffold a new landing page section component with the luxury theme applied. Pass the section name as the argument (e.g. /scaffold-section Gallery).
---

Create a new section component at `frontend/src/components/sections/$ARGUMENTS.tsx`.

Follow these rules:
1. Use `"use client"` only if the section needs hooks or interactivity; otherwise keep it a server component.
2. Wrap the section in a MUI `Box` with `component="section"` and an `id` matching the section name in kebab-case (for smooth-scroll anchors).
3. Apply alternating background colors using the luxury theme — check adjacent sections in `app/page.tsx` to pick the right background.
4. Use `SectionHeading` from `src/components/ui/SectionHeading.tsx` for the section title.
5. Add a Framer Motion `whileInView` entrance animation (`opacity: 0→1`, `y: 40→0`, `duration: 0.6`).
6. Export the component as a named export AND a default export.
7. After creating the file, import and add it to `app/page.tsx` in the correct position.

Do NOT add placeholder lorem ipsum text — use realistic salon-relevant copy.
