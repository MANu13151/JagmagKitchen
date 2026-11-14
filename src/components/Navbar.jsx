import React, { useState } from "react";
import { Sparkles, Calendar, Utensils, MapPin, Menu, X } from "lucide-react";
import { JAGMAG_INFO } from "../data/config";

export default function Navbar({ onOpenBanquet, onOpenReservation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#283618]/95 backdrop-blur-md border-b border-[#DDA15E]/20 text-[#FEFAE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left Brand Emblem */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#606C38]/40 border border-[#DDA15E]/40 flex flex-col items-center justify-center text-[#FEFAE0] shadow-inner group-hover:border-[#DDA15E] transition-all">
              <span className="font-devanagari text-[11px] sm:text-xs text-[#DDA15E] leading-none">जगमग</span>
              <span className="font-display text-xs sm:text-sm font-black tracking-widest text-[#FEFAE0] leading-none mt-0.5">J</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-[0.08em] text-[#FEFAE0] whitespace-nowrap">
                  JAGMAG
                </span>
                <span className="text-[11px] font-devanagari text-[#DDA15E] font-medium tracking-wide">
                  जगमग
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.16em] text-[#DDA15E]/80 mt-0.5 whitespace-nowrap">
                Curated Kitchen & Banquets • Jaipur
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Guaranteed Single Row */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] xl:text-[14px] font-semibold tracking-wide text-[#FEFAE0]/90 whitespace-nowrap">
            <a 
              href="#spaces" 
              className="whitespace-nowrap hover:text-[#DDA15E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DDA15E] hover:after:w-full after:transition-all"
            >
              The Spaces
            </a>
            <a 
              href="#banquets" 
              className="whitespace-nowrap hover:text-[#DDA15E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DDA15E] hover:after:w-full after:transition-all flex items-center gap-1.5"
            >
              <span>Banquets & Events</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#BC6C25]/40 text-[#FEFAE0] border border-[#BC6C25]/60 font-bold whitespace-nowrap">
                30-150 Pax
              </span>
            </a>
            <a 
              href="#menu" 
              className="whitespace-nowrap hover:text-[#DDA15E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DDA15E] hover:after:w-full after:transition-all"
            >
              Curated Menu
            </a>
            <a 
              href="#visit" 
              className="whitespace-nowrap hover:text-[#DDA15E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DDA15E] hover:after:w-full after:transition-all"
            >
              Visit & Valet
            </a>
          </nav>

          {/* Right Dual CTAs - Guaranteed Single Row */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0 whitespace-nowrap">
            <button
              onClick={onOpenBanquet}
              className="btn-press whitespace-nowrap px-4 xl:px-5 py-2.5 rounded-full bg-[#BC6C25] text-[#FEFAE0] text-xs font-bold tracking-wider uppercase border border-[#DDA15E]/40 hover:bg-[#9D5518] shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FEFAE0]" />
              <span className="whitespace-nowrap">Inquire Banquet</span>
            </button>

            <button
              onClick={onOpenReservation}
              className="btn-press whitespace-nowrap px-4 xl:px-5 py-2.5 rounded-full bg-[#202C13] text-[#DDA15E] text-xs font-bold tracking-wider uppercase border border-[#DDA15E]/60 hover:bg-[#606C38]/40 shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <Utensils className="w-3.5 h-3.5 text-[#DDA15E]" />
              <span className="whitespace-nowrap">Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBanquet}
              className="btn-press whitespace-nowrap px-3 py-1.5 rounded-full bg-[#BC6C25] text-[#FEFAE0] text-[11px] font-bold uppercase tracking-wider"
            >
              Banquet
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#FEFAE0] hover:bg-[#606C38]/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#DDA15E]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#202C13] border-b border-[#DDA15E]/30 px-5 pt-4 pb-8 space-y-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#283618] border border-[#DDA15E]/20 text-xs font-semibold text-[#DDA15E]">
            <MapPin className="w-4 h-4 text-[#DDA15E]" />
            <span>C-Scheme, Jaipur • Valet Parking</span>
          </div>

          <a
            href="#spaces"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#FEFAE0] hover:bg-[#606C38]/30"
          >
            The Spaces (Chandelier Hall & Atrium)
          </a>
          <a
            href="#banquets"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#FEFAE0] hover:bg-[#606C38]/30"
          >
            Banquet & Private Event Estimator
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#FEFAE0] hover:bg-[#606C38]/30"
          >
            Curated Kitchen Menu
          </a>
          <a
            href="#visit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[#FEFAE0] hover:bg-[#606C38]/30"
          >
            Location & Dining Hours
          </a>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBanquet();
              }}
              className="w-full py-3 rounded-full bg-[#BC6C25] text-[#FEFAE0] text-center font-bold text-xs uppercase tracking-widest shadow-md"
            >
              Inquire Banquet (30–150 Pax)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-full bg-[#283618] text-[#DDA15E] border border-[#DDA15E]/60 text-center font-bold text-xs uppercase tracking-widest"
            >
              Reserve Dining Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
