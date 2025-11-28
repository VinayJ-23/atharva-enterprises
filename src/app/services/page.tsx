"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, Clock, Award, Users, Calculator, HeadphonesIcon, FileCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Package,
    title: "Bulk Supply",
    description: "Large quantity orders for cement, steel, and construction materials for contractors, builders, and infrastructure projects.",
    features: [
      "Competitive wholesale pricing",
      "Volume discounts available",
      "Credit facility for regular clients",
      "Quality certificates included",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    icon: Truck,
    title: "Fast Logistics & Delivery",
    description: "Own fleet of delivery vehicles ensuring reliable and timely transportation.",
    features: [
      "Same-day delivery (within city)",
      "Pan-regional delivery network",
      "GPS-tracked vehicles",
      "Professional loading/unloading",
      "Delivery scheduling as per site needs",
    ],
    image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=800&h=600&fit=crop",
  },
  {
    icon: Clock,
    title: "On-Site Delivery",
    description: "Direct delivery to your construction site with flexible timing options.",
    features: [
      "Delivery to difficult terrains",
      "Weekend & holiday delivery",
      "Multiple delivery time slots",
      "Site-specific unloading",
      "Real-time delivery tracking",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "100% genuine products from authorized dealers with complete documentation.",
    features: [
      "Authorized dealer certificates",
      "Product quality certificates",
      "Batch testing reports",
      "Manufacturing date guarantee",
      "Return policy for damaged goods",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    title: "Consultation Services",
    description: "Expert guidance on cement, steel, and construction material selection for your specific project requirements.",
    features: [
      "Free technical consultation",
      "Grade & brand recommendations",
      "Quantity estimation support",
      "Cost-benefit analysis",
      "Project-specific solutions",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: Calculator,
    title: "Custom Quotations",
    description: "Detailed pricing based on your project needs with transparent breakdowns.",
    features: [
      "Itemized quotations",
      "No hidden charges",
      "Valid for 30 days",
      "Multiple payment options",
      "Digital invoicing",
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for queries, orders, and emergency requirements.",
    features: [
      "Phone & WhatsApp support",
      "Emergency order processing",
      "Order status tracking",
      "Complaint resolution",
      "Dedicated account manager",
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description: "Complete paperwork assistance including certificates and compliance documents.",
    features: [
      "GST compliant invoices",
      "Quality certificates",
      "Test reports",
      "Delivery challans",
      "Payment receipts",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-white">
              Comprehensive supply solutions for cement, steel, and construction materials designed to meet every construction need with professionalism and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative min-h-[500px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl group"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/80 to-black/60 md:from-black/85 md:via-black/70 md:to-black/40" />
                
                {/* Content Overlay */}
                <div className="relative h-full flex items-center py-8 md:py-0">
                  <div className="container mx-auto px-6 md:px-8 lg:px-12">
                    <div className="max-w-2xl">
                      {/* Icon */}
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center mb-4 md:mb-6 border border-blue-400/30">
                        <service.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
                        {service.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-gray-200 text-base md:text-lg mb-4 md:mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm border border-green-400/30">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                            </div>
                            <span className="text-sm md:text-base text-gray-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Link href="/enquiry">
                        <Button 
                          size="lg"
                          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base md:text-lg font-semibold"
                        >
                          Request This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements for cement, steel, and construction materials and get a customized solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
                Submit Enquiry
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}