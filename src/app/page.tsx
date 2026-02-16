import Link from "next/link";

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient simulating a warm pizza restaurant vibe */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-charcoal to-wood-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(183,28,28,0.3)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(120,53,15,0.3)_0%,_transparent_60%)]" />

      {/* Decorative pizza emoji elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 rotate-12">
        🍕
      </div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-10 -rotate-12">
        🍕
      </div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-5 rotate-45">
        🍕
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-6xl sm:text-7xl">🍕</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-4 tracking-tight">
          Twin Trees
        </h1>
        <p className="text-xl sm:text-2xl text-amber-400 font-medium mb-2">
          Fayetteville
        </p>
        <p className="text-lg sm:text-xl text-cream/70 mb-8 max-w-xl mx-auto">
          Passion for Pizza | Original Syracuse Style
        </p>
        <p className="text-cream/50 text-sm mb-8">
          Ross Family Owned &bull; Established 1957 &bull; 3rd Generation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.twintreesfayetteville.com/services-2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-cream px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Order Online
          </a>
          <Link
            href="/menu"
            className="border-2 border-cream/30 hover:border-amber-400 text-cream px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:text-amber-400"
          >
            View Full Menu
          </Link>
        </div>

        <a
          href="tel:315-632-4777"
          className="inline-block mt-6 text-cream/60 hover:text-amber-400 transition-colors text-lg"
        >
          📞 315-632-4777
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cream/30"
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
    <section id="about" className="py-20 bg-charcoal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-900/40 to-amber-900/40 flex items-center justify-center border border-red-900/20">
            <div className="text-center">
              <span className="text-7xl block mb-3">🏪</span>
              <p className="text-cream/40 text-sm">Restaurant Photo</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-cream/80 leading-relaxed text-lg">
              Since 1957, the Ross family has been serving up the Original
              Syracuse Style pizza that Central New York knows and loves. Now in
              our <span className="text-amber-400 font-semibold">third generation</span>,
              Twin Trees has grown to 9 locations across the region &mdash; and our
              Fayetteville spot on Highbridge Street is proud to carry on that
              tradition.
            </p>
            <p className="text-cream/80 leading-relaxed text-lg">
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
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-400">1957</p>
                <p className="text-cream/50 text-xs">Established</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-400">3rd</p>
                <p className="text-cream/50 text-xs">Generation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-400">9</p>
                <p className="text-cream/50 text-xs">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryItems = [
    { emoji: "🍕", label: "Our Signature Pizza" },
    { emoji: "🍔", label: "Half-Pound Burgers" },
    { emoji: "🥗", label: "Fresh Salads" },
    { emoji: "🧀", label: "Mozzarella Sticks" },
    { emoji: "🌶️", label: "Loaded Fries" },
    { emoji: "🥪", label: "Philly Subs" },
    { emoji: "🍗", label: "Chicken Tenders" },
    { emoji: "🏪", label: "Our Restaurant" },
  ];

  return (
    <section id="gallery" className="py-20 bg-wood-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-cream/60 mt-4">
            A taste of what&apos;s waiting for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gradient-to-br from-red-900/30 to-amber-900/20 flex flex-col items-center justify-center border border-red-900/10 hover:border-amber-400/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span className="text-5xl mb-2">{item.emoji}</span>
              <p className="text-cream/50 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Location & Hours
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-red-900/20 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7!2d-76.0045!3d43.0297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3a6d26e7b3f%3A0x5e8b1d3a8d6c4f2a!2s104+Highbridge+St%2C+Fayetteville%2C+NY+13066!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Twin Trees Fayetteville Location"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-cream font-semibold">Address</p>
                  <p className="text-cream/70">
                    104 Highbridge St, Fayetteville, NY 13066
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📞</span>
                <div>
                  <p className="text-cream font-semibold">Phone</p>
                  <a
                    href="tel:315-632-4777"
                    className="text-amber-400 hover:text-amber-300"
                  >
                    315-632-4777
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🚗</span>
                <div>
                  <p className="text-cream font-semibold">Curbside Pickup</p>
                  <p className="text-cream/70">
                    Available! Call us when you arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-charcoal-light rounded-2xl p-8 border border-red-900/20">
              <h3 className="text-xl font-bold text-amber-400 mb-6">Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Thursday", hours: "11:00 AM - 9:00 PM" },
                  { day: "Friday - Saturday", hours: "11:00 AM - 10:00 PM" },
                  { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-red-900/10 last:border-0"
                  >
                    <span className="text-cream/80">{item.day}</span>
                    <span className="text-cream font-medium">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-900/20">
                <p className="text-sm text-cream/70">
                  <span className="text-amber-400 font-semibold">
                    Estimated Wait Times:
                  </span>
                  <br />
                  Delivery ~45 min | Pickup ~25-30 min
                </p>
              </div>
            </div>

            {/* Camillus cross-link */}
            <a
              href="https://twin-trees-camillus.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block p-6 bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-2xl border border-red-900/30 hover:border-amber-400/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🍕</span>
                <div>
                  <p className="text-amber-400 font-bold group-hover:text-amber-300 transition-colors">
                    Visit Our Camillus Location
                  </p>
                  <p className="text-cream/60 text-sm">
                    5401 W Genesee St, Camillus, NY 13031
                  </p>
                  <p className="text-cream/50 text-sm">315-530-1947</p>
                </div>
                <span className="ml-auto text-cream/30 group-hover:text-amber-400 transition-colors text-2xl">
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
    <section id="contact" className="py-20 bg-wood-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto rounded-full" />
          <p className="text-cream/60 mt-4">
            Have a question? Want to book a large order? Drop us a line.
          </p>
        </div>

        <div className="bg-charcoal-light rounded-2xl p-8 border border-red-900/20">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-cream/80 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-charcoal border border-red-900/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-cream/80 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-charcoal border border-red-900/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-cream/80 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-charcoal border border-red-900/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-600 text-cream py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-red-900/20 flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="tel:315-632-4777"
              className="text-cream/60 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              📞 315-632-4777
            </a>
            <a
              href="https://www.facebook.com/TwinTreesFayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/twintreesfayetteville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              @twintreesfayetteville
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Location />
      <Contact />
    </main>
  );
}
