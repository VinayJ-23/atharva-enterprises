"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";

interface EnquiryFormProps {
  prefilledProduct?: {
    name: string;
    grade: string;
  };
}

export default function EnquiryForm({ prefilledProduct }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    location: "",
    message: prefilledProduct
      ? `I'm interested in ${prefilledProduct.name} (${prefilledProduct.grade})`
      : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppSend = () => {
    const message = `
*New Enquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Quantity:* ${formData.quantity || "Not specified"}
*Location:* ${formData.location}
*Message:* ${formData.message || "No additional message"}
    `.trim();

    const phoneNumber = "919423593257";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      quantity: "",
      location: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#1F3A60' }}>
          Enquiry Received!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest. Our team will contact you shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleWhatsAppSend}
            className="bg-green-500 hover:bg-green-600"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Send on WhatsApp
          </Button>
          <Button onClick={handleReset} variant="outline">
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <Label htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
            className={errors.name ? "border-red-500" : ""}
            style={{ backgroundColor: '#E5E7EB' }}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="10-digit mobile number"
            className={errors.phone ? "border-red-500" : ""}
            style={{ backgroundColor: '#E5E7EB' }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address (Optional)</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your.email@example.com"
            className={errors.email ? "border-red-500" : ""}
            style={{ backgroundColor: '#E5E7EB' }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <Label htmlFor="quantity">Quantity (Optional)</Label>
          <Input
            id="quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
            placeholder="e.g., 100 bags, 5 tonnes"
            style={{ backgroundColor: '#E5E7EB' }}
          />
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <Label htmlFor="location">
            Delivery Location <span className="text-red-500">*</span>
          </Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="City, Area"
            className={errors.location ? "border-red-500" : ""}
            style={{ backgroundColor: '#E5E7EB' }}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Any specific requirements or questions..."
          rows={4}
          style={{ backgroundColor: '#E5E7EB' }}
        />
      </div>

      <Button type="submit" className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#3B82F6' }}>
        <Send className="w-4 h-4 mr-2" />
        Submit Enquiry
      </Button>
    </form>
  );
}
