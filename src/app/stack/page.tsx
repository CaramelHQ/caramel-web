"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";
import Aurora from "@/components/ui/Aurora";
import { ArrowLeft, Cpu, Database, Globe, Lightning } from "@phosphor-icons/react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const BRAND = "#d77655";

export default function StackPage() {
  const { t } = useLanguage();

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

  const stack = [
    { name: "TypeScript", desc: "Strict type safety for a bug-free experience.", icon: <Cpu size={24} weight="duotone" /> },
    { name: "Sapphire Framework", desc: "The most advanced framework for Discord.js.", icon: <Lightning size={24} weight="duotone" /> },
    { name: "Prisma 7", desc: "Modern ORM for robust data management.", icon: <Database size={24} weight="duotone" /> },
    { name: "PostgreSQL", desc: "Reliable relational database.", icon: <Database size={24} weight="duotone" /> },
    { name: "Redis / ioredis", desc: "High-performance in-memory data store.", icon: <Lightning size={24} weight="duotone" /> },
    { name: "BullMQ", desc: "Advanced message queue for background jobs.", icon: <Cpu size={24} weight="duotone" /> },
    { name: "Lavalink", desc: "Professional standalone audio sending node.", icon: <Globe size={24} weight="duotone" /> },
    { name: "Pino Logger", desc: "Super fast, low overhead JSON logger.", icon: <Cpu size={24} weight="duotone" /> },
    { name: "i18next", desc: "Internationalization framework for the bot.", icon: <Globe size={24} weight="duotone" /> },
    { name: "Discord.js", desc: "The foundation for interacting with the Discord API.", icon: <Lightning size={24} weight="duotone" /> },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Aurora
          colorStops={["#2e1008", "#d77655", "#1a0b06"]}
          amplitude={0.8}
          speed={0.2}
          blend={0.6}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/caramel-icon.png" alt="Caramel" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-xl tracking-tight">
            Caramel<span style={{ color: BRAND }}>.</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft size={16} />
            {t.nav.modules}
          </Link>
        </div>
      </nav>

      <section className="relative z-10 pt-48 pb-24 px-8 max-w-4xl mx-auto min-h-[calc(100vh-140px)]">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            The <span style={{ color: BRAND }}>Stack</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Behind the simplicity of Caramel lies a robust, high-performance architecture built with the best tools in the TypeScript ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((item) => (
            <div 
              key={item.name}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-[#d77655]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ color: BRAND }}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-8 py-12 relative z-10">
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
            <p className="text-zinc-600 text-xs mt-1">Lima, Peru · © 2026 MIT License</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
