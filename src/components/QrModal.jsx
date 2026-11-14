import React, { useState } from "react";
import { X, QrCode, Plus, Minus, Smartphone, Sparkles } from "lucide-react";
import { JAGMAG_INFO, getWhatsAppLink } from "../data/config";

export default function QrModal({ isOpen, onClose }) {
  const [selectedTable, setSelectedTable] = useState("Table 08 • Chandelier Hall");
  const [cart, setCart] = useState([
    { name: "Avocado & Cream Cheese Maki", price: 445, qty: 1 },
    { name: "Dal Jagmag Makhani", price: 395, qty: 1 },
    { name: "Garlic & Truffle Naan Basket", price: 225, qty: 2 }
  ]);

  if (!isOpen) return null;

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
    const msg = `*LIVE TABLE ORDER — JAGMAG JAIPUR*\n${selectedTable}\n\n*Items:*\n${list}\n\n*Total Bill:* ₹${subtotal}\n_Sent via Contactless Table QR_`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="bg-[#FEFAE0] rounded-3xl border-2 border-[#283618] shadow-[8px_8px_0px_#283618] w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#283618] text-[#FEFAE0] flex items-center justify-between border-b-2 border-[#DDA15E]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BC6C25] flex items-center justify-center text-[#FEFAE0]">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-[#FEFAE0]">
                Contactless Table QR Order
              </h3>
              <p className="text-xs text-[#DDA15E]">
                JAGMAG • Curated Kitchen & Banquets
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#202C13] border border-[#DDA15E]/40 flex items-center justify-center text-[#FEFAE0] hover:bg-[#606C38] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1.5">
              Select Your Table / Booth
            </label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-bold text-[#283618] cursor-pointer"
            >
              {tables.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Cart Box */}
          <div className="p-4 rounded-2xl bg-[#606C38]/15 border-2 border-[#283618]">
            <div className="flex items-center justify-between mb-3 text-xs font-black uppercase tracking-wider text-[#283618]">
              <span>Current Table Items ({cart.length})</span>
              <span>{selectedTable.split("•")[0]}</span>
            </div>

            {cart.length === 0 ? (
              <p className="text-xs text-[#283618]/70 italic py-2">No items selected.</p>
            ) : (
              <div className="space-y-2">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#283618]/15">
                    <span className="font-semibold text-[#283618] truncate max-w-[200px]">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-[#283618]">
                        ₹{item.price * item.qty}
                      </span>
                      <div className="flex items-center gap-1 bg-[#FEFAE0] border border-[#283618] rounded px-1">
                        <button onClick={() => updateQty(idx, -1)} className="p-0.5 hover:text-red-700">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{item.qty}</span>
                        <button onClick={() => updateQty(idx, 1)} className="p-0.5 hover:text-emerald-700">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 pt-3 border-t-2 border-[#283618] flex items-center justify-between font-bold">
              <span className="text-xs uppercase text-[#283618]">Subtotal</span>
              <span className="font-mono text-xl font-black text-[#283618]">₹{subtotal}</span>
            </div>
          </div>

          {/* Quick Add */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-2">
              Add Signatures to Table
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => addItem("Truffle Edamame Dimsum", 395)}
                className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
              >
                <div className="text-xs font-bold text-[#283618] truncate">Truffle Dimsum</div>
                <div className="text-[11px] font-mono font-bold text-[#BC6C25]">+ ₹395</div>
              </button>
              <button
                onClick={() => addItem("Burrata & Pesto Flatbread", 475)}
                className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
              >
                <div className="text-xs font-bold text-[#283618] truncate">Burrata Flatbread</div>
                <div className="text-[11px] font-mono font-bold text-[#BC6C25]">+ ₹475</div>
              </button>
              <button
                onClick={() => addItem("Copper Spiced Guava", 245)}
                className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
              >
                <div className="text-xs font-bold text-[#283618] truncate">Spiced Guava</div>
                <div className="text-[11px] font-mono font-bold text-[#BC6C25]">+ ₹245</div>
              </button>
              <button
                onClick={() => addItem("Matcha Elderflower Fizz", 265)}
                className="btn-press p-2 rounded-xl bg-[#FEFAE0] border border-[#283618] text-left hover:bg-[#606C38]/20"
              >
                <div className="text-xs font-bold text-[#283618] truncate">Matcha Fizz</div>
                <div className="text-[11px] font-mono font-bold text-[#BC6C25]">+ ₹265</div>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FEFAE0] border-t-2 border-[#283618]">
          <button
            onClick={handleSendOrder}
            disabled={cart.length === 0}
            className="btn-press w-full py-4 rounded-full bg-[#283618] text-[#FEFAE0] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#283618] shadow-[4px_4px_0px_#283618] hover:shadow-[2px_2px_0px_#283618] cursor-pointer disabled:opacity-50"
          >
            <Smartphone className="w-4 h-4 text-[#DDA15E]" />
            <span>Send Order to Kitchen via WhatsApp (₹{subtotal})</span>
          </button>
        </div>

      </div>

    </div>
  );
}
