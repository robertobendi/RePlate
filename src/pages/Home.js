import { memo } from 'react';
import Button from '../components/ui/Button';
import { FiZap, FiFeather, FiMoon, FiSmartphone } from 'react-icons/fi';
import logo from '../assets/img/logo.png';

const features = [
  {
    title: 'Modern Stack',
    description: 'Built with React 18, Vite, and React Router v6 for lightning-fast performance',
    icon: <FiZap className="text-accent text-3xl" />
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework with custom animations and transitions',
    icon: <FiFeather className="text-accent text-3xl" />
  },
  {
    title: 'Dark Theme',
    description: 'Beautiful, modern dark palette for your next app',
    icon: <FiMoon className="text-accent text-3xl" />
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive layouts that work on all devices',
    icon: <FiSmartphone className="text-accent text-3xl" />
  }
];

const Home = memo(() => {
  return (
    <>
      {/* Hero Section with improved visual design */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src={logo} 
              alt="RePlate Logo" 
              className="mx-auto h-20 w-auto mb-8 drop-shadow-xl animate-float" 
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-text to-accent">
              Welcome to RePlate
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
              A modern React template with Tailwind CSS, featuring a beautiful dark theme and a powerful component system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-accent text-text hover:bg-accent/90 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
                Get Started
              </Button>
              <Button className="bg-surface text-text hover:bg-surface/90 px-6 py-3 rounded-lg font-medium transition-all">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with material design cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-text">
            Powerful <span className="text-accent">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-3 rounded-lg bg-surface/50 inline-block mb-4 group-hover:bg-accent/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with more visual appeal */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-surface/50" />
        <div className="absolute -left-24 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-text">Ready to Get Started?</h2>
            <p className="text-muted mb-8">
              Clone the template and start building your next project with modern tools and best practices.
            </p>
            <Button className="bg-accent text-text hover:bg-accent/90 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </>
  );
});

// Add the following to your CSS or tailwind config for the animation
// @keyframes float {
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// }
// .animate-float {
//   animation: float 5s ease-in-out infinite;
// }

Home.displayName = 'Home';

export default Home;