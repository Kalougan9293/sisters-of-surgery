import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-bordeaux/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-bordeaux",
        className,
      )}
    >
      {children}
    </span>
  );
}
