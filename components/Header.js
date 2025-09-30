"use client";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

return (
  <div className="overflow-hidden">
    {/* Navbar - remains visible */}
    <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-between lg:px-12 pl-8 lg:pl-16 py-4">
      {/* Logo */}
      <Link href={`/`} className="text-white font-bold text-xl">
        <Image src="/logo.svg" alt="Logo" width={120} height={0} className="" />
      </Link>

      {/* Menu and Search Buttons */}
      <div className="flex space-x-4 items-center mr-7">
        <SearchBar />
        <button
          className="text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)} // Toggles the menu state
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>

    {/* Mobile Menu */}
    <div
      className={`fixed inset-0 bg-[#0f172a] text-white flex flex-col  pt-28 pb-12 z-40 justify-start px-8 transform transition-transform duration-600 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <header className="top-0 left-0 w-full absolute z-30 flex items-center justify-between lg:px-12 pl-8 lg:pl-16 py-4">
      {/* Logo */}
      <Link href={`/`} className="text-white font-bold text-xl">
        <Image src="/logo.svg" onClick={() => setMenuOpen(false)} alt="Logo" width={120} height={0} className="" />
      </Link>

      {/* Menu and Search Buttons */}
      <div className="flex space-x-4 items-center mr-7">
        <SearchBar />
        <button
          className="text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)} // Toggles the menu state
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
    <div className="flex max-lg:flex-col lg:justify-between lg:items-center mb-16 lg:mb-0  .no-scrollbar">
      <nav className="flex overflow-y-scroll flex-col gap-y-6 flex-1 justify-center relative text-3xl lg:px-8 text-[#d4d5d6] font-bold cursor-pointer">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 top-0 block cursor-pointer p-3 h-[60px] -mb-16 w-20"></Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block cursor-pointer z-10 p-3">Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block cursor-pointer p-3 h-[60px]">About Us</Link>
        <Link href="/people" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block cursor-pointer p-3 h-[60px]">Our People</Link>
        {/* <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Practices</Link>
        <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Media & Resources</Link> */}
        <Link href="/career" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Careers</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Contact Us</Link>
      </nav>
      <div className="flex flex-col gap-y-6 mt-12 text-xl mx-4 justify-end text-white">
          <div className="flex flex-col text-right pe-4 gap-y-6 w-full">
            <h4 className="lg:text-3xl font-semibold cursor-copy ">Practice Areas</h4>
            <div className="flex flex-col gap-y-8  cursor-pointer text-sm lg:text-xl">
              <p className="font-semibold hover:text-gray-500">Legal Support </p>
              <p className="font-semibold hover:text-gray-500">Legal Growth</p>
              <p className="font-semibold hover:text-gray-500">Legal Solution</p>
              <p className="font-semibold hover:text-gray-500">Legal Services</p>
            </div>
          </div>
      
      </div>
    </div>        
    </div>
  </div>
);
};

export default Header;