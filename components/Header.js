// "use client";
// import { useState } from "react";
// import { ArrowRight, Menu, Search, X } from "lucide-react";
// import SearchBar from "./SearchBar";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (

//     <div className="overflow-hidden">
//       {/* Navbar */}
//       <header className="absolute top-0 left-0 w-full z-10 flex items-center justify-between lg:px-12 pl-8 lg:pl-16 py-4">
//         {/* Logo */}
//         <Link href={`/`} className="text-white font-bold text-xl">
//           <Image src="/logo.svg" alt="Logo" width={120} height={0} className="" />
//         </Link>

//         {/* Menu Button */}
//         <div className="flex space-x-4 items-center -mt-4 mr-7">
//           <SearchBar />
//         <button
//           className="text-white cursor-pointer" // Increased z-index to be on top of the menu
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//          <Menu size={28} className=""/>
//         </button>
//            </div>
//       </header>

//       <div
//         className={`fixed inset-0 bg-[#0f172a] text-white flex max-lg:flex-col max-lg:gap-y-12 max-lg:pt-28 pt-16 z-30 justify-start lg:justify-between lg:px-16 lg:ps-16 px-8 lg:items-center overflow-y-auto transform transition-transform duration-600 ease-in-out ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//            <header className="absolute top-0 left-0 w-full flex items-center justify-between lg:px-12 pl-8 lg:pl-16 py-4">
//         {/* Logo */}
//         <Link href={`/`} className="text-white font-bold text-xl">
//           <Image src="/logo.svg" alt="Logo" width={120} height={0} className="" />
//         </Link>

//         {/* Menu Button */}
//         <div className="flex space-x-4 items-center -mt-4 mr-7">
//           <SearchBar />
//         <button
//           className="text-white cursor-pointer" // Increased z-index to be on top of the menu
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//          <X size={28} className=""/>
//         </button>
//            </div>
//       </header>
//         <nav className="space-y-8 text-3xl text-[#d4d5d6] font-bold cursor-pointer">
//           <Link href="/about" onClick={() =>setMenuOpen(false)} className="hover:text-gray-400 block p-3">About Us</Link>
//           <Link href="/people" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">People</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Practices</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)}   className="hover:text-gray-400 block p-3">Media & Resources</Link>
//           <Link href="#" onClick={() => setMenuOpen(false)}   className="hover:text-gray-400 block p-3">Careers</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)}  className="hover:text-gray-400 block p-3">Contact Us</Link>
//         </nav>

//         {/* Extra Links */}
//         <div className="text-3xl max-lg:flex max-lg:flex-col lg:gap-y-12 gap-y-6 max-lg: text-white">
//           <a href="#" className="flex font-extrabold  flex-col cursor-pointer hover:text-white leading-14 border-b-2 ease-in-out border-white pb-1">
//             <span className="text-sm font-semibold">Have an Inquiry?</span>
//             Send a mail</a>
//            <a href="#" className="flex flex-col font-extrabold hover:text-white cursor-pointer leading-14 border-b-2 ease-in-out border-white pb-1">
//             <span className="text-sm font-semibold">Where to find us?</span>
//             Our Offices</a>
//            <a href="#" className="flex flex-col font-extrabold hover:text-white leading-14 cursor-pointer border-b-2 ease-in-out border-white pb-1">
//             <span className="text-sm font-semibold">Need more insights?</span>
//             Send a mail</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


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
        className={`fixed inset-0 bg-[#0f172a] text-white flex flex-col pt-28 pb-12 z-40 justify-start px-8 transform transition-transform duration-600 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="top-0 left-0 w-full absolute z-30 flex items-center justify-between lg:px-12 pl-8 lg:pl-16 py-4">
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
      <div className="flex max-lg:flex-col lg:justify-between lg:items-center mb-16 lg:mb-0 overflow-y-auto">
        <nav className="space-y-8 text-3xl lg:px-8 text-[#d4d5d6] font-bold cursor-pointer">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">About Us</Link>
          <Link href="/people" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">People</Link>
          {/* <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Practices</Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Media & Resources</Link> */}
          <Link href="/career" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Careers</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 block p-3">Contact Us</Link>
        </nav>
        <div className="flex flex-col gap-y-6 mt-12 mx-4 text-white">
          <a href="#" className="flex font-extrabold flex-col cursor-pointer hover:text-white leading-14 border-b-2 ease-in-out border-white pb-1">
            <span className="text-sm font-semibold">Have an Inquiry?</span>
            Send a mail
          </a>
          <a href="#" className="flex flex-col font-extrabold hover:text-white cursor-pointer leading-14 border-b-2 ease-in-out border-white pb-1">
            <span className="text-sm font-semibold">Where to find us?</span>
            Our Offices
          </a>
          <a href="#" className="flex flex-col font-extrabold hover:text-white leading-14 cursor-pointer border-b-2 ease-in-out border-white pb-1">
            <span className="text-sm font-semibold">Need more insights?</span>
            Send a mail
          </a>
        </div>
      </div>
        

        {/* Extra Links */}
        
      </div>
    </div>
  );
};

export default Header;