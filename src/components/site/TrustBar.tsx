import { Clock, Languages, FileSpreadsheet, ShieldCheck, UserPlus } from "lucide-react";

const items = [
  { icon: Clock, label: "24–48h setup" },
  { icon: ShieldCheck, label: "Live demo" },
  { icon: Languages, label: "BN • EN • Banglish" },
  { icon: FileSpreadsheet, label: "Sheet / Docs" },
  { icon: UserPlus, label: "Lead capture" },
];

export const TrustBar = () => (
  <section aria-label="Trust" className="border-y border-border bg-background/80 backdrop-blur">
    <div className="container py-3.5">
      <div className="flex flex-nowrap items-center gap-x-5 gap-y-2 overflow-x-auto whitespace-nowrap text-[12px] font-medium text-muted-foreground sm:justify-center sm:overflow-visible sm:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map(({ icon: Icon, label }, i) => (
          <div key={label} className="flex items-center gap-2">
            <span className="group flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Icon className="h-3.5 w-3.5 text-primary transition-transform group-hover:scale-110" />
              {label}
            </span>
            {i < items.length - 1 && <span className="hidden h-1 w-1 shrink-0 rounded-full bg-border sm:inline-block" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);
