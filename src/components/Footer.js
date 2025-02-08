import React from 'react';
import { Facebook, Twitter, Instagram, GitHub, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-danger mb-3">Logo</h5>
            <p className="mb-3">
              Creating amazing solutions for your digital needs. Our team is dedicated to providing the best service possible.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none hover-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none hover-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none hover-white">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none hover-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <ul className="list-unstyled">
              <li className="mb-2">
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Contact Us</h5>
            <div className="mb-2 d-flex align-items-center">
              <MapPin size={20} className="text-danger me-2" />
              <span>801 Market St, Philadelphia PA</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Phone size={20} className="text-danger me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Mail size={20} className="text-danger me-2" />
              <span>msoua0040@launchpadphilly.org</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
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
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Footer;