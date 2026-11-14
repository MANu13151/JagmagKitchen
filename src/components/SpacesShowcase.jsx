import React from "react";
import { Sparkles, Users, ArrowRight, Lamp, Trees, UtensilsCrossed } from "lucide-react";
import { SPACES_DATA } from "../data/menuData";

export default function SpacesShowcase({ onOpenBanquet, onOpenReservation }) {
  const icons = [Lamp, Trees, UtensilsCrossed];

  return (
    <section id="spaces" className="py-20 sm:py-28 bg-[#FEFAE0] text-[#283618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#606C38]/15 border border-[#606C38]/30 text-[#606C38] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#606C38]" />
            <span>Architectural Hospitality</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#283618] tracking-tight leading-[1.12]">
            Two Distinct Worlds. <br />
            <span className="font-serif italic font-normal text-[#BC6C25]">Under One Majestic Roof.</span>
          </h2>
          
          <p className="text-[#283618]/80 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Designed by architectural tastemakers in Jaipur, JAGMAG seamlessly merges the radiant grandeur of macramé cove lighting with a lush botanical atrium courtyard and an open-concept curated kitchen.
          </p>
        </div>

        {/* 3 Asymmetric Space Showcases */}
        <div className="space-y-16 lg:space-y-24">
          {SPACES_DATA.map((space, idx) => {
            const Icon = icons[idx];
            const isReversed = idx % 2 === 1;

            return (
              <div 
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Frame with Clean Border & No Overlapping Floating Text */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-3xl overflow-hidden border-2 border-[#283618]/25 bg-[#283618] shadow-2xl group">
                    <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden">
                      <img
                        src={space.image}
                        alt={space.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                      {/* Subtle Dark Vignette at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Top Pill */}
                      <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#283618]/90 backdrop-blur-md border border-[#DDA15E]/40 text-[#FEFAE0] text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#DDA15E]" />
                        <span>{space.tag}</span>
                      </div>

                      {/* Bottom Capacity Pill */}
                      <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-[#FEFAE0]/95 backdrop-blur-md border border-[#283618] text-[#283618] text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <Users className="w-3.5 h-3.5 text-[#BC6C25]" />
                        <span>{space.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#BC6C25]">
                      {space.num}
                    </span>
                    <span className="w-12 h-[1px] bg-[#BC6C25]/40"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#606C38]">
                      Signature Space
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#283618] tracking-tight mb-2">
                    {space.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#BC6C25] uppercase tracking-wider mb-4">
                    {space.subtitle}
                  </p>

                  <p className="text-[#283618]/85 text-sm sm:text-base leading-relaxed mb-8">
                    {space.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenBanquet}
                      className="btn-press px-6 py-3 rounded-full bg-[#283618] text-[#FEFAE0] font-bold text-xs uppercase tracking-wider hover:bg-[#606C38] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Host an Event Here</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DDA15E]" />
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="btn-press px-6 py-3 rounded-full bg-transparent text-[#283618] border border-[#283618] font-bold text-xs uppercase tracking-wider hover:bg-[#283618]/10 transition-colors cursor-pointer"
                    >
                      <span>Book a Dining Table</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
