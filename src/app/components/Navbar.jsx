"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            className="w-10 h-10 rounded-full bg-white p-1 shadow"
            alt="El Shafiq Logo"
          />
          <span className="text-lg md:text-xl font-bold text-gray-900 tracking-wide">
            El Shafiq
          </span>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-800" dir="rtl">
          <li><a href="#home" className="transition-colors hover:text-yellow-600">الرئيسية</a></li>
          <li><a href="#about" className="transition-colors hover:text-yellow-600">من نحن</a></li>
          <li><a href="#services" className="transition-colors hover:text-yellow-600">خدماتنا</a></li>
          <li><a href="#approach" className="transition-colors hover:text-yellow-600">منهجنا</a></li>
          <li><a href="#projects" className="transition-colors hover:text-yellow-600">مشاريعنا</a></li>
          <li><a href="#contact" className="transition-colors hover:text-yellow-600">تواصل معنا</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-2xl shadow-sm"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-black/5 transition-all duration-300 
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 text-sm font-semibold" dir="rtl">
          <li><a onClick={handleToggle} href="#home">الرئيسية</a></li>
          <li><a onClick={handleToggle} href="#about">من نحن</a></li>
          <li><a onClick={handleToggle} href="#services">خدماتنا</a></li>
          <li><a onClick={handleToggle} href="#approach">منهجنا</a></li>
          <li><a onClick={handleToggle} href="#projects">مشاريعنا</a></li>
          <li><a onClick={handleToggle} href="#contact">تواصل معنا</a></li>
        </ul>
      </div>
    </nav>
  );
}
