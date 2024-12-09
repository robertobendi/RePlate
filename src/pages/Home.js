import { useState } from 'react';
import websiteInfo from './../utils/websiteInfo';
import logo from './../assets/img/logo.png';

function Home() {
  const [hovered, setHovered] = useState(null);
  const { theme, site } = websiteInfo;

  const features = [
    {
      title: 'Modern Stack',
      description: 'Built with React 17 and React Router v6 for optimal performance and seamless navigation',
      icon: (
        <svg className="w-8 h-8" style={{ color: theme.colors.text.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework enabling rapid UI development with beautiful, responsive designs',
      icon: (
        <svg className="w-8 h-8" style={{ color: theme.colors.text.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Clean Structure',
      description: 'Organized component architecture ensuring scalability and maintainable code structure',
      icon: (
        <svg className="w-8 h-8" style={{ color: theme.colors.text.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: theme.colors.background,
      fontFamily: theme.font.primary
    }}>
      {/* Hero Section */}
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4" style={{ 
        background: `radial-gradient(circle at 50% 50%, ${theme.colors.surface}, ${theme.colors.background})`,
        transition: theme.style.transitions.default
      }}>
        <div className="max-w-5xl mx-auto text-center">
          <img src={logo} alt="Logo" className="h-32 w-auto mx-auto mb-12 animate-pulse" />
          <h1 className="mb-8" style={{ 
            color: theme.colors.text.primary,
            fontSize: theme.font.sizes['5xl'],
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {site.name}
          </h1>
          <p style={{ 
            color: theme.colors.text.secondary,
            fontSize: theme.font.sizes.xl,
            maxWidth: '32rem',
            margin: '0 auto',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>
            {site.description}
          </p>
          <a 
            href="https://github.com/robertobendi/RePlate"
            style={{ 
              backgroundColor: 'transparent',
              color: theme.colors.text.accent,
              border: `2px solid ${theme.colors.text.accent}`,
              padding: '1rem 3rem',
              borderRadius: theme.borderRadius.full,
              boxShadow: `0 0 20px ${theme.colors.text.accent}33`,
              transition: theme.style.transitions.default
            }}
            className="inline-block transform hover:scale-105 hover:shadow-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto p-8 md:p-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ 
                backgroundColor: theme.colors.surface,
                borderRadius: theme.borderRadius.lg,
                padding: '2rem',
                boxShadow: `0 8px 32px ${theme.colors.primary}15`,
                transition: theme.style.transitions.default,
                border: `1px solid ${theme.colors.border.primary}33`
              }}
              className="transform hover:-translate-y-2 hover:shadow-2xl"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ 
                backgroundColor: theme.colors.background,
                padding: '1rem',
                borderRadius: theme.borderRadius.default,
                width: 'fit-content',
                marginBottom: '1.5rem',
                boxShadow: `0 4px 12px ${theme.colors.primary}20`
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                color: theme.colors.text.primary,
                fontSize: theme.font.sizes['2xl'],
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: theme.colors.text.secondary,
                lineHeight: '1.8'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ 
        backgroundColor: theme.colors.surface,
        padding: '6rem 0',
        background: `linear-gradient(135deg, ${theme.colors.surface}, ${theme.colors.background})`
      }}>
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div style={{ 
                color: theme.colors.text.accent,
                fontSize: theme.font.sizes['5xl'],
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textShadow: `0 0 20px ${theme.colors.text.accent}66`
              }}>100%</div>
              <div style={{ color: theme.colors.text.secondary }}>Customizable</div>
            </div>
            <div>
              <div style={{ 
                color: theme.colors.text.accent,
                fontSize: theme.font.sizes['5xl'],
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textShadow: `0 0 20px ${theme.colors.text.accent}66`
              }}>Modern</div>
              <div style={{ color: theme.colors.text.secondary }}>Tech Stack</div>
            </div>
            <div>
              <div style={{ 
                color: theme.colors.text.accent,
                fontSize: theme.font.sizes['5xl'],
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textShadow: `0 0 20px ${theme.colors.text.accent}66`
              }}>Fast</div>
              <div style={{ color: theme.colors.text.secondary }}>Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;