"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Gear, 
  SignOut, 
  PlusCircle, 
  CheckCircle, 
  ArrowSquareOut,
  CirclesThreePlus,
  MagnifyingGlass
} from "@phosphor-icons/react";

const BRAND = "#d77655";

const MOCK_GUILDS = [
  { id: "1", name: "The Coding Den", icon: null, active: true, members: "1.2k" },
  { id: "2", name: "Caramel HQ", icon: null, active: true, members: "450" },
  { id: "3", name: "Gaming Paradise", icon: null, active: false, members: "8.9k" },
  { id: "4", name: "Personal Lab", icon: null, active: false, members: "12" },
  { id: "5", name: "Crypto Bulls", icon: null, active: false, members: "5.5k" },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filteredGuilds = MOCK_GUILDS.filter(g => 
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans flex">
      
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col py-8 px-4 shrink-0 transition-all">
        <div className="flex items-center gap-3 px-3 mb-12">
          <Image src="/caramel-icon.png" alt="C" width={32} height={32} className="rounded-xl shadow-lg shadow-[#d77655]/20" />
          <span className="hidden md:block font-black text-xl tracking-tighter italic">Caramel<span className="text-[#d77655]">.</span></span>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl bg-[#d77655]/10 text-[#d77655] border border-[#d77655]/20 group transition-all">
            <Layout size={24} weight="duotone" />
            <span className="hidden md:block font-bold text-sm">Servidores</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all">
            <Gear size={24} weight="duotone" />
            <span className="hidden md:block font-bold text-sm">Ajustes</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all">
            <CirclesThreePlus size={24} weight="duotone" />
            <span className="hidden md:block font-bold text-sm">Plugins</span>
          </button>
        </nav>

        <Link href="/" className="flex items-center gap-3 px-3 py-3 rounded-2xl text-zinc-500 hover:text-red-400 transition-all mt-auto group">
          <SignOut size={24} weight="duotone" />
          <span className="hidden md:block font-bold text-sm">Cerrar Sesión</span>
        </Link>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Top Header */}
        <header className="px-8 py-6 border-b border-zinc-800 bg-zinc-950/40 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between">
          <div className="flex-1 max-w-md relative">
            <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Buscar servidor..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#d77655]/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-4 ml-8">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold">joshiny</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Admin</p>
            </div>
            <div className="w-11 h-11 rounded-2xl border-2 border-zinc-800 p-0.5 relative">
              <Image src="/joshiny.png" alt="Avatar" width={44} height={44} className="rounded-xl object-cover" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-950 rounded-full" />
            </div>
          </div>
        </header>

        {/* Servers Grid */}
        <div className="p-8">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tight mb-2">Mis Servidores</h2>
            <p className="text-zinc-500 text-sm">Selecciona una comunidad para empezar a configurar Caramel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGuilds.map((guild) => (
                <motion.div
                  key={guild.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className={`
                    relative rounded-[2rem] p-8 border transition-all duration-500 group overflow-hidden
                    ${guild.active 
                      ? "bg-zinc-900/40 border-zinc-800 hover:border-[#d77655]/30 shadow-xl shadow-black/20" 
                      : "bg-zinc-950 border-zinc-900 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 hover:border-zinc-700"
                    }
                  `}
                >
                  {/* Background Decoration */}
                  <div className={`
                    absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -mr-16 -mt-16 transition-opacity
                    ${guild.active ? "bg-[#d77655]/10 opacity-100" : "bg-zinc-800/20 opacity-0 group-hover:opacity-100"}
                  `} />

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className={`
                      w-16 h-16 rounded-3xl flex items-center justify-center text-3xl font-black shadow-inner
                      ${guild.active ? "bg-zinc-800 text-[#d77655] border border-[#d77655]/10" : "bg-zinc-900 text-zinc-600 border border-zinc-800"}
                    `}>
                      {guild.name[0]}
                    </div>
                    
                    {guild.active ? (
                      <div className="px-3 py-1.5 rounded-xl bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/10 flex items-center gap-1.5">
                        <CheckCircle size={14} weight="bold" />
                        Online
                      </div>
                    ) : (
                      <div className="px-3 py-1.5 rounded-xl bg-zinc-900 text-zinc-500 text-[10px] font-black uppercase tracking-widest border border-zinc-800 flex items-center gap-1.5">
                        <PlusCircle size={14} weight="bold" />
                        Invitar
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mb-8">
                    <h3 className="text-xl font-black mb-1 group-hover:text-white transition-colors">{guild.name}</h3>
                    <p className="text-zinc-500 text-sm font-medium">{guild.members} miembros</p>
                  </div>

                  <button className={`
                    w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-all relative z-10
                    ${guild.active 
                      ? "bg-white text-black hover:bg-zinc-200" 
                      : "bg-zinc-900 text-zinc-400 hover:bg-[#d77655] hover:text-white"
                    }
                  `}>
                    {guild.active ? (
                      <>CONFIGURAR <ArrowSquareOut size={16} weight="bold" /></>
                    ) : (
                      <>AÑADIR A DISCORD <PlusCircle size={16} weight="bold" /></>
                    )}
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
