import { MessageCircle, Facebook, Instagram, ArrowUpRight, Mail } from "lucide-react";
import { FACEBOOK_URL, EMAIL, WHATSAPP_TRIAL, INSTAGRAM_URL } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import logo from "@/assets/nitrox-logo.png";

export const Footer = () => (
  <footer className="relative border-t border-border bg-gradient-to-b from-background to-secondary/40 pb-24 md:pb-12">
    {/* Top CTA strip */}
    <div className="container -mt-10 mb-12">
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 shadow-card md:flex md:items-center md:justify-between md:gap-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">Ready to never miss a lead again?</h3>
          <p className="mt-1 text-sm text-muted-foreground">Setup within 24–48 hours. Cancel anytime.</p>
        </div>
        <LeadCaptureDialog
          intent="trial"
          trigger={
            <Button variant="premium" size="lg" className="mt-4 w-full md:mt-0 md:w-auto">
              Start 7 Days Trial <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          }
        />
      </div>
    </div>

    <div className="container pb-10">
      {/* Brand block */}
      <div className="max-w-2xl">
        <a href="#top" className="inline-flex items-center gap-2.5">
          <img src={logo} alt="Nitrox Chat logo" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="text-lg font-bold tracking-tight text-foreground">Nitrox Chat</span>
        </a>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          24/7 AI Sales Assistant for Messenger, WhatsApp &amp; Instagram. Reply faster, capture more leads, and grow your business on autopilot.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-success hover:text-success hover:shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="my-8 h-px bg-border" />

      {/* Product links */}
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground sm:text-xs">Product</h4>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-muted-foreground sm:flex sm:flex-wrap sm:gap-x-8">
          <li><a href="#features" className="transition-colors hover:text-primary">Features</a></li>
          <li><a href="#how" className="transition-colors hover:text-primary">How It Works</a></li>
          <li><a href="#pricing" className="transition-colors hover:text-primary">Pricing</a></li>
          <li><a href="#faq" className="transition-colors hover:text-primary">FAQ</a></li>
          <li><a href="#live-chat" className="transition-colors hover:text-primary">Live Chat</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Nitrox Chat. All rights reserved.</span>
        <span>Built for Messenger • WhatsApp • Instagram</span>
      </div>
    </div>
  </footer>
);
