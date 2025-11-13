# RePlate 2.0 🚀

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22.0-CA4245?logo=react-router)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A minimal, clean React.js template powered by Vite. RePlate provides a simple starting point with just the essentials - no bloat, no unnecessary packages. Clone it and transform it into any webapp or website you want.

## ✨ Features

- **Barebone & Simple**
  - Minimal setup - just the essentials
  - Easy to understand and customize
  - No bloat, no unnecessary dependencies
  - Perfect starting point for any project
  
- **Modern Tech Stack**
  - React 18 with hooks
  - Vite for lightning-fast builds
  - React Router v7 for navigation
  - Tailwind CSS with custom dark theme
  
- **Developer Experience**
  - ✅ Path aliases for clean imports (`@components`, `@lib`, etc.)
  - ✅ Centralized configuration
  - ✅ Simple navbar and footer components
  - ✅ Reusable Button component
  - ✅ Ready for Cursor AI / AI-assisted development
  - ✅ Fast refresh with Vite

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/robertobendi/RePlate.git

# Navigate to project directory
cd RePlate

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
RePlate/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   │   └── img/
│   ├── components/     # Reusable UI components
│   │   └── ui/
│   │       └── Button.js
│   ├── layouts/        # Layout components (Navbar, Footer)
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   └── Page1.js
│   ├── hooks/          # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── lib/            # Configuration and utilities
│   │   ├── config.js   # Site configuration
│   │   ├── constants.js # App-wide constants
│   │   ├── utils.js    # Utility functions
│   │   ├── theme.js    # Theme definitions
│   │   └── ThemeContext.js
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── jsconfig.json       # Path aliases configuration
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## 📝 Usage

### Path Aliases

The template includes pre-configured path aliases for cleaner imports:

```jsx
import Button from '@components/ui/Button';
import { useLocalStorage } from '@hooks/useLocalStorage';
import config from '@lib/config';
import logo from '@assets/img/logo.png';
```

### Navigation

Use React Router's `Link` component for client-side navigation:

```jsx
import { Link } from 'react-router-dom';

<Link to="/page1">Go to Page 1</Link>
```

### Styling

Utilize Tailwind CSS with custom theme colors defined in `tailwind.config.js`:

```jsx
<div className="bg-background text-text">
  <h1 className="text-accent">Styled with theme colors</h1>
</div>
```

### Custom Hooks

Use the included `useLocalStorage` hook for persistent state:

```jsx
import useLocalStorage from '@hooks/useLocalStorage';

const [value, setValue] = useLocalStorage('key', 'defaultValue');
```

### Constants and Configuration

Keep your code DRY by using centralized constants:

```jsx
import { LINKS, UI } from '@lib/constants';
import config from '@lib/config';
```

## ⚡ Why Vite?

- Lightning-fast hot module replacement
- On-demand file serving - no bundling during development
- Optimized production builds with Rollup
- Native ESM-based dev server

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/robertobendi/RePlate/issues).

## 📜 License

This project is licensed under the GNU 3.0 License

## 👤 Author

**Roberto Bendinelli**
- GitHub: [@robertobendi](https://github.com/robertobendi)

## 🙏 Acknowledgments

- Thanks to all contributors who help improve this template
- Inspired by modern web development best practices

---

⭐️ Star this repository if you find it helpful!
