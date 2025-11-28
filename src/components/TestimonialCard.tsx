"use client";

import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  company,
  image,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold" style={{ color: '#1F3A60' }}>{name}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
        <Quote className="w-8 h-8" style={{ color: '#3B82F6', opacity: 0.2 }} />
      </div>

      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 text-sm leading-relaxed italic">
        &ldquo;{testimonial}&rdquo;
      </p>
    </div>
  );
}