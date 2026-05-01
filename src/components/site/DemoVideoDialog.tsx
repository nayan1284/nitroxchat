import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, PlayCircle } from "lucide-react";
import { LeadCaptureDialog } from "./LeadCaptureDialog";
import { FACEBOOK_URL } from "@/lib/links";

interface Props {
  trigger: ReactNode;
  /** YouTube video ID. Replace with the real demo when available. */
  youtubeId?: string;
}

export const DemoVideoDialog = ({ trigger, youtubeId = "dQw4w9WgXcQ" }: Props) => {
  const [open, setOpen] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-primary/20">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <PlayCircle className="h-5 w-5 text-primary" /> Live Demo — See Nitrox Chat reply
          </DialogTitle>
          <DialogDescription>
            A 60-second look at how the AI handles real customer questions and hands hot leads to WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full bg-black" style={{ aspectRatio: "16 / 9" }}>
          {open && (
            <iframe
              src={src}
              title="Nitrox Chat — Live Demo"
              className="absolute inset-0 h-full w-full"
              allow="accelerated-2d-canvas; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>

        <div className="flex flex-col gap-2.5 border-t border-border bg-secondary/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Like what you see? Try it on your own page.</p>
          <div className="flex flex-row gap-2">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button variant="glass" size="sm" className="w-full">
                <MessageCircle className="mr-1 h-4 w-4" /> Try Demo Bot
              </Button>
            </a>
            <LeadCaptureDialog
              intent="trial"
              trigger={
                <Button variant="premium" size="sm" className="flex-1 sm:flex-none">
                  Start 7 Days Trial
                </Button>
              }
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
