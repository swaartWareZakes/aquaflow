import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. WHO WE ARE SECTION */}
      {/* RESPONSIVE PADDING: pb-32 on mobile, pb-80 on desktop to create the right amount of whitespace for the skew */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pb-80">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Title */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-bold text-brand md:text-5xl">
              Who We Are
            </h1>
          </div>

          {/* Description */}
          <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed text-brand">
            <p>
              AQUAFLOW is a visionary social enterprise dedicated to transforming water
              accessibility through innovation, sustainability, and community empowerment.
              We combine cutting-edge purification technology with eco-conscious business
              models to provide clean, safe, and affordable water across Africa and beyond.
            </p>
            <p className="font-bold">
              We’re not just a water company. We’re a movement redefining how
              communities interact with this essential resource.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SKEWED BLUE MISSION/VISION SECTION */}
      {/* RESPONSIVE MARGIN: -mt-24 on mobile, -mt-48 on desktop */}
      <section className="relative z-10 bg-brand -skew-y-2 py-32 -mt-24 md:-mt-48">
        
        {/* INNER CONTENT: skew-y-2 reverses the skew so text is straight */}
        <div className="mx-auto max-w-7xl px-6 skew-y-2 text-white">
          <div className="grid gap-16 md:grid-cols-2">
            
            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/90 mb-8">
                To democratize access to clean water through sustainable innovation.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-white">We exist to:</h3>
                <ul className="space-y-3 text-white/80 list-disc pl-5 marker:text-white/50">
                  <li>Eliminate water scarcity by deploying smart purification technology where it’s needed most.</li>
                  <li>Empower communities by creating local jobs and reducing health risks from contaminated water.</li>
                  <li>Protect our planet through plastic-free solutions and renewable energy-powered systems.</li>
                </ul>
              </div>

              <div className="space-y-4 mt-8">
                <h3 className="font-semibold text-white">How we deliver:</h3>
                <ul className="space-y-3 text-white/80 list-disc pl-5 marker:text-white/50">
                  <li>Advanced vending machines with military-grade purification</li>
                  <li>Circular business model that benefits users, operators, and investors</li>
                  <li>Grassroots partnerships that ensure long-term impact</li>
                </ul>
              </div>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/90 mb-8">
                To become Africa’s most impactful water infrastructure platform by 2030.
              </p>

              <div className="space-y-6">
                <h3 className="font-semibold text-white">We’re working toward a future where:</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex gap-3 items-start">
                    <span className="text-lg">🌍</span>
                    <span><strong className="text-white">No African child</strong> walks more than 500m for clean water</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-lg">💧</span>
                    <span><strong className="text-white">Every liter consumed</strong> helps regenerate local ecosystems</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-lg">📈</span>
                    <span><strong className="text-white">Water access drives</strong> economic mobility in underserved communities</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      {/* pt-24 provides spacing below the angled blue bottom */}
      <section className="bg-white py-24 pt-24 relative z-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand">Our Products</h2>
            <div className="mt-8">
                 <Button asChild className="rounded-full bg-brand px-10 py-6 text-base font-medium text-white hover:bg-brand-dark shadow-lg">
                    <Link href="/products">View Our Products</Link>
                 </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative aspect-[3/5] w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                 <Image
                  src="/machine.png"
                  alt="AquaFlow Machine"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand text-white py-16 mt-20 relative z-10">
         <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10 text-sm">
            <div className="md:col-span-1">
                <p className="font-semibold text-lg">AquaFlow</p>
                <p className="mt-4 text-white/70">AquaFlow is a leading company in the market established itself as a Private Limited company.</p>
            </div>
             <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/70">
                    <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                    <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
                    <li><Link href="/contacts" className="hover:text-white transition">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Product Links</h4>
                <ul className="space-y-2 text-white/70">
                    <li><Link href="/products" className="hover:text-white transition">Purifiers</Link></li>
                    <li><Link href="/products" className="hover:text-white transition">Domestic Purifiers</Link></li>
                    <li><Link href="/products" className="hover:text-white transition">Hydro Life</Link></li>
                    <li><Link href="/products" className="hover:text-white transition">Rain Water Filters</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Policies</h4>
                <ul className="space-y-2 text-white/70">
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
         </div>
      </footer>
    </main>
  );
}