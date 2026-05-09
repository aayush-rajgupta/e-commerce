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
    <div className={`${styles.fixedNav} ${isScrolled ? styles.visible : ""}`}>
      <Link href="/login" style={{ textDecoration: 'none' }}>
        <button className={styles.secondaryBtn}>
          Login / Create Account
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </Link>
    </div>
  );
}
