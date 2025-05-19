import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import Modal from "../components/FooterComponents/Modal";
import SearchBar from "../components/FooterComponents/SearchBar";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about?section=vision">Our Vision</Link>
                </li>
                <li>
                 <Link to="/about?section=faith">Statement of Faith</Link>
                </li>
                <li>
                 <Link to="/about?section=leadership">Leadership</Link>
                </li>
                <li>
                 <Link to="/about?section=history">History</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4"><Link to="/contact">Contact</Link></h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                  <span>123 Faith Avenue, Spiritual City, SC 12345</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>info@dunamis.org</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/give"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Give
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Internship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/staff-login"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Staff Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/announcements"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Announcements
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect + Search */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  aria-label="Spotify"
                >
                  <FaSpotify />
                </a>
              </div>

              <div>
                <h4 className="font-medium mb-2">Search</h4>
                <form onSubmit={handleSearch}>
                  <SearchBar
                    value={query}
                    onChange={setQuery}
                    placeholder="Search our site..."
                  />
                </form>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <i className="fas fa-fire text-red-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold">Dunamis</span>
            </div>

            <div className="text-gray-400 text-sm">
              <p>© 2025 Dunamis. All rights reserved.</p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-gray-400 hover:text-white mx-2 text-sm cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="text-gray-400 hover:text-white mx-2 text-sm cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <p>Your privacy policy content goes here.</p>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <p>Your terms of service content goes here.</p>
      </Modal>
    </>
  );
};

export default Footer;
