"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 text-neutral-100 hover:bg-slate-100 rounded"
      >
        {mobileMenuOpen ? (
          <X className="text-neutral-100" />
        ) : (
          <Menu className="text-neutral-100" />
        )}
      </button>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white border-b border-slate-200 z-50">
          <div className="flex flex-col gap-4 p-4">
            <a href="#" className="text-neutral-80 text-base font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-neutral-80 text-base font-medium">
              Browse Companies
            </a>
            <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
              <button className="w-full px-4 py-2 text-primary text-base font-bold border border-primary">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-primary text-white text-base font-bold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
