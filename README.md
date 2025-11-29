# GammaLex Platform

A Next.js-based web application for GammaLex, a clinical-compliant AI platform designed to help healthcare providers navigate prior authorization, denial risk management, and compliance challenges.

## Project Overview

GammaLex is the first clinical-compliant AI built to defend care before it's denied—using source-backed intelligence to stop pre-auth delays and denials at the root. The platform provides:

- **Clinical-Compliant Intelligence**: AI-powered analysis of medical billing codes, coverage rules, and physician notes
- **Denial Risk Management**: Proactive identification of legal vulnerabilities before they become liability
- **Compliance Tools**: Built-in regulatory compliance features for healthcare providers
- **Data Source Transparency**: Clear visibility into the open datasets that inform AI models

## Technology Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety and development experience

### Styling & UI
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Phosphor React** - Additional icon set

### Backend & Email
- **Next.js API routes** - Serverless handlers for contact/waitlist flows
- **Resend** - Email service for notifications and auto-replies

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Setup and Installation

### Prerequisites
- **Node.js 18+** (recommended: latest LTS)
- **npm** or **pnpm** (project uses pnpm-lock.yaml)
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gammalex-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Email Service (Resend)
   RESEND_API_KEY=your_resend_api_key

   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-CGVXZJM6M0
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Usage

### Main Features

1. **Homepage Landing** (`app/page.tsx`)
   - Hero section with animated data sources
   - Product feature demonstrations
   - Waitlist signup functionality
   - Contact forms

2. **Pre-Auth Forms** (`app/preauth/page.tsx`)
   - Clinical-compliant assessment tools
   - Risk scoring and analysis
   - Compliance checking

3. **Contact System** (`app/contact/page.tsx`)
   - Contact form handler via Next.js API routes
   - Email notifications via Resend
   - Auto-reply system for legal/privacy inquiries

### Key Components

- **HeroDataSources** (`components/HeroDataSources.tsx`) - Animated data source ticker
- **CopilotHero** (`components/CopilotHero.tsx`) - Main hero section
- **JoinWaitlistModal** (`components/JoinWaitlistModal.tsx`) - Waitlist signup
- **ProductFeaturesDemo** (`components/ProductFeaturesDemo.tsx`) - Interactive demos

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend email service API key | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | No |

## Code Structure

```
gammalex-platform/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form handler
│   │   ├── inbound/              # Email auto-reply
│   │   └── join-waitlist/        # Waitlist signup
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── preauth/                  # Pre-auth tools
│   ├── contact/                  # Contact page
│   ├── privacy/                  # Privacy policy
│   └── terms/                    # Terms of service
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── HeroDataSources.tsx       # Data source ticker
│   ├── CopilotHero.tsx           # Main hero
│   ├── JoinWaitlistModal.tsx     # Waitlist modal
│   └── ProductFeaturesDemo.tsx   # Feature demos
├── lib/                          # Utility libraries
│   └── utils.ts                  # Helper functions
├── hooks/                        # Custom React hooks
├── public/                       # Static assets
│   ├── images/                   # Image files
│   └── animations/               # Lottie animations
└── types/                        # TypeScript type definitions
```

### Key Files

- **`components/HeroDataSources.tsx`** - Animated data source display with medical/legal datasets
- **`app/page.tsx`** - Main homepage with comprehensive feature showcase
- **`tailwind.config.ts`** - Custom design system with GammaLex brand colors

## Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Set environment variables in Vercel dashboard**
   - `RESEND_API_KEY`

3. **Build and deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Email service (Resend) configured
- [ ] Google Analytics tracking active
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Performance monitoring set up

## Dependencies

### Core Dependencies
- `next@15.2.4` - React framework
- `react@^19` - UI library
- `resend@^4.5.1` - Email service
- `framer-motion@latest` - Animations
- `tailwindcss@^3.4.17` - Styling

### UI Components
- `@radix-ui/*` - Accessible component primitives
- `lucide-react@^0.454.0` - Icons
- `phosphor-react@^1.4.1` - Additional icons
- `sonner@^1.7.1` - Toast notifications

### Development Dependencies
- `typescript@^5` - Type safety
- `@types/react@^19` - React types
- `postcss@^8` - CSS processing
- `tailwindcss-animate@^1.0.7` - Animation utilities

## Maintenance & Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   pnpm build
   ```

2. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   pnpm tsc --noEmit
   ```

3. **Styling Issues**
   ```bash
   # Rebuild TailwindCSS
   pnpm tailwindcss --watch
   ```

### Updating Dependencies

1. **Check for updates**
   ```bash
   pnpm outdated
   ```

2. **Update dependencies**
   ```bash
   pnpm update
   ```

3. **Test after updates**
   ```bash
   pnpm build
   pnpm dev
   ```

### Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with TailwindCSS
- Animations use Framer Motion for smooth performance
- API routes are optimized for serverless deployment

## Contact/Ownership

**Maintained by**: GammaLex Team  
**Contact**: gammalex@gammalex.com  
**Repository**: Private codebase  

For technical questions or deployment issues, contact the development team through the internal communication channels.

---

## Onboarding Checklist for New Developers

- [ ] Node.js 18+ installed
- [ ] Repository cloned locally
- [ ] Environment variables configured
- [ ] Dependencies installed (`pnpm install`)
- [ ] Development server running (`pnpm dev`)
- [ ] Resend API key provided
- [ ] Code editor configured (VS Code recommended)
- [ ] TypeScript and ESLint extensions installed
- [ ] TailwindCSS IntelliSense configured
- [ ] Git hooks configured (if applicable)
- [ ] Access to deployment platform (Vercel)
- [ ] Documentation reviewed
- [ ] First feature branch created and tested
