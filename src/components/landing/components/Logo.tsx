import { logoTMG } from "../assets";

export function Logo() {
  return (
    <a href="#" className="flex min-w-0 items-center gap-2 font-display text-base font-bold sm:text-lg">
      <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-gradient-purple sm:h-10 sm:w-10">
        <img src={logoTMG} alt="TMG Estúdio" className="h-full w-full object-contain" />
      </span>
      <span className="truncate">
        TMG<span className="text-purple-neon">Estúdio</span>
      </span>
    </a>
  );
}
