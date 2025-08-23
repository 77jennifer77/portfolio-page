import { Link, NavLink } from 'react-router-dom';
import pageRoutes from '../routes/pageRoutes.tsx';
import type { PageRoute } from '../routes/pageRoutes.tsx';
import {data} from '../assets/data.ts';

// Filter out NotFound and any routes you don't want in the nav
const navLinks: PageRoute[] = pageRoutes.filter(
  (route: PageRoute) => route.name !== 'NotFound'
);

export default function Navbar() {
  console.log(navLinks); // Add this line before return
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-xl font-bold">
            {data.name}'s Portfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex ml-auto space-x-6">
            {navLinks.map((link: PageRoute) =>
                <NavLink
                  key={link.name}
                  to={link.path}
                >
                  {link.name}
                </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
