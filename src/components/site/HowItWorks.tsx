import { Inbox, Brain, Zap, Send, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { icon: Inbox, title: "Customer messages your page", desc: "A new DM lands on Messenger, WhatsApp or Instagram — day or night." },
  { icon: Brain, title: "AI reads your business info", desc: "It uses your Google Sheet / Docs to understand products, prices and services." },
  { icon: Zap, title: "AI replies instantly", desc: "Pricing, FAQ, products and services — answered in Bangla, English or Banglish." },
  { icon: Send, title: "Lead saved & handed off", desc: "Hot leads go straight to your WhatsApp or sales team for closing." },
];

export const HowItWorks = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="how" className="relative overflow-hidden bg-gradient-mesh py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3 w-3" /> How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            From inbox message to closed lead in seconds
          </h2>
          <p className="mt-3 text-muted-foreground">A simple 4-step pipeline running 24/7 in the background.</p>
        </div>

        <div ref={ref} className="reveal relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* gradient connector line */}
          <div className="pointer-events-none absolute left-8 right-8 top-7 hidden h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* number ribbon */}
              <div className="absolute right-4 top-4 text-3xl font-black leading-none text-primary/10 transition-colors group-hover:text-primary/20">
                0{i + 1}
              </div>
              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
