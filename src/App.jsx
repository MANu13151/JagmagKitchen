import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpacesShowcase from "./components/SpacesShowcase";
import BanquetEstimator from "./components/BanquetEstimator";
import CuratedMenu from "./components/CuratedMenu";
import LocationFooter from "./components/LocationFooter";
import ReservationModal from "./components/ReservationModal";
import QrModal from "./components/QrModal";

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);

  const scrollToBanquets = () => {
    const el = document.getElementById("banquets");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] text-[#283618] flex flex-col font-sans selection:bg-[#BC6C25] selection:text-[#FEFAE0]">
      {/* Editorial Single-Row Header */}
      <Navbar 
        onOpenBanquet={scrollToBanquets}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <main className="flex-1">
        {/* Full-Bleed Architectural Hero with Macramé Chandelier Photo */}
        <Hero 
          onOpenBanquet={scrollToBanquets}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Two Worlds Under One Roof Asymmetric Spaces Showcase */}
        <SpacesShowcase 
          onOpenBanquet={scrollToBanquets}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Interactive Banquet & Private Event Estimator (Centerpiece Sales Hook) */}
        <BanquetEstimator />

        {/* Curated Kitchen Menu (#283618 Section) */}
        <CuratedMenu 
          onOpenQr={() => setIsQrOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Location, Valet Parking & Footer */}
      <LocationFooter 
        onOpenBanquet={scrollToBanquets}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Dining Table Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Contactless QR Table Ordering Simulator Modal */}
      <QrModal 
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
      />
    </div>
  );
}
