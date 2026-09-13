import React from 'react';
import Brand from '../Brand/Brand';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex min-h-[70px] max-w-[1080px] items-center justify-between px-5">
        <Brand />

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-green-600"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="text-sm font-medium text-gray-600"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Sign Up
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xl md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t bg-white px-5 py-3 md:hidden">
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="block py-2 text-sm text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;