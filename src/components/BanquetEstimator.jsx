import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, Users, Calendar, Check, ArrowRight, 
  MessageSquare, Calculator, Crown, Award, Music, Building2, Trees, PartyPopper
} from "lucide-react";
import { BANQUET_PACKAGES } from "../data/menuData";
import { JAGMAG_INFO, JAGMAG_PHONE, JAGMAG_PHONE_DISPLAY, getWhatsAppLink } from "../data/config";

// Animated Number Ticker Component (OpenMotion style)
function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 280; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quintic
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(start + (end - start) * ease);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [value]);

  return <span>₹{displayValue.toLocaleString("en-IN")}</span>;
}

export default function BanquetEstimator() {
  const [eventType, setEventType] = useState("Engagement / Roka");
  const [preferredZone, setPreferredZone] = useState("Chandelier Banquet Hall");
  const [guestCount, setGuestCount] = useState(65);
  const [tier, setTier] = useState("royal");

  const eventTypes = [
    { label: "Engagement / Roka", icon: "💍", desc: "Custom decor & live food counters" },
    { label: "Birthday / Milestone", icon: "🎂", desc: "Celebratory cake & lounge setup" },
    { label: "Corporate Gala", icon: "💼", desc: "AV presentation & formal multi-course" },
    { label: "Kitty Party / Social", icon: "✨", desc: "Artisanal high-tea & tapas stations" }
  ];

  const zones = [
    { label: "Chandelier Banquet Hall", cap: "30–120 Pax", icon: Building2 },
    { label: "Tropical Atrium Courtyard", cap: "25–75 Pax", icon: Trees },
    { label: "Full Venue Buyout", cap: "80–150 Pax", icon: PartyPopper }
  ];

  const currentPackage = BANQUET_PACKAGES[tier];
  const subtotal = guestCount * currentPackage.pricePerGuest;
  const estimatedTax = Math.round(subtotal * 0.05); // 5% GST
  const totalEstimate = subtotal + estimatedTax;

  const handleTierSwitch = (newTier) => {
    setTier(newTier);
    if (newTier === "royal") {
      try {
        confetti({
          particleCount: 55,
          spread: 65,
          origin: { y: 0.65 },
          colors: ["#BC6C25", "#DDA15E", "#606C38", "#283618"]
        });
      } catch (e) {}
    }
  };

  const generateWhatsAppMessage = () => {
    return `*BANQUET & EVENT INQUIRY — JAGMAG JAIPUR*\n• Event Type: ${eventType}\n• Preferred Zone: ${preferredZone}\n• Guest Count: ${guestCount} Guests\n• Package Tier: ${currentPackage.name} (₹${currentPackage.pricePerGuest}/guest)\n• Estimated Total: ₹${totalEstimate.toLocaleString("en-IN")} (incl. 5% GST)\n\nPlease share hall availability and schedule a private venue walkthrough!`;
  };

  return (
    <section id="banquets" className="py-20 sm:py-28 bg-[#606C38]/10 text-[#283618] border-y border-[#283618]/15 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#283618] text-[#FEFAE0] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#DDA15E]" />
            <span>Interactive Event Calculator</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#283618] tracking-tight leading-[1.12]">
            Banquet & Private Event Estimator
          </h2>

          <p className="text-base sm:text-lg text-[#283618]/85 mt-3 font-normal max-w-2xl mx-auto">
            Plan your celebratory banquet for 30 to 150 guests with transparent per-head pricing, live food stations, and dedicated private zoning in C-Scheme, Jaipur.
          </p>
        </div>

        {/* Main Split Estimator Box */}
        <div className="bg-[#FEFAE0] rounded-3xl border-2 border-[#283618] shadow-[8px_8px_0px_#283618] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#283618]">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              
              {/* Step 1 — Celebration Type */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-3">
                  Step 1 — Celebration Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {eventTypes.map((et) => {
                    const isSelected = eventType === et.label;
                    return (
                      <button
                        key={et.label}
                        type="button"
                        onClick={() => setEventType(et.label)}
                        className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[82px] ${
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
                          <div className={`text-[10px] mt-0.5 ${isSelected ? "text-[#FEFAE0]/75" : "text-[#283618]/60"}`}>
                            {et.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 — Preferred Zone */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-3">
                  Step 2 — Preferred Venue Zone
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {zones.map((z) => {
                    const Icon = z.icon;
                    const isSelected = preferredZone === z.label;
                    return (
                      <button
                        key={z.label}
                        type="button"
                        onClick={() => setPreferredZone(z.label)}
                        className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#283618] text-[#FEFAE0] border-[#283618] shadow-sm"
                            : "bg-[#FEFAE0] text-[#283618] border-[#283618]/30 hover:border-[#283618]"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Icon className={`w-4 h-4 ${isSelected ? "text-[#DDA15E]" : "text-[#606C38]"}`} />
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${isSelected ? "bg-[#606C38] text-[#FEFAE0]" : "bg-[#283618]/10 text-[#283618]"}`}>
                            {z.cap}
                          </span>
                        </div>
                        <div className="font-bold text-xs leading-snug">{z.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 — Guest Slider & Package Tier */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#283618]">
                    Step 3 — Expected Guests
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
                  <span>25 Pax (Intimate)</span>
                  <span>75 Pax (Courtyard)</span>
                  <span>150 Pax (Full Buyout)</span>
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

              {/* Tier Toggle */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-3">
                  Curated Culinary Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Classic */}
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
                      4 Courses • 14 Signature Plates • Pan-Asian & Awadhi North Indian
                    </div>
                  </div>

                  {/* Royal */}
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
                      Live Estimate Receipt
                    </span>
                    <h3 className="font-display font-black text-xl text-[#FEFAE0]">
                      {currentPackage.name}
                    </h3>
                    <p className="text-xs text-[#DDA15E] mt-0.5 font-medium">
                      Selected: {preferredZone}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-[#FEFAE0]/60">Rate / Pax</div>
                    <div className="font-mono font-black text-xl text-[#DDA15E]">
                      ₹{currentPackage.pricePerGuest}
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#DDA15E]">
                    Package Inclusions ({guestCount} Pax):
                  </div>
                  {currentPackage.highlights.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#FEFAE0]/90 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#606C38] flex items-center justify-center text-[10px] text-[#FEFAE0] flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Animated Number Cost Breakdown (OpenMotion Ticker) */}
                <div className="p-4 rounded-2xl bg-[#1B2510] border border-[#DDA15E]/30 space-y-2 mb-6">
                  <div className="flex justify-between text-xs text-[#FEFAE0]/80">
                    <span>Base Catering ({guestCount} × ₹{currentPackage.pricePerGuest}):</span>
                    <span className="font-mono font-bold text-[#FEFAE0]">
                      <AnimatedNumber value={subtotal} />
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-[#FEFAE0]/80">
                    <span>GST (5% Banquet Catering):</span>
                    <span className="font-mono font-bold text-[#FEFAE0]">
                      <AnimatedNumber value={estimatedTax} />
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#FEFAE0]/15 flex justify-between items-baseline">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#DDA15E]">
                      Estimated Total:
                    </span>
                    <span className="font-display font-black text-2xl text-[#DDA15E]">
                      <AnimatedNumber value={totalEstimate} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quote Button to JAGMAG_PHONE */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full py-4 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:bg-[#9D5518] transition-colors border border-[#DDA15E]/60 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#FEFAE0]" />
                  <span>Send Banquet Inquiry to Manager on WhatsApp ({JAGMAG_PHONE_DISPLAY})</span>
                </a>

                <p className="text-[11px] text-center text-[#FEFAE0]/70">
                  ⚡ Direct line to Banquet General Manager ({JAGMAG_PHONE_DISPLAY}). Fast turnaround on hall availability.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
