import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import worldMap from "@/assets/world-map-dots.jpg";

interface Marker {
  // percent positions (0-100) over the map image
  x: number;
  y: number;
  label: string;
  sub: string;
}

const markers: Marker[] = [
  { x: 56.5, y: 60, label: "Kigali", sub: "HQ — Rwanda" },
  { x: 57.5, y: 64, label: "Dar es Salaam", sub: "Operations — Tanzania" },
];

const WorldMap = () => {
  return (
    <div className="glass-card p-6 md:p-8 relative overflow-hidden">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Global Footprint</div>
      <h3 className="font-display text-2xl font-bold mb-6">
        Our active hubs in <span className="text-gradient">East Africa</span>
      </h3>

      <div className="relative w-full" style={{ aspectRatio: "1000 / 500" }}>
        <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Stylized dotted world map */}
          <g fill="hsl(var(--muted-foreground))" opacity="0.35">
            {Array.from({ length: 36 }).flatMap((_, row) =>
              Array.from({ length: 80 }).map((_, col) => {
                const x = 20 + col * 12;
                const y = 20 + row * 13;
                // Rough continent mask based on x/y noise
                const inLand =
                  // North America
                  (x > 100 && x < 280 && y > 90 && y < 220 && Math.sin(x * 0.05 + y * 0.04) > -0.2) ||
                  // South America
                  (x > 230 && x < 320 && y > 240 && y < 410 && Math.sin(x * 0.06 + y * 0.05) > -0.1) ||
                  // Europe
                  (x > 460 && x < 570 && y > 110 && y < 200 && Math.cos(x * 0.07 + y * 0.05) > -0.3) ||
                  // Africa
                  (x > 480 && x < 620 && y > 200 && y < 380 && Math.sin(x * 0.04 + y * 0.06) > -0.2) ||
                  // Asia
                  (x > 580 && x < 850 && y > 100 && y < 280 && Math.cos(x * 0.05 + y * 0.04) > -0.3) ||
                  // Australia
                  (x > 780 && x < 900 && y > 320 && y < 400 && Math.sin(x * 0.08 + y * 0.07) > -0.4);
                return inLand ? <circle key={`${row}-${col}`} cx={x} cy={y} r="1.6" /> : null;
              })
            )}
          </g>

          {/* Connection arc between markers */}
          {markers.length > 1 && (
            <motion.path
              d={`M ${markers[0].x * 10} ${markers[0].y * 5} Q ${(markers[0].x + markers[1].x) * 5} ${Math.min(markers[0].y, markers[1].y) * 5 - 60} ${markers[1].x * 10} ${markers[1].y * 5}`}
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          )}
        </svg>

        {/* Markers as DOM for tooltips/animation */}
        {markers.map((m) => (
          <div
            key={m.label}
            className="absolute group"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className="absolute inset-0 -m-2 rounded-full bg-primary/40 animate-ping-slow" />
            <span className="relative block w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap glass rounded-lg px-3 py-2 text-xs">
              <div className="flex items-center gap-1.5 font-semibold">
                <MapPin size={10} className="text-primary" />
                {m.label}
              </div>
              <div className="text-muted-foreground mt-0.5">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          Active hub
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-px bg-primary opacity-70" />
          Operational corridor
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
