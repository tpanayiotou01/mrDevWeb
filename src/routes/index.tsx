import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  Boxes,
  Wallet,
  Shield,
  Cpu,
  Globe,
} from "lucide-react";
import bobaswapImg from "@/assets/projects/bobaswap.png";
import gambinoImg from "@/assets/projects/gambino.png";
import squidethImg from "@/assets/projects/squideth.png";
import bodyHarmonyImg from "@/assets/projects/body-harmony.png";
import danosImg from "@/assets/projects/danos.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheMrDev — Web3 Software Developer" },
      {
        name: "description",
        content:
          "TheMrDev — independent software developer building web3 applications, smart contract integrations, and on-chain services.",
      },
      { property: "og:title", content: "TheMrDev — Web3 Software Developer" },
      {
        property: "og:description",
        content:
          "Building web3 applications, smart contract integrations, and on-chain services.",
      },
    ],
  }),
  component: Index,
});

const CONTACT_EMAIL = "themrdevteaches@gmail.com";

const skills = [
  { icon: Wallet, label: "Smart Contracts", detail: "Solidity · EVM · Solana" },
  { icon: Boxes, label: "dApps", detail: "React · wagmi · viem" },
  { icon: Shield, label: "Security", detail: "Audits · Best practices" },
  { icon: Cpu, label: "Infrastructure", detail: "Nodes · Indexers · RPC" },
];

type Project = {
  name: string;
  url: string;
  domain: string;
  description: string;
  tags: string[];
  chain?: "EVM" | "Solana" | "Web";
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "BobaSwap Integration",
    url: "https://www.bobacatswap.com",
    domain: "bobacatswap.com",
    description:
      "Swap integration and front-end for BobaCat — wallet flows, routing, and a clean trading surface.",
    tags: ["DeFi", "Swap", "EVM"],
    chain: "EVM",
    image: bobaswapImg,
    featured: true,
  },
  {
    name: "Gambino",
    url: "https://gambino-rho.vercel.app",
    domain: "gambino-rho.vercel.app",
    description:
      "Card-based on-chain gambling dApp with a moody, premium aesthetic and slick interaction design.",
    tags: ["GameFi", "dApp"],
    chain: "EVM",
    image: gambinoImg,
    featured: true,
  },
  {
    name: "SquidETH",
    url: "https://squidgameeth.xyz",
    domain: "squidgameeth.xyz",
    description:
      "Ethereum take on the Squid-themed mini-games — bracketed rounds, wallet-gated play, and live state.",
    tags: ["EVM", "GameFi"],
    chain: "EVM",
    image: squidethImg,
  },
  {
    name: "Body Harmony",
    url: "https://body-harmony.vercel.app",
    domain: "body-harmony.vercel.app",
    description:
      "Wellness brand site — calm composition, soft motion, considered typography.",
    tags: ["Web", "Brand"],
    chain: "Web",
    image: bodyHarmonyImg,
  },
  {
    name: "Danos Car Detailing",
    url: "https://danos-car-detailing.vercel.app",
    domain: "danos-car-detailing.vercel.app",
    description:
      "Local service business site — bookings-first layout with confident product imagery.",
    tags: ["Web", "Business"],
    chain: "Web",
    image: danosImg,
  },
];

function ChainBadge({ chain }: { chain?: Project["chain"] }) {
  if (!chain) return null;
  const map: Record<NonNullable<Project["chain"]>, string> = {
    EVM: "text-mint",
    Solana: "text-mint-glow",
    Web: "text-muted-foreground",
  };
  return (
    <span
      className={`text-[10px] font-mono uppercase tracking-wider ${map[chain]}`}
    >
      {chain}
    </span>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[80%] px-6 py-10 sm:py-16">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-mint glow-mint" />
            TheMrDev
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mt-24 sm:mt-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
            Available for web3 projects
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Software developer
            <br />
            building for the{" "}
            <span className="text-gradient-mint">on-chain</span> web.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground">TheMrDev</span>. I design and
            ship web3 software — from smart contract integrations and dApp
            interfaces to the quiet infrastructure that makes them feel
            effortless.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--mint)]"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              See work
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-28">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((s) => (
              <div
                key={s.label}
                className="group rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-mint/40"
              >
                <s.icon className="h-5 w-5 text-mint" />
                <div className="mt-3 font-display text-sm font-semibold">
                  {s.label}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mt-28">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <span className="text-xs text-muted-foreground">
              {projects.length} shipped
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-5 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-mint/40 hover:bg-card sm:grid-cols-[2fr_3fr] sm:gap-6 sm:p-5"
              >
                <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background/40 aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={`${p.name} — landing page screenshot`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-3 sm:py-2 sm:pr-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold">
                        {p.name}
                      </h3>
                      <ChainBadge chain={p.chain} />
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="ml-1 inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground/80">
                      <Globe className="h-3 w-3" />
                      {p.domain}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-28">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground">TheMrDev</span> — a software
              developer focused on the web3 stack. My work sits at the
              intersection of clean product engineering and on-chain mechanics:
              wallets, contracts, indexers, and the interfaces that bring them
              together.
            </p>
            <p>
              Most of my source lives in private repos with clients and
              partners. What you see above is the public surface of that work.
            </p>
            <p>
              I care about software that's{" "}
              <span className="text-foreground">fast</span>,{" "}
              <span className="text-foreground">trustworthy</span>, and{" "}
              <span className="text-foreground">honest</span> about what it
              does.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-28 overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur sm:p-12"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have something to build?
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Open to freelance, contract, and collaborative web3 work. Let's
            talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--mint)]"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>

        <footer className="mt-20 flex items-center justify-between border-t border-border pt-8 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} TheMrDev</div>
          <div className="font-mono">built on-chain in spirit</div>
        </footer>
      </div>
    </main>
  );
}
