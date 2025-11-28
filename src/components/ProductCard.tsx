"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  id: string;
  brand: string;
  image?: string; // optional, can be local (/products/...) or external (https://...)
  specifications: string[];
  onEnquire: (product: { id: string; brand: string; grade: string; packSize: string }) => void;
}

// Toggle debug to true to show the requested image path on the card (dev only)
const DEBUG_PATH = false;

export default function ProductCard({
  id,
  brand,
  image,
  specifications,
  onEnquire,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  // normalize image path:
  // - if user passed "public/products/..." remove the "public" segment
  // - if image is not provided, we'll fallback to a brand-based local file name
  const normalizeLocalPath = (p: string) =>
    p.replace(/^\/?public\/+/i, "/") // remove leading "public" if present
     .replace(/^\/(?!products\/)/, "/"); // ensure it starts with /products/... if it starts with /

  // brand->filename fallback: prefer simple file names like "aacblock.png"
  const compactBrand = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  // default fallback (put this file in public/products)
  const DEFAULT_LOCAL = "/products/default.png";

  // decide final src:
  // if image starts with http(s) => external
  // else if image provided => normalize
  // else try a local brand-based filename (examples: "AAC Block" -> "/products/aacblock.png" or "/products/aac-block.png")
  let candidateSrc = "";
  if (image && image.trim()) {
    const trimmed = image.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      candidateSrc = trimmed; // external URL
    } else {
      // make sure it points under /products/...
      candidateSrc = normalizeLocalPath(trimmed);
      // if the developer accidentally gave '/products/aacblock.png' it's fine
    }
  } else {
    // try common variants for brand files: aacblock.png or aac-block.png or brand.png
    const compact = compactBrand(brand);
    candidateSrc = `/products/${compact}.png`;
  }

  // Helper to detect external url
  const isExternal = (src: string) => /^https?:\/\//i.test(src);

  // If local image fails, we will show DEFAULT_LOCAL
  // For external image failure we fall back to DEFAULT_LOCAL as well.
  const finalLocalSrc = !isExternal(candidateSrc) ? candidateSrc : DEFAULT_LOCAL;

  return (
    <div
    className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border flex flex-col h-full"
    style={{ backgroundColor: '#E5E7EB', borderColor: '#d1d5db' }}
  >  
      <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Local files use next/image (optimized). External URLs use native <img> to avoid domain config issues */}
        {!imageError ? (
          isExternal(candidateSrc) ? (
            // External image: use plain <img> (no next/image domain config needed)
            // onError -> set imageError to show fallback local default
            <img
              src={candidateSrc}
              alt={brand}
              style={{ maxWidth: "100%", maxHeight: "100%", padding: 16, objectFit: "contain" }}
              onError={() => setImageError(true)}
            />
          ) : (
            // Local image in /public -> use next/image with fill
            <Image
              src={candidateSrc || DEFAULT_LOCAL}
              alt={brand}
              fill
              className="object-contain p-4"
              loading="lazy"
              onError={() => {
                // next/image sometimes doesn't call onError in older versions; we still attempt
                setImageError(true);
              }}
            />
          )
        ) : (
          // Fallback: local default image with fixed size to keep layout stable
          <div className="text-center">
            <Image src={DEFAULT_LOCAL} alt="default" width={96} height={96} />
            <p className="text-sm font-semibold" style={{ color: '#334155' }}>{brand}</p>
          </div>
        )}

        {DEBUG_PATH && (
          <div style={{ position: 'absolute', bottom: 4, left: 8, right: 8 }} className="text-[10px] text-center text-gray-400 select-none">
            {isExternal(candidateSrc) ? candidateSrc : (candidateSrc || DEFAULT_LOCAL)}
          </div>
        )}
      </div>

      <div className="p-5 bg-white flex-1 flex flex-col">
        <div className="mb-3 text-center">
          <h3 className="text-lg font-bold" style={{ color: '#334155' }}>{brand}</h3>
          <p className="text-xs text-gray-500 mt-1"></p>
        </div>

        <div className="text-center mb-4">
          <span className="text-sm text-gray-600"></span>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
          <ul className="space-y-1">
            {specifications.slice(0, 3).map((spec, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs text-gray-600">
                <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={() => onEnquire({ id, brand, grade: "", packSize: "" })}
          className="w-full text-white hover:opacity-90"
          style={{ backgroundColor: '#3B82F6' }}
        >
          Enquire Now
        </Button>
      </div>
    </div>
  );
}
