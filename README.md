# MyJournal - Landing Page

A modern, premium landing page for MyJournal, a private journaling and mood tracking app. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design** - Minimal, elegant interface inspired by premium SaaS startups
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Dark Mode Support** - Seamless light/dark theme switching
- **Animations** - Smooth Framer Motion animations throughout
- **SEO Optimized** - Complete metadata, Open Graph tags, and semantic HTML
- **Performance** - Optimized for Core Web Vitals and Lighthouse scores
- **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **TypeScript** - Full type safety for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd myjournal
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
myjournal/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/
│   ├── navigation.tsx          # Sticky navbar with dark mode toggle
│   ├── footer.tsx              # Footer with links
│   ├── theme-provider.tsx      # Next themes provider
│   └── sections/               # Page sections
│       ├── hero.tsx            # Hero section with CTA
│       ├── features.tsx        # Features showcase
│       ├── screenshots.tsx     # App screenshots carousel
│       ├── benefits.tsx        # Benefits section
│       ├── testimonials.tsx    # User testimonials
│       ├── faq.tsx            # FAQ accordion
│       └── final-cta.tsx      # Final call-to-action
├── lib/                        # Utility functions
├── public/                     # Static assets
├── styles/                     # Additional styles
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Project dependencies

```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Accessible components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Form handling
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation

## 📱 Sections

### 1. **Hero Section**

- Large compelling headline and subheading
- Call-to-action buttons (Download & Watch Demo)
- Animated phone mockup with floating effect
- Trust badges (users, rating, privacy)

### 2. **Features Section**

- 6 feature cards with icons and descriptions
- Hover animations
- Statistics showcase

### 3. **Screenshots Section**

- Interactive screenshot carousel
- Phone mockups with detailed view
- Smooth transitions and hover effects

### 4. **Benefits Section**

- 4 main benefits with emotional copy
- Icon animations
- Testimonial quote

### 5. **Testimonials Section**

- 6 user testimonial cards
- Star ratings and verification badges
- Statistics about app ratings

### 6. **FAQ Section**

- Accordion-style questions and answers
- Smooth expand/collapse animations
- Contact support CTA

### 7. **Final CTA Section**

- Bold call-to-action with gradient background
- Download button links
- Newsletter subscription form
- App store badges

### 8. **Footer**

- Brand information
- Product, company, and legal links
- Social media links
- Copyright information

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },    // Main brand color (currently blue)
  accent: { ... },     // Accent color (currently purple)
}
```

### Content

- Update copy and text in each component file
- Add real images/screenshots in the `public/` folder
- Update social media and download links

### Fonts

The project uses Inter font from Google Fonts. Change in `app/layout.tsx` or `tailwind.config.ts`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

The project is built for standard Node.js hosting:

```bash
npm run build
npm run start
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging
- **Lazy Loading**: Components lazy load with IntersectionObserver
- **Caching**: Optimized cache headers in `next.config.ts`

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states on all interactive elements

## 🔒 SEO

- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- Sitemap and robots.txt ready
- Canonical URLs
- Structured data markup ready

## 🐛 Troubleshooting

### Dev Server Issues

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Build Errors

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint:fix
```

### Styling Issues

- Clear cache: `rm -rf .next`
- Restart dev server
- Check Tailwind CSS configuration

## 📝 Environment Variables

Currently not required for basic setup. If adding API integrations, create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary to MyJournal. All rights reserved.

## 📧 Support

For questions or issues:

- Email: hello@myjournal.app
- Website: https://myjournal.app

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ for the journaling community.
