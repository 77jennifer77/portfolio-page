import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import pageRoutes from '../routes/pageRoutes.tsx';
import type { PageRoute } from '../routes/pageRoutes.tsx';
import {data} from '../assets/data.ts';

// Filter out NotFound and any routes you don't want in the nav
const navLinks: PageRoute[] = pageRoutes.filter(
  (route: PageRoute) => route.name !== 'NotFound'
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            {data.name}'s Portfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link: PageRoute) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 font-medium transition ${
                    isActive ? 'text-blue-600' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm px-4 py-2 space-y-2">
          {navLinks.map((link: PageRoute) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-gray-700 hover:text-blue-600 font-medium transition ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
