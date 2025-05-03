import { memo } from 'react';
import Button from '../components/ui/Button';
import { FiZap, FiFeather, FiMoon, FiSmartphone } from 'react-icons/fi';
import logo from '../assets/img/logo.png';

const features = [
  {
    title: 'Modern Stack',
    description: 'Built with React 18, Vite, and React Router v6 for lightning-fast performance',
    icon: <FiZap className="text-blue-400 text-3xl mb-2" />
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework with custom animations and transitions',
    icon: <FiFeather className="text-blue-400 text-3xl mb-2" />
  },
  {
    title: 'Dark Theme',
    description: 'Beautiful, modern dark palette for your next app',
    icon: <FiMoon className="text-blue-400 text-3xl mb-2" />
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive layouts that work on all devices',
    icon: <FiSmartphone className="text-blue-400 text-3xl mb-2" />
  }
];

const Home = memo(() => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="hero bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="container flex flex-col items-center justify-center text-center relative z-10">
        <img src={logo} alt="RePlate Logo" className="mx-auto h-20 w-auto mb-6 drop-shadow-lg" />
        <h1 className="hero-title mb-6">
          Welcome to <span className="text-blue-400">RePlate</span>
        </h1>
        <p className="hero-desc max-w-2xl mx-auto">
          A modern React template with Tailwind CSS, featuring a beautiful dark theme and a powerful component system.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button className="btn-primary" href="https://github.com/robertobendi/RePlate">View on GitHub</Button>
        </div>
      </div>
      {/* subtle gradient shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-700 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-700 opacity-20 rounded-full blur-3xl" />
    </section>

    {/* Features Section */}
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-gray-800/80 backdrop-blur-md border border-gray-700 hover:shadow-xl transition duration-200 cursor-pointer flex flex-col items-center text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="card-title text-blue-400 mb-2 text-center">{feature.title}</h3>
              <p className="card-desc text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section bg-gray-900/90 backdrop-blur-md text-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Clone the template and start building your next project with modern tools and best practices.
        </p>
        <Button className="btn-outline" href="https://github.com/robertobendi/RePlate">View on GitHub</Button>
      </div>
    </section>
  </div>
));

Home.displayName = 'Home';

export default Home;