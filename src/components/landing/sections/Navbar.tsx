import { useState } from "react";
import { Menu, X } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-[var(--gradient-purple)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--glow-purple)] transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Agendar Gravação
        </a>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="glass absolute top-20 left-4 right-4 flex flex-col gap-3 rounded-2xl p-5 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[var(--gradient-purple)] px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Agendar Gravação
          </a>
        </div>
      )}
    </header>
  );
}
