"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [isScrolling, setIsScrolling] = useState(false);
   const [isHoveringTop, setIsHoveringTop] = useState(false);

   useEffect(() => {
      let scrollTimeout;
      
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         
         setScrolled(currentScrollY > 50);
         
         // Hide navbar while scrolling
         setIsScrolling(true);
         
         // Clear existing timeout
         clearTimeout(scrollTimeout);
         
         // Show navbar after scrolling stops (300ms delay)
         scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
         }, 300);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
         clearTimeout(scrollTimeout);
      };
   }, []);

   const navLinks = [
      { name: "Home", href: "/main#hero" },
      { name: "About", href: "/main#about" },
      { name: "WTR", href: "/wtr" },
      { name: "Experience", href: "/main#experience" },
      { name: "Projects", href: "/main#projects" },
      { name: "Contact", href: "/main#contact" },
   ];

   return (
      <nav
         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b
         ${scrolled ? "bg-white/90 border-orange-200 shadow-lg" : "bg-white/80 border-white/30"}
         ${!isScrolling || isHoveringTop ? "translate-y-0" : "-translate-y-full"}`}
         onMouseEnter={() => setIsHoveringTop(true)}
         onMouseLeave={() => setIsHoveringTop(false)}
      >
         <div className="flex items-center justify-between px-8 md:px-16 py-4">
            {/* Logo */}
            <a
               href="/main#hero"
               className="font-bold text-xl bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] 
               from-orange-500 via-orange-300 to-orange-100 bg-clip-text text-transparent"
            >
               YourName
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-10">
               {navLinks.map((link) => (
                  <li key={link.name}>
                     <a
                        href={link.href}
                        className="relative text-sm font-medium text-gray-800 hover:text-orange-500 transition"
                     >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full" />
                     </a>
                  </li>
               ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
               className="md:hidden text-orange-500 text-2xl"
               onClick={() => setOpen(!open)}
            >
               {open ? <HiX /> : <HiMenu />}
            </button>
         </div>

         {/* Mobile Menu */}
         {open && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg px-8 py-6 border-t border-orange-200">
               <ul className="flex flex-col space-y-6 text-center">
                  {navLinks.map((link) => (
                     <li key={link.name}>
                        <a
                           href={link.href}
                           onClick={() => setOpen(false)}
                           className="text-lg font-semibold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] 
                           from-orange-500 via-orange-300 to-orange-100 bg-clip-text text-transparent"
                        >
                           {link.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </nav>
   );
}
