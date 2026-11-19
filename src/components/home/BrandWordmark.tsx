export function BrandWordmark({
  size = "hero",
}: {
  size?: "hero" | "section";
}) {
  const sisters =
    size === "hero"
      ? "text-[clamp(4.25rem,14vw,7.5rem)]"
      : "text-[clamp(2.8rem,8vw,4.5rem)]";
  const surgery =
    size === "hero"
      ? "text-[clamp(1.25rem,3.4vw,1.85rem)] tracking-[0.48em]"
      : "text-[clamp(1rem,2.6vw,1.35rem)] tracking-[0.4em]";

  return (
    <span className="flex flex-col items-center">
      <span
        className={`${sisters} leading-[0.9]`}
        style={{
          fontFamily: "var(--font-signature), Allura, cursive",
          paddingInline: "0.12em 0.06em",
          paddingBottom: "0.06em",
          backgroundImage:
            "linear-gradient(180deg, #f5e6a8 0%, #e8c547 42%, #b8922a 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 8px 28px rgba(232, 197, 71, 0.28))",
        }}
      >
        Sisters
      </span>
      <span className="mt-4 flex w-full max-w-[16rem] items-center gap-3 sm:max-w-[20rem]">
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e8c547]/80 to-[#e8c547]/80"
        />
        <span className="font-display text-[0.72rem] font-medium uppercase tracking-[0.62em] text-[#e8c547] sm:text-[0.8rem]">
          of
        </span>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-l from-transparent via-[#e8c547]/80 to-[#e8c547]/80"
        />
      </span>
      <span
        className={`mt-3.5 font-display font-semibold uppercase text-[#e8c547] ${surgery}`}
        style={{
          backgroundImage:
            "linear-gradient(180deg, #f5e6a8 0%, #e8c547 45%, #b8922a 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Surgery
      </span>
    </span>
  );
}
