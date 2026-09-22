import { useInView } from "@/hooks/useInView";

type SparkleSpec = {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
};

/** A few hand-placed sparkles hugging the edges of the name, never the letters. */
const SPARKLES: SparkleSpec[] = [
  { top: "-16%", left: "-3%", size: 9, delay: 0, duration: 2.8 },
  { top: "-20%", left: "84%", size: 7, delay: 0.9, duration: 3.2 },
  { top: "38%", left: "-7%", size: 7, delay: 1.6, duration: 2.6 },
  { top: "72%", left: "99%", size: 8, delay: 0.5, duration: 3.0 },
];

const STAR_PATH =
  "M12 1.5c.65 5.9 4.35 9.6 10.5 10.5-6.15.9-9.85 4.6-10.5 10.5-.65-5.9-4.35-9.6-10.5-10.5C7.65 11.1 11.35 7.4 12 1.5z";

/**
 * Renders a name with a quiet gold twinkle around it. The loop only starts
 * once the element scrolls into view (after the shell has opened), matching
 * the site's existing reveal pattern, then keeps shimmering gently.
 */
export function SparkleName({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.15);

  return (
    <span ref={ref} className="relative inline-block">
      <span className={className}>{text}</span>
      {inView &&
        SPARKLES.map((s, i) => (
          <svg
            key={i}
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="name-sparkle pointer-events-none absolute text-gold"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          >
            <path d={STAR_PATH} />
          </svg>
        ))}
    </span>
  );
}
