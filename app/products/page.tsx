import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Zap, 
  Droplets, 
  Settings, 
  Filter 
} from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-brand md:text-6xl">
            Innovative Water Solutions
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Discover the technology behind AQUAFLOW. While our full online store is 
            <span className="text-brand font-semibold"> launching soon</span>, 
            you can explore our flagship systems below. We supply industrial-grade 
            purification for communities and businesses.
          </p>
        </div>
      </section>

      {/* 2. FLAGSHIP PRODUCT SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 pb-48">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Product Image */}
          <div className="relative aspect-[4/5] w-full bg-slate-50 rounded-3xl border border-slate-100 p-8">
             <Image
              src="/machine.png"
              alt="AquaFlow Smart Vending Machine"
              fill
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-sm font-medium text-brand">
              Flagship Model
            </div>
            <h2 className="mt-4 text-3xl font-bold text-brand md:text-4xl">
              Smart Water ATM Series-X
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A fully autonomous water dispensing unit designed for high-traffic public areas. 
              Built to withstand harsh environments while delivering WHO-standard purified water.
            </p>

            <div className="mt-8 space-y-4">
              <FeatureRow text="7-Stage Advanced Filtration System" />
              <FeatureRow text="Solar Power Compatibility" />
              <FeatureRow text="Real-time IoT Monitoring Dashboard" />
              <FeatureRow text="Cashless & Mobile Money Integration" />
              <FeatureRow text="Anti-corrosion Stainless Steel Body" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <Button asChild className="rounded-full bg-brand px-8 py-6 text-lg hover:bg-brand-dark">
                  <Link href="/contacts">Request a Quote</Link>
               </Button>
               <Button variant="outline" className="rounded-full px-8 py-6 text-lg text-brand border-brand hover:bg-brand/5">
                  Download Spec Sheet
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECS (SKEWED BLUE SECTION) */}
      <section className="relative z-10 bg-brand -skew-y-2 py-32 -mt-24">
         {/* Un-skew content */}
         <div className="mx-auto max-w-7xl px-6 skew-y-2 text-white">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">Technical Specifications</h2>
              <p className="mt-4 text-white/80">Engineered for reliability and efficiency.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
               <SpecCard 
                  icon={<Droplets className="h-8 w-8" />}
                  title="Purification Capacity"
                  value="1,000 - 5,000 LPH"
                  desc="Customizable output based on community size needs."
               />
               <SpecCard 
                  icon={<Zap className="h-8 w-8" />}
                  title="Power Consumption"
                  value="Low Energy / Solar"
                  desc="Optimized for off-grid locations with battery backup support."
               />
               <SpecCard 
                  icon={<Settings className="h-8 w-8" />}
                  title="Maintenance"
                  value="Automated Alerts"
                  desc="IoT sensors detect filter life and system health instantly."
               />
            </div>
         </div>
      </section>

      {/* 4. UPCOMING PRODUCTS (GRID) */}
      <section className="bg-white py-32 pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
               <h2 className="text-3xl font-bold text-brand md:text-4xl">Coming Soon to Our Store</h2>
               <p className="mt-4 text-slate-600">
                  We are expanding our product line to bring clean water into your home. 
                  Sign up for updates to know when these become available for purchase.
               </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             <ProductPlaceholder 
                title="Domestic RO Purifiers"
                desc="Compact under-sink units for safe drinking water at home."
                badge="Coming Q3 2026"
             />
             <ProductPlaceholder 
                title="Hydro Life Bottles"
                desc="Self-cleaning smart bottles that keep water pure on the go."
                badge="In Development"
             />
             <ProductPlaceholder 
                title="Rain Water Filters"
                desc="Advanced filtration for harvesting and treating rainwater."
                badge="Coming Q4 2026"
             />
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

// --- Helper Components ---

function FeatureRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Check className="h-4 w-4" strokeWidth={3} />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

function SpecCard({ icon, title, value, desc }: { icon: React.ReactNode; title: string; value: string; desc: string }) {
   return (
      <div className="bg-white/10 border border-white/20 p-8 rounded-2xl backdrop-blur-sm">
         <div className="mb-4 text-white">{icon}</div>
         <h3 className="text-lg font-semibold text-white/80">{title}</h3>
         <p className="text-2xl font-bold text-white mt-1">{value}</p>
         <p className="text-sm text-white/60 mt-3">{desc}</p>
      </div>
   )
}

function ProductPlaceholder({ title, desc, badge }: { title: string; desc: string; badge: string }) {
   return (
      <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-brand/20 hover:shadow-lg">
         <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm text-brand">
            <Filter className="h-6 w-6" />
         </div>
         <h3 className="mt-6 text-xl font-bold text-brand">{title}</h3>
         <p className="mt-2 text-slate-600">{desc}</p>
         <div className="mt-6 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
            {badge}
         </div>
      </div>
   )
}