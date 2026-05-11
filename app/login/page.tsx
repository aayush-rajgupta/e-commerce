"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const inputClass = "w-full h-12 bg-brand-border/30 border border-transparent focus:border-brand-sage/40 focus:bg-white rounded-xl px-4 text-[0.9rem] text-brand-dark placeholder:text-brand-dark/30 outline-none transition-all duration-200";
const labelClass = "block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-1.5";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex bg-brand-bg">

      {/* ── LEFT PANEL ── brand / decorative */}
      <div className="hidden lg:flex lg:w-[46%] xl:w-[42%] flex-col relative overflow-hidden bg-brand-dark min-h-screen">
        {/* Concentric ring animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[500, 380, 260].map((size, i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 70 + i * 15, repeat: Infinity, ease: "linear" }}
              style={{ width: size, height: size }}
              className="absolute -top-20 -left-20 border border-white/[0.06] rounded-full"
            />
          ))}
          {[600, 450].map((size, i) => (
            <motion.div
              key={`b${i}`}
              animate={{ rotate: i % 2 === 0 ? -360 : 360 }}
              transition={{ duration: 90 + i * 20, repeat: Infinity, ease: "linear" }}
              style={{ width: size, height: size }}
              className="absolute -bottom-32 -right-32 border border-white/[0.04] rounded-full"
            />
          ))}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-brand-sage/10 rounded-full blur-[90px]" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-brand-yellow/8 rounded-full blur-[70px]" />
        </div>

        <div className="relative z-10 flex flex-col h-full" style={{ padding: "3.5rem 3.5rem 2.5rem 5rem" }}>
          <Link href="/" className="inline-flex items-center gap-3 group w-fit">
            <div className="w-9 h-9 border border-white/25 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
              <span className="font-serif font-bold text-base text-white">N</span>
            </div>
            <span className="font-serif font-bold tracking-[0.18em] text-white/60 text-xs uppercase">Nityakhushi</span>
          </Link>

          <div className="flex-1 flex flex-col justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.35em] mb-8">Handcrafted Artistry</p>
              <h2 className="text-[2.8rem] xl:text-[3.25rem] font-serif text-white leading-[1.1] mb-6 xl:mb-8">
                Crafted with<br/>love, made<br/>for you.
              </h2>
              <p className="text-white/40 text-sm leading-[1.75] max-w-[260px]">
                Discover one-of-a-kind hairbands, bouquets, keychains and more — each piece tells a story.
              </p>
            </motion.div>
          </div>

          <p className="text-white/20 text-[11px]">© 2026 Nityakhushi</p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── auth form */}
      <div className="flex-1 flex flex-col" style={{ minHeight: "100vh" }}>
        {/* Mobile header */}
        <div className="lg:hidden flex items-center px-6 pt-8 pb-0">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-9 h-9 border border-brand-dark/20 rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-base text-brand-dark">N</span>
            </div>
            <span className="font-serif font-bold tracking-[0.18em] text-brand-dark/70 text-xs uppercase">Nityakhushi</span>
          </Link>
        </div>

        {/* Centered form area — takes all remaining space and centers */}
        <div className="flex-1 flex items-center justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="w-full max-w-[360px]">
            <AnimatePresence mode="wait" initial={false}>
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-9">
                    <h1 className="text-[2.5rem] font-serif text-brand-dark leading-[1.1] tracking-tight mb-2.5">
                      Welcome back.
                    </h1>
                    <p className="text-brand-dark/45 text-sm leading-relaxed">
                      Sign in to continue to your account.
                    </p>
                  </div>

                  {/* Google */}
                  <button
                    onClick={() => router.push("/")}
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-white border border-brand-dark/[0.09] rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.09)] hover:-translate-y-px transition-all duration-200 mb-5"
                  >
                    <GoogleIcon />
                    <span className="text-sm font-semibold text-brand-dark/70">Continue with Google</span>
                  </button>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-brand-dark/[0.07]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-dark/25">or</span>
                    <div className="flex-1 h-px bg-brand-dark/[0.07]" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" required placeholder="hello@example.com" className={inputClass} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className={labelClass} style={{marginBottom: 0}}>Password</label>
                        <button type="button" className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-dark/30 hover:text-brand-dark transition-colors">
                          Forgot?
                        </button>
                      </div>
                      <input type="password" required placeholder="••••••••" className={inputClass} />
                    </div>
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full h-12 bg-brand-dark text-white text-sm font-bold tracking-wide rounded-xl hover:bg-[#04382a] hover:shadow-lg hover:-translate-y-px transition-all duration-300"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="mt-7 text-center text-[0.82rem] text-brand-dark/40">
                    No account?{" "}
                    <button onClick={() => setIsLogin(false)} className="font-semibold text-brand-dark hover:text-brand-sage underline-offset-4 underline decoration-brand-dark/20 transition-colors">
                      Create one
                    </button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-9">
                    <h1 className="text-[2.5rem] font-serif text-brand-dark leading-[1.1] tracking-tight mb-2.5">
                      Join us.
                    </h1>
                    <p className="text-brand-dark/45 text-sm leading-relaxed">
                      Create your account in seconds.
                    </p>
                  </div>

                  {/* Google */}
                  <button
                    onClick={() => router.push("/")}
                    className="w-full flex items-center justify-center gap-2.5 h-12 bg-white border border-brand-dark/[0.09] rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.09)] hover:-translate-y-px transition-all duration-200 mb-5"
                  >
                    <GoogleIcon />
                    <span className="text-sm font-semibold text-brand-dark/70">Continue with Google</span>
                  </button>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-brand-dark/[0.07]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-dark/25">or</span>
                    <div className="flex-1 h-px bg-brand-dark/[0.07]" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" required placeholder="hello@example.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Password</label>
                      <input type="password" required placeholder="••••••••" className={inputClass} />
                    </div>
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full h-12 bg-brand-dark text-white text-sm font-bold tracking-wide rounded-xl hover:bg-[#04382a] hover:shadow-lg hover:-translate-y-px transition-all duration-300"
                      >
                        Create account
                      </button>
                    </div>
                  </form>

                  <p className="mt-7 text-center text-[0.82rem] text-brand-dark/40">
                    Already have an account?{" "}
                    <button onClick={() => setIsLogin(true)} className="font-semibold text-brand-dark hover:text-brand-sage underline-offset-4 underline decoration-brand-dark/20 transition-colors">
                      Sign in
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
