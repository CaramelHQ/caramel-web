"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Aurora from "@/components/ui/Aurora";
import { ShieldCheck, Link as LinkIcon, ArrowsClockwise, DiscordLogo } from "@phosphor-icons/react";

const BRAND = "#d77655";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status: authStatus } = useSession();
  const [status, setStatus] = useState<"idle" | "linking" | "success">("idle");

  useEffect(() => {
    if (authStatus === "authenticated") {
      setStatus("linking");
      const timer1 = setTimeout(() => setStatus("success"), 2500);
      const timer2 = setTimeout(() => router.push("/dashboard"), 4500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [authStatus, router]);

  const handleLogin = () => {
    signIn("discord");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Aurora
          colorStops={["#2e1008", "#d77655", "#1a0b06"]}
          amplitude={0.5}
          speed={0.1}
        />
      </div>

      <div className="relative z-10 max-w-md w-full px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/40 border border-zinc-800 p-12 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Animated syncing bridge */}
          <div className="flex items-center justify-center w-full mb-12 relative">
            {/* User Avatar (Left) */}
            <motion.div
              animate={status === "success" ? { 
                borderColor: "#d77655", 
                boxShadow: "0 0 20px -5px #d77655",
                scale: [1, 1.1, 1]
              } : { borderColor: "#3f3f46" }} 
              transition={{ duration: 0.5 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 p-1 bg-zinc-800 z-10 shadow-xl overflow-hidden shrink-0 relative transition-colors duration-500"
            >
              {session?.user?.image ? (
                <Image src={session.user.image} alt="User" width={96} height={96} className="rounded-full object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-zinc-700 rounded-full flex items-center justify-center text-zinc-500">
                  <DiscordLogo size={52} weight="duotone" />
                </div>
              )}
            </motion.div>

            {/* Connection Bridge */}
            <div className="flex-1 flex items-center justify-center relative h-12">
               
               {/* Spacer 3px */}
               <div className="w-[3px]" />

               {/* Left Rail */}
               <div className="flex-1 h-0.5 bg-zinc-800 rounded-full relative overflow-hidden">
                 {/* Left Projectile */}
                 <motion.div 
                    initial={{ x: "-100%" }}
                    animate={
                      status === "linking" ? { 
                        x: ["-100%", "200%", "200%", "-100%", "-100%"] 
                      } : { x: "-100%" }
                    }
                    transition={status === "linking" ? { 
                      duration: 3, 
                      times: [0, 0.2, 0.75, 0.95, 1], 
                      repeat: Infinity, 
                      ease: "linear" 
                    } : { duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#d77655] to-transparent z-10"
                    style={{ width: "60%" }} 
                 />
               </div>

               {/* Spacer 1px */}
               <div className="w-[1px]" />

               {/* Central Link Icon (Floating) */}
               <div className="relative shrink-0">
                  <LinkIcon size={24} weight="bold" className="text-zinc-700 opacity-80" />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-10"
                    animate={
                      status === "linking" ? { 
                        opacity: [0, 0, 1, 0, 0, 1, 0, 0],
                        clipPath: [
                          "inset(0 100% 0 0)",
                          "inset(0 1% 0 0)",
                          "inset(0 0% 0 99%)",
                          "inset(0 0% 0 100%)",
                          "inset(0 0% 0 100%)",
                          "inset(0 0% 0 99%)",
                          "inset(0 1% 0 0)",
                          "inset(0 100% 0 0)",
                        ]
                      } : 
                      status === "success" ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
                    }
                    transition={status === "linking" ? { 
                      duration: 2.8, 
                      times: [0, 0.050, 0.125, 0.15, 0.85, 0.875, 0.950, 1],
                      repeat: 0, 
                      ease: "easeOut" 
                    } : { duration: 0.2 }}
                  >
                    <LinkIcon size={24} weight="bold" className="text-[#d77655]" />
                  </motion.div>
               </div>

               {/* Spacer 1px */}
               <div className="w-[1px]" />

               {/* Right Rail */}
               <div className="flex-1 h-0.5 bg-zinc-800 rounded-full relative overflow-hidden">
                 {/* Right Projectile */}
                 <motion.div 
                    initial={{ x: "-100%" }}
                    animate={
                      status === "linking" ? { 
                        x: ["-100%", "-100%", "200%", "200%", "-100%", "-100%"] 
                      } : { x: "-100%" }
                    }
                    transition={status === "linking" ? { 
                      duration: 3, 
                      times: [0, 0.25, 0.45, 0.55, 0.75, 1], 
                      repeat: Infinity, 
                      ease: "linear" 
                    } : { duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#d77655] to-transparent z-10"
                    style={{ width: "60%" }}
                 />
               </div>

               {/* Spacer 3px */}
               <div className="w-[3px]" />

            </div>

            {/* Caramel Avatar (Right) */}
            <motion.div
              // Bot always has the power (Brand Color Border)
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d77655] p-1 bg-zinc-800 z-10 shadow-xl relative"
            >
              <Image src="/caramel-icon.png" alt="Caramel" width={96} height={96} className="rounded-full object-cover w-full h-full" />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {authStatus === "unauthenticated" && (
              <motion.div key="unauth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 className="text-xl font-black mb-6 tracking-tight">BIENVENIDO A CARAMEL</h1>
                <button
                  onClick={handleLogin}
                  className="w-full py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-[#5865f2]/20"
                >
                  <DiscordLogo size={20} weight="fill" />
                  Entrar con Discord
                </button>
              </motion.div>
            )}
            
            {authStatus === "loading" && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex justify-center mb-4">
                   <ArrowsClockwise size={32} className="animate-spin text-zinc-500" />
                </div>
                <h1 className="text-xl font-black mb-2 tracking-tight">ESPERANDO...</h1>
                <p className="text-zinc-500 text-sm">Validando tu sesión segura...</p>
              </motion.div>
            )}

            {status === "linking" && authStatus === "authenticated" && (
              <motion.div key="linking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex justify-center mb-4">
                   <ArrowsClockwise size={32} className="animate-spin text-[#d77655]" />
                </div>
                <h1 className="text-xl font-black mb-2 tracking-tight uppercase">Sincronizando</h1>
                <p className="text-zinc-500 text-sm italic">Vinculando joshiny con Caramel .cm</p>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                    <ShieldCheck size={28} weight="bold" />
                  </div>
                </div>
                <h1 className="text-xl font-black mb-2 tracking-tight text-white uppercase italic">Sincronizado</h1>
                <p className="text-zinc-500 text-sm font-bold">Bienvenido de nuevo.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar visual */}
          {(authStatus === "authenticated" || authStatus === "loading") && (
            <div className="mt-12 h-1 bg-zinc-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="h-full"
                style={{ background: BRAND }}
              />
            </div>
          )}
        </motion.div>

        <p className="mt-8 text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black">
          OAuth2 Real Handshake • Caramel.cm
        </p>
      </div>
    </main>
  );
}
