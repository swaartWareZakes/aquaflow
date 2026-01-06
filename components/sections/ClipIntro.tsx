import { Button } from "@/components/ui/button";

type Feature = {
  title: string;
  desc: string;
};

export function ClipIntro() {
  const features: Feature[] = [
    {
      title: "Advanced Purification Technology",
      desc: "Our cutting-edge systems ensure every drop of water meets the highest safety and quality standards.",
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "From reusable containers to energy-efficient machines, sustainability is at the heart of what we do.",
    },
    {
      title: "Community Impact",
      desc: "We partner with local organizations to bring clean water to underserved areas, one machine at a time.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Blue angled background */}
      <div
        className="absolute inset-0 bg-brand"
        style={{
          clipPath: "polygon(0 12%, 100% 0%, 100% 88%, 0% 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left text */}
          <div className="text-white">
            <p className="text-lg leading-8 text-white/90">
              Founded on the principle that every drop matters, AQUAFLOW began
              as a response to the growing global water crisis.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/90">
              <span className="font-semibold text-white">Today,</span> we’re
              united by one goal: delivering safe, sustainable water solutions
              that uplift people and protect the planet.
            </p>

            <Button
              variant="outline"
              className="mt-8 rounded-full border-white/60 bg-transparent text-white hover:bg-white/10"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right features */}
          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h4 className="text-lg font-semibold text-white">{f.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/85">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}