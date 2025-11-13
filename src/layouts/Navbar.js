import { Link } from "react-router-dom";
import { useState, memo } from "react";
import config from '@lib/config';
import logo from '@assets/img/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = config.navigation.menu;

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt={config.site.name} className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-text/80 hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-text/80 hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar);