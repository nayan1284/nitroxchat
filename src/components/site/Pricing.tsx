import { Check, Sparkles, Rocket, Zap, Crown, Infinity as InfinityIcon, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LeadCaptureDialog } from "./LeadCaptureDialog";

const plans = [
  {
    name: "Basic",
    icon: Zap,
    price: "2,990",
    period: "/month",
    desc: "Small businesses & service pages.",
    features: [
      "Messenger AI auto-reply",
      "Google Sheet/Docs knowledge",
      "FAQ, price & service answers",
      "Lead collection",
      "WhatsApp handoff",
    ],
    cta: "Start 7 Days Trial",
    highlight: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    price: "5,990",
    period: "/month",
    desc: "Product & service businesses with inventory.",
    features: [
      "Everything in Basic",
      "Messenger + Instagram support",
      "Product / service catalog",
      "Price & stock answers",
      "Weekly lead report",
    ],
    cta: "Start 7 Days Trial",
    highlight: true,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "9,990",
    period: "/month",
    desc: "Active pages & ad-running businesses.",
    features: [
      "Everything in Growth",
      "WhatsApp Business automation",
      "Voice note understanding",
      "Customer image understanding",
      "Hot lead tagging & priority support",
    ],
    cta: "Start 7 Days Trial",
    highlight: false,
  },
];

type CellValue = boolean | string;
const compareRows: { label: string; values: [CellValue, CellValue, CellValue]; highlight?: boolean }[] = [
  { label: "AI Messages", values: ["Unlimited", "Unlimited", "Unlimited"], highlight: true },
  { label: "Messenger auto-reply", values: [true, true, true] },
  { label: "Instagram DM auto-reply", values: [false, true, true] },
  { label: "WhatsApp Business automation", values: [false, false, true] },
  { label: "Knowledge base (Sheets/Docs)", values: [true, true, true] },
  { label: "Product / service catalog", values: ["Basic", "Full", "Full"] },
  { label: "Lead collection & WhatsApp handoff", values: [true, true, true] },
  { label: "Voice note understanding", values: [false, false, true] },
  { label: "Customer image understanding", values: [false, false, true] },
  { label: "Lead reports", values: ["Manual", "Weekly", "Real-time"] },
  { label: "Hot lead tagging", values: [false, false, true] },
  { label: "Support", values: ["Standard", "Priority", "Priority+"] },
];

const Cell = ({ v, highlight }: { v: CellValue; highlight?: boolean }) => {
  if (v === true)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground/60">
        <Minus className="h-3 w-3" aria-label="Not included" />
      </span>
    );
  if (highlight)
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow sm:text-[11px]">
        <InfinityIcon className="h-3 w-3" /> {v}
      </span>
    );
  return <span className="text-xs font-medium text-foreground sm:text-sm">{v}</span>;
};

export const Pricing = () => (
  <section id="pricing" className="relative bg-secondary/40 py-20 md:py-28">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3 w-3" /> Pricing
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Simple plans that scale with your inbox
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every plan includes <span className="font-semibold text-foreground">unlimited AI messages</span> under normal business usage. Prices in BDT.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {plans.map((p) => (
          <div
            key={p.name}
            className={cn(
              "group relative flex flex-col rounded-2xl border bg-card p-7 pt-9 transition-all duration-300",
              p.highlight
                ? "border-primary/60 shadow-premium lg:scale-[1.04] lg:-my-2"
                : "border-border shadow-soft hover:-translate-y-1.5 hover:shadow-card hover:border-primary/30",
            )}
          >
            {/* Top "Unlimited Messages" ribbon — every plan */}
            <div className="absolute left-5 right-5 top-0 -translate-y-1/2">
              <div className="mx-auto inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow sm:text-[11px]">
                <InfinityIcon className="h-3.5 w-3.5" />
                Unlimited Messages Included
              </div>
            </div>

            {p.highlight && (
              <>
                <div className="absolute -top-9 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full border border-primary/30 bg-background px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-soft">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-primary opacity-[0.04]" />
              </>
            )}

            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                  p.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-primary",
                )}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

            <div className="mt-5 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
              <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{p.price}</span>
              <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                BDT
              </span>
              <span className="text-sm text-muted-foreground">{p.period}</span>
            </div>

            {/* Sticky highlighted Unlimited row */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-primary/30 bg-gradient-primary p-3 text-primary-foreground shadow-glow">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
                <InfinityIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold leading-tight">Unlimited AI Messages</div>
                <div className="text-[11px] leading-tight text-primary-foreground/85">Reply 24/7 with no message cap.</div>
              </div>
            </div>

            <div className="my-5 h-px bg-border" />

            <ul className="flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span
                    className={cn(
                      "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                      p.highlight ? "bg-gradient-primary text-primary-foreground" : "bg-success/15 text-success",
                    )}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <span className="flex-1">{f}</span>
                </li>
              ))}
            </ul>
            <LeadCaptureDialog
              intent="trial"
              trigger={
                <Button variant={p.highlight ? "premium" : "glass"} size="lg" className="mt-7 w-full">
                  {p.cta}
                </Button>
              }
            />
          </div>
        ))}
      </div>

      {/* Custom card */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Custom / Enterprise</h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              High-volume pages, multiple Pages, CRM/API integration, advanced workflow & dashboard. Tailored to your operation.
            </p>
          </div>
        </div>
        <LeadCaptureDialog
          intent="consult"
          trigger={<Button variant="premium" size="lg" className="w-full md:w-auto">Get Custom Quote</Button>}
        />
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
        Unlimited AI messages under normal business usage. Fair usage applies for abnormal high traffic, spam, or heavy ad campaign spikes.
      </p>

      {/* Compare Plans — Responsive Layout */}
      <div className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3 w-3" /> Comparison
          </span>
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl text-balance">
            Every plan includes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Unlimited AI Messages</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Detailed comparison of our AI automation plans. Pick the one that fits your operation.
          </p>
        </div>

        {/* Mobile View: Stacked Comparison Cards (Visible only on <640px) */}
        <div className="mt-12 space-y-8 sm:hidden">
          {plans.map((p, idx) => (
            <div 
              key={p.name}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-300",
                p.highlight ? "border-primary/50 ring-1 ring-primary/20 scale-[1.01]" : "border-border"
              )}
            >
              {p.highlight && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                  Most Popular
                </div>
              )}
              
              <div className={cn(
                "p-5 border-b border-border",
                p.highlight ? "bg-primary/5" : "bg-secondary/10"
              )}>
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    p.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-secondary text-primary"
                  )}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{p.name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-foreground">{p.price}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">BDT</span>
                      <span className="text-xs text-muted-foreground">/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-border/40 px-5">
                {compareRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-4">
                    <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground pr-4">
                      {row.highlight && <InfinityIcon className="h-3.5 w-3.5 shrink-0 text-primary" />}
                      {row.label}
                    </span>
                    <div className="shrink-0">
                      <Cell v={row.values[idx]} highlight={row.highlight} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border bg-secondary/5 p-5">
                <LeadCaptureDialog
                  intent="trial"
                  trigger={
                    <Button variant={p.highlight ? "premium" : "glass"} className="w-full shadow-soft">
                      Start {p.name} Trial
                    </Button>
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Polished Table (Hidden on mobile <640px) */}
        <div className="mt-12 hidden overflow-hidden rounded-3xl border border-border bg-card shadow-card sm:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-gradient-to-b from-secondary/70 to-secondary/30">
                  <th
                    scope="col"
                    className="sticky left-0 z-20 w-[35%] bg-secondary/90 px-6 py-6 text-xs font-bold uppercase tracking-wider text-muted-foreground backdrop-blur-md sm:px-8"
                  >
                    Features
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      scope="col"
                      className={cn(
                        "relative w-[21.6%] px-4 py-6 text-center align-top",
                        p.highlight && "bg-primary/5",
                      )}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-xl",
                            p.highlight
                              ? "bg-gradient-primary text-primary-foreground shadow-glow"
                              : "bg-secondary text-primary",
                          )}
                        >
                          <p.icon className="h-5 w-5" />
                        </span>
                        <span
                          className={cn(
                            "text-base font-bold",
                            p.highlight ? "text-primary" : "text-foreground",
                          )}
                        >
                          {p.name}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-foreground">{p.price}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">BDT</span>
                        </div>
                        {p.highlight && (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                            <Sparkles className="h-2.5 w-2.5" /> Best Value
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-t border-border/50 transition-colors",
                      row.highlight
                        ? "bg-primary/5 hover:bg-primary/10"
                        : i % 2 === 1
                        ? "bg-secondary/20 hover:bg-secondary/40"
                        : "hover:bg-secondary/30",
                    )}
                  >
                    <th
                      scope="row"
                      className={cn(
                        "sticky left-0 z-10 px-6 py-5 text-left text-sm font-medium text-foreground backdrop-blur-sm sm:px-8",
                        row.highlight
                          ? "bg-primary/10 font-bold text-primary"
                          : i % 2 === 1
                          ? "bg-secondary/40"
                          : "bg-card/95",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {row.highlight && <InfinityIcon className="h-4 w-4 shrink-0 text-primary" />}
                        <span className="leading-snug">{row.label}</span>
                      </span>
                    </th>
                    {row.values.map((v, idx) => (
                      <td
                        key={idx}
                        className={cn(
                          "px-4 py-5 text-center",
                          plans[idx].highlight && "bg-primary/[0.04]",
                        )}
                      >
                        <div className="flex items-center justify-center">
                          <Cell v={v} highlight={row.highlight} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* CTA row */}
                <tr className="border-t-2 border-border bg-gradient-to-b from-secondary/30 to-secondary/60">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-secondary/80 px-6 py-6 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md sm:px-8"
                  >
                    Action
                  </th>
                  {plans.map((p) => (
                    <td key={p.name} className={cn("px-4 py-6 text-center", p.highlight && "bg-primary/[0.04]")}>
                      <LeadCaptureDialog
                        intent="trial"
                        trigger={
                          <Button
                            variant={p.highlight ? "premium" : "glass"}
                            size="lg"
                            className="w-full whitespace-nowrap shadow-soft"
                          >
                            Start trial
                          </Button>
                        }
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);
