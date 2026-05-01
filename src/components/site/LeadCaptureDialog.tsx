import { useState, ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Lock, MessageCircle, Rocket, Sparkles, User, Phone, Link2, Building2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/links";
import { cn } from "@/lib/utils";
import logo from "@/assets/nitrox-logo.png";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name too long"),
  business: z.string().trim().min(2, "Enter your business or page name").max(120, "Too long"),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20, "Number too long")
    .regex(/^[+0-9\s\-()]+$/, "Only digits, spaces and + - ( ) allowed"),
  pageLink: z
    .string()
    .trim()
    .min(3, "Enter your Facebook Page link or name")
    .max(200, "Too long"),
  platform: z.enum(["messenger", "whatsapp", "instagram", "all"]),
  notes: z.string().trim().max(500, "Keep it under 500 characters").optional(),
});

type FormData = z.infer<typeof schema>;
type Intent = "trial" | "consult";

interface Props {
  intent: Intent;
  trigger?: ReactNode;
  /** Optional override for the WhatsApp message prefix (e.g. pre-fill chosen tier). */
  messagePrefix?: string;
  /** Optional controlled open state (when omitted, the trigger handles it). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const intentCopy = {
  trial: {
    eyebrow: "7 Days Free Trial",
    title: "Start your free trial",
    desc: "Tell us about your business so we can configure your AI assistant in 24–48 hours.",
    cta: "Continue on WhatsApp",
    prefix: "Hi Nitrox Chat, I want to start the 7 days trial for AI Messenger Automation.",
    icon: Rocket,
  },
  consult: {
    eyebrow: "Free Consultation",
    title: "Book your free consultation",
    desc: "Share a few details and our team will reach out on WhatsApp shortly.",
    cta: "Send Securely to WhatsApp",
    prefix: "Hi Nitrox Chat, I want a free consultation call for AI Messenger Automation.",
    icon: Sparkles,
  },
};

const platformOptions: { value: FormData["platform"]; label: string }[] = [
  { value: "messenger", label: "Messenger" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "instagram", label: "Instagram" },
  { value: "all", label: "All three" },
];

export const LeadCaptureDialog = ({ intent, trigger, messagePrefix, open: openProp, onOpenChange }: Props) => {
  const [openInternal, setOpenInternal] = useState(false);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : openInternal;
  const setOpen = (v: boolean) => {
    if (!isControlled) setOpenInternal(v);
    onOpenChange?.(v);
  };
  const [form, setForm] = useState<FormData>({
    name: "",
    business: "",
    whatsapp: "",
    pageLink: "",
    platform: "messenger",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const copy = intentCopy[intent];
  const Icon = copy.icon;

  const reset = () => {
    setForm({ name: "", business: "", whatsapp: "", pageLink: "", platform: "messenger", notes: "" });
    setErrors({});
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { name, business, whatsapp, pageLink, platform, notes } = result.data;
    const platformLabel = platformOptions.find((p) => p.value === platform)?.label ?? platform;
    const prefix = messagePrefix ?? copy.prefix;
    const message =
      `${prefix}\n\n` +
      `• Name: ${name}\n` +
      `• Business / Page: ${business}\n` +
      `• WhatsApp: ${whatsapp}\n` +
      `• Page Link: ${pageLink}\n` +
      `• Platform: ${platformLabel}` +
      (notes ? `\n• Notes: ${notes}` : "");
    const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setSubmitting(false);
    reset();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-lg overflow-hidden p-0 sm:max-w-xl">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-primary px-6 pb-7 pt-6 text-primary-foreground">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <img src={logo} alt="" className="h-7 w-7 object-contain" />
            </div>
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                <Icon className="h-3 w-3" /> {copy.eyebrow}
              </span>
              <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{copy.title}</h2>
              <p className="mt-1 text-sm text-primary-foreground/85">{copy.desc}</p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border bg-secondary/40 text-center">
          <div className="flex flex-col items-center gap-0.5 py-2.5">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-medium text-foreground">24–48h setup</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 py-2.5">
            <Lock className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-medium text-foreground">Private &amp; secure</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 py-2.5">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <span className="text-[11px] font-medium text-foreground">No card required</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-5" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="lc-name"
              label="Full Name"
              icon={User}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Rahim Uddin"
              maxLength={80}
              autoComplete="name"
              error={errors.name}
            />
            <Field
              id="lc-business"
              label="Business / Page Name"
              icon={Building2}
              value={form.business}
              onChange={(v) => setForm({ ...form, business: v })}
              placeholder="Acme Fashion"
              maxLength={120}
              autoComplete="organization"
              error={errors.business}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="lc-wa"
              label="WhatsApp Number"
              icon={Phone}
              type="tel"
              value={form.whatsapp}
              onChange={(v) => setForm({ ...form, whatsapp: v })}
              placeholder="+8801XXXXXXXXX"
              maxLength={20}
              autoComplete="tel"
              error={errors.whatsapp}
            />
            <Field
              id="lc-page"
              label="Facebook Page Link"
              icon={Link2}
              value={form.pageLink}
              onChange={(v) => setForm({ ...form, pageLink: v })}
              placeholder="facebook.com/yourpage"
              maxLength={200}
              error={errors.pageLink}
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Where do you want the AI?
            </Label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {platformOptions.map((p) => {
                const active = form.platform === p.value;
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setForm({ ...form, platform: p.value })}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-xs font-semibold transition-all",
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-soft"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lc-notes" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Anything we should know? <span className="font-normal normal-case text-muted-foreground/70">(optional)</span>
            </Label>
            <Textarea
              id="lc-notes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="e.g. We sell skincare and get 200+ messages a day."
              maxLength={500}
              rows={3}
              className="resize-none"
            />
            {errors.notes && <p className="text-xs text-destructive">{errors.notes}</p>}
          </div>

          <Button type="submit" variant="premium" size="lg" className="w-full" disabled={submitting}>
            <MessageCircle className="mr-1 h-5 w-5" /> {copy.cta}
          </Button>

          <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
            <Lock className="h-3 w-3" />
            Your details are sent directly to our team. No spam, ever.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface FieldProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  autoComplete?: string;
  error?: string;
}

const Field = ({ id, label, icon: Icon, value, onChange, placeholder, maxLength, type = "text", autoComplete, error }: FieldProps) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {label}
    </Label>
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={cn("pl-9", error && "border-destructive focus-visible:ring-destructive")}
        required
      />
    </div>
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);
