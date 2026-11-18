import React, { useState } from "react";
import { X, Utensils, Calendar, Clock, Users, Sparkles, MessageSquare, Phone } from "lucide-react";
import { JAGMAG_INFO, JAGMAG_PHONE, JAGMAG_PHONE_DISPLAY, getWhatsAppLink } from "../data/config";

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "4 Guests",
    date: new Date().toISOString().split("T")[0],
    time: "08:00 PM",
    seating: "The Chandelier Dining Hall",
    notes: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*TABLE RESERVATION — JAGMAG JAIPUR*\n• Guest Name: ${formData.name || "Guest"}\n• Phone: ${formData.phone}\n• Guests: ${formData.guests}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Seating: ${formData.seating}\n• Notes: ${formData.notes || "None"}\n\nPlease confirm our table reservation!`;
    window.open(getWhatsAppLink(msg), "_blank");
    onClose();
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
            <div className="w-10 h-10 rounded-xl bg-[#606C38] border border-[#DDA15E]/40 flex items-center justify-center text-[#FEFAE0]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-lg text-[#FEFAE0]">
                  Reserve Dining Table
                </h3>
                <span className="font-devanagari text-xs text-[#DDA15E]">जगमग</span>
              </div>
              <p className="text-xs text-[#DDA15E]/80">
                Curated Kitchen & Banquets • Jaipur
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Singh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-sm font-semibold text-[#283618] focus:outline-none focus:bg-[#606C38]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98290 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-sm font-semibold text-[#283618] focus:outline-none focus:bg-[#606C38]/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-bold text-[#283618] focus:outline-none cursor-pointer"
              >
                <option>2 Guests (Intimate)</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8 Guests (Family)</option>
                <option>10+ Guests (Large Table)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-bold text-[#283618] focus:outline-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
                Time Slot
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-bold text-[#283618] focus:outline-none cursor-pointer"
              >
                <option>12:30 PM (Lunch)</option>
                <option>02:00 PM (Lunch)</option>
                <option>07:00 PM (Early Dinner)</option>
                <option>08:30 PM (Prime Dinner)</option>
                <option>09:45 PM (Late Dinner)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
              Seating Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["The Chandelier Dining Hall", "The Tropical Atrium Courtyard"].map((place) => (
                <button
                  key={place}
                  type="button"
                  onClick={() => setFormData({ ...formData, seating: place })}
                  className={`p-2.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer text-left ${
                    formData.seating === place
                      ? "bg-[#283618] text-[#FEFAE0] border-[#283618]"
                      : "bg-[#FEFAE0] text-[#283618] border-[#283618]/30 hover:bg-[#606C38]/10"
                  }`}
                >
                  {place}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#283618] mb-1">
              Special Occasion / Dietary Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Birthday anniversary, Jain food preference, quiet table"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FEFAE0] border-2 border-[#283618] text-xs font-semibold text-[#283618] focus:outline-none focus:bg-[#606C38]/10"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-press w-full py-3.5 rounded-full bg-[#283618] text-[#FEFAE0] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#283618] shadow-[4px_4px_0px_#283618] hover:shadow-[2px_2px_0px_#283618] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#DDA15E]" />
              <span>Confirm Table via WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-[#283618]/70 mt-2 font-medium">
              ✨ Instant confirmation on WhatsApp or call table desk directly at <a href={`tel:${JAGMAG_PHONE}`} className="font-bold text-[#BC6C25] hover:underline">{JAGMAG_PHONE_DISPLAY}</a>
            </p>
          </div>
        </form>
      </div>

    </div>
  );
}
