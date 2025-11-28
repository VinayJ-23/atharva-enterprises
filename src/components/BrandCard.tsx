"use client";

import Image from "next/image";

interface BrandCardProps {
  name: string;
  logo: string;
  description: string;
}

export default function BrandCard({ name, logo, description }: BrandCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border group" style={{ borderColor: '#d1d5db' }}>
      <div className="relative h-40 flex items-center justify-center p-6" style={{ backgroundColor: '#E5E7EB' }}>
        <Image
          src={logo}
          alt={`${name} logo`}
          width={200}
          height={80}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-5 bg-white">
        <h3 className="text-lg font-bold mb-2 text-center" style={{ color: '#334155' }}>{name}</h3>
        <p className="text-sm text-gray-600 text-center line-clamp-2">{description}</p>
      </div>
    </div>
  );
}