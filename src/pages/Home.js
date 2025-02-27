import { useState } from 'react';
import websiteInfo from './../utils/websiteInfo';
import logo from './../assets/img/logo.png';

function Home() {
  const [hovered, setHovered] = useState(null);
  const { site } = websiteInfo;

  const features = [
    {
      title: 'Modern Stack',
      description: 'Built with React 18, Vite, and React Router v6 for lightning-fast performance and seamless navigation',
      icon: (
        <svg className="w-8 h-8 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework enabling rapid UI development with beautiful, responsive designs',
      icon: (
        <svg className="w-8 h-8 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Vite Powered',
      description: 'Super-fast build tool providing instant server start and optimized production builds',
      icon: (
        <svg className="w-8 h-8 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Clean Structure',
      description: 'Organized component architecture ensuring scalability and maintainable code structure',
      icon: (
        <svg className="w-8 h-8 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  const glowStyle = {
    filter: 'drop-shadow(0 0 10px rgba(77, 142, 255, 0.5))',
    WebkitFilter: 'drop-shadow(0 0 10px rgba(77, 142, 255, 0.5))'
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-gradient-radial from-surface to-background transition-all duration-DEFAULT">
        <div className="max-w-5xl mx-auto text-center">
          <img src={logo} alt="Logo" className="h-32 w-auto mx-auto mb-12 animate-pulse" />

          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {site.description} Now powered by Vite and React 18 for even faster development and better performance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/robertobendi/RePlate"
              className="inline-block px-12 py-4 border-2 border-text-accent text-text-accent rounded-full shadow-accent transition-all duration-DEFAULT transform hover:scale-105 hover:shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a 
              href="https://vitejs.dev"
              className="inline-block px-12 py-4 bg-text-accent text-white rounded-full shadow-accent transition-all duration-DEFAULT transform hover:scale-105 hover:shadow-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn about Vite
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto p-8 md:p-16">
        <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Upgraded Features</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg p-8 shadow-lg transition-all duration-DEFAULT border border-opacity-20 border-border-primary transform hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="bg-background p-4 rounded mb-6 w-fit shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-text-primary text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-surface to-background py-24">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: '100%', label: 'Customizable' },
              { value: '~90%', label: 'Faster Builds with Vite' },
              { value: 'React 18', label: 'Modern Features' }
            ].map((stat) => (
              <div key={stat.value} className="relative">
                <div 
                  className="text-text-accent text-5xl font-bold mb-2 rounded-lg py-4"
                  style={glowStyle}
                >
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;