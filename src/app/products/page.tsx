"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X, Package, Hammer, Blocks } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Cement Products
const cementProducts = [
  {
    id: "c1",
    category: "cement",
    brand: "Vicat Cement",
    grade: "OPC 53",
    packSize: "50 kg",
    image: "/products/vicat.jpg",
    specifications: ["High early strength", "Excellent finish", "Faster construction", "Superior quality"],
  },
  {
    id: "c2",
    category: "cement",
    brand: "Zuari Cement",
    image: "/products/zuari.jpg",
    specifications: ["Environment friendly", "Cost effective", "Reduced carbon footprint", "Excellent workability"],
  },
  {
    id: "c3",
    category: "cement",
    brand: "Dalmia Cement",
    image: "/products/dalmia.png",
    specifications: ["Sulphate resistant", "Marine construction", "Low permeability", "High durability"],
  },
  {
    id: "c4",
    category: "cement",
    brand: "ACC Cement",
    image: "/products/acc.png",
    specifications: ["Water resistant", "High durability", "Superior strength", "Low heat of hydration"],
  },
  {
    id: "c5",
    category: "cement",
    brand: "Deccan Cement",
    image: "/products/deccan.png",
    specifications: ["High strength", "Better durability", "Low heat generation", "Improved finish"],
  },
  {
    id: "c6",
    category: "cement",
    brand: "Ambuja Cement",
    image: "/products/ambuja.png",
    specifications: ["Eco-friendly", "Low carbon footprint", "High strength", "Better workability"],
  },
  {
    id: "c7",
    category: "cement",
    brand: "Bangur Cement",
    image: "/products/bangur.png",
    specifications: ["Premium quality", "Cost-effective", "Consistent performance", "Tested quality"],
  },
  {
    id: "c8",
    category: "cement",
    brand: "JK Cement",
    image: "/products/JK.png",
    specifications: ["Maximum strength", "Quick setting", "Ideal for RCC", "Premium grade"],
  },
  {
    id: "c9",
    category: "cement",
    brand: "Nagarjuna Cement",
    image: "/products/nagarjuna.png",
    specifications: ["Reliable performance", "Cost effective", "Consistent quality", "Trusted brand"],
  },
];

// Steel Products
const steelProducts = [
  {
    id: "s1",
    category: "steel",
    brand: "TATA Steel",
    image: "/products/tata.png",
    specifications: ["High tensile strength", "Corrosion resistant", "Earthquake resistant", "Best for high-rise"],
  },
  {
    id: "s2",
    category: "steel",
    brand: "JSW Steel",
    image: "/products/jsw.png",
    specifications: ["Superior ductility", "Fire resistant", "High strength", "Bulk supply available"],
  },
  {
    id: "s3",
    category: "steel",
    brand: "SAIL Steel",
    image: "/products/sail.png",
    specifications: ["Government certified", "Cost effective", "Easy availability", "All diameters in stock"],
  },
  {
    id: "s4",
    category: "steel",
    brand: "ShreeOM Steel",
    image: "/products/shreeom.png",
    specifications: ["Premium grade", "Long lasting", "Free delivery", "Immediate dispatch"],
  },
];

const constructionMaterials = [
  {
    id: "m1",
    category: "materials",
    brand: "AAC Block",
    image: "/products/aacblock.png",
    specifications: ["Energy efficient", "Fire resistant", "Sound insulation", "Fast construction"],
  },
  {
    id: "m2",
    category: "materials",
    brand: "Primer",
    image: "/products/primer.png",
    specifications: ["Surface prep", "Adhesion", "Durability", "Easy application"],
  },
  {
    id: "m3",
    category: "materials",
    brand: "Naptha and PCE based Ad-mixture",
    image: "/products/pceadmix.png",
    specifications: ["Workability", "Strength gain", "Reduced water", "Improved finish"],
  },
  {
    id: "m4",
    category: "materials",
    brand: "Plumbing Materials",
    image: "/products/plumbing.png",
    specifications: ["Pipes & fittings", "Valves & taps", "Quality assured", "Bulk supply"],
  },
  {
    id: "m5",
    category: "materials",
    brand: "White Cement",
    image: "/products/whitecem.png",
    specifications: ["Smooth finish", "High whiteness", "Interior/exterior", "Consistent quality"],
  },
];

const allProducts = [...cementProducts, ...steelProducts, ...constructionMaterials];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [enquiryProduct, setEnquiryProduct] = useState<any>(null);
  const [filtersExpanded, setFiltersExpanded] = useState(true);

  const categoryProductsMap: Record<string, any[]> = {
    cement: cementProducts,
    steel: steelProducts,
    materials: constructionMaterials,
  };
  const brands = selectedCategory === "all"
    ? ["all", ...Array.from(new Set(allProducts.map(p => p.brand).filter(Boolean)))]
    : ["all", ...Array.from(new Set(categoryProductsMap[selectedCategory].map(p => p.brand).filter(Boolean)))];
  const grades = selectedCategory === "all"
    ? ["all", ...Array.from(new Set(allProducts.map(p => (p as any).grade).filter(Boolean)))]
    : ["all", ...Array.from(new Set(categoryProductsMap[selectedCategory].map(p => (p as any).grade).filter(Boolean)))];

const filteredProducts = allProducts.filter(product => {
    const productGrade = (product as any).grade || "";
    const matchesSearch = product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         productGrade.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    const matchesGrade = selectedGrade === "all" || productGrade === selectedGrade;
    
    return matchesSearch && matchesCategory && matchesBrand && matchesGrade;
  });

  const filteredCement = filteredProducts.filter(p => p.category === "cement");
  const filteredSteel = filteredProducts.filter(p => p.category === "steel");
  const filteredMaterials = filteredProducts.filter(p => p.category === "materials");

  const handleEnquire = (product: any) => {
    setEnquiryProduct(product);
  };

  const handleWhatsAppEnquiry = () => {
    if (!enquiryProduct) return;
    
    const message = `Product Enquiry:\n\nProduct: ${enquiryProduct.brand}\nGrade: ${enquiryProduct.grade || "N/A"}\nPack Size: ${enquiryProduct.packSize || "N/A"}\n\nPlease provide pricing and availability details.`;
    const url = `https://wa.me/919423593257?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setEnquiryProduct(null);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSelectedGrade("all");
    setFiltersExpanded(false);
  };

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedBrand !== "all" || selectedGrade !== "all";

  return (
    <>
      <Navbar />
      <FloatingWhatsAppButton />

      {/* Hero */}
      <section className="relative pt-32 pb-12 text-white" style={{ background: 'linear-gradient(to bottom right, #1F3A60, #334155)' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-gray-300">
            Browse our extensive range of cement, steel, and construction materials.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          {filtersExpanded ? (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search products or brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") setFiltersExpanded(false); }}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={(v) => { setSelectedCategory(v); setSelectedBrand("all"); setSelectedGrade("all"); setFiltersExpanded(false); }}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="cement">Cement</SelectItem>
                <SelectItem value="steel">Steel</SelectItem>
                <SelectItem value="materials">Construction Materials</SelectItem>
              </SelectContent>
            </Select>

            {/* Brand Filter */}
            {selectedCategory !== "all" ? (
              <Select value={selectedBrand} onValueChange={(v) => { setSelectedBrand(v); setFiltersExpanded(false); }}>
                <SelectTrigger>
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand === "all" ? "All Brands" : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="flex items-center justify-center rounded-md border px-3 py-2 text-sm text-gray-500">
                Select a category to filter by brand
              </div>
            )}

            {/* Grade Filter */}
            {selectedCategory !== "all" ? (
              <Select value={selectedGrade} onValueChange={(v) => { setSelectedGrade(v); setFiltersExpanded(false); }}>
                <SelectTrigger>
                  <SelectValue placeholder="All Grades" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade === "all" ? "All Grades" : grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="flex items-center justify-center rounded-md border px-3 py-2 text-sm text-gray-500">
                Select a category to filter by grade
              </div>
            )}
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50"
                style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          )}
          <div className="mt-4 flex items-center justify-end">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-blue-50"
              style={{ borderColor: '#3B82F6', color: '#3B82F6' }}
              onClick={() => setFiltersExpanded(false)}
            >
              Hide Filters
            </Button>
          </div>
          </>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {hasActiveFilters ? "Filters applied" : "No filters"} • Showing {filteredProducts.length} of {allProducts.length}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setFiltersExpanded(true)}
                  size="sm"
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: '#3B82F6' }}
                >
                  Show Filters
                </Button>
                <Button onClick={clearFilters} variant="outline" size="sm" className="hover:bg-blue-50" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
                  Clear
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Sections */}
      <section className="py-12" style={{ backgroundColor: '#E5E7EB' }}>
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Cement Section */}
          {(selectedCategory === "all" || selectedCategory === "cement") && filteredCement.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Package className="w-8 h-8" style={{ color: '#3B82F6' }} />
                <div>
                  <h2 className="text-3xl font-bold" style={{ color: '#1F3A60' }}>Cement</h2>
                  <p className="text-gray-600 mt-1">OPC, PPC, PSC, Fly Ash, GGBS and other variants {"\n"} Available in 50kg bags and bulk supply</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCement.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onEnquire={handleEnquire}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Steel Section */}
          {(selectedCategory === "all" || selectedCategory === "steel") && filteredSteel.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Hammer className="w-8 h-8" style={{ color: '#3B82F6' }} />
                <div>
                  <h2 className="text-3xl font-bold" style={{ color: '#1F3A60' }}>Steel</h2>
                  <p className="text-gray-600 mt-1">TMT bars with premium brands {"\n"} Fe500, Fe550 grades</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSteel.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onEnquire={handleEnquire}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Construction Materials Section */}
          {(selectedCategory === "all" || selectedCategory === "materials") && filteredMaterials.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Blocks className="w-8 h-8" style={{ color: '#3B82F6' }} />
                <div>
                  <h2 className="text-3xl font-bold" style={{ color: '#1F3A60' }}>Construction Materials</h2>
                  <p className="text-gray-600 mt-1">Sand, aggregates, bricks, crush, fly ash, binding materials and other essentials - Bulk supply available</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMaterials.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onEnquire={handleEnquire}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F3A60' }}>
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search term
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Dialog */}
      <Dialog open={!!enquiryProduct} onOpenChange={() => setEnquiryProduct(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Enquiry</DialogTitle>
          </DialogHeader>
          {enquiryProduct && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Brand</p>
                <p className="font-semibold">{enquiryProduct.brand}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Grade</p>
                    <p className="font-semibold">{enquiryProduct.grade ?? "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pack Size</p>
                    <p className="font-semibold">{enquiryProduct.packSize ?? "N/A"}</p>
                </div>
              </div>
              <Button
                onClick={handleWhatsAppEnquiry}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Send Enquiry on WhatsApp
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
