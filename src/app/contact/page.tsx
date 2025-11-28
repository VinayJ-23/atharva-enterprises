"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Navigation, Headphones, PhoneCall, Send, ExternalLink } from "lucide-react";
import Image from "next/image";

const contactChannels = [
  {
    id: "phone",
    title: "Sales & Dispatch",
    value: "+91 94235 93257",
    description: "Immediate assistance for orders and deliveries (9 AM – 8 PM)",
    cta: { label: "Call Now", href: "tel:+919423593257" },
    badge: "Avg response: 2 mins",
    logo: "/icons/phone.svg",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Support",
    value: "+91 94235 93257",
    description: "Quotes, order tracking & quick updates (24/7)",
    cta: { label: "Chat on WhatsApp", href: "https://wa.me/919423593257" },
    badge: "Replies round the clock",
    logo: "/icons/whatsapp.svg",
  },
  {
    id: "mail",
    title: "Email Desk",
    value: "sales@atharvaenterprises.org",
    description: "Share tenders, BOQs, and partnership enquiries",
    cta: { label: "Send Email", href: "mailto:sales@atharvaenterprises.org" },
    badge: "Response within 6 hrs",
    logo: "/icons/mail.svg",
  },
];

const officeHighlights = [
  {
    label: "Logistics Ready",
    value: "6",
    sub: "Dedicated delivery trucks",
  },
  {
    label: "Warehouse Capacity",
    value: "5,000 MT",
    sub: "Stocked & dispatch-ready",
  },
  {
    label: "Support Hours",
    value: "9 AM – 8 PM",
    sub: "Mon to Sat",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with us for any queries, orders, or assistance. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="container mx-auto px-4 space-y-8">
          <Card className="p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Reach Us Anytime</p>
                <h2 className="text-2xl font-bold" style={{ color: "#1F3A60" }}>
                  Dedicated contact desk for every requirement
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactChannels.map((channel) => (
                <div key={channel.id} className="p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Image src={channel.logo} alt={`${channel.title} logo`} width={32} height={32} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-500">{channel.title}</p>
                      <p className="text-sm text-gray-500">{channel.badge}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold mb-1 break-words" style={{ color: "#1F3A60" }}>
                    {channel.value}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{channel.description}</p>
                  <Button className="w-full text-white hover:opacity-90 mt-auto" style={{ backgroundColor: "#3B82F6" }} asChild>
                    <a href={channel.cta.href} target={channel.id === "whatsapp" ? "_blank" : undefined} rel="noreferrer">
                      <Send className="w-4 h-4 mr-2" />
                      {channel.cta.label}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Business Hours</p>
              <p className="text-3xl font-bold" style={{ color: "#1F3A60" }}>9:00 AM – 7:00 PM (Mon – Sat)</p>
              <p className="text-gray-600 mt-2">Sunday operations are paused so the team can reset for the week ahead.</p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              
              <div className="flex items-center gap-4 text-md text-gray-600">
                <PhoneCall className="w-7 h-7 text-green-600" />
                <span>Emergency delivery slots available on request.</span>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-white border border-orange-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white border border-orange-200 flex items-center justify-center">
                <Image
                  src="/icons/justdial-logo.svg"
                  alt="Justdial Logo"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500">Find us Online</p>
                <h3 className="text-xl font-bold" style={{ color: "#1F3A60" }}>Find Us on Justdial</h3>
                <p className="text-gray-600 text-sm">
                  Verified profile with reviews, photos, and directions.
                </p>
              </div>
            </div>
            <Button className="w-full md:w-auto text-white hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: "#F97316" }} asChild>
              <a
                href="https://www.justdial.com/Solapur/Atharva-Enterprises-Behind-Sagar-Hotel-Modi-Khana/9999PX217-X217-191207112317-I7K8_BZDET?cat_b2b_flag=&searchfrom=lst&bd=1&mncatname=Atharva%20Enterprises&ncatid=10087408&ftterm=Atharva%20Enterprises&thumbnail="
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View Profile
              </a>
            </Button>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="p-8 bg-white lg:col-span-2 h-full flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/icons/location.svg" alt="Location logo" width={48} height={48} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-500">Head Office & Warehouse</p>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1F3A60" }}>
                    Atharva Enterprises
                  </h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-1">
                    <p>589/1/1/2/2 Vajreshwari NagarAkkalkot Road,</p>
                    <p>Solapur, Maharashtra 413006</p>
                    <p>India</p>
                    <a
                      href="https://maps.app.goo.gl/rYZE5Hb2pJhoZPH46"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold inline-flex items-center gap-1 text-sm"
                    >
                      Open in Google Maps
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 px-4 py-3">
                <p className="text-xs text-blue-600 uppercase tracking-widest">GST</p>
                <p className="font-mono text-lg text-blue-900">21ABNFA8425D1ZE</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {officeHighlights.map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-lg font-bold" style={{ color: "#1F3A60" }}>
                      {item.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-wide text-gray-500">{item.label}</p>
                    <p className="text-[11px] text-gray-500">{item.sub}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: "#3B82F6" }} asChild>
                <a href="https://maps.app.goo.gl/rYZE5Hb2pJhoZPH46" target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </Card>

            <Card className="lg:col-span-3 overflow-hidden p-0">
              <div className="relative h-full min-h-[420px]">
                <iframe
                  src="https://maps.google.com/maps?q=17.6716005,75.9344795&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}