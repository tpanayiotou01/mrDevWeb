import { jsxs, jsx } from "react/jsx-runtime";
import { ArrowUpRight, Wallet, Boxes, Shield, Cpu, Globe, Mail } from "lucide-react";
const bobaswapImg = "/assets/bobaswap-B9_su2Sr.png";
const gambinoImg = "/assets/gambino-BykL8qpO.png";
const squidethImg = "/assets/squideth-ZqnJSQXR.png";
const bodyHarmonyImg = "/assets/body-harmony-B6_ZrWiO.png";
const danosImg = "/assets/danos-BwITwjm-.png";
const CONTACT_EMAIL = "hello@themrdev.xyz";
const skills = [{
  icon: Wallet,
  label: "Smart Contracts",
  detail: "Solidity · EVM · Solana"
}, {
  icon: Boxes,
  label: "dApps",
  detail: "React · wagmi · viem"
}, {
  icon: Shield,
  label: "Security",
  detail: "Audits · Best practices"
}, {
  icon: Cpu,
  label: "Infrastructure",
  detail: "Nodes · Indexers · RPC"
}];
const projects = [{
  name: "BobaSwap Integration",
  url: "https://www.bobacatswap.com",
  domain: "bobacatswap.com",
  description: "Swap integration and front-end for BobaCat — wallet flows, routing, and a clean trading surface.",
  tags: ["DeFi", "Swap", "EVM"],
  chain: "EVM",
  image: bobaswapImg,
  featured: true
}, {
  name: "Gambino",
  url: "https://gambino-rho.vercel.app",
  domain: "gambino-rho.vercel.app",
  description: "Card-based on-chain gambling dApp with a moody, premium aesthetic and slick interaction design.",
  tags: ["GameFi", "dApp"],
  chain: "EVM",
  image: gambinoImg,
  featured: true
}, {
  name: "SquidETH",
  url: "https://squidgameeth.xyz",
  domain: "squidgameeth.xyz",
  description: "Ethereum take on the Squid-themed mini-games — bracketed rounds, wallet-gated play, and live state.",
  tags: ["EVM", "GameFi"],
  chain: "EVM",
  image: squidethImg
}, {
  name: "Body Harmony",
  url: "https://body-harmony.vercel.app",
  domain: "body-harmony.vercel.app",
  description: "Wellness brand site — calm composition, soft motion, considered typography.",
  tags: ["Web", "Brand"],
  chain: "Web",
  image: bodyHarmonyImg
}, {
  name: "Danos Car Detailing",
  url: "https://danos-car-detailing.vercel.app",
  domain: "danos-car-detailing.vercel.app",
  description: "Local service business site — bookings-first layout with confident product imagery.",
  tags: ["Web", "Business"],
  chain: "Web",
  image: danosImg
}];
function ChainBadge({
  chain
}) {
  if (!chain) return null;
  const map = {
    EVM: "text-mint",
    Solana: "text-mint-glow",
    Web: "text-muted-foreground"
  };
  return /* @__PURE__ */ jsx("span", { className: `text-[10px] font-mono uppercase tracking-wider ${map[chain]}`, children: chain });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen w-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-[80%] px-6 py-10 sm:py-16", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display text-sm font-semibold tracking-tight", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-mint glow-mint" }),
          "TheMrDev"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("a", { href: "#work", className: "transition-colors hover:text-foreground", children: "Work" }),
          /* @__PURE__ */ jsx("a", { href: "#about", className: "transition-colors hover:text-foreground", children: "About" }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "transition-colors hover:text-foreground", children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-24 sm:mt-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-mint" }),
          "Available for web3 projects"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl", children: [
          "Software developer",
          /* @__PURE__ */ jsx("br", {}),
          "building for the",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-mint", children: "on-chain" }),
          " web."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", children: [
          "I'm ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "TheMrDev" }),
          ". I design and ship web3 software — from smart contract integrations and dApp interfaces to the quiet infrastructure that makes them feel effortless."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--mint)]", children: [
            "Start a project",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#work", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card", children: "See work" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "mt-28", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: skills.map((s) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-mint/40", children: [
        /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-mint" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-sm font-semibold", children: s.label }),
        /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: s.detail })
      ] }, s.label)) }) }),
      /* @__PURE__ */ jsxs("section", { id: "work", className: "mt-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: "Selected work" }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
            projects.length,
            " shipped"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: projects.map((p) => /* @__PURE__ */ jsxs("a", { href: p.url, target: "_blank", rel: "noreferrer", className: "group grid gap-5 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-mint/40 hover:bg-card sm:grid-cols-[2fr_3fr] sm:gap-6 sm:p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-xl border border-border/60 bg-background/40 aspect-[16/10]", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: `${p.name} — landing page screenshot`, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3 sm:py-2 sm:pr-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: p.name }),
                /* @__PURE__ */ jsx(ChainBadge, { chain: p.chain }),
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground", children: t }, t)),
              /* @__PURE__ */ jsxs("span", { className: "ml-1 inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground/80", children: [
                /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
                p.domain
              ] })
            ] })
          ] })
        ] }, p.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "about", className: "mt-28", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: "About" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "I'm ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "TheMrDev" }),
            " — a software developer focused on the web3 stack. My work sits at the intersection of clean product engineering and on-chain mechanics: wallets, contracts, indexers, and the interfaces that bring them together."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Most of my source lives in private repos with clients and partners. What you see above is the public surface of that work." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "I care about software that's",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "fast" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "trustworthy" }),
            ", and",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "honest" }),
            " about what it does."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "contact", className: "mt-28 overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur sm:p-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: "Have something to build?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-muted-foreground", children: "Open to freelance, contract, and collaborative web3 work. Let's talk." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxs("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--mint)]", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          CONTACT_EMAIL
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("footer", { className: "mt-20 flex items-center justify-between border-t border-border pt-8 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " TheMrDev"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-mono", children: "built on-chain in spirit" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
