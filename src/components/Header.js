import React, { useState } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand text-danger fw-bold" href="#">Logo</a>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 
            <X className="text-danger" size={24} /> : 
            <Menu className="text-danger" size={24} />
          }
        </button>

        {/* Navigation items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active border-bottom border-danger" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary hover-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary hover-white" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary hover-white" href="#">
                Projects
              </a>
            </li>
          </ul>

          {/* Secondary Navigation */}
          <div className="d-flex gap-3">
            <button className="btn btn-link text-secondary p-2 hover-danger">
              <Search size={20} />
            </button>
            <button className="btn btn-link text-secondary p-2 hover-danger">
              <Bell size={20} />
            </button>
            <button className="btn btn-link text-secondary p-2 hover-danger">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Add custom styles to your CSS file
const styles = `
  .hover-white:hover {
    color: white !important;
  }
  
  .hover-danger:hover {
    color: var(--bs-danger) !important;
  }
  
  .nav-link.active {
    color: white !important;
  }
  
  .navbar {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Header;

