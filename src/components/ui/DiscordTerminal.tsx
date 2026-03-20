"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import DiscordNativeRenderer from "./DiscordNativeRenderer";
import TextType from "./TextType";
import AnimatedContent from "./AnimatedContent";

const commands = [
  { 
    command: "/play query: 28 Agust D", 
    payload: {
      "flags": 32768,
      "components": [
        {
          "type": 17,
          "accent_color": 7434609,
          "components": [
            {
              "type": 9,
              "components": [
                {
                  "type": 10,
                  "content": "### 🎵 **Now Playing**\n[28 ft. NiiHWA](https://discord.com/terms)\n\n**Author:** Agust D\n-# Requested by: @joshiny"
                }
              ],
              "accessory": {
                "type": 11,
                "media": { "url": "/terminal-icons/album-image.png" }
              }
            },
            { "type": 14, "spacing": 1, "divider": true },
            {
              "type": 1,
              "components": [
                { "style": 2, "type": 2, "custom_id": "p_1", "emoji": { "name": "pause" } },
                { "style": 2, "type": 2, "custom_id": "p_2", "emoji": { "name": "skip" } },
                { "style": 2, "type": 2, "custom_id": "p_3", "emoji": { "name": "repeat" } },
                { "style": 2, "type": 2, "custom_id": "p_4", "emoji": { "name": "queue" } },
                { "style": 2, "type": 2, "custom_id": "p_5", "emoji": { "name": "stop_music" } }
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    command: "/ban user: @troll reason: spam", 
    payload: {
      "components": [
        {
          "type": 17,
          "accent_color": 15708388,
          "components": [
            {
              "type": 10,
              "content": "🔨 **Usuario baneado**\nEl usuario @troll ha sido expulsado permanentemente del servidor.\n\n**Razón**: Violación de las normas de la comunidad (spam persistente)."
            }
          ]
        }
      ]
    }
  }
];

export default function DiscordTerminal() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<"typing" | "user-sent" | "bot-replied">("typing");

  const handleTypingFinished = () => {
    setStage("user-sent");
    setTimeout(() => {
      setStage("bot-replied");
    }, 500);
  };

  useEffect(() => {
    if (stage === "bot-replied") {
      const timeout = setTimeout(() => {
        setStage("typing");
        setIndex((prev) => (prev + 1) % commands.length);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [stage]);

  return (
    <div className="w-full max-w-[680px] bg-[#1a1a1e] rounded-lg shadow-2xl overflow-hidden font-sans text-left border border-white/[0.02] flex flex-col antialiased h-[480px]">
      
      {/* --- HEADER --- */}
      <div className="bg-[#1a1a1e] h-[38px] px-3 flex items-center justify-between border-b border-black/20 select-none shadow-sm relative z-20">
        <div className="flex items-center gap-2">
           <div className="w-4 h-4 flex items-center justify-center opacity-70">
              <Image src="/terminal-icons/discord-channel-hash.png" alt="#" width={16} height={16} />
           </div>
           <span className="text-[#f2f3f5] font-bold text-[13px]">preview-caramel</span>
        </div>
        <div className="flex items-center gap-[12px]">
           <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center"><Image src="/terminal-icons/discord-threads.png" alt="T" width={18} height={18} /></div>
           <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center"><Image src="/terminal-icons/discord-notifications.png" alt="N" width={18} height={18} /></div>
           <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center"><Image src="/terminal-icons/discord-pins.png" alt="P" width={18} height={18} /></div>
           <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center"><Image src="/terminal-icons/discord-members.png" alt="M" width={18} height={18} /></div>
           <div className="relative">
              <div className="bg-[#111214] rounded-[4px] h-5 w-[140px] px-2 flex items-center justify-between text-[10px] text-[#949ba4] select-none">
                 <span>Buscar</span>
                 <div className="w-3 h-3 opacity-60"><Image src="/terminal-icons/discord-search.png" alt="S" width={12} height={12} /></div>
              </div>
           </div>
        </div>
      </div>

      {/* --- CHAT AREA --- */}
      <div className="p-4 flex-1 relative overflow-hidden bg-[#1a1a1e]">
        <div className="space-y-5">
          {/* User Message with Slash Command Pill */}
          {(stage === "user-sent" || stage === "bot-replied") && (
            <div className="flex gap-3 group animate-in fade-in duration-300">
              <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden shadow-sm border border-black/10">
                <Image src="/joshiny.png" alt="Josh" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 text-left leading-none">
                  <span className="text-[14px] font-medium text-[#f2f3f5] hover:underline cursor-pointer">joshiny</span>
                  <span className="text-[11px] text-[#949ba4] font-medium">Hoy a las 14:20</span>
                </div>
                <div className="text-[13px] text-left mt-1.5 flex items-center">
                   <span className="bg-[#5865f2]/15 text-[#00a8fc] px-1 py-0.5 rounded-[3px] font-medium">
                      {commands[index].command}
                   </span>
                </div>
              </div>
            </div>
          )}

          {/* Bot Response */}
          <AnimatePresence>
            {stage === "bot-replied" && (
              <AnimatedContent distance={20} direction="vertical">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 relative shadow-sm border border-black/10">
                    <Image src="/caramel-icon.png" alt="C" width={36} height={36} className="w-full h-full object-cover rounded-full" />
                    <div className="absolute bottom-[-3px] right-[-3px] w-[14px] h-[14px] z-30">
                       <Image src="/discord-idle-icon.png" alt="Idle" width={14} height={14} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-1.5 leading-none">
                      <span className="text-[14px] font-medium text-[#f2f3f5] flex items-center gap-1.5">
                        Caramel 
                        <span className="bg-[#5865f2] text-[10px] px-[5px] rounded-[3px] font-bold py-[0.5px] text-white flex items-center gap-[4px] select-none h-[14px]">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M7.4 11.9L4.2 8.7L5.3 7.6L7.4 9.7L11.6 5.6L12.7 6.7L7.4 11.9Z" fill="white" stroke="white" strokeWidth="0.5" />
                          </svg>
                          BOT
                        </span>
                      </span>
                      <span className="text-[11px] text-[#949ba4] font-medium">Hoy a las 14:20</span>
                    </div>
                    <DiscordNativeRenderer payload={commands[index].payload} />
                  </div>
                </div>
              </AnimatedContent>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- INPUT AREA --- */}
      <div className="px-3 pb-4 mt-auto bg-[#1a1a1e]">
         <div className="bg-[#222327] rounded-[6px] min-h-[34px] flex items-center px-[10px] gap-[10px] py-1">
            <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center flex-shrink-0">
               <Image src="/terminal-icons/discord-plus.png" alt="+" width={18} height={18} />
            </div>
            <div className="flex-1 text-[13px] select-none truncate h-full flex items-center">
               {stage === "typing" ? (
                 <TextType 
                   text={commands[index].command} 
                   onFinished={handleTypingFinished}
                   className="text-[#f2f3f5]"
                   speed={60}
                 />
               ) : (
                 <span className="text-[#949ba4]">Enviar mensaje a #preview-caramel</span>
               )}
            </div>
            <div className="flex items-center gap-[8px] flex-shrink-0">
               <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center transition-opacity"><Image src="/terminal-icons/discord-gifts.png" alt="G" width={18} height={18} /></div>
               <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center transition-opacity"><Image src="/terminal-icons/discord-gifs.png" alt="GIF" width={18} height={18} /></div>
               <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center transition-opacity"><Image src="/terminal-icons/discord-stickers.png" alt="S" width={18} height={18} /></div>
               <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center transition-opacity"><Image src="/terminal-icons/discord-emojis.png" alt="E" width={18} height={18} /></div>
               <div className="opacity-70 w-4.5 h-4.5 flex items-center justify-center transition-opacity"><Image src="/terminal-icons/discord-apps.png" alt="A" width={18} height={18} /></div>
            </div>
         </div>
      </div>

    </div>
  );
}
