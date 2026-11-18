import React from "react";
import { Sparkles, Utensils, ArrowRight, Star, Trees, Users, Flame, ShieldCheck } from "lucide-react";
import { JAGMAG_INFO } from "../data/config";

export default function Hero({ onOpenBanquet, onOpenReservation, onOpenQr }) {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#1A2312] text-[#FEFAE0]">
      
      {/* Background Architectural Photograph with Neutral Warm Charcoal Vignette (Zero Green Tint) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chandelier-dining-hall.jpg"
          alt="Jagmag Kitchen glowing macramé chandeliers and cove-lit curved dining hall"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105 saturate-110 scale-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
        />
        {/* Neutral warm charcoal gradient vignette that blends into #1A2312 only at bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#1A2312]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        
        {/* Staggered Entrance Badge (Powered by OpenMotion) */}
        <div className="animate-entrance-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#120F0D]/80 backdrop-blur-md border border-[#DDA15E]/50 text-[#DDA15E] text-xs font-bold tracking-[0.18em] uppercase mb-8 shadow-2xl">
          <span className="font-devanagari text-sm text-[#DDA15E]">जगमग</span>
          <span className="text-[#FEFAE0]/40">•</span>
          <span className="flex items-center gap-1 text-[#FEFAE0]">
            <Star className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
            {JAGMAG_INFO.rating} Rated
          </span>
          <span className="text-[#FEFAE0]/40">•</span>
          <span className="whitespace-nowrap">Multicuisine Dining & Private Banquets</span>
        </div>

        {/* Dramatic Editorial Headline */}
        <h1 className="animate-entrance-2 font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#FEFAE0] tracking-tight leading-[1.06] mb-6 max-w-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          Where Warmth Meets <br />
          <span className="font-serif italic font-normal text-[#DDA15E]">Grand Celebration.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-entrance-3 text-base sm:text-xl text-[#FEFAE0]/95 max-w-2xl font-light leading-relaxed mb-10 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          From artisanal sushi and slow-simmered North Indian delicacies under macramé chandeliers to bespoke private banquets for 30 to 150 guests in Jaipur.
        </p>

        {/* Dual High-Converting CTAs */}
        <div className="animate-entrance-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto">
          <button
            onClick={onOpenBanquet}
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold text-sm uppercase tracking-widest border border-[#DDA15E]/60 shadow-[0_8px_25px_rgba(188,108,37,0.45)] hover:bg-[#9D5518] flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#FEFAE0]" />
            <span>Calculate Banquet Package</span>
            <ArrowRight className="w-4 h-4 text-[#FEFAE0]" />
          </button>

          <button
            onClick={onOpenReservation}
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full bg-[#120F0D]/90 text-[#DDA15E] font-bold text-sm uppercase tracking-widest border border-[#DDA15E]/60 hover:bg-[#606C38]/40 flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer shadow-xl whitespace-nowrap"
          >
            <Utensils className="w-4 h-4 text-[#DDA15E]" />
            <span>Reserve Dining Table</span>
          </button>
        </div>

        {/* Quick Tap Table QR Trigger for Guests on Mobile */}
        <div className="w-full max-w-sm mb-10">
          <button
            onClick={onOpenQr}
            className="btn-press w-full py-2.5 px-4 rounded-full bg-[#DDA15E]/15 border border-[#DDA15E]/50 hover:bg-[#DDA15E]/25 text-[#DDA15E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Sitting at a Table? Open Live Table QR Menu</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DDA15E]" />
          </button>
        </div>

        {/* Floating Motion-Framed Card: Tropical Atrium Courtyard Preview */}
        <div className="w-full max-w-2xl mb-12 animate-float">
          <div className="p-3 sm:p-4 rounded-3xl bg-[#120F0D]/75 backdrop-blur-md border border-[#DDA15E]/40 shadow-2xl flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="w-full sm:w-36 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-[#DDA15E]/30 relative">
              <img
                src="/assets/tropical-atrium-courtyard.jpg"
                alt="Tropical Atrium Courtyard at Jagmag"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                loading="eager"
              />
              <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#120F0D]/90 text-[9px] font-bold uppercase tracking-wider text-[#DDA15E]">
                Open-Air
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Trees className="w-4 h-4 text-[#606C38]" />
                <h4 className="font-display font-bold text-sm text-[#FEFAE0]">
                  The Tropical Atrium Courtyard
                </h4>
              </div>
              <p className="text-xs text-[#FEFAE0]/80 font-light leading-relaxed">
                Indoor broadleaf palms, hanging woven lanterns, and terraced planters for evening cocktails & intimate banquets (Up to 75 Pax).
              </p>
            </div>
            <a
              href="#spaces"
              className="px-4 py-2 rounded-xl bg-[#606C38]/40 border border-[#DDA15E]/30 text-xs font-bold text-[#DDA15E] hover:bg-[#606C38] hover:text-[#FEFAE0] transition-colors whitespace-nowrap self-stretch sm:self-center flex items-center justify-center gap-1"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Below-the-Fold 4-Pill Venue Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-xs">
          <div className="p-3.5 rounded-2xl bg-[#120F0D]/85 backdrop-blur-md border border-[#DDA15E]/30 text-center shadow-lg hover:border-[#DDA15E] transition-colors">
            <div className="text-[10px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Grand Banquets</div>
            <div className="font-semibold text-[#FEFAE0]">150-Pax Chandelier Hall</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#120F0D]/85 backdrop-blur-md border border-[#DDA15E]/30 text-center shadow-lg hover:border-[#DDA15E] transition-colors">
            <div className="text-[10px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Botanical Terrace</div>
            <div className="font-semibold text-[#FEFAE0]">75-Pax Tropical Courtyard</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#120F0D]/85 backdrop-blur-md border border-[#DDA15E]/30 text-center shadow-lg hover:border-[#DDA15E] transition-colors">
            <div className="text-[10px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Epicurean Craft</div>
            <div className="font-semibold text-[#FEFAE0]">Live Sushi & Awadhi Food</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#120F0D]/85 backdrop-blur-md border border-[#DDA15E]/30 text-center shadow-lg hover:border-[#DDA15E] transition-colors">
            <div className="text-[10px] text-[#DDA15E] font-bold uppercase tracking-wider mb-0.5">Guest Convenience</div>
            <div className="font-semibold text-[#FEFAE0]">Complimentary Valet</div>
          </div>
        </div>

      </div>

    </section>
  );
}
