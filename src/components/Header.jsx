import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left – logo text */}
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">
            GA
          </div>
          <span className="font-semibold text-white tracking-tight">
            Ghumakkad Aadmi
          </span>
        </a>

        {/* Center – links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="#latest" className="hover:text-white">Vlogs</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right – button */}
        <a
          href="#contact"
          className="px-4 py-1.5 rounded-full bg-orange-500 text-sm font-semibold text-black hover:bg-orange-400 transition"
        >
          Login / Subscribe
        </a>
      </nav>
    </header>
  );
}
