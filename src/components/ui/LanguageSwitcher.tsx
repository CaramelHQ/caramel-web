"use client";

import { useLanguage } from "@/lib/i18n-context";
import { motion } from "framer-motion";

const BRAND = "#d77655";

const SpainFlag = () => (
  <svg width="22" height="15" viewBox="0 0 512 341" xmlns="http://www.w3.org/2000/svg" className="rounded-sm shadow-sm">
    <path fill="#ffda44" d="M0 85.3h512v170.7H0z"/>
    <path fill="#d80027" d="M0 0h512v85.3H0zm0 256h512v85.3H0z"/>
  </svg>
);

const USAFlag = () => (
  <svg width="22" height="15" viewBox="0 0 512 341" xmlns="http://www.w3.org/2000/svg" className="rounded-sm shadow-sm">
    <path fill="#f0f0f0" d="M0 0h512v341H0z"/>
    <path fill="#d80027" d="M0 0h512v26.2H0zm0 52.5h512v26.2H0zm0 52.4h512v26.2H0zm0 52.5h512v26.2H0zm0 52.5h512v26.2H0zm0 52.5h512v26.2H0zm0 52.4h512v26.2H0z"/>
    <path fill="#0052b4" d="M0 0h256v183.6H0z"/>
    <circle fill="#f0f0f0" cx="42.7" cy="36.7" r="8.7"/><circle fill="#f0f0f0" cx="128" cy="36.7" r="8.7"/><circle fill="#f0f0f0" cx="213.3" cy="36.7" r="8.7"/><circle fill="#f0f0f0" cx="42.7" cy="91.8" r="8.7"/><circle fill="#f0f0f0" cx="128" cy="91.8" r="8.7"/><circle fill="#f0f0f0" cx="213.3" cy="91.8" r="8.7"/><circle fill="#f0f0f0" cx="42.7" cy="146.9" r="8.7"/><circle fill="#f0f0f0" cx="128" cy="146.9" r="8.7"/><circle fill="#f0f0f0" cx="213.3" cy="146.9" r="8.7"/>
  </svg>
);

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-lg w-[100px] h-10 select-none">
      {/* Sliding Background */}
      <motion.div
        className="absolute h-8 rounded-md bg-zinc-800 border"
        initial={false}
        animate={{
          x: language === "es" ? 0 : 46,
          width: "44px"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ borderColor: `${BRAND}40` }}
      />

      {/* Buttons */}
      <button
        onClick={() => setLanguage("es")}
        className={`relative z-10 flex-1 flex items-center justify-center h-full transition-colors duration-300 ${
          language === "es" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
        title="Español"
      >
        <SpainFlag />
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`relative z-10 flex-1 flex items-center justify-center h-full transition-colors duration-300 ${
          language === "en" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
        }`}
        title="English"
      >
        <USAFlag />
      </button>
    </div>
  );
}
