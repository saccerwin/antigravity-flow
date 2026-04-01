---
name: frontend-aceternity
description: Aceternity UI component usage and animation patterns. This skill helps identify, install, and customize high-fidelity components from Aceternity UI, including hero effects, 3D cards, and animated backgrounds.
---

# Aceternity UI

## When to Use
- Hero sections with spotlight/aurora effects
- 3D card hover effects
- Text reveal animations
- Animated backgrounds (beams, stars, meteors)
- User asks for "cool effects", "wow factor"

## When NOT to Use
- Basic UI components → shadcn/ui
- SaaS stats/marquees → Magic UI
- State-driven animations → Rive

## Process
IDENTIFY → INSTALL → CUSTOMIZE
1. Identify effect type needed
2. Install: npx aceternity-ui@latest add [component]
3. Customize colors/timing

```bash
npx aceternity-ui@latest add [component]
```

## Dependencies
```bash
npm install framer-motion clsx tailwind-merge
```

## Component Categories
- **Backgrounds:** spotlight, aurora-background, background-beams, wavy-background, meteors, sparkles
- **Cards:** 3d-card, evervault-card, focus-cards, infinite-moving-cards, wobble-card
- **Text:** text-generate-effect, flip-words, typewriter-effect, hero-highlight
- **Navigation:** floating-navbar, floating-dock, navbar-menu
- **Special:** lamp, tracing-beam, parallax-scroll, globe, timeline
- **Buttons:** moving-border, hover-border-gradient

## Decision Tree
Need dramatic effect?
├─ Hero background → spotlight, aurora-background, background-beams
├─ Feature cards → 3d-card, focus-cards
├─ Testimonials → infinite-moving-cards
├─ Headlines → text-generate-effect, flip-words
└─ Section divider → lamp, tracing-beam

## Quick Patterns

### Spotlight Hero
```tsx
<div className="relative h-screen bg-black">
  <Spotlight className="absolute top-0 left-0" fill="white" />
  <div className="relative z-10">
    <h1>Content</h1>
  </div>
</div>
```

### 3D Card
```tsx
<CardContainer>
  <CardBody className="bg-gray-50 rounded-xl p-6">
    <CardItem translateZ="50">Title</CardItem>
    <CardItem translateZ="100"><img src="..." /></CardItem>
  </CardBody>
</CardContainer>
```

### Flip Words
```tsx
<h1>Build <FlipWords words={["faster", "better", "smarter"]} /> apps</h1>
```

## SSR & Hydration
- **ALL components require 'use client'**
- **Heavy components:** dynamic import
```tsx
import dynamic from 'next/dynamic'
const Globe = dynamic(() => import('@/components/ui/globe'), { ssr: false })
```
- **Hydration fix pattern**
```tsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

## Performance Tips
- **Reduce particles on mobile:** `const count = isMobile ? 20 : 100`
- **Respect reduced motion:** `window.matchMedia('(prefers-reduced-motion: reduce)').matches`
