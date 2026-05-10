import { ReactNode } from "react";

interface TechBackgroundProps {
  children?: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Animated tech background — grid + glowing orbs.
 * Use as absolute layer behind hero / corporate sections.
 */
const TechBackground = ({ variant = "dark", className = "" }: TechBackgroundProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${
        isDark ? "tech-radial" : "bg-gradient-to-br from-white via-gray-50 to-white"
      } ${className}`}
      aria-hidden="true"
    >
      {/* Animated grid */}
      <div
        className={`absolute inset-0 ${
          isDark ? "tech-grid-dark" : "tech-grid"
        } animate-grid-move opacity-60`}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-electric/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-royal-blue-glow/25 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-56 h-56 bg-accent-gold/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Network nodes (subtle dots) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="node-gradient">
            <stop offset="0%" stopColor="hsl(var(--cyan-electric))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--cyan-electric))" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [10, 20], [30, 60], [50, 30], [70, 70], [85, 25], [20, 80], [60, 50], [90, 60],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r="3"
            fill="url(#node-gradient)"
            className="animate-glow-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TechBackground;
