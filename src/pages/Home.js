import React, { memo } from 'react';
import { FiZap, FiFeather, FiMoon, FiSmartphone } from 'react-icons/fi';
import logo from '../assets/img/logo.png';

// Simple feature data structure
const features = [
  {
    icon: <FiZap size={20} />,
    title: 'Modern Stack',
    description: 'React 18, Vite, and React Router v6'
  },
  {
    icon: <FiFeather size={20} />,
    title: 'Tailwind CSS',
    description: 'Utility-first styling with animations'
  },
  {
    icon: <FiMoon size={20} />,
    title: 'Dark Theme',
    description: 'Beautiful modern dark palette'
  },
  {
    icon: <FiSmartphone size={20} />,
    title: 'Responsive',
    description: 'Works on all devices and screen sizes'
  }
];

const Home = memo(() => (
  <div>
    {/* Hero - Simplified but impactful */}
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-surface/30" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <img src={logo} alt="RePlate Logo" className="h-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-text">
            Welcome to <span className="text-accent">RePlate</span>
          </h1>
          <p className="text-muted mb-8">
            A modern React template with Tailwind CSS and a beautiful dark theme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/robertobendi/RePlate" 
              className="px-5 py-2 bg-accent text-text rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="https://github.com/robertobendi/RePlate" 
              className="px-5 py-2 bg-surface text-text rounded-lg hover:bg-surface/90 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Features - Simplified grid layout */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 flex flex-col items-start">
              <div className="p-2 bg-surface rounded-lg text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text">{feature.title}</h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Minimal but effective */}
    <section className="py-10 bg-background text-center">
      <div className="container mx-auto px-4">
        <p className="text-muted mb-4">Ready to build something amazing?</p>
        <a 
          href="https://github.com/robertobendi/RePlate"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
        >
          Start with RePlate
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </section>
  </div>
));

Home.displayName = 'Home';

export default Home;