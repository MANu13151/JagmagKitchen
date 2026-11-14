import React, { useState } from "react";
import { Sparkles, Utensils, QrCode, ArrowRight, Star } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { getWhatsAppLink } from "../data/config";

export default function CuratedMenu({ onOpenQr, onOpenReservation }) {
  const [activeTab, setActiveTab] = useState("sushi");

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#283618] text-[#FEFAE0] relative overflow-hidden">
      
      {/* Decorative Warm Vignette */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#BC6C25]/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#FEFAE0]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#606C38]/40 border border-[#DDA15E]/40 text-[#DDA15E] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#DDA15E]" />
              <span>Epicurean Selection</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#FEFAE0] tracking-tight">
              The Curated Kitchen Menu
            </h2>
            
            <p className="text-sm sm:text-base text-[#FEFAE0]/80 mt-2 max-w-xl font-light">
              Crafted fresh for your table: rolled avocado maki, slow-simmered Awadhi gravies, wood-fired flatbreads, and botanical craft coolers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQr}
              className="btn-press px-5 py-3 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-[#9D5518] cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-[#FEFAE0]" />
              <span>Preview Table QR Menu</span>
            </button>
          </div>
        </div>

        {/* Featured Dish Showcase: Avocado Maki Roll (1000052779.png) */}
        <div className="mb-16 bg-[#202C13] rounded-3xl border-2 border-[#DDA15E]/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#DDA15E]/30 bg-black/40 h-72 sm:h-80">
              <img
                src="/assets/avocado-sushi-maki.jpg"
                alt="Artisanal Avocado and Cream Cheese Maki Roll with engraved Jagmag wooden cutlery box"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-devanagari text-xs text-[#DDA15E] bg-[#283618] px-2.5 py-0.5 rounded border border-[#DDA15E]/40">
                    जगमग खास • Chef's Signature
                  </span>
                  <span className="text-xs font-bold text-[#606C38] uppercase">Pan-Asian Delicacy</span>
                </div>

                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FEFAE0]">
                    Avocado & Cream Cheese Maki
                  </h3>
                  <span className="font-mono font-bold text-xl sm:text-2xl text-[#DDA15E]">₹445</span>
                </div>

                <p className="text-sm sm:text-base text-[#FEFAE0]/80 leading-relaxed font-light mb-6">
                  Hand-rolled fresh sushi rolls filled with buttery Hass avocado and silken Philadelphia cream cheese, finished with toasted sesame, pink pickled ginger, wasabi rosette, and authentic Japanese shoyu. Served alongside the signature engraved "जगमग" cutlery service.
                </p>

                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#283618] border border-[#DDA15E]/20 text-xs mb-6">
                  <div>
                    <div className="text-[10px] text-[#FEFAE0]/50 uppercase font-bold">Portion</div>
                    <div className="font-bold text-[#DDA15E]">8 Pieces</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#FEFAE0]/50 uppercase font-bold">Dietary</div>
                    <div className="font-bold text-[#DDA15E]">100% Vegetarian</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#FEFAE0]/50 uppercase font-bold">Pairing</div>
                    <div className="font-bold text-[#DDA15E]">Matcha Cooler</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={getWhatsAppLink("Hi Jagmag, I'd like to reserve a table and pre-order the Avocado & Cream Cheese Maki Roll!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press px-6 py-3 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#9D5518]"
                >
                  <span>Pre-order for Table</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn-press px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#FEFAE0] text-[#283618] border-2 border-[#FEFAE0] shadow-md"
                    : "bg-[#202C13] text-[#FEFAE0]/80 border border-[#FEFAE0]/20 hover:border-[#DDA15E]"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-[#283618] text-[#DDA15E]" : "bg-[#283618]/60 text-[#FEFAE0]/60"
                }`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MENU_ITEMS[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#202C13]/90 border border-[#DDA15E]/20 hover:border-[#DDA15E]/60 transition-all flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-sm border border-emerald-500 flex items-center justify-center p-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <h4 className="font-display font-bold text-lg sm:text-xl text-[#FEFAE0] group-hover:text-[#DDA15E] transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <span className="font-mono font-black text-lg text-[#DDA15E] flex-shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#FEFAE0]/75 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#FEFAE0]/10 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-[#283618] border border-[#DDA15E]/40 text-[#DDA15E] text-[10px] font-bold uppercase tracking-wider">
                  {item.tag}
                </span>

                <a
                  href={getWhatsAppLink(`Hi Jagmag, I'd like to pre-order ${item.name} (${item.price}) for my upcoming visit!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#DDA15E] hover:text-[#FEFAE0] transition-colors flex items-center gap-1"
                >
                  <span>Pre-order</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
