"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Award } from "lucide-react";
import Image from "next/image";

const awards = [
  {
    title: "Vicat Branch Runner Up Award – Trade\n(Event Photo 2024)",
    image: "/awards/vicat24.jpg",
    description:
      "A proud moment captured during the award ceremony honoring Atharva Enterprises for exceptional trade performance and business excellence.",
  },
  {
    title: "Vicat Branch Runner Up Award – Trade\n(2023–24)",
    image: "/awards/vicat2223.jpg",
    description:
      "Recognized as the Runner Up for blended cement sales by Vicat Cement for the year 2022–23, reflecting strong market penetration and consistent customer trust.",
  },
  {
    title: "Award of Excellence – Chettinad Cement\n(FY 2021–22)",
    image: "/awards/chettinad2122.jpg",
    description:
      "Awarded the prestigious Award of Excellence as the Second Runner Up for outstanding overall sales and strong distribution performance in FY 2021–22.",
  },
  {
    title: "Zuari Maharaja Award\n(FY 2020)",
    image: "/awards/zuari20.jpg",
    description:
      "Awarded the prestigious Maharaja Award by Zuari Cement for delivering outstanding sales achievements during FY 2020.",
  },
  {
    title: "Zuari Chhatrapathi Award\n(FY 2020)",
    image: "/awards/zuarichhatrapati.jpg",
    description:
      "Recognized by Zuari Cement with the Chhatrapathi Award, symbolizing exceptional dedication, strong market influence, and consistent sales excellence.",
  },
  {
    title: "Maharashtra Topmost Seller – Chettinad Cement\n(FY 2018–19)",
    image: "/awards/chettinad1819.jpg",
    description:
      "Honored as the topmost seller of Chettinad Cement in Maharashtra for the financial year 2018–19, recognizing exceptional sales performance and distributor excellence.",
  },
];

export default function AwardsPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(135deg, #FDBA74, #F97316 55%, #EA580C)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#0F172A", textShadow: "0 4px 20px rgba(255, 255, 255, 0.25)" }}>
              Awards
            </h1>
            <p className="text-xl font-medium" style={{ color: "#1F2937" }}>
              Celebrating milestones that highlight our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F5F7FB" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-blue-100 mb-4">
              <Award className="w-5 h-5" style={{ color: "#1F3A60" }} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "#1F3A60" }}>
                Awards & Recognition
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1F3A60" }}>
              Industry Recognition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of accolades that reflect the trust our partners place in us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Image container: object-contain + centered so whole trophy is visible */}
                <div className="relative h-80 bg-white flex items-center justify-center">
                  <Image
                    src={award.image}
                    alt={award.title.replace(/\n/g, " ")}
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  {/* Allow newline in title so year appears on next line */}
                  <h3 className="font-bold mb-2 whitespace-pre-line" style={{ color: "#1F3A60" }}>
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
