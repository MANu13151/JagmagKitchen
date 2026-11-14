import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, Users, Calendar, Check, ArrowRight, 
  MessageSquare, Calculator, Crown, Award, Music 
} from "lucide-react";
import { BANQUET_PACKAGES } from "../data/menuData";
import { JAGMAG_INFO, JAGMAG_PHONE, getWhatsAppLink } from "../data/config";

export default function BanquetEstimator() {
  const [eventType, setEventType] = useState("Engagement / Roka");
  const [guestCount, setGuestCount] = useState(65);
  const [tier, setTier] = useState("royal");

  const eventTypes = [
    { label: "Engagement / Roka", icon: "💍", desc: "Grand decor & live food counters" },
    { label: "Birthday / Milestone", icon: "🎂", desc: "Cake table & celebratory setup" },
    { label: "Corporate Dinner", icon: "💼", desc: "AV setup & multi-course service" },
    { label: "Kitty Party / Social", icon: "✨", desc: "High tea & customized tapas" }
  ];

  const currentPackage = BANQUET_PACKAGES[tier];
  const subtotal = guestCount * currentPackage.pricePerGuest;
  const estimatedTax = Math.round(subtotal * 0.05); // 5% GST on restaurant banquet
  const totalEstimate = subtotal + estimatedTax;

  const handleTierSwitch = (newTier) => {
    setTier(newTier);
    if (newTier === "royal") {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#BC6C25", "#DDA15E", "#606C38", "#283618"]
        });
      } catch (e) {}
    }
  };

  const generateWhatsAppMessage = () => {
    return `*BANQUET INQUIRY — JAGMAG JAIPUR*\n• Event Type: ${eventType}\n• Guest Count: ${guestCount} Guests\n• Menu Package: ${currentPackage.name} (₹${currentPackage.pricePerGuest}/guest)\n• Estimated Package: ₹${subtotal.toLocaleString("en-IN")}\n• Preferred Venue: Chandelier Hall & Atrium Courtyard\n\nPlease share hall availability and schedule a venue walkthrough!`;
  };

  return (
    <section id="banquets" className="py-20 sm:py-28 bg-[#606C38]/10 text-[#283618] border-y border-[#283618]/15 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#283618] text-[#FEFAE0] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#DDA15E]" />
            <span>Interactive Event Calculator</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#283618] tracking-tight leading-[1.12]">
            Banquet & Private Event Estimator
          </h2>

          <p className="text-base sm:text-lg text-[#283618]/80 mt-3 font-normal max-w-2xl mx-auto">
            Plan your celebratory gathering for 30 to 150 guests with transparent per-head pricing, live food stations, and dedicated private zoning in C-Scheme, Jaipur.
          </p>
        </div>

        {/* Main Estimator Box */}
        <div className="bg-[#FEFAE0] rounded-3xl border-2 border-[#283618] shadow-[8px_8px_0px_#283618] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#283618]">
            
            {/* Left Controls: Event Type, Guests & Package Tiers */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              
              {/* 1. Event Type Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-3">
                  01 / Select Your Celebration
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {eventTypes.map((et) => {
                    const isSelected = eventType === et.label;
                    return (
                      <button
                        key={et.label}
                        type="button"
                        onClick={() => setEventType(et.label)}
                        className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#283618] text-[#FEFAE0] border-[#283618] shadow-md"
                            : "bg-[#FEFAE0] text-[#283618] border-[#283618]/30 hover:border-[#283618] hover:bg-[#606C38]/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-2xl">{et.icon}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#DDA15E]" />}
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm">{et.label}</div>
                          <div className={`text-[10px] mt-0.5 ${isSelected ? "text-[#FEFAE0]/70" : "text-[#283618]/60"}`}>
                            {et.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Guest Count Slider (25 to 150) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#283618]">
                    02 / Expected Guest Count
                  </label>
                  <span className="font-display font-black text-2xl text-[#BC6C25]">
                    {guestCount} Guests
                  </span>
                </div>

                <input
                  type="range"
                  min="25"
                  max="150"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-3 bg-[#606C38]/20 rounded-lg appearance-none cursor-pointer accent-[#283618]"
                />

                <div className="flex justify-between text-[11px] font-bold text-[#283618]/60 mt-1">
                  <span>25 Guests (Intimate)</span>
                  <span>75 Guests (Courtyard)</span>
                  <span>150 Guests (Full Venue)</span>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[30, 50, 75, 100, 125, 150].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                        guestCount === num
                          ? "bg-[#283618] text-[#FEFAE0] border-[#283618]"
                          : "bg-transparent text-[#283618] border-[#283618]/30 hover:border-[#283618]"
                      }`}
                    >
                      {num} Pax
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Menu Tier Selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-3">
                  03 / Curated Culinary Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Classic Tier */}
                  <div
                    onClick={() => handleTierSwitch("classic")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      tier === "classic"
                        ? "bg-[#283618] text-[#FEFAE0] border-[#283618] shadow-md"
                        : "bg-[#FEFAE0] text-[#283618] border-[#283618]/30 hover:border-[#283618]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider">Classic Feast</span>
                      <span className="font-mono font-black text-lg text-[#DDA15E]">₹999</span>
                    </div>
                    <div className="text-[11px] mb-2 opacity-80">Per Guest + 5% GST</div>
                    <div className="text-xs font-medium">
                      4 Courses • 14 Signature Dishes • Pan-Asian & Awadhi North Indian
                    </div>
                  </div>

                  {/* Royal Tier */}
                  <div
                    onClick={() => handleTierSwitch("royal")}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                      tier === "royal"
                        ? "bg-[#283618] text-[#FEFAE0] border-[#283618] shadow-md"
                        : "bg-[#FEFAE0] text-[#283618] border-[#283618]/30 hover:border-[#283618]"
                    }`}
                  >
                    <div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-[#BC6C25] text-[#FEFAE0] text-[10px] font-black uppercase tracking-wider shadow">
                      Most Popular
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        <Crown className="w-3.5 h-3.5 text-[#DDA15E]" />
                        <span>Royal Curated</span>
                      </span>
                      <span className="font-mono font-black text-lg text-[#DDA15E]">₹1,499</span>
                    </div>
                    <div className="text-[11px] mb-2 opacity-80">Per Guest + 5% GST</div>
                    <div className="text-xs font-medium">
                      6 Courses • 24 Items • Live Sushi & Dimsum Counters + Chaat Station
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Summary & WhatsApp Quotation */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#283618] text-[#FEFAE0] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#FEFAE0]/15 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA15E]">
                      Estimated Package
                    </span>
                    <h3 className="font-display font-black text-xl text-[#FEFAE0]">
                      {currentPackage.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-[#FEFAE0]/60">Rate / Guest</div>
                    <div className="font-mono font-black text-xl text-[#DDA15E]">
                      ₹{currentPackage.pricePerGuest}
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#DDA15E]">
                    Package Inclusions ({guestCount} Pax):
                  </div>
                  {currentPackage.highlights.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#FEFAE0]/90 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#606C38] flex items-center justify-center text-[10px] text-[#FEFAE0] flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div className="p-4 rounded-2xl bg-[#202C13] border border-[#DDA15E]/30 space-y-2 mb-6">
                  <div className="flex justify-between text-xs text-[#FEFAE0]/80">
                    <span>Base Catering ({guestCount} × ₹{currentPackage.pricePerGuest}):</span>
                    <span className="font-mono font-bold text-[#FEFAE0]">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-[#FEFAE0]/80">
                    <span>GST (5% Banquet Catering):</span>
                    <span className="font-mono font-bold text-[#FEFAE0]">
                      ₹{estimatedTax.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#FEFAE0]/15 flex justify-between items-baseline">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#DDA15E]">
                      Estimated Total:
                    </span>
                    <span className="font-display font-black text-2xl text-[#DDA15E]">
                      ₹{totalEstimate.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct 1-Click WhatsApp Inquire Button */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full py-4 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:bg-[#9D5518] transition-colors border border-[#DDA15E]/60 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#FEFAE0]" />
                  <span>Get Banquet Quote on WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-[#FEFAE0]/75">
                  ⚡ Direct line to Banquet General Manager ({JAGMAG_PHONE}). Fast turnaround on hall availability.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
