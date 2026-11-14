import React from "react";
import { 
  MapPin, Clock, Phone, Sparkles, Navigation, 
  ExternalLink, Heart, Shield, Car, MessageSquare 
} from "lucide-react";
import { JAGMAG_INFO, JAGMAG_PHONE, getWhatsAppLink } from "../data/config";

export default function LocationFooter({ onOpenBanquet, onOpenReservation }) {
  return (
    <footer id="visit" className="bg-[#283618] text-[#FEFAE0] pt-20 pb-12 border-t-2 border-[#DDA15E]/40 relative overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#606C38]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hospitality Banner */}
        <div className="bg-[#202C13] rounded-3xl p-8 sm:p-12 border-2 border-[#DDA15E]/40 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#283618] border border-[#DDA15E]/40 text-[#DDA15E] text-xs font-bold uppercase tracking-wider mb-4">
                <Car className="w-3.5 h-3.5 text-[#DDA15E]" />
                <span>Complimentary Valet Parking Available</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#FEFAE0] tracking-tight mb-3">
                Experience the Magic of JAGMAG.
              </h2>

              <p className="text-sm sm:text-base text-[#FEFAE0]/80 font-light max-w-2xl leading-relaxed">
                Whether hosting an intimate anniversary dinner for two under our glowing macramé chandeliers, or an exquisite 150-guest engagement feast in the private banquet hall.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenBanquet}
                className="btn-press w-full py-4 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-black text-xs uppercase tracking-widest border border-[#DDA15E]/60 shadow-lg hover:bg-[#9D5518] cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FEFAE0]" />
                <span>Inquire Banquet Hall</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="btn-press w-full py-4 rounded-full bg-[#283618] text-[#DDA15E] border-2 border-[#DDA15E]/60 font-black text-xs uppercase tracking-widest hover:bg-[#606C38]/30 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Reserve Dining Table</span>
              </button>
            </div>

          </div>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#202C13] rounded-3xl p-8 border-2 border-[#DDA15E]/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-devanagari text-lg text-[#DDA15E]">जगमग</span>
                <span className="text-[#FEFAE0]/40">•</span>
                <span className="font-display text-xs uppercase font-extrabold tracking-widest text-[#DDA15E]">
                  Curated Kitchen & Banquets
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FEFAE0] mb-6">
                Visit Us in Jaipur
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#283618] border border-[#DDA15E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#DDA15E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#DDA15E] text-xs uppercase tracking-wider">Address:</span>
                    <p className="text-xs text-[#FEFAE0]/85 mt-0.5 font-light leading-relaxed">
                      {JAGMAG_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#DDA15E]/70 font-semibold mt-0.5">
                      {JAGMAG_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#283618] border border-[#DDA15E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#DDA15E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#DDA15E] text-xs uppercase tracking-wider">Dining Hours:</span>
                    <p className="text-xs text-[#FEFAE0]/85 mt-0.5 font-light">
                      {JAGMAG_INFO.diningHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#283618] border border-[#DDA15E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#DDA15E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#DDA15E] text-xs uppercase tracking-wider">Banquet Manager & Table Desk:</span>
                    <p className="text-xs text-[#FEFAE0]/85 mt-0.5 font-mono font-bold">
                      <a href={`tel:${JAGMAG_PHONE}`} className="hover:text-[#DDA15E] transition-colors">
                        {JAGMAG_PHONE}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#FEFAE0]/15 mt-6 flex gap-3">
              <a
                href={JAGMAG_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex-1 py-3 px-4 rounded-xl bg-[#283618] border border-[#DDA15E]/40 text-xs font-bold text-[#FEFAE0] flex items-center justify-center gap-1.5 hover:bg-[#606C38]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#DDA15E]" />
                <span>Get Directions</span>
              </a>
              <a
                href={getWhatsAppLink("Hi Jagmag, I'd like to check table and banquet availability!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex-1 py-3 px-4 rounded-xl bg-[#BC6C25] text-[#FEFAE0] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#9D5518]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FEFAE0]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Map Frame with Architectural Grid Graphic */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#DDA15E]/30 bg-[#202C13] min-h-[340px] relative flex flex-col justify-between p-6 sm:p-8 shadow-xl">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DDA15E" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <line x1="0" y1="280" x2="800" y2="60" stroke="#DDA15E" strokeWidth="8" strokeLinecap="round" />
                <line x1="0" y1="280" x2="800" y2="60" stroke="#283618" strokeWidth="4" strokeDasharray="10 10" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#283618] border border-[#DDA15E]/40 text-xs font-black uppercase text-[#DDA15E] tracking-wider shadow">
                Prime C-Scheme District
              </span>
              <span className="text-xs font-bold text-[#FEFAE0]/80 bg-[#283618]/80 px-2.5 py-0.5 rounded border border-[#DDA15E]/30">
                Near Ahimsa Circle
              </span>
            </div>

            {/* Central Pin Box */}
            <div className="relative z-10 self-center my-6 max-w-sm w-full bg-[#283618] p-5 rounded-2xl border-2 border-[#DDA15E]/60 shadow-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#BC6C25] text-[#FEFAE0] flex items-center justify-center mx-auto mb-2.5 shadow-md">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <div className="font-devanagari text-xs text-[#DDA15E]">जगमग</div>
              <h4 className="font-display font-black text-xl text-[#FEFAE0] tracking-wide">
                JAGMAG JAIPUR
              </h4>
              <p className="text-xs font-light text-[#FEFAE0]/80 mt-1">
                S-54, Arvind Marg, Near Ahimsa Circle, C-Scheme, Jaipur
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#606C38]/40 text-[#DDA15E] text-[11px] font-bold border border-[#DDA15E]/30">
                <Sparkles className="w-3 h-3" />
                <span>Dedicated Valet Staff Stationed at Entrance</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#FEFAE0]/15">
              <span className="text-xs font-bold text-[#DDA15E]">
                Coordinates: 26.912° N, 75.795° E
              </span>
              <a
                href={JAGMAG_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press px-4 py-2 rounded-xl bg-[#BC6C25] text-[#FEFAE0] text-xs font-bold flex items-center gap-1.5 shadow hover:bg-[#9D5518]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-[#FEFAE0]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#FEFAE0]/70">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-[#FEFAE0]">JAGMAG</span>
            <span className="font-devanagari text-xs text-[#DDA15E]">जगमग</span>
            <span>•</span>
            <span>Curated Kitchen & Luxury Banquets, Jaipur</span>
          </div>

          <div className="flex items-center gap-1 text-[#FEFAE0]/80">
            <span>Crafted with hospitality & warmth for Jaipur's tastemakers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
