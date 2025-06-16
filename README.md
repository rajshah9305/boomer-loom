# Loom Evolution Canvas

A modern React canvas application built with TypeScript, Vite, and Tailwind CSS. This project features a responsive design system with shadcn/ui components and custom animations.

## 🚀 Features

- **Modern React 18** with TypeScript support
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library
- **React Router** for navigation
- **React Hook Form** with Zod validation
- **Lucide Icons** for beautiful iconography
- **Custom animations** and transitions
- **Responsive design** with mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd loom-evolution-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   bun install
   ```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
loom-evolution-canvas/
├── public/
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── main.tsx
├── components.json
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 🎨 Styling

This project uses Tailwind CSS with custom theme extensions:

- **Custom colors**: Loom-specific color palette
- **Animations**: Fade-in, slide-up, float, pulse-glow, gradient-shift
- **Components**: Pre-built shadcn/ui components

## 🧩 Components

The project includes a comprehensive set of UI components from shadcn/ui:

- Buttons, Forms, and Inputs
- Navigation and Menus
- Modals and Dialogs
- Data Display components
- And many more...

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- Responsive breakpoints
- Touch-friendly interactions
- Adaptive layouts

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with:
- Extended color palette
- Custom animations
- Component-specific styling

### TypeScript
Configured for modern React development with:
- Strict type checking (optional)
- Path aliases (`@/*` for src folder)
- Latest ES features

### Vite
Optimized for development and production:
- Fast HMR (Hot Module Replacement)
- Optimized builds
- Asset optimization

## 🚦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Vite](https://vitejs.dev/) for the build tool
- [Lucide](https://lucide.dev/) for the icon library