"use client";

import { Phone, MessageCircle, Truck, Package, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
{
  icon: Package,
  title: "Bulk Supply",
  description: "Large quantity orders with competitive pricing for contractors and builders."
},
{
  icon: Truck,
  title: "Fast Logistics",
  description: "Reliable delivery network ensuring timely supply to your location."
},
{
  icon: Clock,
  title: "On-Site Delivery",
  description: "Direct delivery to your construction site with flexible scheduling."
},
{
  icon: Award,
  title: "Quality Assured",
  description: "100% genuine products from authorized dealers with certification."
}];


const stats = [
{ value: "11+", label: "Years Experience" },
{ value: "300+", label: "Happy Clients" },
{ value: "15,000", label: "Monthly Volume (MT)" },
{ value: "24/7", label: "Support Available" }];


export default function Home() {
  const [quickEnquiry, setQuickEnquiry] = useState({ name: "", phone: "" });

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Quick Enquiry:\nName: ${quickEnquiry.name}\nPhone: ${quickEnquiry.phone}`;
    const url = `https://wa.me/919423593257?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-slate-900 overflow-hidden"
        style={{ background: 'white' }}
      >
        <div className="absolute inset-0 opacity-75">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/fd42f8b2-7728-4ecb-a909-fbedaceae486/visual-edit-uploads/1764092403227-iwqqjt2t7v9.jpg"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-xs text-white font-semibold mb-4">Trusted Since 2014</p>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-medium)', color: '#d6dae6ff' }}>
              Building Strong Foundations for Your Projects
            </h1>
            <p className="text-md md:text-2xl mb-8 text-white">
              From Foundations to Finish – Quality Cement, Steel, and Construction Materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto text-white hover:opacity-50" style={{ backgroundColor: '#1a040eff' }}>
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919423593257">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/50 border- hover:bg-white hover:text-black w-full sm:w-auto text-black transition-colors">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 94235 93257
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-medium mb-2" style={{ color: '#dadbdeff' }}>{stat.value}</div>
                  <div className="text-sm text-slate-200 font-medium">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12" style={{ backgroundColor: '#ECEFF4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F3A60' }}>
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive supply solutions for cement, steel, and construction materials tailored to meet your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) =>
            <Card key={service.title} className="p-6 hover:shadow-lg transition-all bg-white border border-slate-100">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#4F7DF0] via-[#3B82F6] to-[#1F5BD8] shadow-inner">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#334155' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Card>
            )}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button className="text-white hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1F3A60' }}>
                Why Choose Atharva Enterprises?
              </h2>
              <div className="space-y-4">
                {[
                "100% Genuine products from authorized cement, steel, and construction material dealers",
                "Competitive bulk pricing for cement, steel, and construction materials",
                "Timely delivery with our own logistics fleet",
                "Expert consultation for project requirements across cement and construction materials",
                "Quality certificates and documentation for all materials",
                "Flexible payment terms for regular clients"].
                map((feature) =>
                <div key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" className="hover:bg-blue-50" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Warehouse and trucks"
                fill
                className="object-cover"
                loading="lazy" />

            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Box */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #3B82F6)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                  Get Instant Quote
                </h2>
                <p className="text-lg mb-6" style={{ color: '#E5E7EB' }}>
                  Fill in your details and we'll get back to you within 30 minutes during business hours.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+919423593257" className="hover:underline">+91 94235 93257</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5" />
                    <span> <span style={{ color: '#E5E7EB' }}>Available on WhatsApp 24/7</span></span>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-white" style={{ color: '#1F3A60' }}>
                <form onSubmit={handleQuickEnquiry} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={quickEnquiry.name}
                      onChange={(e) => setQuickEnquiry({ ...quickEnquiry, name: e.target.value })}
                      required
                      style={{ backgroundColor: '#E5E7EB' }} />

                  </div>
                  <div>
                    <Input
                      placeholder="Phone Number *"
                      value={quickEnquiry.phone}
                      onChange={(e) => setQuickEnquiry({ ...quickEnquiry, phone: e.target.value })}
                      required
                      pattern="[0-9]{10}"
                      style={{ backgroundColor: '#E5E7EB' }} />

                  </div>
                  <Button type="submit" className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Quick Enquiry
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
