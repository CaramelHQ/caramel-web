"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aurora from "@/components/ui/Aurora";
import SplitText from "@/components/ui/SplitText";
import BlurText from "@/components/ui/BlurText";
import ShinyText from "@/components/ui/ShinyText";
import DiscordTerminal from "@/components/ui/DiscordTerminal";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import CountUp from "@/components/ui/CountUp";
import { useLanguage } from "@/lib/i18n-context";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, XLogo, DiscordLogo, Globe } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BRAND = "#d77655";

export default function Home() {
  const { t } = useLanguage();
  const [showInfinity, setShowInfinity] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [mantraIndex, setMantraIndex] = useState(0);
  const mantras = [
    "make it simple — make it perfect",
    "hazlo simple — hazlo perfecto",
    "fais-le simple — fais-le parfait",
    "mach es simple — mach es perfekt",
    "falo simples — falo perfeito",
    "lo rende simple — lo rende perfetto",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMantraIndex((prev) => (prev + 1) % mantras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: "🛡️", title: t.features.items.mod.title, desc: t.features.items.mod.desc, tag: t.features.items.mod.tag, done: true },
    { icon: "📋", title: t.features.items.logs.title, desc: t.features.items.logs.desc, tag: t.features.items.logs.tag, done: false },
    { icon: "🎵", title: t.features.items.music.title, desc: t.features.items.music.desc, tag: t.features.items.music.tag, done: true },
    { icon: "⚖️", title: t.features.items.auto.title, desc: t.features.items.auto.desc, tag: t.features.items.auto.tag, done: true },
    { icon: "🌐", title: t.features.items.i18n.title, desc: t.features.items.i18n.desc, tag: t.features.items.i18n.tag, done: true },
    { icon: "📊", title: t.features.items.dash.title, desc: t.features.items.dash.desc, tag: t.features.items.dash.tag, done: null },
  ];

  const roadmap = [
    { num: "01", title: t.roadmap.items.logs.title, desc: t.roadmap.items.logs.desc, status: t.roadmap.status.in_progress, active: true },
    { num: "02", title: t.roadmap.items.welcome.title, desc: t.roadmap.items.welcome.desc, status: t.roadmap.status.next, active: false },
    { num: "03", title: t.roadmap.items.xp.title, desc: t.roadmap.items.xp.desc, status: t.roadmap.status.next, active: false },
    { num: "04", title: t.roadmap.items.economy.title, desc: t.roadmap.items.economy.desc, status: t.roadmap.status.future, active: false },
    { num: "05", title: t.roadmap.items.dash.title, desc: t.roadmap.items.dash.desc, status: t.roadmap.status.future, active: false },
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
        <div className="flex items-center gap-2.5">
          <Image src="/caramel-icon.png" alt="Caramel" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-xl tracking-tight">
            Caramel<span style={{ color: BRAND }}>.</span>
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{t.nav.modules}</a>
          <Link href="/stack" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{t.nav.stack}</Link>
          <a href="#roadmap" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{t.nav.roadmap}</a>
          <a href="#vision" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{t.nav.vision}</a>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/login"
              className="text-sm text-white font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-80"
              style={{ background: BRAND }}
            >
              {t.nav.login}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#7a3520", "#d77655", "#6b2d1a"]}
            amplitude={1.0}
            speed={0.4}
            blend={0.5}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-zinc-950/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-24">
          <div className="flex justify-center mb-8">
            <Image
              src="/caramel-icon.png"
              alt="Caramel"
              width={96}
              height={96}
              className="rounded-2xl"
              style={{
                boxShadow: "0 0 40px rgba(215,118,85,0.4)",
                animation: "bounce 3s ease-in-out infinite",
              }}
            />
          </div>

          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-10"
            style={{
              background: "rgba(215,118,85,0.1)",
              borderColor: "rgba(215,118,85,0.25)",
              color: BRAND,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: BRAND }}
            />
            {t.hero.tag}
          </div>

          <SplitText
            text={t.hero.title}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none"
            delay={80}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <BlurText
            text={t.hero.subtitle}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            delay={15}
            animateBy="words"
            direction="top"
          />

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands"
              className="flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background: "#5865F2",
                boxShadow: "0 8px 30px rgba(88,101,242,0.35)",
              }}
            >
              <DiscordLogo size={20} weight="bold" />
              {t.hero.cta_discord}
            </a>
            <a
              href="#features"
              className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            >
              {t.hero.cta_explore}
            </a>
          </div>

          <div className="mt-16 md:mt-24 flex justify-center w-full px-4 relative z-10">
             <DiscordTerminal />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-8 max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>
          — {t.features.subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">
          {t.features.title}{" "}
          <span className="italic" style={{ color: BRAND }}>{t.features.title_highlight}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(215,118,85,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3
                className="font-bold text-lg mb-2 transition-colors group-hover:text-[#d77655]"
              >
                {f.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">{f.desc}</p>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={
                  f.done === true
                    ? { background: "rgba(74,222,128,0.1)", color: "rgb(74,222,128)" }
                    : f.done === false
                    ? { background: "rgba(215,118,85,0.15)", color: BRAND }
                    : { background: "rgba(255,255,255,0.06)", color: "rgb(113,113,122)" }
                }
              >
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
          {[
            { num: <CountUp to={14} duration={1} />, label: t.stats.mod_commands },
            { num: <CountUp to={28} duration={1.5} />, label: t.stats.events },
            { num: <CountUp to={2} duration={0.5} />, label: t.stats.languages },
            { 
              num: (
                <div className="relative inline-flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!showInfinity ? (
                      <motion.div
                        key="counter"
                        exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <CountUp 
                          to={500} 
                          duration={4} 
                          targetTrigger={400} 
                          onTargetReached={() => setShowInfinity(true)} 
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="infinity"
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        className="text-4xl"
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        ∞
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ), 
              label: t.stats.modular 
            },
          ].map((s, i) => (
            <div key={i} className="py-12 text-center">
              <div className="text-3xl font-black min-h-[40px] flex items-center justify-center" style={{ color: BRAND }}>{s.num}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section id="vision" className="py-32 px-8 max-w-5xl mx-auto">
        <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d77655]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[#d77655]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-zinc-800 p-2 relative z-10 bg-zinc-900 overflow-hidden">
                <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700/50">
                  <Image 
                    src="/joshiny.png" 
                    alt={t.about.name} 
                    width={224} 
                    height={224} 
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: BRAND }}>
                — {t.about.title}
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
                <ShinyText text={t.about.name} speed={4} className="text-white" />
              </h2>
              <p className="text-lg font-medium text-zinc-500 mb-8 italic">
                {t.about.role}
              </p>
              <p className="text-zinc-400 leading-relaxed mb-10 max-w-2xl text-lg">
                &ldquo;{t.about.bio}&rdquo;
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{t.about.connect}</span>
                <div className="flex items-center gap-4">
                  {[
                    { icon: GithubLogo, link: "https://github.com/joshinyx" },
                    { icon: XLogo, link: "https://x.com/joshinyx" },
                    { icon: DiscordLogo, link: "#" },
                    { icon: Globe, link: "#" },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link} 
                      className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:-translate-y-1"
                    >
                      <social.icon size={22} weight="duotone" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-32 px-8 bg-zinc-900/30 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>
            — {t.roadmap.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
            {t.roadmap.title}{" "}
            <span className="italic" style={{ color: BRAND }}>{t.roadmap.title_highlight}</span>
          </h2>
          <div className="flex flex-col gap-3">
            {roadmap.map((r) => (
              <div
                key={r.num}
                className="flex items-center gap-5 rounded-2xl p-5 border transition-all duration-300 hover:translate-x-1"
                style={
                  r.active
                    ? { background: "rgba(215,118,85,0.05)", borderColor: "rgba(215,118,85,0.2)" }
                    : { background: "rgb(24,24,27)", borderColor: "rgb(39,39,42)" }
                }
              >
                <span className="text-4xl font-black text-zinc-700 w-12 flex-shrink-0 text-center">
                  {r.num}
                </span>
                <div className="flex-1">
                  <div className="font-bold mb-0.5">{r.title}</div>
                  <div className="text-sm text-zinc-400">{r.desc}</div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                  style={
                    r.active
                      ? { background: "rgba(215,118,85,0.15)", color: BRAND }
                      : { background: "rgb(39,39,42)", color: "rgb(113,113,122)" }
                  }
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-8 py-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group cursor-help">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/caramel-canary.png"
                  alt="Caramel Canary"
                  width={40}
                  height={40}
                  className="rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                  🍬
                </div>
              </motion.div>
              <div className="absolute bottom-full left-0 mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 px-2 py-1 rounded shadow-xl tracking-tighter uppercase font-bold">
                  Caramel Language soon<span style={{ color: BRAND }}>..</span>
                </div>
              </div>
            </div>
            <div>
              <div className="font-black text-2xl tracking-tight">
                Caramel<span style={{ color: BRAND }}>.</span>
              </div>
              <div className="h-5 flex items-center relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={mantraIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-zinc-500 text-xs sm:text-sm absolute whitespace-nowrap"
                  >
                    {mantras[mantraIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-zinc-500 text-sm">
              {t.footer.made_with}{" "}
              <span className="font-medium" style={{ color: BRAND }}>{t.footer.by}</span>
            </p>
            <p className="text-zinc-600 text-xs mt-1">{t.footer.location}</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
