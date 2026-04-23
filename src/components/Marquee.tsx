import { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  speed?: "normal" | "slow";
  className?: string;
}

const Marquee = ({ items, speed = "normal", className = "" }: MarqueeProps) => {
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={`relative overflow-hidden mask-fade-x ${className}`}>
      <div className={`flex gap-12 w-max ${animClass}`}>
        {[...items, ...items].map((node, i) => (
          <div key={i} className="flex-shrink-0 flex items-center">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
