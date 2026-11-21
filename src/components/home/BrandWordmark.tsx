/**
 * Hero chic : ivoire + fin contour or, traits dorés autour de « of ».
 */
export function BrandWordmark({
  size = "hero",
}: {
  size?: "hero" | "section";
}) {
  const sisters =
    size === "hero"
      ? "text-[clamp(2.4rem,8vw,4.25rem)] tracking-[0.22em]"
      : "text-[clamp(1.8rem,5vw,2.8rem)] tracking-[0.2em]";
  const surgery =
    size === "hero"
      ? "text-[clamp(1.35rem,4vw,2.1rem)] tracking-[0.28em]"
      : "text-[clamp(1.1rem,3vw,1.55rem)] tracking-[0.24em]";

  /** Blanc ivoire + liseré or (stroke) + halo discret */
  const chicLettering = {
    color: "#fffaf3",
    WebkitTextStroke: "1px rgba(201, 162, 39, 0.85)",
    paintOrder: "stroke fill" as const,
    textShadow: `
      0 0 1px rgba(232, 197, 71, 0.9),
      0 0 18px rgba(232, 197, 71, 0.28),
      0 2px 14px rgba(0, 0, 0, 0.35)
    `,
  };

  const chicSmall = {
    color: "#fffaf3",
    WebkitTextStroke: "0.6px rgba(201, 162, 39, 0.75)",
    paintOrder: "stroke fill" as const,
    textShadow: `
      0 0 10px rgba(232, 197, 71, 0.22),
      0 1px 8px rgba(0, 0, 0, 0.3)
    `,
  };

  return (
    <span className="flex flex-col items-center">
      <span
        className={`font-display font-semibold uppercase leading-none ${sisters}`}
        style={chicLettering}
      >
        Sisters
      </span>

      <span className="mt-4 flex w-full max-w-[16rem] items-center gap-3 sm:max-w-[20rem]">
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e8c547]/75 to-[#e8c547]/75"
        />
        <span
          className="font-display text-[0.72rem] font-medium uppercase tracking-[0.62em] sm:text-[0.8rem]"
          style={chicSmall}
        >
          of
        </span>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-l from-transparent via-[#e8c547]/75 to-[#e8c547]/75"
        />
      </span>

      <span
        className={`mt-3.5 font-display font-semibold uppercase ${surgery}`}
        style={chicLettering}
      >
        Surgery
      </span>
    </span>
  );
}
