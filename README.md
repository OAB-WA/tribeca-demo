# Plumfix - Next.js Migration

This is a Next.js migration of the original HTML/CSS/JS website, preserving 100% visual styling.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
tribeca-demo/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── blog/              # Blog listing & dynamic posts
│   ├── contact/           # Contact page
│   ├── team/              # Team page
│   ├── price/             # Pricing page
│   ├── faq/               # FAQ page
│   ├── error/             # 404 error page
│   ├── search/            # Search results
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with forms
│   ├── Loader.tsx         # Page loader
│   └── QuoteForm.tsx      # Quote request form
├── public/                # Static assets
│   ├── img/              # Images
│   ├── js/               # JavaScript files
│   ├── css/              # CSS files
│   └── webfonts/         # Font files
└── css/                  # Original CSS (preserved)
```

## ✨ Features

- ✅ All pages migrated to Next.js App Router
- ✅ Visual styling preserved 100% identically
- ✅ Forms converted to React Hook Form
- ✅ SEO metadata configured
- ✅ Dynamic blog post routes
- ✅ Search functionality
- ✅ All animations and interactions preserved

## 📝 Notes

- Original HTML files preserved in root directory
- All CSS classes and IDs maintained exactly
- Scripts loaded in correct order via Next.js Script component
- Images optimized via Next.js Image component (can be disabled if needed)

## 🚢 Deployment

The site is configured for Vercel deployment. Simply push to your repository and connect to Vercel.
