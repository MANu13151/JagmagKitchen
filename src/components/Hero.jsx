import React from "react";
import { Sparkles, Utensils, ArrowRight, Star } from "lucide-react";
import { JAGMAG_INFO } from "../data/config";

export default function Hero({ onOpenBanquet, onOpenReservation }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#283618] text-[#FEFAE0]">
      
      {/* Background Architectural Photograph with Warm Amber & Copper True Colors */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chandelier-dining-hall.jpg"
          alt="Jagmag Kitchen glowing macramé chandeliers and cove-lit curved dining hall"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-110 scale-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
        />
        {/* Neutral warm dark charcoal vignette with zero green tint over the chandeliers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#283618]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        
        {/* Editorial Sub-Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#202C13]/85 backdrop-blur-md border border-[#DDA15E]/50 text-[#DDA15E] text-xs font-bold tracking-[0.18em] uppercase mb-8 shadow-xl">
          <span className="font-devanagari text-sm text-[#DDA15E]">जगमग</span>
          <span className="text-[#FEFAE0]/40">•</span>
          <span className="flex items-center gap-1 text-[#FEFAE0]">
            <Star className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
            {JAGMAG_INFO.rating} Rating
          </span>
          <span className="text-[#FEFAE0]/40">•</span>
          <span className="whitespace-nowrap">Curated Multicuisine & Private Banquets</span>
        </div>

        {/* Regal Display Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#FEFAE0] tracking-tight leading-[1.06] mb-6 max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          Where Warmth Meets <br />
          <span className="font-serif italic font-normal text-[#DDA15E]">Grand Celebration.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-[#FEFAE0] max-w-2xl font-light leading-relaxed mb-10 text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          From artisanal sushi and slow-simmered North Indian delicacies under macramé chandeliers to bespoke private banquets for 30 to 150 guests.
        </p>

        {/* Dual High-Hospitality CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-14 w-full sm:w-auto">
          <button
            onClick={onOpenBanquet}
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold text-sm uppercase tracking-widest border border-[#DDA15E]/60 shadow-[0_8px_25px_rgba(188,108,37,0.4)] hover:bg-[#9D5518] flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#FEFAE0]" />
            <span>Plan a Banquet / Event</span>
            <ArrowRight className="w-4 h-4 text-[#FEFAE0]" />
          </button>

          <button
            onClick={onOpenReservation}
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full bg-[#202C13]/90 text-[#DDA15E] font-bold text-sm uppercase tracking-widest border border-[#DDA15E]/60 hover:bg-[#606C38]/40 flex items-center justify-center gap-2.5 backdrop-blur-sm cursor-pointer shadow-md whitespace-nowrap"
          >
            <Utensils className="w-4 h-4 text-[#DDA15E]" />
            <span>Reserve Dining Table</span>
          </button>
        </div>

        {/* Four Architectural Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-[#DDA15E]/30 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#202C13]/80 backdrop-blur-sm border border-[#DDA15E]/30 text-center shadow-lg">
            <div className="text-[11px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Atmosphere</div>
            <div className="font-semibold text-[#FEFAE0]">Macramé Chandeliers</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#202C13]/80 backdrop-blur-sm border border-[#DDA15E]/30 text-center shadow-lg">
            <div className="text-[11px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Outdoor Vibe</div>
            <div className="font-semibold text-[#FEFAE0]">Tropical Courtyard</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#202C13]/80 backdrop-blur-sm border border-[#DDA15E]/30 text-center shadow-lg">
            <div className="text-[11px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Private Banquets</div>
            <div className="font-semibold text-[#FEFAE0]">30 to 150 Guests</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#202C13]/80 backdrop-blur-sm border border-[#DDA15E]/30 text-center shadow-lg">
            <div className="text-[11px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Convenience</div>
            <div className="font-semibold text-[#FEFAE0]">Valet & C-Scheme Hub</div>
          </div>
        </div>

      </div>

    </section>
  );
}
