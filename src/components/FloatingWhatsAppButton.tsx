"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  const phoneNumber = "919423593257";
  const defaultMessage = "Hello! I'm interested in your cement, steel, and construction materials. Please provide more information.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </button>

      {/* Call Button */}
      <a
        href="tel:+919423593257"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:opacity-90"
        style={{ backgroundColor: '#3B82F6' }}
        aria-label="Call us"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="absolute right-16 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ backgroundColor: '#3B82F6' }}>
          Call now
        </span>
      </a>
    </>
  );
}