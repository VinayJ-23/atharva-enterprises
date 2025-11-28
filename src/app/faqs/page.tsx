"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What brands of cement do you supply?",
    answer: "We are authorized dealers for 8 premium brands including ACC, UltraTech, Ambuja, Shree Cement, Birla, JK Cement, Dalmia, and Ramco. All products are 100% genuine with quality certificates.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "For bulk orders, the minimum quantity is 100 bags. However, for smaller requirements, we also accommodate orders as low as 10 bags with adjusted pricing. Contact us for custom quotations.",
  },
  {
    question: "Do you provide delivery services?",
    answer: "Yes, we have our own fleet of delivery vehicles ensuring timely and safe delivery. We offer same-day delivery within city limits and pan-regional delivery with scheduled timing. Delivery charges apply based on location and quantity.",
  },
  {
    question: "What are your payment terms?",
    answer: "We accept multiple payment modes including cash, cheque, bank transfer, and digital payments (UPI, cards). For regular clients, we offer credit facility with flexible payment terms. GST compliant invoices are provided with every transaction.",
  },
  {
    question: "How do I choose the right cement grade for my project?",
    answer: "Our expert team provides free consultation to help you select the appropriate cement grade. Generally, OPC 53 is ideal for RCC work, PPC for plastering and general construction, and PSC for marine or sulphate-rich environments. Contact us for personalized recommendations.",
  },
  {
    question: "Do you provide quality certificates?",
    answer: "Yes, we provide complete documentation including quality certificates, test reports, manufacturer certificates, and GST invoices with every order. All our products come directly from authorized manufacturers.",
  },
  {
    question: "What is your return/replacement policy?",
    answer: "We accept returns for damaged or defective products within 7 days of delivery. Replacement is provided free of cost for manufacturing defects. However, cement must be stored properly as per industry standards to maintain quality.",
  },
  {
    question: "Can I get a bulk discount?",
    answer: "Yes, we offer attractive volume discounts for bulk orders. The discount percentage increases with order quantity. Contact our sales team with your requirements for a customized quote with best possible pricing.",
  },
  {
    question: "How long does cement remain usable after manufacturing?",
    answer: "Cement typically has a shelf life of 3 months from the date of manufacturing when stored properly in dry, moisture-free conditions. We ensure fresh stock with recent manufacturing dates. Storage recommendations are provided with delivery.",
  },
  {
    question: "Do you deliver to remote or difficult-to-access locations?",
    answer: "Yes, we have experience delivering to various terrain types including hilly areas and remote construction sites. Additional charges may apply based on location accessibility. Our team assesses the site and provides accurate delivery timeline.",
  },
  {
    question: "Can I track my order status?",
    answer: "Yes, all our delivery vehicles are GPS-tracked. Once your order is dispatched, we provide real-time tracking information via WhatsApp. You can also call our customer support for instant order status updates.",
  },
  {
    question: "What are your business hours and emergency contact?",
    answer: "Our office operates Monday to Saturday, 9 AM to 6 PM. However, our WhatsApp support is available 24/7 for urgent requirements. For emergency orders, contact us on WhatsApp at +91 98765 43210 anytime.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl" style={{ color: '#E5E7EB' }}>
              Find answers to common questions about our products, services, and ordering process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold pr-4" style={{ color: '#1F3A60' }}>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F3A60' }}>
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
                  Contact Us
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Topics */}
      <section className="py-16" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1F3A60' }}>
              Quick Help Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/products">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="font-bold mb-2" style={{ color: '#1F3A60' }}>Browse Products</h4>
                  <p className="text-sm text-gray-600">Explore our complete product catalog</p>
                </div>
              </Link>
              <Link href="/enquiry">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="font-bold mb-2" style={{ color: '#1F3A60' }}>Submit Enquiry</h4>
                  <p className="text-sm text-gray-600">Get a customized quote for your needs</p>
                </div>
              </Link>
              <Link href="/services">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="font-bold mb-2" style={{ color: '#1F3A60' }}>Our Services</h4>
                  <p className="text-sm text-gray-600">Learn about delivery and support</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}