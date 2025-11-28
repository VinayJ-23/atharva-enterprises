# CementTrade - Multi-Brand Cement Dealership Website

A professional, mobile-friendly website for cement trading and multi-brand dealership built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🌟 Features

### Complete Website Pages
- ✅ **Homepage** - Hero section, brand logos, services overview, quick contact form
- ✅ **About Us** - Company history, mission, vision, timeline, founder's note
- ✅ **Product Catalog** - Filterable products by brand/grade/pack with search functionality
- ✅ **Brands We Deal In** - Logo grid with brand descriptions
- ✅ **Services** - Detailed service offerings with icons and descriptions
- ✅ **Gallery** - Responsive image grid with modal view (warehouse, trucks, stock)
- ✅ **Awards & Testimonials** - Recognition gallery and customer reviews
- ✅ **Enquiry Page** - Form with validation and WhatsApp integration
- ✅ **Contact** - Phone, WhatsApp, email, Google Maps, business hours
- ✅ **FAQs** - 12 relevant questions with accordion UI
- ✅ **Privacy Policy** - Comprehensive privacy terms
- ✅ **Terms & Conditions** - Complete T&C documentation

### Key Functionality
- 🔍 **Client-side search & filtering** - Real-time product filtering
- 📱 **WhatsApp integration** - Prefilled message links for quick enquiries
- ✅ **Form validation** - Client-side validation with error handling
- 📸 **Image lazy loading** - Optimized performance with Next.js Image
- 🎨 **Responsive design** - Mobile-first approach, works on all devices
- 🔄 **Sticky navigation** - Header with scroll effect
- 💬 **Floating action buttons** - WhatsApp and Call buttons
- 🎯 **Modal galleries** - Full-screen image viewing with navigation

### Reusable Components
- `Navbar` - Sticky header with scroll effect
- `Footer` - Business details with links
- `FloatingWhatsAppButton` - WhatsApp & Call floating buttons
- `ProductCard` - Product display with enquire functionality
- `BrandCard` - Brand showcase cards
- `TestimonialCard` - Customer reviews with ratings
- `GalleryModal` - Image modal with keyboard navigation
- `EnquiryForm` - Form with validation and WhatsApp integration

## 📁 Project Structure

```
cementtrade/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Search engine instructions
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx     # About Us page
│   │   ├── awards/
│   │   │   └── page.tsx     # Awards & Testimonials
│   │   ├── brands/
│   │   │   └── page.tsx     # Brands We Deal In
│   │   ├── contact/
│   │   │   └── page.tsx     # Contact page
│   │   ├── enquiry/
│   │   │   └── page.tsx     # Enquiry form page
│   │   ├── faqs/
│   │   │   └── page.tsx     # FAQs
│   │   ├── gallery/
│   │   │   └── page.tsx     # Gallery
│   │   ├── privacy/
│   │   │   └── page.tsx     # Privacy Policy
│   │   ├── products/
│   │   │   └── page.tsx     # Product Catalog
│   │   ├── services/
│   │   │   └── page.tsx     # Services
│   │   ├── terms/
│   │   │   └── page.tsx     # Terms & Conditions
│   │   ├── globals.css      # Global styles with Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── ui/              # Shadcn/UI components
│   │   ├── BrandCard.tsx
│   │   ├── EnquiryForm.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd cementtrade
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Update Business Information

**Contact Details** - Update in multiple files:
- `src/components/Footer.tsx` - Footer contact info
- `src/components/FloatingWhatsAppButton.tsx` - WhatsApp number
- `src/app/contact/page.tsx` - Contact page details
- `src/app/enquiry/page.tsx` - Enquiry contact sidebar

**Business Name & Branding:**
- `src/components/Navbar.tsx` - Logo and company name
- `src/components/Footer.tsx` - Footer branding
- `src/app/layout.tsx` - Meta title and description

### 2. Update Images

Replace placeholder Unsplash images with your own:

**Brand Logos:**
- Homepage: `src/app/page.tsx` - brands array
- Brands page: `src/app/brands/page.tsx` - brands array

**Gallery Images:**
- `src/app/gallery/page.tsx` - galleryImages array

**Product Images:**
- `src/app/products/page.tsx` - products array

**Awards:**
- `src/app/awards/page.tsx` - awards array

**Store images in:**
- `public/images/` folder (create this directory)
- Or use a CDN/cloud storage service

### 3. Update Content

**Products:**
```typescript
// src/app/products/page.tsx
const products = [
  {
    id: "1",
    brand: "Your Brand",
    name: "Product Name",
    grade: "OPC 53",
    packSize: "50 kg",
    image: "/images/products/product1.jpg",
    specifications: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more products...
];
```

**Testimonials:**
```typescript
// src/app/awards/page.tsx
const testimonials = [
  {
    name: "Customer Name",
    company: "Company Name",
    image: "/images/testimonials/customer1.jpg",
    rating: 5,
    testimonial: "Your review here...",
  },
];
```

**FAQs:**
```typescript
// src/app/faqs/page.tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your answer...",
  },
];
```

### 4. Update Colors & Styling

The project uses Tailwind CSS with custom color scheme (Orange/Red theme).

**To change colors:**
Edit `src/app/globals.css`:
```css
:root {
  --primary: /* your color */;
  --secondary: /* your color */;
  /* ... other colors */
}
```

**Or update Tailwind classes:**
- Replace `orange-600` with your brand color
- Update `bg-gradient-to-br from-orange-600 to-red-600` gradients

### 5. WhatsApp Integration

Update WhatsApp number in:
- `src/components/FloatingWhatsAppButton.tsx`
- `src/components/EnquiryForm.tsx`
- `src/app/products/page.tsx`
- `src/app/page.tsx`

Change:
```typescript
const phoneNumber = "919876543210"; // Format: country code + number (no +)
```

## 🔧 Configuration Files

### Sitemap (public/sitemap.xml)
Update the domain name:
```xml
<loc>https://your-domain.com/</loc>
```

### Robots.txt (public/robots.txt)
Update sitemap URL:
```
Sitemap: https://your-domain.com/sitemap.xml
```

### Metadata (src/app/layout.tsx)
Update SEO metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Business Name - Cement Trading",
  description: "Your business description",
};
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly buttons and forms
- Optimized images with lazy loading
- Responsive grids and layouts

## ⚡ Performance Optimization

- **Next.js Image Optimization** - Automatic image optimization
- **Lazy Loading** - Images load as you scroll
- **Code Splitting** - Automatic by Next.js
- **Client-side Navigation** - Fast page transitions
- **Static Generation** - Pages pre-rendered for speed

## 🌐 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags in layout
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt configuration
- ✅ Responsive design (mobile-friendly)
- ✅ Fast loading times
- ✅ Clean URLs

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Image Optimization:** Next.js Image

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Other Platforms
The project can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## 📝 Content Management

All content is currently hardcoded in the components. To make it dynamic:

1. **Add a CMS:**
   - Sanity.io
   - Contentful
   - Strapi
   - WordPress with headless setup

2. **Use a Database:**
   - Add API routes in `src/app/api/`
   - Connect to MongoDB, PostgreSQL, etc.
   - Fetch data in components

3. **Use JSON Files:**
   - Store content in `public/data/` folder
   - Fetch using API routes or direct import

## 🛠️ Troubleshooting

### Port already in use
```bash
# Change port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image not loading
- Check image path is correct
- Ensure images are in `public/` folder
- Verify Next.js Image domain configuration in `next.config.ts` for external URLs

## 📞 Support

For questions or issues:
- Review this README
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Check Shadcn/UI docs: https://ui.shadcn.com

## 📄 License

This project is created for CementTrade. All rights reserved.

## 🎯 Next Steps

1. **Replace placeholder images** with your actual business photos
2. **Update contact information** across all pages
3. **Customize colors** to match your brand
4. **Update product catalog** with your actual inventory
5. **Test WhatsApp links** with your business number
6. **Review and update** Privacy Policy and Terms
7. **Test on mobile devices** to ensure responsiveness
8. **Setup analytics** (Google Analytics, etc.)
9. **Setup domain** and deploy to production
10. **Test contact forms** and enquiry submissions

## ✨ Features to Add (Optional)

- 🔐 Admin panel for content management
- 📧 Email integration for enquiries
- 💳 Online payment system
- 🔔 Newsletter subscription
- 🌐 Multi-language support
- 📊 Analytics dashboard
- 🤖 Chatbot integration
- 📱 Mobile app version

---

**Built with ❤️ for CementTrade**

Last Updated: December 2024