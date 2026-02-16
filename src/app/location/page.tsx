import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location & Hours | Twin Trees Fayetteville | 104 Highbridge St",
  description:
    "Find Twin Trees Fayetteville at 104 Highbridge St, Fayetteville, NY 13066. Open 7 days a week. Dine-in, pickup, and delivery available. Call 315-632-4777.",
  keywords:
    "Twin Trees Fayetteville location, pizza Fayetteville NY, 104 Highbridge St, Twin Trees hours, pizza delivery Fayetteville, pizza near me Fayetteville",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Twin Trees Fayetteville",
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
};

export default function LocationPage() {
  const hours = [
    { day: "Monday", hours: "11:00 AM - 9:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
    { day: "Friday", hours: "11:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
              Location &amp; Hours
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
            <p className="text-cream/60 text-lg">
              104 Highbridge St, Fayetteville, NY 13066
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="rounded-lg overflow-hidden border border-gold/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7!2d-76.0045!3d43.0297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3a6d26e7b3f%3A0x5e8b1d3a8d6c4f2a!2s104+Highbridge+St%2C+Fayetteville%2C+NY+13066!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Twin Trees Fayetteville on Google Maps"
                />
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=104+Highbridge+St+Fayetteville+NY+13066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-deep-red hover:bg-deep-red-light text-cream px-8 py-3.5 rounded font-semibold transition-colors w-full text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-6 font-[family-name:var(--font-heading)]">
                  Hours of Operation
                </h2>
                <div className="space-y-0">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-3.5 border-b border-gold/5 last:border-0"
                    >
                      <span className="text-cream/70">{item.day}</span>
                      <span className="text-cream font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-6 font-[family-name:var(--font-heading)]">
                  Contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-cream/50 text-sm uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:315-632-4777" className="text-gold text-lg font-semibold hover:text-gold-light transition-colors">
                      315-632-4777
                    </a>
                  </div>
                  <div>
                    <p className="text-cream/50 text-sm uppercase tracking-wider mb-1">Address</p>
                    <p className="text-cream">104 Highbridge St<br />Fayetteville, NY 13066</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-cream mb-10 text-center font-[family-name:var(--font-heading)]">
            Visiting Us
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10 text-center">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Dine In</h3>
              <p className="text-cream/60 text-sm">Walk-ins welcome. No reservations needed. Grab a booth and enjoy.</p>
            </div>
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10 text-center">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Pickup</h3>
              <p className="text-cream/60 text-sm">Order ahead by phone or online. Curbside pickup available -- just call when you arrive.</p>
            </div>
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10 text-center">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Delivery</h3>
              <p className="text-cream/60 text-sm">We deliver to Fayetteville and surrounding areas. Estimated delivery time ~45 minutes.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-charcoal rounded-lg border border-gold/10">
            <h3 className="text-gold font-semibold mb-3 font-[family-name:var(--font-heading)]">Estimated Wait Times</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-cream/70">Pickup Orders</span>
                <span className="text-cream font-medium">~25-30 minutes</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-cream/70">Delivery Orders</span>
                <span className="text-cream font-medium">~45 minutes</span>
              </div>
            </div>
            <p className="text-cream/40 text-xs mt-3">Wait times may vary during peak hours (Friday/Saturday evenings).</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Visit Our Other Location
          </h2>
          <a
            href="https://twin-trees-camillus.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 p-6 bg-charcoal-light rounded-lg border border-gold/10 hover:border-gold/30 transition-all group"
          >
            <Image
              src="/images/logo.png"
              alt="Twin Trees Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <div className="text-left">
              <p className="text-gold font-bold group-hover:text-gold-light transition-colors font-[family-name:var(--font-heading)]">
                Twin Trees Camillus
              </p>
              <p className="text-cream/60 text-sm">
                5401 W Genesee St, Camillus, NY 13031 | 315-530-1947
              </p>
            </div>
            <span className="text-cream/50 group-hover:text-gold transition-colors text-2xl ml-4">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
