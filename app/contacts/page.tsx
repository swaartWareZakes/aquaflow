"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Form Submission via Fetch (AJAX)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // Convert FormData to URLSearchParams
        body: new URLSearchParams(formData as any).toString(),
      });
      setSuccess(true);
      // Optional: Reset form here if needed
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-brand md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Have questions about our <span className="text-brand font-semibold">Smart Water ATMs</span>? 
            Interested in becoming a partner or investor? We are here to help you bring 
            clean water solutions to your community.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO SECTION */}
      <section className="relative z-10 bg-brand -skew-y-2 py-32 -mt-24">
         <div className="mx-auto max-w-7xl px-6 skew-y-2 text-white">
            <div className="grid gap-12 md:grid-cols-3">
               <ContactCard 
                  icon={<MapPin className="h-8 w-8" />}
                  title="Address(TBD)"
                  content={
                    <>TBD <br /> Gauteng, South Africa</>
                  }
               />
               <ContactCard 
                  icon={<Phone className="h-8 w-8" />}
                  title="Contact Details"
                  content={
                    <>
                      <span className="block mb-2 hover:underline cursor-pointer">info@aquaflowsa.co.za</span>
                      <span className="block hover:underline cursor-pointer">+27 76 380 4108</span>
                    </>
                  }
               />
               <ContactCard 
                  icon={<Clock className="h-8 w-8" />}
                  title="Business Hours"
                  content={
                    <>Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 1:00 PM<br />Sun: Closed</>
                  }
               />
            </div>
         </div>
      </section>

      {/* 3. MESSAGE FORM SECTION */}
      <section className="bg-white py-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand md:text-4xl">Send us a Message</h2>
            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          {success ? (
            <div className="rounded-3xl border border-green-200 bg-green-50 p-12 text-center">
              <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
              <p className="mt-2 text-green-700">Thank you for contacting us. We will be in touch shortly.</p>
              <Button onClick={() => setSuccess(false)} className="mt-6 bg-green-700 text-white hover:bg-green-800 rounded-full">
                Send Another Message
              </Button>
            </div>
          ) : (
            /* FORM START */
            /* Removed 'data-netlify' attributes to fix build error. We use onSubmit instead. */
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm"
            >
              {/* Important: Hidden input MUST match the name in public/forms.html */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
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
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
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
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all appearance-none"
                >
                  <option value="" disabled>Select a topic...</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="sales">Product Sales / Quote</option>
                  <option value="support">Technical Support</option>
                  <option value="investor">Investor Relations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required
                  placeholder="How can we help you today?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-brand py-6 text-lg font-medium text-white hover:bg-brand-dark shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Send Message</>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
      
      {/* FOOTER - Same as before */}
      <footer className="bg-brand text-white py-16 mt-20 relative z-10">
         <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10 text-sm">
            <div className="md:col-span-1">
                <p className="font-semibold text-lg">AquaFlow</p>
                <p className="mt-4 text-white/70">AquaFlow is a leading company in the market established itself as a Private Limited company.</p>
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

function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
   return (
      <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors">
         <div className="mb-4 text-white p-3 bg-white/10 rounded-full">
            {icon}
         </div>
         <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
         <div className="text-white/80 leading-relaxed">{content}</div>
      </div>
   )
}