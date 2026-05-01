import { MessageSquare, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_CONSULT } from "@/lib/links";

export const LiveChat = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="live-chat" className="bg-background py-16 md:py-20">
      <div className="container">
        <div
          ref={ref}
          className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/15 bg-card p-7 shadow-card md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-[auto_1fr_auto] md:gap-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Headset className="h-7 w-7" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Need Help? Chat With Us Live
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Ask us about pricing, setup, plans, or how Nitrox Chat works for your business.
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Live chat support available
              </p>
            </div>

            <Button
              variant="premium"
              size="lg"
              asChild
              className="w-full md:w-auto"
            >
              <a href={WHATSAPP_CONSULT} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-1 h-5 w-5" /> Open Live Chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
