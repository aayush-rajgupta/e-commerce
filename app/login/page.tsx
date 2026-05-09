"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import mainStyles from "../page.module.css";
import styles from "./page.module.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <main className={mainStyles.main}>
      {/* Background Floating Elements - Same as Home */}
      <div className={mainStyles.floatingElements}>
        <svg className={`${mainStyles.icon} ${mainStyles.spool}`} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="1.5">
          <path d="M6 4h12M6 20h12M8 4v16M16 4v16M8 8h8M8 12h8M8 16h8" strokeLinecap="round"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.flower1}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.flower2}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e76f51" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.star1}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.key}`} width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="1.5">
          <path d="M15 7C16.6569 7 18 5.65685 18 4C18 2.34315 16.6569 1 15 1C13.3431 1 12 2.34315 12 4C12 4.41708 12.0851 4.81432 12.238 5.17647L2 15.4145V20H6.58579L7.58579 19H10.5858L11.5858 18H14.5858L15.4142 17.1716L12.8235 14.5809C13.5134 14.8517 14.2403 15 15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.flower4}`} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.star2}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.star3}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.flower5}`} width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.leaf1}`} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8ab17d" strokeWidth="1.5">
          <path d="M21 3C21 3 14.5 2.5 9 8C3.5 13.5 3 21 3 21C3 21 9.5 21.5 15 16C20.5 10.5 21 3 21 3Z"/><path d="M3 21L12 12"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.sparkle1}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.heart1}`} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d46a5b" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <svg className={`${mainStyles.icon} ${mainStyles.flower6}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e76f51" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Header Logo linking to home */}
        <Link href="/" style={{ position: "relative", zIndex: 2, marginBottom: "2rem" }}>
          <div className={mainStyles.logoRing} style={{ width: "100px", height: "100px" }}>
            <svg viewBox="0 0 120 120" width="100" height="100" className={mainStyles.logoSvg}>
              <defs>
                <path id="curve" d="M 20 60 A 40 40 0 1 1 100 60 A 40 40 0 1 1 20 60" fill="transparent" />
              </defs>
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--text-dark)" strokeWidth="1" />
              <text fontSize="11" fontWeight="600" letterSpacing="4" fill="var(--text-dark)">
                <textPath href="#curve" startOffset="15%">NITYAKHUSHI</textPath>
              </text>
              <text fontSize="9" fontWeight="600" letterSpacing="2" fill="var(--text-dark)">
                <textPath href="#curve" startOffset="68%">• EST. 2026 •</textPath>
              </text>
            </svg>
            <div className={mainStyles.logoCenter}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-coral)" strokeWidth="1.5">
                <path d="M12 8C12 8 8 2 5 5C2 8 8 12 8 12M12 8C12 8 16 2 19 5C22 8 16 12 16 12M12 8V22M8 12L12 16L16 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>

        {/* Auth Card */}
        <div className={styles.authWrapper}>
          <div className={styles.authHeader}>
            <h1 className={styles.title}>Welcome</h1>
            <p className={styles.subtitle}>Discover handcrafted artistry</p>
          </div>

          <div className={styles.tabs}>
            <div 
              className={`${styles.tab} ${isLogin ? styles.active : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div 
              className={`${styles.tab} ${!isLogin ? styles.active : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </div>
            <div 
              className={styles.activeIndicator} 
              style={{ transform: `translateX(${isLogin ? "0%" : "100%"})` }}
            />
          </div>

          <div className={styles.formContainer}>
            <form 
              className={styles.form} 
              style={{ 
                opacity: isLogin ? 1 : 0, 
                pointerEvents: isLogin ? "auto" : "none",
                transform: `translateX(${isLogin ? "0" : "-20px"})`,
                position: "absolute",
                top: 0,
                left: 0
              }}
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label className={styles.label}>Email address</label>
                <input type="email" className={styles.input} placeholder="you@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <input type="password" className={styles.input} placeholder="••••••••" required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Sign In
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              </button>

              <div className={styles.divider}>OR</div>

              <button type="button" className={styles.googleBtn} onClick={() => router.push("/")}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </form>

            <form 
              className={styles.form} 
              style={{ 
                opacity: !isLogin ? 1 : 0, 
                pointerEvents: !isLogin ? "auto" : "none",
                transform: `translateX(${!isLogin ? "0" : "20px"})`,
                position: "absolute",
                top: 0,
                left: 0
              }}
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="Jane Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email address</label>
                <input type="email" className={styles.input} placeholder="you@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <input type="password" className={styles.input} placeholder="••••••••" required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Create Account
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              </button>

              <div className={styles.divider}>OR</div>

              <button type="button" className={styles.googleBtn} onClick={() => router.push("/")}>
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={mainStyles.footer}>
        <div className={mainStyles.footerContent}>
          <span>Say Hi! via Instagram @nityakhushi_</span>
          <span className={mainStyles.separator}>|</span>
          <span className={mainStyles.socials}>
            Other Social Media → 
            <span className={mainStyles.socialIcons}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </span>
          </span>
          <span className={mainStyles.separator}>|</span>
          <Link href="/">Home, About Us, Policies</Link>
        </div>
      </footer>
    </main>
  );
}
