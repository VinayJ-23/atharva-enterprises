"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-200" style={{ backgroundColor: '#d9d9d6ff' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
  <Image
    src="/logo.png"
    alt="Atharva Enterprises Logo"
    width={40}
    height={40}
    className="object-contain"
  />

  <span className="font-bold text-xl text-black">
    Atharva Enterprises
  </span>
</div>

            <div className="mb-4">
              <p className="text-[16px] bg-white/10 px-2 py-1 rounded text-black font-semibold inline-block">
                GST: 21ABNFA8425D1ZE
              </p>
              <p className="text-sm text-black mt-3">
                Your trusted partner for premium quality cement and building materials with commitment to excellence.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#3B82F6]" style={{ backgroundColor: '#2D4A70' }}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#3B82F6]" style={{ backgroundColor: '#2D4A70' }}>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#3B82F6]" style={{ backgroundColor: '#2D4A70' }}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#3B82F6]" style={{ backgroundColor: '#2D4A70' }}>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="/about" className="transition-colors text-black hover:text-blue-300">About Us</Link></li>
              <li><Link href="/products" className="transition-colors text-black hover:text-blue-300">Products</Link></li>
              <li><Link href="/services" className="transition-colors text-black hover:text-blue-300">Services</Link></li>
              <li><Link href="/awards" className="transition-colors text-black hover:text-blue-300">Awards</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-black font-semibold mb-5">Support</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="/enquiry" className="transition-colors text-black hover:text-blue-300">Enquiry</Link></li>
              <li><Link href="/contact" className="transition-colors text-black hover:text-blue-300">Contact Us</Link></li>
              <li><Link href="/faqs" className="transition-colors text-black hover:text-blue-300">FAQs</Link></li>
              <li><Link href="/privacy" className="transition-colors text-black hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors text-black hover:text-blue-300">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm text-black">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a href="tel:+919423593257" className="text-black hover:text-blue-300 transition-colors">+91 94235 93257</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sales@atharvaenterprises.org" className="text-black hover:text-blue-300 transition-colors">
                  sales@atharvaenterprises.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-black">589/1/1/2/2 Vajreshwari Nagar<br />Akkalkot Road, Solapur<br />Maharashtra, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-black">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
    
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-6 pt-8 text-sm text-center text-black">
          <p className="text-black">
            © {new Date().getFullYear()} Atharva Enterprises
          </p>
          <p className="mt-3 text-xs text-black">All rights reserved. Built with precision and trust.</p>
        </div>
      </div>
    </footer>
  );
}