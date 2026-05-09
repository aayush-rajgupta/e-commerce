import Image from "next/image";
import styles from "./page.module.css";
import ScrollNav from "./ScrollNav";

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollNav />
      {/* Background Floating Elements */}
      <div className={styles.floatingElements}>
        {/* Thread Spool */}
        <svg className={`${styles.icon} ${styles.spool}`} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="1.5">
          <path d="M6 4h12M6 20h12M8 4v16M16 4v16M8 8h8M8 12h8M8 16h8" strokeLinecap="round"/>
        </svg>
        {/* Flower 1 */}
        <svg className={`${styles.icon} ${styles.flower1}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        {/* Flower 2 */}
        <svg className={`${styles.icon} ${styles.flower2}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e76f51" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        {/* Star 1 */}
        <svg className={`${styles.icon} ${styles.star1}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Key */}
        <svg className={`${styles.icon} ${styles.key}`} width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="1.5">
          <path d="M15 7C16.6569 7 18 5.65685 18 4C18 2.34315 16.6569 1 15 1C13.3431 1 12 2.34315 12 4C12 4.41708 12.0851 4.81432 12.238 5.17647L2 15.4145V20H6.58579L7.58579 19H10.5858L11.5858 18H14.5858L15.4142 17.1716L12.8235 14.5809C13.5134 14.8517 14.2403 15 15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${styles.icon} ${styles.flower4}`} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${styles.icon} ${styles.star2}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${styles.icon} ${styles.star3}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="1.5">
          <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className={`${styles.icon} ${styles.flower5}`} width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
        <svg className={`${styles.icon} ${styles.leaf1}`} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8ab17d" strokeWidth="1.5">
          <path d="M21 3C21 3 14.5 2.5 9 8C3.5 13.5 3 21 3 21C3 21 9.5 21.5 15 16C20.5 10.5 21 3 21 3Z"/><path d="M3 21L12 12"/>
        </svg>
        <svg className={`${styles.icon} ${styles.sparkle1}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="1.5">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z"/>
        </svg>
        <svg className={`${styles.icon} ${styles.heart1}`} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d46a5b" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <svg className={`${styles.icon} ${styles.flower6}`} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e76f51" strokeWidth="1.5">
          <path d="M12 2C9 2 9 8 12 12C15 8 15 2 12 2Z"/><path d="M12 22C9 22 9 16 12 12C15 16 15 22 12 22Z"/><path d="M2 12C2 9 8 9 12 12C8 15 2 15 2 12Z"/><path d="M22 12C22 9 16 9 12 12C16 15 22 15 22 12Z"/>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
          <div className={styles.logoRing}>
            <svg viewBox="0 0 120 120" width="140" height="140" className={styles.logoSvg}>
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
            <div className={styles.logoCenter}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-coral)" strokeWidth="1.5">
                <path d="M12 8C12 8 8 2 5 5C2 8 8 12 8 12M12 8C12 8 16 2 19 5C22 8 16 12 16 12M12 8V22M8 12L12 16L16 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className={styles.title}>
          <span className={styles.darkText}>Handcrafted </span>
          <span className={styles.coralText}>Artistry</span>
          <span className={styles.darkText}> for your </span>
          <span className={styles.yellowText}>Joy</span>
        </h1>

        <div className={styles.divider}>
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none" stroke="#2a9d8f" strokeWidth="1">
            <path d="M10 10 Q20 0 30 10 T50 10 T70 10 T90 10" strokeLinecap="round"/>
            <path d="M100 15 C 95 5, 105 5, 100 10 C 95 5, 105 5, 100 15" stroke="var(--text-coral)" fill="none" strokeWidth="1.5"/>
            <path d="M110 10 Q130 20 130 10 T150 10 T170 10 T190 10" strokeLinecap="round"/>
          </svg>
        </div>

        <p className={styles.subtitle}>
          Discover unique, hand-dyed hairbands, bespoke bouquets, charming<br/>
          keychains, and decorative pots. Each piece made with love.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Shop New Arrivals 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.secondaryBtn}>
            Login / Create Account
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Images Gallery */}
        <div className={styles.gallery}>
          <div className={styles.imageCard}>
            <Image src="/hairband.png" alt="Colorful Hairband" fill className={styles.image} />
          </div>
          <div className={styles.imageCard}>
            <Image src="/pot.png" alt="Decorative Pot" fill className={styles.image} />
          </div>
          <div className={styles.imageCard}>
            <Image src="/bouquet.png" alt="Flower Bouquet" fill className={styles.image} />
          </div>
          <div className={styles.imageCard}>
            <Image src="/scarf.png" alt="Hand Dyed Scarf" fill className={styles.image} />
          </div>
          <div className={styles.imageCard}>
            <Image src="/keychain.png" alt="Custom Keychain" fill className={styles.image} />
          </div>
          <div className={styles.imageCard}>
            <Image src="/basket.png" alt="Woven Basket" fill className={styles.image} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>Say Hi! via Instagram @nityakhushi_</span>
          <span className={styles.separator}>|</span>
          <span className={styles.socials}>
            Other Social Media → 
            <span className={styles.socialIcons}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </span>
          </span>
          <span className={styles.separator}>|</span>
          <span>Home, About Us, Policies</span>
        </div>
      </footer>
    </main>
  );
}
