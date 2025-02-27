# RePlate 2.0 🚀

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22.0-CA4245?logo=react-router)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A minimal, modern React.js template powered by Vite designed to jumpstart your web projects. RePlate provides a clean, well-organized foundation with essential features pre-configured, allowing you to focus on building your application rather than setting up boilerplate code.

## ✨ Features

- **Modern Tech Stack**
  - React 18
  - Vite for lightning-fast builds
  - React Router v6
  - Tailwind CSS for styling
  - PostCSS & Autoprefixer
- **Pre-built Components**
  - Responsive Navigation Bar
  - Modern Footer
  - 404 Not Found Page
  - Contact Form
- **Developer Experience**
  - Clean project structure
  - Modular component architecture
  - Ready-to-use routing setup
  - Responsive design out of the box
  - Fast refresh with Vite

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
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Page1.js
│   ├── utils/
│   │   └── websiteInfo.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## 📝 Usage

1. **Navigation**: Use React Router's `Link` component to navigate between pages
   ```jsx
   import { Link } from 'react-router-dom';
   
   <Link to="/page1">Go to Page 1</Link>
   ```

2. **Styling**: Utilize Tailwind CSS classes for styling components
   ```jsx
   <div className="container mx-auto px-4">
     <h1 className="text-2xl font-bold">Hello World</h1>
   </div>
   ```

3. **Vite Configuration**: Customize Vite settings in `vite.config.js`
   ```js
   export default {
     plugins: [react()],
     server: {
       port: 3000,
     }
   }
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
