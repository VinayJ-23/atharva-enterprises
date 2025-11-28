"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Target, Eye, Shield, Users, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Quality First",
    description: "Only genuine, certified materials from authorized dealers",
    icon: Shield,
  },
  {
    title: "Customer Focus",
    description: "Personalized service and expert consultation for every project",
    icon: Users,
  },
  {
    title: "Reliability",
    description: "Timely delivery and consistent supply with our own logistics",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description: "Transparent pricing and honest business practices",
    icon: TrendingUp,
  },
];

const timeline = [
  {
    year: "2014",
    event: "Founded Atharva Enterprises in Solapur with a focus on quality cement supply.",
  },
  {
    year: "2016",
    event: "Expanded to include steel and construction materials, becoming a comprehensive supplier.",
  },
  {
    year: "2018",
    event: "Achieved 200+ customer milestone and expanded warehouse capacity to 3000+ tonnes.",
  },
  {
    year: "2020",
    event: "Launched own logistics fleet ensuring reliable and timely deliveries across the region.",
  },
  {
    year: "2022",
    event: "Reached 15,000 MT monthly volume and established strong partnerships with leading suppliers.",
  },
  {
    year: "2024",
    event: "Serving 300+ satisfied clients with expanded warehouse capacity of 5000+ tonnes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 text-slate-600 bg-red-100"
        style={{ background: "linear-gradient(to bottom right, #1F3A60, #334155)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              About Atharva Enterprises
            </h1>
            <p className="text-xl text-white">
              A leading and trusted distributor of cement, steel, and construction materials, known
              for delivering quality products, exceptional service, and reliable support to builders,
              contractors, and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Note from Our Founder */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#1F3A60" }}>
                A Note from Our Founder
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Founder Image */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-md mx-auto">
                    <Image
                      src="/img1.png"
                      alt="Founder"
                      width={144}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="font-bold text-base" style={{ color: "#1F3A60" }}>
                      Mr. Bhupati Gundeli
                    </p>
                    <p className="text-gray-600 text-sm">Founder & Managing Director</p>
                  </div>
                </div>

                {/* Founder Message */}
                <div className="flex-1">
                  <p className="text-gray-700 text-base leading-relaxed mb-4 md:text-justify">
                    Since founding Atharva Enterprises in 2014, my vision has been to build a dependable cement supply business where customers experience trust, quality, and reliability at every step. Today, we stand proud as a recognized partner in the construction industry.
                  </p>

                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span>Committed to delivering 100% genuine products with consistent quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span>Supporting projects from individual homes to large commercial developments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span>Upholding trust through professionalism, excellence, and timely service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#1F3A60" }}>
                Key Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>11+ years of industry experience in cement and construction material supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Trusted multibrand dealerships with India's top cement manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Thousands of successful deliveries to residential, commercial, and infrastructure projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Dedicated logistics fleet for timely and reliable doorstep delivery</span>
                </li>
                <li className="flex items-start gap-2 md:col-span-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Commitment to quality, trust, and long-term client relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8" style={{ backgroundColor: "#E5E7EB" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#1F3A60" }}>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-sm leading-snug">
                    To be the most reliable cement supplier by delivering genuine products, competitive pricing, and exceptional service supporting construction industry growth.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#1F3A60" }}>
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-sm leading-snug">
                    To become the leading multi-state cement dealership recognized for quality, innovation in logistics, and lasting partnerships contributing to India's infrastructure development.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1F3A60" }}>
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <Card key={value.title} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#3B82F6" }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-1" style={{ color: "#1F3A60" }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12" style={{ backgroundColor: "#E5E7EB" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1F3A60" }}>
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our growth and commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-md"
                      style={{ backgroundColor: "#3B82F6" }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="p-4 hover:shadow-md transition-shadow bg-white">
                      <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
