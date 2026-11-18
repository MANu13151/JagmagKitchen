import React from "react";
import { QrCode, Sparkles, Phone, MessageSquare } from "lucide-react";
import { JAGMAG_PHONE, JAGMAG_PHONE_DISPLAY, getWhatsAppLink } from "../data/config";

export default function FloatingMobileBar({ onOpenQr, onOpenBanquet }) {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-3 sm:inset-x-6 z-40 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="pointer-events-auto bg-[#120F0D]/95 backdrop-blur-md border border-[#DDA15E]/40 rounded-full p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.85)] flex items-center justify-between gap-1.5">
        
        {/* Table QR Primary Action */}
        <button
          onClick={onOpenQr}
          className="btn-press flex-1 py-3 px-3 rounded-full bg-[#DDA15E] text-[#120F0D] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap min-h-[44px]"
        >
          <QrCode className="w-4 h-4 text-[#120F0D]" />
          <span>Table QR Menu</span>
        </button>

        {/* Banquet Inquiry Action */}
        <button
          onClick={onOpenBanquet}
          className="btn-press flex-1 py-3 px-3 rounded-full bg-[#BC6C25] text-[#FEFAE0] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap min-h-[44px]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FEFAE0]" />
          <span>Banquet</span>
        </button>

        {/* Quick WhatsApp Action */}
        <a
          href={getWhatsAppLink("Hi Jagmag, I'd like to reserve a table or banquet!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press w-11 h-11 rounded-full bg-[#202C13] border border-[#DDA15E]/50 flex items-center justify-center text-[#DDA15E] hover:bg-[#606C38]/40 shadow-sm flex-shrink-0 min-h-[44px] min-w-[44px]"
          aria-label="Direct WhatsApp message"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}
