export const JAGMAG_PHONE = "919903033131";
export const JAGMAG_PHONE_DISPLAY = "+91 99030 33131";

export const JAGMAG_INFO = {
  name: "JAGMAG",
  devanagari: "जगमग",
  subtitle: "Curated Kitchen & Banquets",
  city: "Jaipur",
  tagline: "Where Warmth Meets Grand Celebration",
  description: "From artisanal sushi and slow-simmered North Indian delicacies under macramé chandeliers to bespoke private banquets for 30 to 150 guests in Jaipur.",
  phone: JAGMAG_PHONE,
  displayPhone: JAGMAG_PHONE_DISPLAY,
  banquetManager: JAGMAG_PHONE_DISPLAY,
  diningHours: "12:00 PM – 11:30 PM (Daily)",
  banquetSlots: "Lunch Banquets: 12:00 PM – 4:00 PM | Evening Soirées: 7:00 PM – 11:30 PM",
  address: "S-54, Arvind Marg, Near Ahimsa Circle, C-Scheme, Jaipur, Rajasthan 302001",
  landmark: "Beside Ahimsa Circle • Valet Parking Available",
  rating: "4.8",
  reviewCount: "1,240+",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7!2d75.795!3d26.912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db41d99999999%3A0xjagmag!2sC-Scheme%2C+Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsUrl: "https://maps.google.com/?q=Jagmag+Curated+Kitchen+Banquets+Jaipur"
};

export const getWhatsAppLink = (message) => {
  const cleanPhone = JAGMAG_PHONE.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
