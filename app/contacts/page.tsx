"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Stop the page reload
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    
    try {
      // Send data to Netlify via a hidden POST
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // Convert FormData to URLSearchParams for Netlify
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-brand md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Have questions about our{" "}
            <span className="text-brand font-semibold">Smart Water ATMs</span>?
            Interested in becoming a partner or investor? We are here to help
            you bring clean water solutions to your community.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO SECTION */}
      <section className="relative z-10 bg-brand -skew-y-2 py-32 -mt-24">
        <div className="mx-auto max-w-7xl px-6 skew-y-2 text-white">
          <div className="grid gap-12 md:grid-cols-3">
            <ContactCard
              icon={<MapPin className="h-8 w-8" />}
              title="Visit Our HQ"
              content={
                <>
                  Tech Innovation Hub,
                  <br />
                  Midrand,
                  <br />
                  Gauteng, South Africa
                </>
              }
            />
            <ContactCard
              icon={<Phone className="h-8 w-8" />}
              title="Contact Details"
              content={
                <>
                  <span className="block mb-2">info@aquaflowsa.co.za</span>
                  <span className="block">+27 76 380 4108</span>
                </>
              }
            />
            <ContactCard
              icon={<Clock className="h-8 w-8" />}
              title="Business Hours"
              content={
                <>
                  Mon - Fri: 8:00 AM - 5:00 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                  <br />
                  Sun: Closed
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* 3. MESSAGE FORM SECTION */}
      <section className="bg-white py-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand md:text-4xl">
              Send us a Message
            </h2>
            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            {isSuccess ? (
              // SUCCESS STATE VIEW
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="rounded-full"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              // FORM VIEW
              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* HIDDEN INPUTS: 
                  Even though we use fetch, these must remain to ensure the
                  DOM matches what Netlify expects.
                */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Sales / Quote">Product Sales / Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Investor Relations">Investor Relations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help you today?"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-brand py-6 text-lg font-medium text-white hover:bg-brand-dark shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand text-white py-16 mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-1">
            <p className="font-semibold text-lg">AquaFlow</p>
            <p className="mt-4 text-white/70">
              AquaFlow is a leading company in the market established itself as
              a Private Limited company.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contacts">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/products">Purifiers</Link></li>
              <li><Link href="/products">Domestic Purifiers</Link></li>
              <li><Link href="/products">Hydro Life</Link></li>
              <li><Link href="/products">Rain Water Filters</Link></li>
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

function ContactCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors">
      <div className="mb-4 text-white p-3 bg-white/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="text-white/80 leading-relaxed">{content}</div>
    </div>
  );
}