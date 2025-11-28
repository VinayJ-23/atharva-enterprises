"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { CheckCircle, Scale, AlertCircle, ShieldCheck, Truck, CreditCard } from "lucide-react";
import Image from "next/image";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services or making a purchase.
            </p>
            <p className="text-sm text-blue-400 mt-4">
              Last Updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-blue-100">
                  <Image src="/icons/acceptance-badge.svg" alt="Acceptance Badge" width={40} height={40} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing our website, placing an order, or using any of our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These terms constitute a legally binding agreement between you and Atharva Enterprises. We reserve the right to modify these terms at any time without prior notice. Your continued use of our services after changes indicates acceptance of the modified terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-cyan-100">
                  <Image src="/icons/service-badge.svg" alt="Service Badge" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Services Provided</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Atharva Enterprises provides cement, steel, and construction materials supply and distribution services as an authorized dealer of multiple premium brands. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>Supply of cement, steel, and construction materials from authorized manufacturers</li>
                    <li>Delivery and logistics services</li>
                    <li>Product consultation and recommendation</li>
                    <li>Order processing and customer support</li>
                    <li>Quality documentation and certificates</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    All products supplied are genuine and sourced directly from manufacturers. We maintain quality standards as per industry norms and manufacturer specifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Orders and Pricing */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Orders, Pricing & Payment</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Order Acceptance</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>All orders are subject to availability and acceptance by Atharva Enterprises</li>
                        <li>We reserve the right to refuse or cancel any order at our discretion</li>
                        <li>Order confirmation will be sent via phone, email, or WhatsApp</li>
                        <li>Minimum order quantity may apply for certain products</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Pricing</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>All prices are in Indian Rupees (INR) and include applicable taxes</li>
                        <li>Prices are subject to change without notice</li>
                        <li>Quotations are valid for 30 days from the date of issue</li>
                        <li>Bulk order discounts are available and will be communicated separately</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Payment Terms</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Payment methods: Cash, Cheque, Bank Transfer, UPI, Cards</li>
                        <li>Full payment required before delivery unless credit terms are agreed</li>
                        <li>Credit facility available for approved regular clients</li>
                        <li>GST invoices provided with all transactions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Delivery Terms</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delivery timelines are estimates and not guaranteed</li>
                  <li>Delays may occur due to weather, traffic, or unforeseen circumstances</li>
                  <li>Customer must ensure site accessibility for delivery vehicles</li>
                  <li>Unloading is the customer's responsibility unless otherwise agreed</li>
                  <li>Delivery charges apply based on distance and quantity</li>
                  <li>Risk transfers to customer upon delivery</li>
                  <li>Customer must inspect products upon delivery and report damages immediately</li>
                </ul>
              </div>
            </div>

            {/* Returns and Refunds */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Returns, Refunds & Warranties</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Return Policy</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Returns accepted only for damaged or defective products</li>
                        <li>Must be reported within 7 days of delivery</li>
                        <li>Original packaging and documentation required</li>
                        <li>Photographic evidence of damage may be requested</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Refund Policy</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Refunds processed only for approved returns</li>
                        <li>Processing time: 7-14 business days</li>
                        <li>Refund method: Same as payment mode or bank transfer</li>
                        <li>Delivery charges are non-refundable</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Warranty</h3>
                      <p className="mb-2">Products are covered by manufacturer warranty as per their terms:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Manufacturing defects covered by manufacturer</li>
                        <li>Warranty claims to be made directly with manufacturer</li>
                        <li>We assist in warranty claim processing</li>
                        <li>Proper storage conditions must be maintained</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Atharva Enterprises shall not be liable for any indirect, incidental, special, or consequential damages arising from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>Use or inability to use our products or services</li>
                    <li>Delays or errors in delivery</li>
                    <li>Construction defects or failures not caused by product quality</li>
                    <li>Losses resulting from improper storage or application of products</li>
                    <li>Force majeure events beyond our control</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our total liability is limited to the purchase price of the products in question.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of Atharva Enterprises or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without written permission.
              </p>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>User Conduct</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Provide false or misleading information</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to interfere with our website or services</li>
                <li>Use automated systems to access our services</li>
                <li>Engage in any activity that harms our reputation or business</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be resolved through:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
                <li>Good faith negotiation between parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Arbitration in Solapur, Maharashtra as per Indian Arbitration and Conciliation Act</li>
                <li>Courts of Solapur shall have exclusive jurisdiction for any legal proceedings</li>
              </ol>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding shall be brought exclusively in the courts of Solapur, Maharashtra.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> sales@atharvaenterprises.org</p>
                <p><strong>Phone:</strong> +91 94235 93257, +91 91309 44698</p>
                <p><strong>Address:</strong> Solapur, Maharashtra, India</p>
                <p><strong>Business Hours:</strong> Mon–Sat: 9 AM – 7 PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}