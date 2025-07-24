# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 single-page application for CavOS (智能机器人云边协同操作系统) - an intelligent robot cloud-edge collaborative operating system. It's a modern, animated landing page showcasing industrial control system features with a sophisticated tech-themed design in Chinese.

## Key Technologies

- Vue 3 (Composition API)
- Vite build tool  
- CSS3 with advanced tech animations and gradients
- Responsive design optimized for all device sizes
- Chinese language content with technical terminology

## Project Structure

```
src/
├── App.vue           # Main SPA component with all page sections
├── main.js           # Vue application entry point
└── styles/
    └── global.css    # Global styles, animations, and design system
```

## Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Vite dev server runs on localhost (no specific port configured, defaults to 3000)

### Build Production Version
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Architecture Notes

1. **Single File Component Architecture**: The entire application is contained in App.vue with template, script (Composition API), and scoped styles - approximately 1000+ lines implementing a complete product landing page.

2. **Reactive Data System**: All content (features, technical specs, company stats, architecture layers) is managed as reactive data arrays in the Vue setup() function, making content updates straightforward.

3. **Advanced Animation System**: Comprehensive CSS animation framework with:
   - `@keyframes fadeInUp`, `slideInLeft`, `glowPulse` for entrance effects
   - `techScan` for scanning line effects across cards
   - `particleFloat` for floating particle backgrounds
   - `dataFlow` for animated data flow indicators
   - Rotation animations for hero section tech circles

4. **Design System**: CSS custom properties define the complete color palette:
   - Primary colors: `--primary-color: #1B365D`, `--secondary-color: #2E5C8A`
   - Accent colors: `--accent-color: #4A90C2`, `--orange-accent: #FF8B35`
   - Gradients for backgrounds and tech effects
   - Consistent spacing and typography scales

5. **Intersection Observer Integration**: Custom animation system using Intersection Observer API to trigger fade-in animations when elements enter viewport, plus animated number counters for company statistics.

6. **Responsive Grid System**: Flexible grid layouts using CSS Grid with responsive breakpoints for mobile, tablet, and desktop views.

## Content Structure

The application presents CavOS product information in these main sections:
- Hero section with animated tech circles
- Core features (6 modules: 智能控制中心, 设备管理平台, 模型服务中心, etc.)
- Technical architecture (5-layer system architecture)
- Intelligence levels (L0-L5 classification system)
- Product advantages with metrics
- Technical specifications
- Company information (智昌科技集团)
- Contact information

## Key CSS Classes for Effects

- `.glow-text` - Pulsing text glow effects using `glowPulse` animation
- `.tech-scan` - Scanning line effects with gradient overlays
- `.particle-bg` - Animated particle backgrounds with radial gradients
- `.data-flow` - Flowing data indicators with diamond symbols
- `.fade-in` - Entrance animations triggered by Intersection Observer
- `.tech-border` - Interactive borders with gradient hover effects

## Common Development Tasks

1. **Adding new core features**: Add objects to the `coreFeatures` ref array in App.vue setup()
2. **Updating technical specifications**: Modify the `techSpecs` ref array with new categories/items
3. **Adjusting architecture layers**: Update `architectureLayers` ref array for system architecture
4. **Changing brand colors**: Modify CSS custom properties in global.css `:root` section
5. **Modifying animations**: Update `@keyframes` definitions and animation durations in global.css
6. **Adding new page sections**: Insert new HTML sections in App.vue template with corresponding data refs