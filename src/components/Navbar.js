import { useState, useRef, useEffect } from "react";
import config from '../lib/config';
import logo from '../assets/img/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!open) return;
    
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={navRef}>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 shadow-card backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 z-50">
            <div className="w-36 relative">
              <img 
                src={logo} 
                alt="RePlate Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {config.navigation.menu.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-text hover:text-accent font-medium text-sm tracking-wide transition-colors px-2 py-1 rounded-lg hover:bg-surface/40"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Material Design Style */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface/40 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              {/* First bar */}
              <span 
                className={`absolute h-0.5 bg-text rounded-full transition-all duration-300 ease-in-out ${
                  open 
                    ? "w-5 top-2 left-0 rotate-45" 
                    : "w-5 top-0 left-0"
                }`} 
              />
              {/* Middle bar */}
              <span 
                className={`absolute h-0.5 w-5 bg-text rounded-full top-2 left-0 transition-all duration-300 ease-in-out ${
                  open ? "opacity-0 scale-x-0" : "opacity-100"
                }`} 
              />
              {/* Last bar */}
              <span 
                className={`absolute h-0.5 bg-text rounded-full transition-all duration-300 ease-in-out ${
                  open 
                    ? "w-5 top-2 left-0 -rotate-45" 
                    : "w-5 top-4 left-0"
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Material Design */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col py-6 rounded-xl">
              {config.navigation.menu.map((item, index) => (
                <div
                  key={item.path}
                  className="transform transition-all duration-300"
                  style={{ 
                    opacity: 0,
                    animation: `fadeInRight 0.4s ease forwards ${index * 0.08}s`
                  }}
                >
                  <a
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-4 text-text text-lg font-medium rounded-lg hover:bg-surface/60 transition-colors mb-1"
                  >
                    <span className="ml-2">{item.label}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes fadeInRight {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}