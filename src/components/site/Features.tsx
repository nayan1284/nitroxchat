import { Bot, FileSpreadsheet, BadgeDollarSign, UserPlus, Send, Languages, Package, AudioLines, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  { icon: Bot, title: "Instant AI replies", desc: "Replies to every DM on Messenger, WhatsApp & Instagram in seconds." },
  { icon: FileSpreadsheet, title: "Sheet / Docs knowledge", desc: "Update your AI by editing a Google Sheet — no developer needed." },
  { icon: BadgeDollarSign, title: "Price, FAQ & services", desc: "Handles repetitive questions so your team focuses on closing." },
  { icon: UserPlus, title: "Automatic lead capture", desc: "Captures name, number and intent — no lead ever slips through." },
  { icon: Send, title: "WhatsApp handoff", desc: "Sends serious buyers straight to your sales team's WhatsApp." },
  { icon: Languages, title: "Bangla, English & Banglish", desc: "Replies naturally in the language your customer uses." },
  { icon: Package, title: "Product & inventory", desc: "Answer product, price and stock questions from your data." },
  { icon: AudioLines, title: "Voice & image understanding", desc: "Understands customer voice notes and product photos (Pro)." },
];

export const Features = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
  <section id="features" className="bg-background py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3 w-3" /> Features
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Everything you need to sell on Meta platforms
        </h2>
        <p className="mt-3 text-muted-foreground">Built for Messenger, WhatsApp and Instagram — one AI assistant for all your inboxes.</p>
      </div>
      <div ref={ref} className="reveal mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
