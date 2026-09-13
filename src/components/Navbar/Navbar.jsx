import React from 'react';
import Brand from '../Brand/Brand';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <Brand />

        <div className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="auth-actions">
          <a href="#signin" className="signin">
            Sign In
          </a>

          <a href="#signup" className="signup">
            Sign Up
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;