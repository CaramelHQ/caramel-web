"use client";

import React from "react";

const COMPONENT_TYPES = {
  ACTION_ROW: 1,
  BUTTON: 2,
  SECTION: 9,
  TEXT_DISPLAY: 10,
  MEDIA_GALLERY: 11,
  SEPARATOR: 14,
  MESSAGE_BUNDLE: 17,
};

const iconMap: Record<string, string> = {
  pause: "/terminal-icons/pause.png",
  skip: "/terminal-icons/skip.png",
  repeat: "/terminal-icons/repeat.png",
  loop: "/terminal-icons/repeat.png",
  queue: "/terminal-icons/queue.png",
  stop_music: "/terminal-icons/stop_music.png",
};

export default function DiscordNativeRenderer({ payload }: { payload: any }) {
  if (!payload || !payload.components) return null;

  return (
    <div className="discord-ui-container select-none">
      {payload.components.map((comp: any, i: number) => (
        <RenderComponent key={i} component={comp} />
      ))}
    </div>
  );
}

function RenderComponent({ component }: { component: any }) {
  switch (component.type) {
    case COMPONENT_TYPES.MESSAGE_BUNDLE:
      return (
        <div 
          className="max-w-[432px] bg-[#242429] rounded-[8px] border-l-[4px] shadow-lg flex flex-col overflow-hidden w-fit" 
          style={{ borderColor: component.accent_color ? `#${component.accent_color.toString(16).padStart(6, '0')}` : '#F9A825' }}
        >
          {component.components?.map((c: any, i: number) => (
            <RenderComponent key={i} component={c} />
          ))}
        </div>
      );

    case COMPONENT_TYPES.SECTION:
      return (
        <div className="p-[12px] flex items-start justify-between gap-[8px] w-full text-left">
          <div className="flex-1 min-w-0 pr-[4px]">
            {component.components?.map((c: any, i: number) => (
              <RenderComponent key={i} component={c} />
            ))}
          </div>
          {component.accessory && (
            <div className="flex-shrink-0 self-start ml-auto">
               <RenderComponent component={component.accessory} />
            </div>
          )}
        </div>
      );

    case COMPONENT_TYPES.TEXT_DISPLAY:
      return (
        <div className="text-[#dbdee1] antialiased font-normal">
           {processMarkdown(component.content)}
        </div>
      );

    case COMPONENT_TYPES.MEDIA_GALLERY:
      return (
        <div className="w-[80px] h-[80px] rounded-[4px] overflow-hidden bg-[#1a1a1e] border border-white/[0.04] shadow-inner text-left">
           <img src={component.media?.url} alt="Media" className="w-full h-full object-cover" />
        </div>
      );

    case COMPONENT_TYPES.SEPARATOR:
      return (
        <div className="h-[1px] bg-white/[0.06] mx-[12px] my-[2px]" />
      );

    case COMPONENT_TYPES.ACTION_ROW:
      return (
        <div className="px-[12px] pt-[2px] pb-[12px] flex flex-wrap gap-[8px] text-left">
          {component.components?.map((c: any, i: number) => (
            <RenderComponent key={i} component={c} />
          ))}
        </div>
      );

    case COMPONENT_TYPES.BUTTON:
      const isPrimary = component.style === 1;
      const iconPath = component.emoji ? (iconMap[component.emoji.name] || component.emoji.name) : null;
      
      return (
        <button 
          className={`h-[26px] min-w-[44px] px-[16px] rounded-[4px] flex items-center justify-center transition-all active:translate-y-[1px] shadow-sm ${
            isPrimary ? "bg-[#5865f2] hover:bg-[#4752c4]" : "bg-[#2d2d32] hover:bg-[#3e3e45]"
          }`}
        >
          {iconPath && (
            <img 
              src={iconPath} 
              alt="icon" 
              className="w-[14px] h-[14px] object-contain opacity-90" 
            />
          )}
          {component.label && <span className="text-white text-[11px] font-medium ml-1.5">{component.label}</span>}
        </button>
      );

    default:
      return null;
  }
}

function processMarkdown(content: string) {
  if (!content) return "";
  const lines = content.split("\n");
  return lines.map((line, i) => {
    let processed = line
      .replace(/^### (.*)/g, '<h3 class="text-white font-bold text-[14px] leading-[18px] mb-0.5">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<span class="text-[#00a8fc] font-semibold hover:underline cursor-pointer">$1</span>')
      .replace(/@(\w+)/g, '<span class="bg-[#5865f2]/30 text-[#c9cdfb] px-[2px] rounded-[3px] font-medium hover:bg-[#5865f2] hover:text-white transition-colors cursor-pointer inline-flex items-center">@$1</span>')
      .replace(/-# (.*)/g, '<span class="text-[10px] text-[#949ba4] font-medium leading-none">$1</span>');
      
    return <div key={i} dangerouslySetInnerHTML={{ __html: processed }} className="min-h-[0.9rem] leading-[15px] text-[12px]" />;
  });
}
