import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Twin Trees Fayetteville - Original Syracuse Style Pizza",
  description:
    "Full menu for Twin Trees Fayetteville. Pizza, burgers, subs, salads, appetizers & more. View all items with prices. Order online or call 315-632-4777.",
};

type MenuItem = {
  name: string;
  prices: string;
  description?: string;
};

type MenuCategory = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  note?: string;
};

const menuData: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Garlic Knots",
        prices: "Small (3) $4.59 / Large (6) $7.59",
      },
      { name: "Garlic Bread", prices: "$5.29" },
      { name: "Garlic Bread with Cheese", prices: "$7.29" },
      {
        name: "Mozzarella Sticks",
        prices: "Small (6) $10.49 / Large (10) $16.49",
      },
      { name: "French Fries", prices: "Small $5.29 / Large $8.59" },
      {
        name: '"Bangin" Fries',
        prices: "Small $5.99 / Large $8.99",
        description: "Tossed with a special blend of herbs and spices",
      },
      { name: "Garlic Fries", prices: "Small $5.99 / Large $8.99" },
      {
        name: "Poutine",
        prices: "$7.99 / $11.99",
        description: "French fries smothered in gravy & mozzarella",
      },
      {
        name: "OG Loaded Fries",
        prices: "$7.99 / $11.99",
        description: "Cheese wiz, bacon & ranch",
      },
      {
        name: "Loaded Tailgate Fries",
        prices: "$13.99",
        description:
          "French fries piled high with choice of steak or chicken, peppers & onions, smothered in cheese wiz",
      },
      {
        name: "Eggplant Fries",
        prices: "$9.59",
        description: "Served with side of house tomato sauce",
      },
      { name: "Onion Rings", prices: "$8.99" },
      { name: "Fried Mushrooms", prices: "$9.59" },
      { name: "Fried Ravioli", prices: "$10.49" },
      { name: "Meatballs (2)", prices: "$5.99" },
      { name: "Sausage (2)", prices: "$5.99" },
      { name: "Fried Meatballs with Ricotta", prices: "$10.99" },
      { name: "Utica Greens", prices: "$12.99" },
      { name: "Boom Boom Shrimp", prices: "$13.59" },
      {
        name: "Chicken Tenders",
        prices: "(6) $10.99 / (10) $15.99",
        description: "Hand-breaded, toss in sauce for $1",
      },
      {
        name: "Chicken Pastina Soup",
        prices: "Cup $3.59 / Bowl $5.29",
      },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Antipasto", prices: "Small $7.59 / Large $13.99" },
      { name: "Antipasto Supreme", prices: "Small $9.29 / Large $16.59" },
      { name: "Chef Salad", prices: "Small $5.59 / Large $9.99" },
      { name: "Caesar Salad", prices: "Small $6.99 / Large $11.99" },
      { name: "Mixed Greens Salad", prices: "Small $6.59 / Large $11.99" },
      { name: "Iceberg Wedge", prices: "$10.57" },
      { name: "Crispy Chicken Salad", prices: "Small $8.99 / Large $15.99" },
      {
        name: "Tomato & Cucumber Salad",
        prices: "Small $3.99 / Large $5.99",
      },
      { name: "Add Grilled Chicken", prices: "$2.29 / $3.99" },
    ],
  },
  {
    title: "Burgers",
    subtitle: "1/2 Lb USDA Prime Black Angus, served with fries",
    items: [
      { name: "Classic Cheeseburger", prices: "$13.99" },
      { name: "Bacon Cheeseburger", prices: "$14.99" },
      {
        name: "The Texan",
        prices: "$15.49",
        description: "Bacon, bbq sauce, onion rings & cheddar",
      },
      {
        name: "Fork & Knife Burger",
        prices: "$14.99",
        description: "Pickles & crispy fries smothered in cheese wiz",
      },
      {
        name: "Jalapeño Cheddar Burger",
        prices: "$14.99",
        description: "Topped with chipotle mayo",
      },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      {
        name: "The Syracuse",
        prices: "$10.99",
        description: "Gianelli sausage with sautéed peppers and onions",
      },
      {
        name: "The Utica",
        prices: "$10.99",
        description:
          "Hand-breaded or grilled chicken with Utica greens and provolone",
      },
      {
        name: "The Binghamton",
        prices: "$10.99",
        description:
          "Chicken tenderloins in lemon and Italian herbs (chicken spiedie)",
      },
      {
        name: "Meatball",
        prices: "$9.99",
        description:
          "Beef and pork meatballs in house tomato sauce with mozzarella",
      },
      {
        name: "Chicken Cutlet",
        prices: "$9.99",
        description:
          "Hand-breaded with roasted red peppers, balsamic, basil, fresh mozz",
      },
      {
        name: "Chicken Parm",
        prices: "$10.99",
        description:
          "Hand-breaded with house tomato sauce, mozzarella & parmesan",
      },
      {
        name: "Eggplant Parm",
        prices: "$9.99",
        description:
          "Breaded eggplant fries with house tomato sauce, mozz & parm",
      },
      {
        name: "Fried Haddock",
        prices: "$8.59",
        description: "With tartar sauce and coleslaw",
      },
      {
        name: "The Shrimp Po' Boy",
        prices: "$11.99",
        description:
          "Battered fried shrimp, lettuce, tomato, pickles, chipotle mayo",
      },
    ],
    note: "Add cheese to any sandwich $1.29",
  },
  {
    title: "Chicken Sandwiches",
    subtitle: "Served on brioche or everything roll with fries",
    items: [
      { name: "Classic", prices: "$8.99" },
      { name: "The Texan", prices: "$10.99" },
      {
        name: "The Midwesterner",
        prices: "$10.99",
        description: "Chicken, bacon & ranch",
      },
      {
        name: "The Buffalo",
        prices: "$9.99",
        description: "Fried chicken in buffalo sauce with bleu cheese",
      },
      {
        name: "The Rochester",
        prices: "$9.99",
        description: "Fried chicken in Country Sweet sauce",
      },
    ],
  },
  {
    title: "Philly Subs",
    items: [
      {
        name: "The OG Philly",
        prices: "$11.99",
        description: "Ribeye steak, peppers, onions, choice of cheese",
      },
      {
        name: "The Pizza Philly",
        prices: "$13.99",
        description:
          "Steak or chicken with marinara, mozz, parm, crispy pepperoni",
      },
      {
        name: "Steak & Egg",
        prices: "$13.99",
        description: "Ribeye steak, scrambled egg & American cheese",
      },
      {
        name: "The Steakhouse Sub",
        prices: "$12.99",
        description: "Ribeye steak, chopped fries, cheese wiz",
      },
      {
        name: '"The Boss"',
        prices: "$12.57",
        description:
          "Everything brioche, ribeye, raw onion, cherry peppers, cheese wiz",
      },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-red-900/10 last:border-0 gap-1">
      <div className="flex-1">
        <h4 className="text-cream font-medium">{item.name}</h4>
        {item.description && (
          <p className="text-cream/50 text-sm mt-0.5">{item.description}</p>
        )}
      </div>
      <span className="text-amber-400 font-medium text-sm sm:text-base whitespace-nowrap sm:ml-4">
        {item.prices}
      </span>
    </div>
  );
}

function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <div className="bg-charcoal-light rounded-2xl p-6 sm:p-8 border border-red-900/20">
      <h3 className="text-2xl font-bold text-amber-400 mb-1">
        {category.title}
      </h3>
      {category.subtitle && (
        <p className="text-cream/50 text-sm mb-4">{category.subtitle}</p>
      )}
      {!category.subtitle && <div className="mb-4" />}
      <div>
        {category.items.map((item, i) => (
          <MenuItemRow key={i} item={item} />
        ))}
      </div>
      {category.note && (
        <p className="text-cream/50 text-sm mt-4 italic">{category.note}</p>
      )}
    </div>
  );
}

function PizzaSection() {
  return (
    <div className="bg-charcoal-light rounded-2xl p-6 sm:p-8 border border-red-900/20">
      <h3 className="text-2xl font-bold text-amber-400 mb-6">Pizza</h3>

      {/* Base pizza sizes */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-cream mb-4">Build Your Own</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { size: '8" Mini', price: "$9.59" },
            { size: '12" Small', price: "$14.99" },
            { size: '16" Large', price: "$17.29" },
            { size: '18" State Fair', price: "$20.59" },
            { size: '9" Gluten-Free or Cauliflower', price: "$13.99" },
          ].map((p) => (
            <div
              key={p.size}
              className="flex justify-between items-center bg-charcoal rounded-lg px-4 py-3 border border-red-900/10"
            >
              <span className="text-cream">{p.size}</span>
              <span className="text-amber-400 font-semibold">{p.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Regular toppings */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-cream mb-3">
          Regular Toppings
        </h4>
        <div className="bg-charcoal rounded-lg p-4 border border-red-900/10 mb-3">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-amber-400 font-medium mb-3">
            <span>Mini $1.59</span>
            <span>Small $2.29</span>
            <span>Large $3.09</span>
            <span>State Fair $4.29</span>
            <span>GF $1.99</span>
          </div>
          <p className="text-cream/60 text-sm leading-relaxed">
            Pepperoni, Cup n Char Pepperoni, Sausage, Meatballs, Ham, Bacon,
            Ricotta, Onions, Olives, Green & Red Peppers, Banana Peppers,
            Cherry Peppers, Roasted Peppers, Mushrooms, Broccoli, Fresh
            Tomatoes, Spinach, Pineapple, Anchovies, Jalapeño, Fresh Basil,
            Fresh Garlic
          </p>
        </div>
      </div>

      {/* Premium toppings */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-cream mb-3">
          Premium Toppings
        </h4>
        <div className="bg-charcoal rounded-lg p-4 border border-red-900/10 mb-3">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-amber-400 font-medium mb-3">
            <span>Mini $1.99</span>
            <span>Small $2.99</span>
            <span>Large $3.79</span>
            <span>State Fair $4.79</span>
            <span>GF $2.59</span>
          </div>
          <p className="text-cream/60 text-sm leading-relaxed">
            Steak, Chicken, Eggplant, Fresh Mozzarella, Extra Cheese
          </p>
        </div>
      </div>

      {/* Extras */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-cream mb-3">Extras</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { name: "Tomato & Garlic Sauce Mix", price: "$1.29" },
            { name: "Garlic Pecorino Crust", price: "$3.59" },
            { name: "Pink Alfredo Base", price: "$2.29" },
            { name: "Pesto Base", price: "$2.29" },
            { name: "Ranch Drizzle", price: "$1.29" },
            { name: "Mike's Hot Honey", price: "$1.79" },
            { name: "Extra Sauce", price: "$1.29" },
          ].map((e) => (
            <div
              key={e.name}
              className="flex justify-between items-center bg-charcoal rounded-lg px-4 py-2 border border-red-900/10"
            >
              <span className="text-cream/70 text-sm">{e.name}</span>
              <span className="text-amber-400 text-sm font-medium">
                {e.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Pizzas */}
      <div>
        <h4 className="text-lg font-semibold text-cream mb-3">
          Specialty Pizzas
        </h4>
        <div className="bg-charcoal rounded-lg p-4 border border-red-900/10 mb-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-amber-400 font-medium">
            <span>12&quot; Small $20.59</span>
            <span>16&quot; Large $24.59</span>
            <span>18&quot; XL State Fair $30.59</span>
          </div>
        </div>
        <div className="space-y-0">
          {[
            {
              name: "Margherita",
              description:
                "Fresh mozzarella, Roma tomatoes & fresh basil",
            },
            {
              name: "Gourmet",
              description:
                "Garlic, broccoli, mushrooms, roasted red peppers with mozz and cheddar",
            },
            {
              name: "Spinach Pie",
              description:
                "Fresh spinach, Roma tomatoes, ricotta and garlic",
            },
            {
              name: "Hawai'I Oughta...",
              description:
                "Ham, pineapple, bacon, mozz and cheddar",
            },
            {
              name: "Holy Pepperoni",
              description: "For the pepperoni lover",
            },
          ].map((sp) => (
            <div
              key={sp.name}
              className="flex flex-col py-3 border-b border-red-900/10 last:border-0"
            >
              <h5 className="text-cream font-medium">{sp.name}</h5>
              <p className="text-cream/50 text-sm">{sp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SidesNote() {
  return (
    <div className="bg-gradient-to-r from-red-900/20 to-amber-900/10 rounded-2xl p-6 sm:p-8 border border-red-900/20">
      <h3 className="text-xl font-bold text-amber-400 mb-4">
        Sides & Add-Ons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          { name: "Side of Fries", price: "$2.09" },
          { name: "Onion Rings", price: "$2.59" },
          { name: "Side Salad", price: "$2.59" },
          { name: "Eggplant Fries", price: "$2.59" },
          { name: "Seasonal Veggie", price: "$2.59" },
          { name: "Cup of Soup", price: "$2.29" },
          { name: "Bowl of Soup", price: "$3.99" },
        ].map((s) => (
          <div
            key={s.name}
            className="flex justify-between items-center bg-charcoal/50 rounded-lg px-4 py-2 border border-red-900/10"
          >
            <span className="text-cream/70 text-sm">{s.name}</span>
            <span className="text-amber-400 text-sm font-medium">
              {s.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* Menu Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-charcoal to-wood-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(183,28,28,0.2)_0%,_transparent_60%)]" />
        <div className="relative z-10 text-center px-4">
          <span className="text-5xl mb-4 block">🍕</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-3">
            Our Menu
          </h1>
          <p className="text-cream/60 max-w-md mx-auto">
            Original Syracuse Style pizza and so much more. Made with passion
            since 1957.
          </p>
        </div>
      </section>

      {/* Discount notices */}
      <section className="bg-charcoal py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg px-4 py-2 text-center">
              <span className="text-amber-400 font-semibold text-sm">
                💰 5% Cash Discount on All Orders
              </span>
            </div>
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg px-4 py-2 text-center">
              <span className="text-amber-400 font-semibold text-sm">
                🎉 10% Off Orders of $150+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu categories quick nav */}
      <section className="bg-charcoal sticky top-16 z-40 border-b border-red-900/20">
        <div className="max-w-4xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {[
              "Appetizers",
              "Salads",
              "Burgers",
              "Sandwiches",
              "Chicken Sandwiches",
              "Philly Subs",
              "Pizza",
            ].map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 rounded-full text-sm bg-red-900/20 text-cream/70 hover:bg-red-700 hover:text-cream transition-colors whitespace-nowrap"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu content */}
      <section className="py-12 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {menuData.map((category) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-32"
            >
              <MenuSection category={category} />
            </div>
          ))}

          <div id="pizza" className="scroll-mt-32">
            <PizzaSection />
          </div>

          <SidesNote />

          {/* Order CTA */}
          <div className="text-center py-8">
            <a
              href="https://www.twintreesfayetteville.com/services-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-600 text-cream px-10 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-red-900/50"
            >
              Order Online Now
            </a>
            <p className="text-cream/50 text-sm mt-3">
              Or call us at{" "}
              <a
                href="tel:315-632-4777"
                className="text-amber-400 hover:text-amber-300"
              >
                315-632-4777
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
