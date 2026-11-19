import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";

export function HeroCtas() {
  return (
    <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-lg">
      <Button
        href={brand.contact.messageHref}
        variant="primary"
        className="h-auto min-h-[3.25rem] w-full px-3 py-2.5 text-sm"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span className="whitespace-nowrap">{brand.contact.messageLabel}</span>
      </Button>
      <Button
        href="/videos"
        variant="outline"
        className="h-auto min-h-[3.25rem] w-full px-3 py-2.5 text-sm"
      >
        <Play className="h-4 w-4 shrink-0 fill-current" />
        <span className="whitespace-nowrap">Voir le podcast</span>
      </Button>
    </div>
  );
}
