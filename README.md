# St. John's Training College Samburu — Website Launch Countdown

A beautiful countdown website built with **Next.js 15**, featuring:
- 🟢 Live countdown timer to launch date
- 🔍 Full SEO — Google schema, Open Graph, Twitter cards, keywords
- 🎨 Green & gold theme with animated particles and glowing effects
- 📱 Fully responsive (mobile-first)
- 📧 Email notification form
- 🖼️ Logo in `public/logo.png` (replace with official logo)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Customization

### 1. Replace the Logo
Drop your official logo at: `public/logo.png`

### 2. Change the Launch Date
Edit `app/page.tsx` line 6:
```ts
const LAUNCH_DATE = new Date('2025-09-01T08:00:00');
```

### 3. Update Contact Info
Edit `app/layout.tsx` and `app/page.tsx` for email, social links, address.

### 4. Deploy
Deploy easily on **Vercel** (recommended):
```bash
npx vercel
```
# st-johns-website-countdown
