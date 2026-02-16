import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online | Twin Trees Fayetteville | Pizza Delivery & Pickup",
  description:
    "Order Twin Trees Fayetteville pizza, wings, subs, and more online for delivery or pickup. Serving Fayetteville, Manlius, Dewitt, and surrounding Syracuse areas.",
  keywords:
    "order Twin Trees online, pizza delivery Fayetteville NY, Twin Trees pickup, order pizza Fayetteville, pizza delivery 13066, Syracuse pizza delivery, Twin Trees Fayetteville order",
};

export default function OrderPage() {
  return (
    <main>
      <section className="py-24 bg-charcoal min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
            Order Online
          </h1>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg mb-12 max-w-xl mx-auto">
            Ready to eat? Order your Twin Trees favorites for delivery or pickup. Original Syracuse Style pizza, wings, subs, and more.
          </p>

          <a
            href="https://www.twintreesfayetteville.com/services-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-deep-red hover:bg-deep-red-light text-cream px-12 py-5 rounded text-xl font-bold transition-all hover:scale-105 shadow-lg shadow-black/40 mb-8"
          >
            Start Your Order
          </a>

          <p className="text-cream/40 text-sm mb-16">
            You&apos;ll be taken to our ordering system to customize your meal.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-charcoal-light rounded-lg border border-gold/10">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Pickup</h2>
              <p className="text-cream/60 text-sm">Ready in ~25-30 min. Curbside available -- call when you arrive.</p>
            </div>
            <div className="p-6 bg-charcoal-light rounded-lg border border-gold/10">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h2 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Delivery</h2>
              <p className="text-cream/60 text-sm">Delivered to your door in ~45 min. Fayetteville and surrounding areas.</p>
            </div>
            <div className="p-6 bg-charcoal-light rounded-lg border border-gold/10">
              <div className="w-12 h-12 rounded-full bg-deep-red/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-gold font-semibold mb-2 font-[family-name:var(--font-heading)]">Call In</h2>
              <p className="text-cream/60 text-sm">Prefer to call? Order by phone at <a href="tel:315-632-4777" className="text-gold hover:text-gold-light transition-colors">315-632-4777</a>.</p>
            </div>
          </div>

          <div className="mt-16 p-6 bg-charcoal-light rounded-lg border border-gold/10 max-w-2xl mx-auto">
            <h2 className="text-gold font-semibold mb-3 font-[family-name:var(--font-heading)]">Popular Orders</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between py-2 border-b border-gold/5">
                <span className="text-cream/70">Large Cheese Pizza</span>
                <Link href="/menu#pizza" className="text-gold hover:text-gold-light transition-colors">View Menu</Link>
              </div>
              <div className="flex justify-between py-2 border-b border-gold/5">
                <span className="text-cream/70">Chargrilled Wings</span>
                <Link href="/menu#appetizers" className="text-gold hover:text-gold-light transition-colors">View Menu</Link>
              </div>
              <div className="flex justify-between py-2 border-b border-gold/5">
                <span className="text-cream/70">The Boss Sub</span>
                <Link href="/menu#sandwiches" className="text-gold hover:text-gold-light transition-colors">View Menu</Link>
              </div>
              <div className="flex justify-between py-2 border-b border-gold/5">
                <span className="text-cream/70">Chicken Parm Dinner</span>
                <Link href="/menu#sandwiches" className="text-gold hover:text-gold-light transition-colors">View Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
