import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Twin Trees Fayetteville",
  description:
    "The Ross family has been serving Original Syracuse Style pizza since 1957. Now in our third generation with 9 locations across Central New York.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
              Our Story
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto mb-4" />
            <p className="text-cream/60 text-lg">Passion for Pizza Since 1957</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/owners.jpg"
                alt="The Ross family - owners of Twin Trees"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
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
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 mt-16 pt-12 border-t border-gold/10">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold font-[family-name:var(--font-heading)]">1957</p>
              <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Established</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold font-[family-name:var(--font-heading)]">3rd</p>
              <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Generation</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold font-[family-name:var(--font-heading)]">9</p>
              <p className="text-cream/50 text-xs uppercase tracking-wider mt-1">Locations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-cream mb-8 text-center font-[family-name:var(--font-heading)]">
            What Makes Us Different
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10">
              <h3 className="text-gold font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Original Syracuse Style</h3>
              <p className="text-cream/60">Our signature pizza style has been perfected over nearly 70 years. Thin crust, tangy sauce, and generous toppings the way only Twin Trees does it.</p>
            </div>
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10">
              <h3 className="text-gold font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Family Owned &amp; Operated</h3>
              <p className="text-cream/60">Three generations of the Ross family have poured their hearts into every location. When you eat at Twin Trees, you&apos;re eating with family.</p>
            </div>
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10">
              <h3 className="text-gold font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">More Than Pizza</h3>
              <p className="text-cream/60">From our 1/2 lb USDA Prime Black Angus burgers to hand-breaded chicken sandwiches and loaded Philly subs, our full menu has something for everyone.</p>
            </div>
            <div className="p-6 bg-charcoal rounded-lg border border-gold/10">
              <h3 className="text-gold font-semibold text-lg mb-2 font-[family-name:var(--font-heading)]">Community First</h3>
              <p className="text-cream/60">We&apos;re proud to serve the Fayetteville community and the surrounding areas. Thank you for your continued support over all these years.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
