import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos - Twin Trees Fayetteville Restaurant & Pizza",
  description:
    "Browse photos of Twin Trees Fayetteville. See our Syracuse Style pizza, chargrilled wings, restaurant interior and more at 104 Highbridge St, Fayetteville, NY.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const photos = [
    { src: "/images/gallery/photo-1.jpg", alt: "Fresh pizza from Twin Trees Fayetteville" },
    { src: "/images/gallery/photo-2.jpg", alt: "Twin Trees restaurant dining area" },
    { src: "/images/gallery/photo-3.jpg", alt: "Signature Syracuse style pizza slice" },
    { src: "/images/gallery/photo-4.jpg", alt: "Appetizers and sides at Twin Trees" },
    { src: "/images/gallery/photo-5.jpg", alt: "Twin Trees Fayetteville bar area" },
    { src: "/images/gallery/photo-6.jpg", alt: "Burgers and sandwiches at Twin Trees" },
    { src: "/images/gallery/photo-7.jpg", alt: "Twin Trees kitchen preparing orders" },
    { src: "/images/gallery/photo-8.jpg", alt: "Customer favorites at Twin Trees Fayetteville" },
    { src: "/images/gallery/photo-9.jpg", alt: "Twin Trees pizza fresh out of the oven" },
    { src: "/images/gallery/photo-10.jpg", alt: "Twin Trees Fayetteville interior" },
    { src: "/images/gallery/photo-11.jpg", alt: "Specialty pizza at Twin Trees" },
    { src: "/images/gallery/photo-12.jpg", alt: "Twin Trees menu favorites" },
    { src: "/images/gallery/photo-13.jpg", alt: "Twin Trees classic pie" },
    { src: "/images/gallery/photo-14.jpg", alt: "Loaded fries at Twin Trees" },
    { src: "/images/gallery/photo-15.jpg", alt: "Twin Trees team at work" },
    { src: "/images/gallery/photo-16.jpg", alt: "Twin Trees Fayetteville favorites" },
  ];

  return (
    <main>
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
              Gallery
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
            <p className="text-cream/60 text-lg">
              A taste of what&apos;s waiting for you at Twin Trees Fayetteville
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden group ${
                  i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={i === 0 || i === 5 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <p className="text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Share Your Experience
          </h2>
          <p className="text-cream/60 mb-6">
            Tag us on social media and show us your Twin Trees favorites.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/TwinTreesFayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/twintreesfayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
