"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle, 
  SheetHeader,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contacts", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // FIXED: Removed 'backdrop-blur' and 'bg-white/95'. Now it is pure solid 'bg-white'.
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AquaFlow"
            width={140}
            height={34}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-colors ${
                  isActive ? "text-brand-dark" : "text-brand hover:text-brand-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTION BUTTON */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-brand px-6 py-5 text-base font-medium text-white hover:bg-brand-dark shadow-md"
          >
            <Link href="/contacts">Get In Touch</Link>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-brand hover:bg-slate-50">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-6 border-l-slate-100">
              <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-6 border-b border-slate-100 mb-6">
                 <div className="flex items-center">
                    <Image src="/logo.png" alt="AquaFlow" width={120} height={30} className="w-auto h-6" />
                 </div>
                 
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-slate-500 hover:bg-slate-100 -mr-2">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close</span>
                    </Button>
                 </SheetClose>
                 
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                 <SheetDescription className="sr-only">Navigation links</SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-6">
                <nav className="flex flex-col gap-6">
                  {nav.map((item) => {
                     const isActive = pathname === item.href;
                     return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium py-2 transition-colors ${
                            isActive ? "text-brand-dark font-bold pl-2 border-l-4 border-brand" : "text-slate-600 hover:text-brand"
                          }`}
                        >
                          {item.label}
                        </Link>
                     )
                  })}
                </nav>

                <div className="mt-8">
                  <Button
                    asChild
                    className="w-full rounded-full bg-brand py-6 text-lg font-medium text-white hover:bg-brand-dark shadow-lg"
                  >
                    <Link href="/contacts" onClick={() => setIsOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}