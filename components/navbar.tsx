'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-10 py-4 md:px-10 md:py-4 flex items-center justify-between bg-gradient-to-b from-[#04060f]/95 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'%3E%3Ccircle cx='22' cy='22' r='20' fill='%2300D4FF' opacity='0.1' stroke='%2300D4FF' stroke-width='2'/%3E%3Ctext x='22' y='26' text-anchor='middle' font-family='Arial' font-size='16' font-weight='bold' fill='%2300D4FF'%3EMR%3C/text%3E%3C/svg%3E" 
          alt="MotoRide" 
          className="w-11 h-11 object-contain"
        />
        <span className="font-orbitron font-black text-xl bg-gradient-to-r from-white to-[#00D4FF] bg-clip-text text-transparent">
          MOTORIDE
        </span>
      </div>
      
      <div className="hidden md:flex gap-7">
        <a href="#video" className="text-[#8892A4] text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
          Video
        </a>
        <a href="#como-funciona" className="text-[#8892A4] text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
          Cómo Funciona
        </a>
        <a href="#features" className="text-[#8892A4] text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
          Características
        </a>
        <a href="#cobertura" className="text-[#8892A4] text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
          Cobertura
        </a>
        <a href="#registro" className="text-[#8892A4] text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
          Registro
        </a>
      </div>
    </nav>
  )
}
