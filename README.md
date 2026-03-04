# Erawan Global Pte Ltd - Company Website

A modern, professional React website showcasing Erawan Global's timber trading and commodity trading services.

## Features

- 🎨 Modern, sleek design with smooth animations
- ✨ Framer Motion animations for scroll effects, hovers, and interactions
- 📱 Fully responsive design
- 🌍 Showcases global reach and focus regions
- 💬 Floating WhatsApp button for instant contact
- 📧 Contact forms for inquiries
- 🚀 Fast and optimized with Vite

## Tech Stack

- React 18
- Vite
- Framer Motion
- CSS3 with modern features

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Services.jsx        # Services showcase
│   ├── Countries.jsx      # Global reach section
│   ├── Contact.jsx         # Contact form
│   ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Customization

### WhatsApp Number

Update your WhatsApp number in:
- `src/components/WhatsAppButton.jsx` (line 7)
- Format: country code + number (no + or spaces)
- Example: `6512345678` for Singapore (+65 1234 5678)

### Contact Email

Update the email addresses in:
- `src/components/Contact.jsx` (line with `mailto:info@erawanglobal.com`)

### Colors

Main color scheme is defined in `src/index.css`:
- Primary: `#1a472a` (dark green)
- Accent: `#d4af37` (gold)

## Notes

- Contact forms currently use `mailto:` links. For production, integrate with a backend service or email API.
- All animations are optimized for performance.
- The site is designed to be impressive and professional for trade shows like Gulfood.

