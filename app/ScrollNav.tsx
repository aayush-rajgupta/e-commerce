"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ScrollNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-in-out transform ${
      isScrolled ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
    }`}>
      <Link href="/login" style={{ textDecoration: 'none' }}>
        <button className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm rounded-full text-brand-dark font-medium hover:bg-white/50 transition-all duration-300">
          Login / Create Account
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </Link>
    </div>
  );
}
