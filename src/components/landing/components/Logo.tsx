import { logoTMG } from "../assets";

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--gradient-purple)]">
        <img src={logoTMG} alt="TMG Estúdio" />
      </span>
      TMG<span className="text-purple-neon">Estúdio</span>
    </a>
  );
}
