import { Globe, Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DEVELOPER,
  DEVELOPER_WHATSAPP_LINK,
} from "@/lib/developer";

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: DEVELOPER.email,
    href: `mailto:${DEVELOPER.email}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: DEVELOPER.whatsappDisplay,
    href: DEVELOPER_WHATSAPP_LINK,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: DEVELOPER.instagramHandle,
    href: DEVELOPER.instagramLink,
  },
  {
    icon: Globe,
    label: "Site",
    value: DEVELOPER.websiteDisplay,
    href: DEVELOPER.website,
  },
] as const;

export function DeveloperCredits() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex min-h-11 items-center text-purple-neon transition-opacity hover:underline hover:opacity-90"
        >
          Desenvolvido por {DEVELOPER.name}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm border-white/10 bg-card/95 backdrop-blur-xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{DEVELOPER.name}</DialogTitle>
          <DialogDescription>{DEVELOPER.role}</DialogDescription>
        </DialogHeader>

        <ul className="mt-2 space-y-1">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-foreground sm:text-base"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-purple-neon/15 text-purple-neon">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-xs text-muted-foreground">{item.label}</span>
                  <span className="block truncate font-medium">{item.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
