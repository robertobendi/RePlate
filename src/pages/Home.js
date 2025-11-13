import { memo } from 'react';
import { FiZap, FiFeather, FiMoon, FiSmartphone } from 'react-icons/fi';
import logo from '@assets/img/logo.png';
import { LINKS } from '@lib/constants';

const features = [
  {
    icon: <FiZap size={24} />,
    title: 'Modern Stack',
    description: 'React 18, Vite, and React Router v7'
  },
  {
    icon: <FiFeather size={24} />,
    title: 'Tailwind CSS',
    description: 'Utility-first styling with animations'
  },
  {
    icon: <FiMoon size={24} />,
    title: 'Dark Theme',
    description: 'Beautiful modern dark palette'
  },
  {
    icon: <FiSmartphone size={24} />,
    title: 'Responsive',
    description: 'Works on all devices and screen sizes'
  }
];

const Home = memo(() => (
  <div>
    {/* Hero Section with gradient */}
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Logo with subtle animation */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logo} 
            alt="RePlate Logo" 
            className="h-24 md:h-28 mx-auto drop-shadow-2xl" 
          />
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            RePlate
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-text/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          A modern React template with Tailwind CSS and a beautiful dark theme
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={LINKS.GITHUB_REPO}
            className="group px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all font-medium shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
          >
            Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={LINKS.GITHUB_REPO}
            className="px-8 py-4 bg-white/5 text-text rounded-xl hover:bg-white/10 transition-all font-medium backdrop-blur-sm border border-white/10 hover:border-white/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    {/* Features Grid with cards */}
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Icon */}
              <div className="inline-flex p-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl text-accent mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-text group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-text/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section with subtle styling */}
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-text/70 mb-8 text-xl font-light">
          Ready to build something amazing?
        </p>
        <a
          href={LINKS.GITHUB_REPO}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/10 to-blue-500/10 text-accent rounded-xl hover:from-accent/20 hover:to-blue-500/20 transition-all font-medium border border-accent/20 hover:border-accent/40 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with RePlate
          <svg 
            className="group-hover:translate-x-1 transition-transform" 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
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