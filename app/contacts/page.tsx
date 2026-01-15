"use client";

import { MapPin, Phone, Clock, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* ... Hero and Info sections ... */}

      <section className="bg-white py-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand md:text-4xl">
              Send us a Message
            </h2>
            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            
            {/* THE FIX: 
              1. method="POST" triggers a real browser submission.
              2. No 'action' attribute means it uses the default Netlify success page.
              3. No 'onSubmit' handler means React won't interfere.
            */}
            <form
              name="contact"
              method="POST"
              // These data attributes help Netlify's post-processing find the form
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              
              {/* HIDDEN INPUTS: ESSENTIAL FOR NETLIFY TO RECOGNIZE THE POST */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
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
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
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
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 appearance-none"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-brand py-6 text-lg font-medium text-white hover:bg-brand-dark shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}