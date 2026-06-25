import { useState } from "react";
import { Menu, X } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="glass flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:gap-4 sm:px-5 sm:py-3">
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
          className="btn-primary hidden rounded-xl px-4 py-2 text-sm font-bold hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] md:inline-flex"
        >
          Agendar Gravação
        </a>
        <button
          type="button"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-nav-menu"
          className="glass absolute top-[4.25rem] left-3 right-3 flex flex-col gap-3 rounded-2xl p-4 sm:left-4 sm:right-4 sm:top-20 sm:p-5 md:hidden"
        >
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
            className="btn-primary rounded-xl px-4 py-2.5 text-center text-sm font-bold"
          >
            Agendar Gravação
          </a>
        </div>
      )}
    </header>
  );
}
