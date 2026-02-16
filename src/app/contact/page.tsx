import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Twin Trees Fayetteville | 315-632-4777",
  description:
    "Contact Twin Trees Fayetteville for orders, catering, large party orders, and questions. Call 315-632-4777 or visit us at 104 Highbridge St, Fayetteville, NY.",
  keywords:
    "contact Twin Trees Fayetteville, Twin Trees phone number, Twin Trees catering, pizza catering Fayetteville NY, large order pizza Syracuse",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
              Contact Us
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
            <p className="text-cream/60 text-lg">
              Questions, large orders, or just want to say hello -- we&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-charcoal-light rounded-lg p-8 sm:p-10 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-6 font-[family-name:var(--font-heading)]">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cream/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-charcoal border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cream/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-charcoal border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cream/70 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-charcoal border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                      placeholder="315-000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-cream/70 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-charcoal border border-gold/10 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="large-order">Large / Party Order</option>
                      <option value="catering">Catering</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cream/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-charcoal border border-gold/10 rounded px-4 py-3 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-deep-red hover:bg-deep-red-light text-cream py-3.5 rounded font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-6 font-[family-name:var(--font-heading)]">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Phone</p>
                      <a href="tel:315-632-4777" className="text-gold hover:text-gold-light transition-colors text-lg">
                        315-632-4777
                      </a>
                      <p className="text-cream/40 text-sm mt-1">Best way to reach us for orders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Address</p>
                      <p className="text-cream/70">104 Highbridge St</p>
                      <p className="text-cream/70">Fayetteville, NY 13066</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream font-semibold">Hours</p>
                      <p className="text-cream/70">Mon-Thu: 11 AM - 9 PM</p>
                      <p className="text-cream/70">Fri-Sat: 11 AM - 10 PM</p>
                      <p className="text-cream/70">Sun: 12 PM - 9 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-4 font-[family-name:var(--font-heading)]">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/TwinTreesFayetteville"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-charcoal rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex-1 group"
                  >
                    <svg className="w-6 h-6 text-cream/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-cream/60 group-hover:text-gold transition-colors text-sm font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/twintreesfayetteville"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-charcoal rounded-lg border border-gold/10 hover:border-gold/30 transition-all flex-1 group"
                  >
                    <svg className="w-6 h-6 text-cream/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="text-cream/60 group-hover:text-gold transition-colors text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </div>

              <div className="bg-charcoal-light rounded-lg p-8 border border-gold/10">
                <h2 className="text-xl font-bold text-gold mb-3 font-[family-name:var(--font-heading)]">
                  Large Orders &amp; Catering
                </h2>
                <p className="text-cream/60 leading-relaxed mb-4">
                  Planning a party, office lunch, or event? We handle large orders and catering for groups of any size. Sheet pizzas, wings, subs, salads -- we&apos;ve got you covered.
                </p>
                <a
                  href="tel:315-632-4777"
                  className="inline-block bg-deep-red hover:bg-deep-red-light text-cream px-6 py-3 rounded font-semibold transition-colors"
                >
                  Call to Order: 315-632-4777
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
