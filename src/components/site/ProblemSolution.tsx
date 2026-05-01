import { AlertTriangle, CheckCircle2, ArrowRight, XCircle, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const problems = [
  "Late replies to customer messages",
  "Repeated price and FAQ questions",
  "Lost leads after office hours",
  "No 24/7 support coverage",
  "Ad messages not handled fast enough",
];

const solutions = [
  "Instant AI auto-reply, 24/7",
  "Answers based on your business info",
  "Pricing, FAQ & service answers",
  "Product / service explanations",
  "Lead capture + WhatsApp handoff",
];

export const ProblemSolution = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-secondary/40 to-transparent" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3 w-3" /> Why Nitrox Chat
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Stop losing customers to slow replies
          </h2>
          <p className="mt-3 text-muted-foreground">
            Most pages lose leads because nobody replies fast enough. Nitrox Chat fixes that on autopilot.
          </p>
        </div>

        <div ref={ref} className="reveal mx-auto mt-14 grid max-w-5xl items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Problem card */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-destructive/10 blur-2xl" />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
              <AlertTriangle className="h-3.5 w-3.5" /> Without Nitrox
            </div>
            <ul className="space-y-3.5">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow connector */}
          <div className="flex items-center justify-center md:px-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow md:rotate-0">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* Solution card */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-primary p-7 text-primary-foreground shadow-premium transition-all duration-300 hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> With Nitrox Chat
            </div>
            <ul className="relative space-y-3.5">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};