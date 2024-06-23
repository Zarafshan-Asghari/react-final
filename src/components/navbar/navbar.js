import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/logo";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Import icons from React Icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuAndNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#f1faee]">
      <div className="max-w-6xl mx-auto px-4 py-4 md:px-8 md:py-0 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenuAndNav}>
            {isMenuOpen ? (
              <RiCloseLine className="text-[#e63946] w-8 h-8" />
            ) : (
              <RiMenuLine className="text-[#e63946] w-8 h-8" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-col md:flex-row md:items-center gap-6 py-8">
          <li>
            <NavLink
              to="/"
              activeClassName="text-[#fff] border-[#e63946]"
              className=" text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-article"
              activeClassName="text-[#fff] border-[#e63946]"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              Add Article
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              activeClassName="text-[#fff] border-[#e63946]"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-[#fff] border-[#e63946]"
              className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 mt-4">
            <li>
              <NavLink
                to="/"
                activeClassName="text-[#fff] bg-[#e63946]"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-article"
                activeClassName="text-[#fff] bg-[#e63946]"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                Add Article
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articles"
                activeClassName="text-[#fff] bg-[#e63946]"
                className="text-[#e63946] border-[#f1faee] hover:border-[#e63946] rounded-lg font-semibold py-2 px-4 border-2 border-transparent transition-colors duration-300"
                onClick={toggleMenuAndNav}
              >
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="capitalize group text-[#e63946] hover-active:text-[#fff] font-semibold tracking-wide transition-all duration-150 pb-2 border-2 border-[#fff] hover:border-[#e63946] p-2 rounded-lg"
                onClick={toggleMenuAndNav}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
