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
        <img
          src={worldMap}
          alt="Stylized dotted world map highlighting iLink International's East Africa hubs"
          loading="lazy"
          width={1600}
          height={800}
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-90"
        />
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Connection arc between markers */}
          {markers.length > 1 && (
            <motion.path
              d={`M ${markers[0].x * 10} ${markers[0].y * 5} Q ${(markers[0].x + markers[1].x) * 5} ${Math.min(markers[0].y, markers[1].y) * 5 - 60} ${markers[1].x * 10} ${markers[1].y * 5}`}
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
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
