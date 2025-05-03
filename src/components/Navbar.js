import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import config from '../lib/config';
import logo from '../assets/img/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(64);

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <nav ref={navRef} className="navbar shadow-lg bg-gray-900/80 backdrop-blur-md z-40 relative">
        <div className="container flex items-center justify-between min-h-[64px]">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="RePlate Logo" className="h-10 max-w-[120px] w-auto drop-shadow-lg" />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {config.navigation.menu.map(item => (
              <Link key={item.path} to={item.path} className="text-gray-300 hover:text-blue-400 font-medium transition">{item.label}</Link>
            ))}
          </div>
          {/* Mobile Burger */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 p-2"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>
      {/* Mobile Dropdown */}
      {open && (
        <div
          className="fixed left-0 w-full bg-gray-800/95 backdrop-blur-lg rounded-b-xl shadow-xl border-t border-gray-700 flex flex-col items-stretch z-50 animate-dropdown"
          style={{ top: navHeight }}
        >
          {config.navigation.menu.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-100 text-base font-medium hover:text-blue-400 transition px-5 py-3 text-center"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
} 