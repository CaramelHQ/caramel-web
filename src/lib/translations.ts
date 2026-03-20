export type Language = "es" | "en";

export interface Translation {
  nav: {
    modules: string;
    stack: string;
    roadmap: string;
    vision: string;
    github: string;
    login: string;
  };
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    cta_github: string;
    cta_discord: string;
    cta_explore: string;
  };
  stats: {
    mod_commands: string;
    events: string;
    languages: string;
    modular: string;
  };
  features: {
    subtitle: string;
    title: string;
    title_highlight: string;
    items: {
      mod: { title: string; desc: string; tag: string };
      logs: { title: string; desc: string; tag: string };
      music: { title: string; desc: string; tag: string };
      auto: { title: string; desc: string; tag: string };
      i18n: { title: string; desc: string; tag: string };
      dash: { title: string; desc: string; tag: string };
    };
  };
  philosophy: {
    quote1: string;
    quote2: string;
    subtitle: string;
  };
  stack: {
    subtitle: string;
    title: string;
    title_highlight: string;
  };
  roadmap: {
    subtitle: string;
    title: string;
    title_highlight: string;
    items: {
      logs: { title: string; desc: string };
      welcome: { title: string; desc: string };
      xp: { title: string; desc: string };
      economy: { title: string; desc: string };
      dash: { title: string; desc: string };
    };
    status: {
      in_progress: string;
      next: string;
      future: string;
    };
  };
  footer: {
    tagline: string;
    made_with: string;
    by: string;
    location: string;
  };
  about: {
    title: string;
    name: string;
    role: string;
    bio: string;
    connect: string;
  };
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      modules: "Módulos",
      stack: "Stack",
      roadmap: "Roadmap",
      vision: "Visión",
      github: "GitHub",
      login: "Login",
    },
    hero: {
      tag: "En desarrollo activo",
      title: "Simple. Perfecto. Tuyo.",
      subtitle: "Caramel es un bot de Discord modular construido con TypeScript. Hecho simple, hecho perfecto.",
      cta_github: "Ver en GitHub",
      cta_discord: "Añadir al servidor",
      cta_explore: "Explorar módulos",
    },
    stats: {
      mod_commands: "Comandos de mod",
      events: "Eventos loggeados",
      languages: "Idiomas (i18n)",
      modular: "Modular por diseño",
    },
    features: {
      subtitle: "Qué hace Caramel",
      title: "Módulos que funcionan",
      title_highlight: "como deben.",
      items: {
        mod: {
          title: "Moderación completa",
          desc: "warn, mute, ban, softban, kick, timeout, silentban, tempban, lockdown y más — con manejo de concurrencia real.",
          tag: "Listo",
        },
        logs: {
          title: "Logs avanzados",
          desc: "~28 eventos. Setup de 3 páginas o modo automático. Webhooks con rotación por rate-limit. Estado en Redis.",
          tag: "En progreso",
        },
        music: {
          title: "Música con Lavalink",
          desc: "Play, skip, queue, nowplaying, lyrics, loop, shuffle y pausa vía MusicManager y MusicPlayer propios.",
          tag: "Listo",
        },
        auto: {
          title: "Umbrales automáticos",
          desc: "Modo Modular y All Actions. Sanciones automáticas al acumularse warns. Sin intervención manual.",
          tag: "Listo",
        },
        i18n: {
          title: "i18n completo",
          desc: "en-US y es-ES con @sapphire/plugin-i18next. Prefix configurable por servidor.",
          tag: "Listo",
        },
        dash: {
          title: "Dashboard web",
          desc: "Panel de control con login de admins, gestión de módulos y sistema de testimonials.",
          tag: "Roadmap",
        },
      },
    },
    philosophy: {
      quote1: "hazlo simple",
      quote2: "hazlo perfecto",
      subtitle: "Filosofía de Caramel",
    },
    stack: {
      subtitle: "Tecnología",
      title: "Stack serio",
      title_highlight: "para un bot serio.",
    },
    roadmap: {
      subtitle: "Roadmap",
      title: "Qué viene",
      title_highlight: "después.",
      items: {
        logs: { title: "Logs avanzados", desc: "Setup multi-página, webhooks con rotación, ~28 eventos." },
        welcome: { title: "Welcome / Goodbye", desc: "Mensajes configurables con {user}, {server}, {count}." },
        xp: { title: "XP / Niveles", desc: "Sistema de leveling por mensajes y roles por nivel." },
        economy: { title: "Economía", desc: "Monedas, tienda, trabajos. Meta: superar UnbelievaBoat." },
        dash: { title: "Dashboard Web", desc: "Panel de control, login de admins, gestión de módulos." },
      },
      status: {
        in_progress: "En progreso",
        next: "Próximo",
        future: "Futuro",
      },
    },
    footer: {
      tagline: "hazlo simple — hazlo perfecto",
      made_with: "hecho con ♥ por",
      by: "joshiny",
      location: "Lima, Perú · © 2026 MIT License",
    },
    about: {
      title: "La visión detrás de Caramel",
      name: "joshiny",
      role: "Founder & Lead Developer",
      bio: "Caramel nació de mi obsesión por la simplicidad y el rendimiento. Mi meta es crear el bot de Discord más robusto y modular del ecosistema hispano, permitiendo que cualquier comunidad crezca con herramientas de nivel profesional sin la complejidad técnica habitual.",
      connect: "Conecta conmigo",
    },
  },
  en: {
    nav: {
      modules: "Modules",
      stack: "Stack",
      roadmap: "Roadmap",
      vision: "Vision",
      github: "GitHub",
      login: "Login",
    },
    hero: {
      tag: "Actively in development",
      title: "Simple. Perfect. Yours.",
      subtitle: "Caramel is a modular Discord bot built with TypeScript. Made simple, made perfect.",
      cta_github: "View on GitHub",
      cta_discord: "Add to Server",
      cta_explore: "Explore modules",
    },
    stats: {
      mod_commands: "Mod commands",
      events: "Logged events",
      languages: "Languages (i18n)",
      modular: "Modular by design",
    },
    features: {
      subtitle: "What Caramel does",
      title: "Modules that work",
      title_highlight: "as they should.",
      items: {
        mod: {
          title: "Complete Moderation",
          desc: "warn, mute, ban, softban, kick, timeout, silentban, tempban, lockdown and more — with real concurrency handling.",
          tag: "Ready",
        },
        logs: {
          title: "Advanced Logs",
          desc: "~28 events. 3-page setup or automatic mode. Webhooks with rate-limit rotation. Redis-backed state.",
          tag: "In progress",
        },
        music: {
          title: "Music with Lavalink",
          desc: "Play, skip, queue, nowplaying, lyrics, loop, shuffle and pause via custom MusicManager and MusicPlayer.",
          tag: "Ready",
        },
        auto: {
          title: "Automatic Thresholds",
          desc: "Modular and All Actions modes. Automatic sanctions upon accumulating warns. No manual intervention.",
          tag: "Ready",
        },
        i18n: {
          title: "Full i18n",
          desc: "en-US and es-ES with @sapphire/plugin-i18next. Configurable prefix per server.",
          tag: "Ready",
        },
        dash: {
          title: "Web Dashboard",
          desc: "Control panel with admin login, module management and testimonials system.",
          tag: "Roadmap",
        },
      },
    },
    philosophy: {
      quote1: "make it simple",
      quote2: "make it perfect",
      subtitle: "Caramel Philosophy",
    },
    stack: {
      subtitle: "Technology",
      title: "Serious stack",
      title_highlight: "for a serious bot.",
    },
    roadmap: {
      subtitle: "Roadmap",
      title: "What comes",
      title_highlight: "next.",
      items: {
        logs: { title: "Advanced Logs", desc: "Multi-page setup, webhooks with rotation, ~28 events." },
        welcome: { title: "Welcome / Goodbye", desc: "Configurable messages with {user}, {server}, {count}." },
        xp: { title: "XP / Levels", desc: "Leveling system by messages and roles per level." },
        economy: { title: "Economy", desc: "Coins, shop, jobs. Goal: beat UnbelievaBoat." },
        dash: { title: "Web Dashboard", desc: "Control panel, admin login, module management." },
      },
      status: {
        in_progress: "In progress",
        next: "Next",
        future: "Future",
      },
    },
    footer: {
      tagline: "make it simple — make it perfect",
      made_with: "made with ♥ by",
      by: "joshiny",
      location: "Lima, Peru · © 2026 MIT License",
    },
    about: {
      title: "The vision behind Caramel",
      name: "joshiny",
      role: "Founder & Lead Developer",
      bio: "Caramel was born from my obsession with simplicity and performance. My goal is to create the most robust and modular Discord bot in the ecosystem, allowing any community to grow with professional-grade tools without the usual technical complexity.",
      connect: "Connect with me",
    },
  },
};
