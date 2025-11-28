"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import EnquiryForm from "@/components/EnquiryForm";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Submit Your Enquiry
            </h1>
            <p className="text-xl" style={{ color: '#E5E7EB' }}>
              Fill out the form below and our team will get back to you within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-white sticky top-24">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#1F3A60' }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1F3A60' }}>Phone</p>
                      <a href="tel:+919423593257" className="text-gray-600 hover:text-blue-600">
                        +91 94235 93257
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1F3A60' }}>WhatsApp</p>
                      <a 
                        href="https://wa.me/919423593257" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600"
                      >
                        +91 94235 93257
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 border border-blue-100">
                      <Image src="/icons/email-logo.svg" alt="Email Logo" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1F3A60' }}>Email</p>
                      <a href="mailto:sales@atharvaenterprises.org" className="text-gray-600 hover:text-blue-600">
                        sales@atharvaenterprises.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1F3A60' }}>Address</p>
                      <p className="text-gray-600 text-sm">
                        589/1/1/2/2 Vajreshwari Nagar<br />
                        Akkalkot Road, Solapur<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-50 border border-emerald-100">
                      <Image src="/icons/business-hours.svg" alt="Business Hours Logo" width={32} height={32} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1" style={{ color: '#1F3A60' }}>Business Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Saturday<br />
                        9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-white">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F3A60' }}>
                  Enquiry Form
                </h2>
                <EnquiryForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>
              Why Choose Our Enquiry Service?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: '#3B82F6' }}>30 min</div>
                <p className="text-gray-700">Quick Response Time</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: '#3B82F6' }}>Free</div>
                <p className="text-gray-700">No Obligation Quote</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: '#3B82F6' }}>24/7</div>
                <p className="text-gray-700">WhatsApp Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}