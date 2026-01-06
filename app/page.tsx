import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Leaf, 
  Heart, 
  Trophy, 
  Lightbulb, 
  Scale, 
  Users 
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      {/* Reduced bottom padding on mobile (pb-24) to bring the blue section closer */}
      <section className="relative z-0 mx-auto grid max-w-7xl items-start gap-10 px-6 pt-12 pb-24 md:grid-cols-2 md:gap-12 md:pt-20 md:pb-80">
        
        {/* TEXT CONTENT */}
        <div className="pt-6 md:pt-16"> 
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-brand md:text-6xl">
            Clean, Safe Water for a Sustainable Future
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            AQUAFLOW delivers advanced water purification solutions through
            state-of-the-art vending machines, ensuring access to clean water for
            communities, businesses, and investors.
          </p>

          <div className="mt-8">
            {/* FIXED: Added 'h-auto whitespace-normal text-center' so long text wraps nicely on mobile */}
            <Button asChild className="h-auto w-full md:w-auto rounded-full bg-brand px-8 py-4 text-base md:text-lg font-medium text-white hover:bg-brand-dark shadow-lg transition-all whitespace-normal text-center leading-snug">
              <Link href="/contacts">Invest in Sustainable Water Solutions</Link>
            </Button>
          </div>
        </div>

        {/* MACHINE IMAGE */}
        <div className="relative mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/machine.png"
              alt="AquaFlow water vending machine"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. SKEWED BLUE SECTION */}
      {/* RESPONSIVE FIX: -mt-12 on mobile to tuck it just under the image without hiding text */}
      <section className="relative z-10 -mt-12 md:-mt-[334px]">
        
        {/* THE BACKGROUND LAYER */}
        <div className="absolute inset-0 bg-brand -skew-y-3 origin-top-left scale-110 h-[95%]"></div>

        {/* THE CONTENT LAYER */}
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-64 md:pb-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            
            {/* Left Text Content */}
            <div className="text-white mt-0 md:mt-12">
              <h3 className="text-2xl font-normal leading-relaxed text-white/90">
                Founded on the principle that every drop matters, AQUAFLOW began
                as a response to the growing global water crisis.
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-white/90">
                <strong className="text-white font-bold">Today, we’re united by one goal:</strong> delivering safe, sustainable water solutions
                that uplift people and protect the planet.
              </p>

              <div className="mt-10">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Features List */}
            <div className="space-y-12 mt-4">
              <FeatureItem 
                icon={<ShieldCheck className="h-12 w-12 text-white" strokeWidth={1.5} />}
                title="Advanced Purification Technology"
                desc="Our cutting-edge systems ensure every drop of water meets the highest safety and quality standards."
              />
              <FeatureItem 
                icon={<Leaf className="h-12 w-12 text-white" strokeWidth={1.5} />}
                title="Eco-Friendly Solutions"
                desc="From reusable containers to energy-efficient machines, sustainability is at the heart of what we do."
              />
              <FeatureItem 
                icon={<Heart className="h-12 w-12 text-white" strokeWidth={1.5} />}
                title="Community Impact"
                desc="We partner with local organizations to bring clean water to underserved areas, one machine at a time."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="bg-white py-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-brand">Our Core Values</h2>
          
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
             <ValueItem 
                icon={<Trophy className="h-14 w-14 text-brand" strokeWidth={1.5} />}
                title="Quality"
                desc="Rigorous testing for purity and safety."
             />
             <ValueItem 
                icon={<Leaf className="h-14 w-14 text-brand" strokeWidth={1.5} />}
                title="Sustainability"
                desc="Minimizing our environmental footprint."
             />
             <ValueItem 
                icon={<Lightbulb className="h-14 w-14 text-brand" strokeWidth={1.5} />}
                title="Innovation"
                desc="Pioneering new ways to deliver clean water."
             />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 max-w-4xl mx-auto">
             <ValueItem 
                icon={<Scale className="h-14 w-14 text-brand" strokeWidth={1.5} />}
                title="Integrity"
                desc="Transparent and ethical in all we do."
             />
             <ValueItem 
                icon={<Users className="h-14 w-14 text-brand" strokeWidth={1.5} />}
                title="Community"
                desc="Empowering those we serve."
             />
          </div>
        </div>
      </section>

      {/* 4. JOIN MISSION SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          
          {/* Water Splash Image */}
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
             <Image
                src="/splash.png"
                alt="Clean water splash in a glass"
                fill
                className="object-contain object-bottom"
             />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-brand md:text-5xl">
              Join Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <span className="font-bold text-brand">Clean water changes everything:</span> health, education, and economic opportunity. At AQUAFLOW, we’re building a movement, and we need you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="rounded-full border-brand text-brand hover:bg-brand/10 px-8 py-6">
                <Link href="/products">For Individuals</Link>
              </Button>
              <Button asChild className="rounded-full bg-brand px-8 py-6 text-white hover:bg-brand-dark shadow-lg">
                <Link href="/contacts">For Businesses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand text-white py-16">
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

// --- Helper Components ---

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 pt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="mt-2 text-base leading-relaxed text-white/80">{desc}</p>
      </div>
    </div>
  );
}

function ValueItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
      <div className="flex flex-col items-center">
        <div className="mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand">{title}:</h3>
        <p className="mt-2 text-slate-600">{desc}</p>
      </div>
    );
  }