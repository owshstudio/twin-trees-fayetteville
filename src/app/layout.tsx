import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const siteUrl = "https://twin-trees-fayetteville.vercel.app";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  title: "Twin Trees Fayetteville | Original Syracuse Style Pizza Since 1957",
  description:
    "Twin Trees Fayetteville - Ross family owned since 1957. Original Syracuse Style pizza, burgers, subs, salads & more. Order online or visit us at 104 Highbridge St, Fayetteville, NY 13066.",
  keywords:
    "Twin Trees, Fayetteville, pizza, Syracuse style pizza, restaurant, Fayetteville NY, pizza delivery, CNY pizza",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Twin Trees Fayetteville | Original Syracuse Style Pizza Since 1957",
    description:
      "Ross family owned since 1957. Original Syracuse Style pizza, burgers, subs, salads & more. 104 Highbridge St, Fayetteville, NY 13066.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Twin Trees Fayetteville",
    images: [
      {
        url: "/images/storefront.jpg",
        width: 1200,
        height: 630,
        alt: "Twin Trees Fayetteville restaurant storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twin Trees Fayetteville | Original Syracuse Style Pizza Since 1957",
    description:
      "Ross family owned since 1957. Original Syracuse Style pizza, burgers, subs, salads & more.",
    images: ["/images/storefront.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Twin Trees Fayetteville",
  description:
    "Ross family owned since 1957. Original Syracuse Style pizza, burgers, subs, salads & more.",
  image: `${siteUrl}/images/storefront.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "104 Highbridge St",
    addressLocality: "Fayetteville",
    addressRegion: "NY",
    postalCode: "13066",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.0297,
    longitude: -76.0045,
  },
  telephone: "+1-315-632-4777",
  url: "https://www.twintreesfayetteville.com",
  servesCuisine: ["Pizza", "Italian", "American"],
  priceRange: "$$",
  hasMenu: {
    "@type": "Menu",
    url: `${siteUrl}/menu`,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "21:00",
    },
  ],
  foundingDate: "1957",
  founder: {
    "@type": "Person",
    name: "Ross Family",
  },
  sameAs: [
    "https://www.facebook.com/TwinTreesFayetteville",
    "https://www.instagram.com/twintreesfayetteville",
  ],
  acceptsReservations: false,
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "USD",
};

function CamillusBanner() {
  return (
    <div className="bg-deep-red text-cream text-center text-sm py-2 px-4">
      <a
        href="https://twin-trees-camillus.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold transition-colors"
      >
        Visit Our Camillus Location &rarr; 5401 W Genesee St, Camillus, NY |
        315-530-1947
      </a>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="bg-charcoal/95 backdrop-blur-sm border-b border-gold/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/twin-trees-icon.svg"
              alt="Twin Trees"
              width={40}
              height={46}
              className="w-10 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-cream tracking-wide font-[family-name:var(--font-heading)]">
                Twin Trees
              </span>
              <span className="text-base text-gold font-semibold ml-1.5 font-[family-name:var(--font-heading)]">
                Fayetteville
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-base whitespace-nowrap">
            <Link
              href="/menu"
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="/location"
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              Location
            </Link>
            <Link
              href="/gallery"
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-cream/80 hover:text-gold transition-colors font-medium"
            >
              Contact
            </Link>
            <span className="text-cream/50">|</span>
            <a
              href="tel:315-632-4777"
              className="text-gold hover:text-gold-light transition-colors font-semibold"
            >
              315-632-4777
            </a>
            <a
              href="https://www.twintreesfayetteville.com/services-2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-deep-red hover:bg-deep-red-light text-cream px-5 py-2.5 rounded font-semibold transition-colors"
            >
              Order Online
            </a>
          </div>

          <details className="lg:hidden relative group">
            <summary className="list-none cursor-pointer p-2 text-cream">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 bg-charcoal-light border border-gold/10 rounded-lg shadow-xl py-2 w-56 z-50">
              <Link
                href="/menu"
                className="block px-4 py-2.5 text-cream/80 hover:text-gold hover:bg-deep-red/10"
              >
                Menu
              </Link>
              <Link
                href="/location"
                className="block px-4 py-2.5 text-cream/80 hover:text-gold hover:bg-deep-red/10"
              >
                Location
              </Link>
              <Link
                href="/gallery"
                className="block px-4 py-2.5 text-cream/80 hover:text-gold hover:bg-deep-red/10"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2.5 text-cream/80 hover:text-gold hover:bg-deep-red/10"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2.5 text-cream/80 hover:text-gold hover:bg-deep-red/10"
              >
                Contact
              </Link>
              <div className="border-t border-gold/10 mt-2 pt-2 px-4">
                <a
                  href="tel:315-632-4777"
                  className="block py-2.5 text-gold font-semibold hover:text-gold-light transition-colors"
                >
                  315-632-4777
                </a>
              </div>
              <div className="px-4 pb-2">
                <a
                  href="https://www.twintreesfayetteville.com/services-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-deep-red hover:bg-deep-red-light text-cream px-4 py-2.5 rounded font-semibold transition-colors"
                >
                  Order Online
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Twin Trees Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-cream font-[family-name:var(--font-heading)]">
                Twin Trees
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Ross family owned since 1957. Three generations of Original
              Syracuse Style pizza.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/menu"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  Full Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  Location &amp; Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/60 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/TwinTreesFayetteville"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/twintreesfayetteville"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="text-cream/50 text-sm">
              104 Highbridge St<br />
              Fayetteville, NY 13066
            </p>
            <a
              href="tel:315-632-4777"
              className="text-gold text-sm hover:text-gold-light transition-colors"
            >
              315-632-4777
            </a>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Other Location
            </h3>
            <a
              href="https://twin-trees-camillus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-charcoal-light rounded-lg border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <p className="text-cream font-semibold group-hover:text-gold transition-colors text-sm">
                Twin Trees Camillus
              </p>
              <p className="text-cream/50 text-xs mt-1">
                5401 W Genesee St, Camillus, NY
              </p>
              <p className="text-cream/50 text-xs">315-530-1947</p>
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 text-center text-cream/50 text-xs">
          <p>&copy; 2026 Twin Trees Fayetteville. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <CamillusBanner />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
