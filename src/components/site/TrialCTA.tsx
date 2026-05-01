import { Button } from "@/components/ui/button";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

export const TrialCTA = () => (
  <section className="bg-background py-20 md:py-24">
    <div className="container">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center text-primary-foreground shadow-premium md:p-16">
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3 w-3" /> 7 Days Trial
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            See Nitrox Chat reply for your business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90 sm:text-lg">
            Live on Messenger, WhatsApp and Instagram in 24–48 hours. No risk, cancel anytime.
          </p>

          <div className="mt-8 flex flex-row items-stretch justify-center gap-2.5 sm:gap-3">
            <LeadCaptureDialog
              intent="trial"
              trigger={
                <Button variant="whatsapp" size="xl" className="flex-1 sm:flex-none px-4 sm:px-8 text-sm sm:text-base shadow-glow">
                  <MessageCircle className="mr-1 h-5 w-5" />
                  <span className="hidden xs:inline">Start </span>7 Days Trial
                </Button>
              }
            />
            <LeadCaptureDialog
              intent="consult"
              trigger={
                <Button size="xl" className="flex-1 sm:flex-none bg-white px-4 text-sm text-primary hover:bg-white/90 sm:px-8 sm:text-base">
                  <PhoneCall className="mr-1 h-5 w-5" />
                  <span className="hidden xs:inline">Free </span>Consultation
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
