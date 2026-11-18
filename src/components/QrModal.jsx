import React, { useState } from "react";
import { X, QrCode, Plus, Minus, Smartphone, Sparkles, Wifi, Battery, Signal, Copy, Check, ExternalLink, Camera } from "lucide-react";
import { JAGMAG_INFO, JAGMAG_PHONE, JAGMAG_PHONE_DISPLAY, getWhatsAppLink } from "../data/config";

export default function QrModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("simulator"); // "simulator" | "scan"
  const [selectedTable, setSelectedTable] = useState("Table 08 • Chandelier Hall");
  const [cart, setCart] = useState([
    { name: "Avocado & Cream Cheese Maki", price: 445, qty: 1 },
    { name: "Dal Jagmag Makhani (24-Hr Slow Simmer)", price: 395, qty: 1 },
    { name: "Garlic & Truffle Naan Basket", price: 225, qty: 2 }
  ]);
  const [orderSent, setOrderSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const localNetworkUrl = "http://192.168.0.11:5230/";
  const currentUrl = typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"
    ? window.location.href
    : localNetworkUrl;

  const tables = [
    "Table 02 • Window Cove Booth",
    "Table 05 • Macramé Chandelier Center",
    "Table 08 • Chandelier Hall",
    "Table 12 • Tropical Atrium Courtyard",
    "Table 14 • Terrace Palm Canopy",
    "Banquet Hall VIP 01"
  ];

  const updateQty = (idx, delta) => {
    setCart((prev) => {
      const copy = [...prev];
      copy[idx].qty = Math.max(0, copy[idx].qty + delta);
      return copy.filter((i) => i.qty > 0);
    });
  };

  const addItem = (name, price) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSendOrder = () => {
    const list = cart.map((i) => `• ${i.qty}x ${i.name} (₹${i.price * i.qty})`).join("\n");
    const msg = `*LIVE TABLE ORDER — JAGMAG JAIPUR*\n${selectedTable}\n\n*Items:*\n${list}\n\n*Total Bill:* ₹${subtotal}\n_Sent via Contactless Table QR Menu_`;
    setOrderSent(true);
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), "_blank");
      setOrderSent(false);
    }, 400);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Outer Modal Container: Fullscreen on mobile, Sleek iPhone frame on desktop */}
      <div 
        className="w-full h-full sm:h-auto sm:max-w-md sm:max-h-[92vh] bg-[#120F0D] sm:rounded-[36px] rounded-none sm:border-4 sm:border-[#3A4E24] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Desktop Phone Status Bar (Hidden on ultra-small mobile screens to save screen height) */}
        <div className="hidden sm:flex bg-[#120F0D] px-6 pt-3 pb-2 items-center justify-between text-[#FEFAE0]/70 text-[11px] font-semibold border-b border-[#DDA15E]/15">
          <span>9:41 AM</span>
          {/* Dynamic Island */}
          <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 border border-[#FEFAE0]/10">
            <span className="w-2 h-2 rounded-full bg-[#DDA15E]/70 animate-pulse"></span>
            <span className="text-[9px] text-[#DDA15E] font-devanagari">जगमग</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#FEFAE0]">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Manager Header / Title & Close Button */}
        <div className="px-4 py-3 bg-[#1A2312] border-b border-[#DDA15E]/20 text-[#FEFAE0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#BC6C25] flex items-center justify-center text-[#FEFAE0] shadow-sm">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#FEFAE0] flex items-center gap-1.5">
                <span>Contactless Table QR Experience</span>
              </div>
              <p className="text-[10px] text-[#DDA15E] font-medium">
                Tested for in-restaurant dining & banquets
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#202C13] border border-[#DDA15E]/30 flex items-center justify-center text-[#FEFAE0] hover:bg-[#606C38] cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Switch Tabs: Simulator vs Real Phone Camera Scan */}
        <div className="p-2 bg-[#120F0D] border-b border-[#DDA15E]/15 flex items-center gap-2">
          <button
            onClick={() => setActiveTab("simulator")}
            className={`btn-press flex-1 py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "simulator"
                ? "bg-[#DDA15E] text-[#120F0D] shadow-sm"
                : "bg-[#1A2312] text-[#FEFAE0]/70 hover:text-[#FEFAE0]"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Live Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("scan")}
            className={`btn-press flex-1 py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "scan"
                ? "bg-[#BC6C25] text-[#FEFAE0] shadow-sm"
                : "bg-[#1A2312] text-[#FEFAE0]/70 hover:text-[#FEFAE0]"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Scan with Phone</span>
          </button>
        </div>

        {/* TAB 1: Real Phone Camera QR Scan Card */}
        {activeTab === "scan" && (
          <div className="p-6 overflow-y-auto space-y-4 bg-[#FEFAE0] text-[#283618] flex-1 flex flex-col items-center justify-center text-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#606C38]/20 border border-[#283618]/20 text-[#283618] text-[11px] font-bold">
              <Wifi className="w-3 h-3 text-[#283618]" />
              <span>Direct Mobile LAN / Wi-Fi Access</span>
            </div>

            <h3 className="font-display font-black text-xl text-[#283618]">
              Open Jagmag on Your Phone
            </h3>

            {/* Generated High-Resolution SVG QR Code */}
            <div className="p-3 bg-white rounded-3xl border-4 border-[#283618] shadow-2xl relative group">
              <img
                src="/assets/mobile-qr-scan.svg"
                alt="Scan to open Jagmag on mobile"
                className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
              />
              <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-xl bg-[#283618] border-2 border-[#FEFAE0] flex items-center justify-center font-devanagari text-xs font-bold text-[#DDA15E] shadow-md">
                  जगमग
                </div>
              </div>
            </div>

            <p className="text-xs text-[#283618]/80 max-w-xs font-medium leading-relaxed">
              Scan with your iPhone or Android camera to experience Jagmag Kitchen's 60fps mobile menus, banquet estimator, and touch interactions on a physical device.
            </p>

            {/* Direct URL & Copy Link Action */}
            <div className="w-full max-w-xs p-2 rounded-2xl bg-[#606C38]/15 border border-[#283618]/30 flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-[#283618] truncate pl-1">
                {currentUrl}
              </span>
              <button
                onClick={handleCopyLink}
                className="btn-press px-3 py-1.5 rounded-lg bg-[#283618] text-[#FEFAE0] text-[11px] font-bold flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="text-[11px] text-[#283618]/60 font-medium">
              💡 Ensure your phone is connected to the same Wi-Fi / hotspot network.
            </div>

          </div>
        )}

        {/* TAB 2: Live Mobile Menu Simulator */}
        {activeTab === "simulator" && (
          <div className="p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#FEFAE0] text-[#283618] flex-1">
            
            {/* Restaurant Header in Phone Frame */}
            <div className="p-3.5 rounded-2xl bg-[#283618] text-[#FEFAE0] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#606C38] flex items-center justify-center font-devanagari text-sm font-bold text-[#DDA15E]">
                  ज
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-[#FEFAE0] leading-tight">
                    JAGMAG JAIPUR
                  </h4>
                  <p className="text-[10px] text-[#DDA15E] font-medium">
                    Contactless Digital Menu & Instant Order
                  </p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold">
                LIVE
              </span>
            </div>

            {/* Table Selector */}
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#283618] mb-1">
                Select Table / Zone
              </label>
              <select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-bold text-[#283618] cursor-pointer"
              >
                {tables.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Simulated Cart Tray */}
            <div className="p-3.5 rounded-2xl bg-[#606C38]/15 border-2 border-[#283618] space-y-2">
              <div className="flex items-center justify-between text-xs font-black uppercase text-[#283618]">
                <span>Table Order ({cart.length} Items)</span>
                <span>{selectedTable.split("•")[0]}</span>
              </div>

              {cart.length === 0 ? (
                <p className="text-xs text-[#283618]/70 italic py-1">No items selected.</p>
              ) : (
                <div className="space-y-1.5">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#283618]/15">
                      <span className="font-semibold text-[#283618] truncate max-w-[170px]">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#283618]">
                          ₹{item.price * item.qty}
                        </span>
                        <div className="flex items-center gap-1 bg-[#FEFAE0] border border-[#283618] rounded px-1 py-0.5">
                          <button onClick={() => updateQty(idx, -1)} className="p-0.5 hover:text-red-700">
                            <Minus className="w-2.5 h-2.5" />
                          </button>
                          <span className="w-3 text-center font-bold text-[11px]">{item.qty}</span>
                          <button onClick={() => updateQty(idx, 1)} className="p-0.5 hover:text-emerald-700">
                            <Plus className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 border-t-2 border-[#283618] flex items-center justify-between font-bold">
                <span className="text-[11px] uppercase text-[#283618]">Subtotal:</span>
                <span className="font-mono text-base font-black text-[#283618]">₹{subtotal}</span>
              </div>
            </div>

            {/* Quick Tap Specials */}
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#283618] mb-1.5">
                Quick Tap To Add:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => addItem("Truffle Edamame Dimsum", 395)}
                  className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
                >
                  <div className="text-[11px] font-bold text-[#283618] truncate">Truffle Dimsum</div>
                  <div className="text-[10px] font-mono font-bold text-[#BC6C25]">+ ₹395</div>
                </button>
                <button
                  onClick={() => addItem("Burrata & Pesto Flatbread", 475)}
                  className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
                >
                  <div className="text-[11px] font-bold text-[#283618] truncate">Burrata Flatbread</div>
                  <div className="text-[10px] font-mono font-bold text-[#BC6C25]">+ ₹475</div>
                </button>
                <button
                  onClick={() => addItem("Copper Spiced Guava", 245)}
                  className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
                >
                  <div className="text-[11px] font-bold text-[#283618] truncate">Spiced Guava</div>
                  <div className="text-[10px] font-mono font-bold text-[#BC6C25]">+ ₹245</div>
                </button>
                <button
                  onClick={() => addItem("Matcha Elderflower Fizz", 265)}
                  className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
                >
                  <div className="text-[11px] font-bold text-[#283618] truncate">Matcha Fizz</div>
                  <div className="text-[10px] font-mono font-bold text-[#BC6C25]">+ ₹265</div>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Bottom Action Footer for Simulator */}
        {activeTab === "simulator" && (
          <div className="p-4 bg-[#120F0D] border-t border-[#DDA15E]/20 flex flex-col gap-2">
            <button
              onClick={handleSendOrder}
              disabled={cart.length === 0}
              className="btn-press w-full py-3.5 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#DDA15E]/60 shadow-lg hover:bg-[#9D5518] cursor-pointer disabled:opacity-50 min-h-[44px]"
            >
              <Smartphone className="w-4 h-4 text-[#FEFAE0]" />
              <span>Send Order via WhatsApp ({JAGMAG_PHONE_DISPLAY})</span>
            </button>
            <div className="text-center text-[10px] text-[#FEFAE0]/70">
              ⚡ Simulates customer instant ordering straight to Jagmag's WhatsApp ({JAGMAG_PHONE_DISPLAY}).
            </div>
          </div>
        )}

      </div>

    </div>
  );
}