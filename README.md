# NeoFi - Next-Gen Wealth & Crypto OS

NeoFi is an ultra-premium, production-ready frontend interface for high-net-worth portfolio management. Built with a focus on cutting-edge spatial UI, glassmorphism, and fluid animations.

## Tech Stack
* **Framework:** React + Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Custom CSS Variables
* **Animation:** Framer Motion + Lenis (Smooth Scroll)
* **State Management:** Zustand
* **Icons:** Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Architecture Notes
* Global state is isolated in `/store`.
* UI components are built mobile-first and utilize `backdrop-blur` heavily. Ensure you test performance on lower-end devices.
