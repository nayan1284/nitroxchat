import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Facebook, Instagram, MessageCircle, Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMockup } from "./ChatMockup";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import { DemoVideoDialog } from "./DemoVideoDialog";

const platforms = [
  { icon: Facebook, label: "Messenger", color: "text-[#1877F2]" },
  { icon: MessageCircle, label: "WhatsApp", color: "text-success" },
  { icon: Instagram, label: "Instagram", color: "text-[#E1306C]" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-mesh pt-10 pb-16 md:pt-20 md:pb-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          {/* Heading */}
          <h1 className="text-[2.15rem] font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.6rem]">
            24/7 AI Sales Assistant for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Messenger, WhatsApp &amp; Instagram
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg lg:mx-0">
            Nitrox Chat replies to every customer message instantly across Meta platforms. It answers questions, captures leads, and hands serious buyers to your team.
          </p>

          {/* Works on — label on its own line, chips below */}
          <div className="mt-6 flex flex-col items-center gap-2.5 lg:items-start">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Works on</span>
            <div className="flex flex-nowrap items-center justify-center gap-2 lg:justify-start">
              {platforms.map((p) => (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:px-3 sm:text-xs"
                >
                  <p.icon className={`h-3.5 w-3.5 ${p.color}`} />
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs — single row on mobile */}
          <div className="mt-7 flex flex-row items-stretch justify-center gap-2.5 sm:gap-3 lg:justify-start">
            <LeadCaptureDialog
              intent="trial"
              trigger={
                <Button variant="premium" size="xl" className="group flex-1 sm:flex-none px-4 sm:px-7 text-sm sm:text-base">
                  <span className="hidden xs:inline">Start </span>7 Days Trial
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              }
            />
            <LeadCaptureDialog
              intent="consult"
              trigger={
                <Button variant="glass" size="xl" className="flex-1 sm:flex-none px-4 sm:px-7 text-sm sm:text-base">
                  <PhoneCall className="mr-1 h-4 w-4" />
                  <span className="hidden xs:inline">Free </span>Consultation
                </Button>
              }
            />
          </div>

          {/* Microcopy */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              Loved by growing brands
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <DemoVideoDialog
              trigger={
                <button type="button" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                  <PlayCircle className="h-4 w-4" /> Watch the Live Demo
                </button>
              }
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-primary opacity-25 blur-3xl" />
          <ChatMockup />
        </motion.div>
      </div>
    </section>
  );
};
