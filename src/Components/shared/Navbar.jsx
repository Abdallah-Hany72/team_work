// src/Components/shared/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, Bell } from "lucide-react";
import { MOCK_USER } from "../../constants/mockData";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { user, profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  
  const [searchVal, setSearchVal] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/discover?q=${encodeURIComponent(searchVal)}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      <nav className="w-full h-16 border-b border-outline-variant/30 bg-surface-container-lowest px-4 sm:px-6 md:px-16 flex items-center justify-between">
        {/* Brand Logo & Search Area */}
        <div className="flex items-center gap-4 sm:gap-6 flex-1 max-w-xl">
          <Link to="/" className="font-display-lg text-title-lg sm:text-headline-lg font-bold text-primary tracking-tight">
            Spotly
          </Link>
          
          {/* Contextual Search Input */}
          {!isHome && (
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full px-4 py-1.5 w-full max-w-md focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <input
                type="text"
                placeholder="Find a cozy café..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-on-surface w-full pr-2"
              />
              <button type="submit" className="text-on-surface-variant hover:text-primary transition-colors">
                <Search size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Nav Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-6 font-label-md">
            <Link
              to="/discover"
              className={`transition-colors py-1 ${
                location.pathname === "/discover"
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Discover
            </Link>
            <Link
              to="/collections"
              className={`transition-colors py-1 ${
                location.pathname === "/collections" && !location.hash.includes("collections")
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Saved
            </Link>
            <Link
              to="/collections#collections"
              className={`transition-colors py-1 ${
                location.pathname === "/collections" && location.hash.includes("collections")
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Collections
            </Link>
          </div>

          {/* Right side Icons & Profile Avatar */}
          <div className="flex items-center gap-3 sm:gap-4 text-on-surface-variant">
            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer text-on-surface-variant"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-[20px] flex items-center justify-center">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>

            <button className="hover:text-primary transition-colors cursor-pointer relative" aria-label="Notifications">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-container-lowest" />
            </button>
            
            <Link to="/collections" className="hover:text-primary transition-colors" aria-label="Bookmarks">
              <Heart size={18} />
            </Link>

            {/* User Profile Avatar Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-outline-variant/30 hover:border-primary transition-colors cursor-pointer"
              >
                <img src={profile?.avatar || MOCK_USER.avatar} alt="User Avatar" className="w-full h-full object-cover" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-low rounded-xl shadow-lg border border-outline-variant/20 py-2 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-on-surface hover:bg-surface-container-high transition-colors"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/add-spot"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-on-surface hover:bg-surface-container-high transition-colors"
                  >
                    Share a Spot
                  </Link>
                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-xs text-on-surface hover:bg-surface-container-high transition-colors font-semibold text-primary"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <hr className="border-outline-variant/20 my-1" />
                  <Link
                    to="/login"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors"
                  >
                    Sign In / Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Links Collapse Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-outline-variant/20 px-6 py-4 flex flex-col gap-3 font-semibold text-xs animate-fade-in shadow-md">
          <Link
            to="/discover"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${
              location.pathname === "/discover"
                ? "text-primary font-bold"
                : "text-on-surface-variant"
            }`}
          >
            Discover
          </Link>
          <Link
            to="/collections"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${
              location.pathname === "/collections" && !location.hash.includes("collections")
                ? "text-primary font-bold"
                : "text-on-surface-variant"
            }`}
          >
            Saved
          </Link>
          <Link
            to="/collections#collections"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-1.5 ${
              location.pathname === "/collections" && location.hash.includes("collections")
                ? "text-primary font-bold"
                : "text-on-surface-variant"
            }`}
          >
            Collections
          </Link>
        </div>
      )}
    </div>
  );
}
