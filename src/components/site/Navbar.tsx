import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import logo from "@/assets/nitrox-logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <img src={logo} alt="Nitrox Chat logo" className="h-9 w-9 object-contain" width={36} height={36} />
          Nitrox Chat
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <LeadCaptureDialog
            intent="trial"
            trigger={<Button variant="hero" size="sm">Start 7 Days Trial</Button>}
          />
        </div>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary">
                {l.label}
              </a>
            ))}
            <LeadCaptureDialog
              intent="trial"
              trigger={<Button variant="hero" className="mt-2 w-full">Start 7 Days Trial</Button>}
            />
          </div>
        </div>
      )}
    </header>
  );
};