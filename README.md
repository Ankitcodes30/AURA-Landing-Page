# AURA Landing Page - AI Urban Response Assistant

A modern, professional landing page for AURA, an AI-powered emergency monitoring system designed for smart cities.

## 🚀 Features

- **Modern Design**: Stripe/Vercel/Linear-inspired aesthetic with dark theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered fade-in effects and hover animations
- **Glassmorphism UI**: Modern frosted glass effects throughout
- **Performance Optimized**: Fast loading with minimal dependencies

## 🛠️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **Custom Hooks** - Scroll animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- Background: `#0B0F19`
- Primary: `#6366F1` (Indigo)
- Secondary: `#22C55E` (Green)
- Gradients: Primary to Purple

### Typography
- Headings: **Space Grotesk**
- Body: **Inter**

## 📁 Project Structure

```
landing-page/
├── public/
│   └── dashboard-preview.png    # Dashboard screenshot
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Features.jsx         # Features grid
│   │   ├── HowItWorks.jsx       # Timeline section
│   │   ├── DashboardPreview.jsx # Dashboard showcase
│   │   ├── TechStack.jsx        # Tech badges & GitHub CTA
│   │   └── Footer.jsx           # Footer with links
│   ├── hooks/
│   │   └── useScrollAnimation.js # Scroll animation hook
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🖼️ Adding Dashboard Screenshot

Place your dashboard screenshot as `dashboard-preview.png` in the `public/` folder. The image will automatically display in the Dashboard Preview section.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Ankitcodes30/AURA.git](https://github.com/Ankitcodes30/AURA.git)
- **Developer**: Ankit Kumbhare

## 📝 Sections

1. **Hero** - Main headline with CTA buttons and floating dashboard preview
2. **Features** - 6 feature cards with glassmorphism design
3. **How It Works** - 3-step timeline with animations
4. **Dashboard Preview** - Large showcase with image
5. **Tech Stack** - Technology badges and GitHub CTA
6. **Footer** - Links, developer info, and copyright

## 🎯 Key Features

- ✅ Sticky navbar with blur effect on scroll
- ✅ Scroll-triggered animations
- ✅ Hover effects on all interactive elements
- ✅ Mobile-responsive hamburger menu
- ✅ Smooth scrolling to sections
- ✅ Professional gradient effects
- ✅ Button glow animations
- ✅ Glassmorphism cards

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  background: '#0B0F19',
  primary: '#6366F1',
  secondary: '#22C55E',
}
```

### Fonts
Edit `src/index.css` to change Google Fonts import.

## 📄 License

MIT License - Feel free to use for your projects!

## 👨‍💻 Developer

**Ankit Kumbhare**
- GitHub: [@Ankitcodes30](https://github.com/Ankitcodes30)
- Project: AURA - AI Urban Response Assistant

---

Built with ❤️ for smarter, safer cities.
