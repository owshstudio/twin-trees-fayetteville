import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/storefront.jpg"
        alt="Twin Trees Fayetteville storefront"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 tracking-tight font-[family-name:var(--font-heading)]">
          Twin Trees
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-gold font-bold mb-4 font-[family-name:var(--font-heading)]" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)" }}>
          Fayetteville
        </p>
        <p className="text-xl sm:text-2xl text-cream/80 mb-6 max-w-xl mx-auto tracking-wide">
          Passion for Pizza &nbsp;|&nbsp; Original Syracuse Style
        </p>
        <p className="text-cream/60 text-sm mb-10 tracking-widest uppercase">
          Ross Family Owned &bull; Established 1957 &bull; 3rd Generation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.twintreesfayetteville.com/services-2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-deep-red hover:bg-deep-red-light text-cream px-10 py-4 rounded text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-black/40"
          >
            Order Online
          </a>
          <Link
            href="/menu"
            className="border-2 border-cream/30 hover:border-gold text-cream px-10 py-4 rounded text-lg font-semibold transition-all hover:text-gold"
          >
            View Full Menu
          </Link>
        </div>

        <a
          href="tel:315-632-4777"
          className="inline-block mt-8 text-cream/70 hover:text-gold transition-colors text-lg tracking-wide"
        >
          315-632-4777
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cream/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-charcoal scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Our Story
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/owners.jpg"
              alt="The Ross family - owners of Twin Trees"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-cream/85 leading-relaxed text-lg">
              Since 1957, the Ross family has been serving up the Original
              Syracuse Style pizza that Central New York knows and loves. Now in
              our <span className="text-gold font-semibold">third generation</span>,
              Twin Trees has grown to 9 locations across the region &mdash; and our
              Fayetteville spot on Highbridge Street is proud to carry on that
              tradition.
            </p>
            <p className="text-cream/85 leading-relaxed text-lg">
              Every pie is made with the same passion and recipes that started it
              all nearly 70 years ago. From our hand-tossed dough to our
              signature tomato sauce, everything is crafted with care. Whether
              you&apos;re a lifelong fan or trying us for the first time, we
              welcome you to the Twin Trees family.
            </p>
            <p className="text-cream/60 leading-relaxed">
              Beyond our legendary pizza, we serve up hearty burgers, crispy
              chicken sandwiches, Philly subs, fresh salads, and all the
              appetizers you could want. Come hungry, leave happy.
            </p>
            <div className="flex items-center gap-8 pt-6 border-t border-gold/10">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">1957</p>
                <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Established</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">3rd</p>
                <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Generation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold font-[family-name:var(--font-heading)]">9</p>
                <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  const categories = [
    { name: "Pizza", desc: "Original Syracuse Style since 1957" },
    { name: "Burgers", desc: "1/2 lb USDA Prime Black Angus" },
    { name: "Sandwiches", desc: "Classic CNY favorites" },
    { name: "Philly Subs", desc: "Ribeye steak, loaded" },
    { name: "Appetizers", desc: "Starters and shareable plates" },
    { name: "Salads", desc: "Fresh, crisp, and hearty" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/images/pizza-bg.jpg"
        alt="Pizza close-up background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Our Menu
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-cream/60 max-w-md mx-auto">
            From our legendary pizza to hearty burgers and fresh salads,
            there&apos;s something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/menu#${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group block p-8 bg-charcoal/80 backdrop-blur-sm rounded-lg border border-gold/10 hover:border-gold/40 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-cream group-hover:text-gold transition-colors mb-2 font-[family-name:var(--font-heading)]">
                {cat.name}
              </h3>
              <p className="text-cream/60 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block bg-deep-red hover:bg-deep-red-light text-cream px-10 py-4 rounded text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-black/40"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
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
    <section id="gallery" className="py-24 bg-charcoal-light scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Gallery
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-cream/60">
            A taste of what&apos;s waiting for you
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative w-64 h-80 flex-shrink-0 rounded-lg overflow-hidden group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="256px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-cream/30 text-sm mt-4">Scroll to see more</p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 bg-charcoal scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Location &amp; Hours
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="rounded-lg overflow-hidden border border-gold/10 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7!2d-76.0045!3d43.0297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3a6d26e7b3f%3A0x5e8b1d3a8d6c4f2a!2s104+Highbridge+St%2C+Fayetteville%2C+NY+13066!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Twin Trees Fayetteville Location"
              />
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream font-semibold">Address</p>
                  <p className="text-cream/60">
                    104 Highbridge St, Fayetteville, NY 13066
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream font-semibold">Phone</p>
                  <a
                    href="tel:315-632-4777"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    315-632-4777
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream font-semibold">Curbside Pickup</p>
                  <p className="text-cream/60">
                    Available &mdash; call us when you arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10 mb-6">
              <h3 className="text-xl font-bold text-gold mb-6 font-[family-name:var(--font-heading)]">Hours</h3>
              <div className="space-y-0">
                {[
                  { day: "Monday - Thursday", hours: "11:00 AM - 9:00 PM" },
                  { day: "Friday - Saturday", hours: "11:00 AM - 10:00 PM" },
                  { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3.5 border-b border-gold/5 last:border-0"
                  >
                    <span className="text-cream/70">{item.day}</span>
                    <span className="text-cream font-medium">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-deep-red/10 rounded border border-deep-red/20">
                <p className="text-sm text-cream/70">
                  <span className="text-gold font-semibold">
                    Estimated Wait Times:
                  </span>
                  <br />
                  Delivery ~45 min &nbsp;|&nbsp; Pickup ~25-30 min
                </p>
              </div>
            </div>

            <a
              href="https://twin-trees-camillus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-charcoal-light rounded-lg border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images/twin-trees-icon.svg"
                  alt="Twin Trees Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex-1">
                  <p className="text-gold font-bold group-hover:text-gold-light transition-colors font-[family-name:var(--font-heading)]">
                    Visit Our Camillus Location
                  </p>
                  <p className="text-cream/60 text-sm">
                    5401 W Genesee St, Camillus, NY 13031
                  </p>
                  <p className="text-cream/50 text-sm">315-530-1947</p>
                </div>
                <span className="text-cream/50 group-hover:text-gold transition-colors text-2xl">
                  &rarr;
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-light scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Contact Us
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-cream/60">
            Have a question? Want to book a large order? Drop us a line.
          </p>
        </div>

        <div className="bg-charcoal rounded-lg p-8 sm:p-10 border border-gold/10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-cream/70 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-charcoal-light border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cream/70 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-charcoal-light border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cream/70 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-charcoal-light border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-deep-red hover:bg-deep-red-light text-cream py-3.5 rounded font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gold/10 flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="tel:315-632-4777"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              315-632-4777
            </a>
            <a
              href="https://www.facebook.com/TwinTreesFayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/twintreesfayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              @twintreesfayetteville
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      text: "The pizza and chargrilled wings were great all three times. Prices are good, food is great -- give them a shot.",
      author: "Google Review",
    },
    {
      text: "I LOVE the food here. The pizza and wings are to die for. Twin Trees never disappoints.",
      author: "Google Review",
    },
    {
      text: "Great Italian food and great place to eat. Been going there for the last 50 years. My family and I became good friends with the owners.",
      author: "Google Review",
    },
  ];

  return (
    <section className="py-16 bg-charcoal border-y border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-cream/80 italic leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
              <p className="text-cream/40 text-sm">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <MenuPreview />
      <Gallery />
      <Location />
      <Contact />
    </main>
  );
}
