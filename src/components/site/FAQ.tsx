import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { faqs } from "@/lib/faqs";

export const FAQ = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <HelpCircle className="h-3 w-3" /> FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Frequently asked questions
          </h2>
        </div>
        <div ref={ref} className="reveal">
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5 shadow-soft transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-card">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};