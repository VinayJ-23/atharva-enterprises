"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl" style={{ color: '#E5E7EB' }}>
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow inner-shadow flex-shrink-0" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                  <FileText className="w-7 h-7" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#3B82F6' }}>Overview</span>
                    <span className="w-8 h-0.5 rounded-full bg-blue-200" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#1F3A60' }}>Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Atharva Enterprises ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-sm flex-shrink-0" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                  <Database className="w-7 h-7" style={{ color: '#3B82F6' }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Information We Collect</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div className="bg-white border border-blue-50 rounded-xl p-4 shadow-[0_5px_20px_rgba(15,23,42,0.04)]">
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Personal Information</h3>
                      <p className="mb-2 text-sm text-gray-600">When you interact with our services, we may collect:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Name and contact information (phone number, email address)</li>
                        <li>Delivery address and location details</li>
                        <li>Business information (company name, GST number if applicable)</li>
                        <li>Order history and preferences</li>
                        <li>Communication records (emails, WhatsApp messages, calls)</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-blue-50 rounded-xl p-4 shadow-[0_5px_20px_rgba(15,23,42,0.04)]">
                      <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Automatically Collected Information</h3>
                      <p className="mb-2 text-sm text-gray-600">We automatically collect limited technical data to improve performance:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        <li>Browser type and version</li>
                        <li>Device information and operating system</li>
                        <li>IP address and location data</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website addresses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>How We Use Your Information</h2>
                  <div className="space-y-2 text-gray-700">
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Processing and fulfilling your orders and enquiries</li>
                      <li>Providing customer support and responding to your requests</li>
                      <li>Sending order confirmations, delivery updates, and invoices</li>
                      <li>Improving our products, services, and website functionality</li>
                      <li>Communicating promotional offers and updates (with your consent)</li>
                      <li>Analyzing usage patterns to enhance user experience</li>
                      <li>Complying with legal obligations and preventing fraud</li>
                      <li>Maintaining records for business and legal purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Secure data storage and encrypted transmission</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection</li>
                    <li>Third-party service provider compliance verification</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li><strong>Service Providers:</strong> With logistics partners for delivery and payment processors for transactions</li>
                    <li><strong>Business Partners:</strong> With cement manufacturers for warranty and quality assurance purposes</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with merger, sale, or acquisition (with prior notice)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Access</h3>
                  <p className="text-sm text-gray-600">Request a copy of your personal data we hold</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Correction</h3>
                  <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Deletion</h3>
                  <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2" style={{ color: '#334155' }}>Opt-Out</h3>
                  <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a revised "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#E5E7EB' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F3A60' }}>Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> sales@atharvaenterprises.org</p>
                <p><strong>Phone:</strong> +91 94235 93257</p>
                <p><strong>Address:</strong> 589/1/1/2/2 Vajreshwari Nagar, Akkalkot Road, Solapur, Maharashtra, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}