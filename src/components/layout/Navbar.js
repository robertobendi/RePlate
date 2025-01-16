import { Link } from "react-router-dom";
import { useState } from "react";
import websiteInfo from './../../utils/websiteInfo';
import logo from './../../assets/img/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background font-sans border-b border-border-primary transition-all duration-DEFAULT">
      <div className="max-w-5xl mx-auto px-4 h-14">
        <div className="flex justify-between items-center h-full">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-75 transition-all duration-fast"
          >
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {websiteInfo.navigation.menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-text-secondary text-sm hover:opacity-75 transition-all duration-fast"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:opacity-75 transition-all duration-fast"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div 
            className="md:hidden absolute left-0 right-0 p-4 bg-surface border-b border-border-primary shadow-lg transition-all duration-DEFAULT"
          >
            <div className="flex flex-col space-y-3">
              {websiteInfo.navigation.menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-text-secondary text-sm hover:opacity-75 transition-all duration-fast"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;