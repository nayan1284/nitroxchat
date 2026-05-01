import { Check, Facebook, Instagram, MessageCircle, Sparkles, UserPlus, Zap } from "lucide-react";

export const ChatMockup = () => (
  <div className="relative mx-auto w-full max-w-md">
    {/* Glow */}
    <div className="absolute -inset-6 -z-10 rounded-[2.75rem] bg-gradient-primary opacity-25 blur-3xl" />
    <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-accent opacity-15 blur-2xl" />

    {/* Phone frame */}
    <div className="relative rounded-[2.25rem] border border-border bg-card p-3 shadow-premium ring-1 ring-primary/10">
      {/* Notch */}
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />

      <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-secondary/80 to-background">
        {/* Header */}
        <div className="flex items-center gap-3 bg-card/95 px-4 pb-3 pt-7 backdrop-blur border-b border-border">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-4 w-4" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-success" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground">Your Brand</div>
            <div className="flex items-center gap-1.5 text-[11px] text-success">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              AI Assistant • Online now
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-1">
            <Facebook className="h-3 w-3 text-[#1877F2]" />
            <MessageCircle className="h-3 w-3 text-success" />
            <Instagram className="h-3 w-3 text-[#E1306C]" />
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 px-4 py-5">
          {/* Customer */}
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-card px-3.5 py-2.5 text-sm text-foreground shadow-soft">
              Hi, do you have the blue shirt in size L? What's the price?
            </div>
          </div>

          {/* Typing → AI reply */}
          <div className="flex justify-end">
            <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-gradient-primary px-3.5 py-2.5 text-sm text-primary-foreground shadow-glow">
              Hi! 👋 Yes, the <b>Blue Shirt (L)</b> is in stock at <b>৳1,250</b>. Free delivery in Dhaka. Want me to place the order?
              <div className="mt-1.5 flex items-center gap-1 text-[10px] font-medium text-primary-foreground/80">
                <Zap className="h-2.5 w-2.5" /> Replied in 1.2s
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="flex justify-start">
            <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-card px-3.5 py-2.5 text-sm text-foreground shadow-soft">
              Yes, please.
            </div>
          </div>

          {/* Lead saved */}
          <div className="flex justify-center pt-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-[11px] font-semibold text-success ring-1 ring-success/20">
              <UserPlus className="h-3 w-3" /> Lead saved automatically
            </div>
          </div>

          {/* Handoff card */}
          <div className="rounded-xl border border-success/30 bg-gradient-to-br from-success/5 to-card p-3 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Check className="h-3.5 w-3.5 text-success" />
              Hot lead → handed off to your team
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">
              Customer details sent to WhatsApp for closing.
            </div>
            <button className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-success py-2 text-xs font-semibold text-success-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-3.5 w-3.5" /> Open in WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Floating badges */}
    <div className="absolute -left-6 top-20 hidden rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-semibold text-foreground shadow-card backdrop-blur lg:block animate-float">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-success" />
        24/7 Online
      </div>
    </div>
    <div className="absolute -right-6 bottom-24 hidden rounded-xl border border-border bg-card/95 px-3 py-2 text-xs font-semibold text-foreground shadow-card backdrop-blur lg:block animate-float" style={{ animationDelay: "1.5s" }}>
      <div className="flex items-center gap-1.5 text-primary">
        <UserPlus className="h-3 w-3" /> +12 leads today
      </div>
    </div>
  </div>
);
