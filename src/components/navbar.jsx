import React from "react";
import logo from "../assets/Logo.png";
import avatar from "../assets/Avatar.png";

const Navbar = ({ showUser = true }) => {
  return (
    <nav className="border-b bg-white shadow-md md:shadow-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-0 py-4 flex items-center justify-between">
        <img src={logo} alt="Logo" />
        
        {/* bagian kanan */}
        {showUser ? (
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="font-primary font-medium text-[#333333AD] text-[16px]"
            >
              Kategori
            </a>
            <img
              src={avatar}
              alt="Avatar"
              className="w-[44px] h-[44px] rounded-[10px] object-cover"
            />
          </div>
        ) : (
          <div className="hidden md:flex" /> // space kanan tetap rapi
        )}

        {/* tombol hamburger untuk mobile */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
