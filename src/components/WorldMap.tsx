import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import hubKigali from "@/assets/hub-kigali.jpg";
import hubDar from "@/assets/hub-dar.jpg";

interface Hub {
  image: string;
  label: string;
  sub: string;
  country: string;
}

const hubs: Hub[] = [
  {
    image: hubKigali,
    label: "Kigali",
    sub: "HQ — Vision Arcade",
    country: "Rwanda",
  },
  {
    image: hubDar,
    label: "Dar es Salaam",
    sub: "Operations — Kinondoni",
    country: "Tanzania",
  },
];

const WorldMap = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="glass-card p-6 md:p-8 relative overflow-hidden">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Global Footprint</div>
      <h3 className="font-display text-2xl font-bold mb-6">
        Our active hubs in <span className="text-gradient">East Africa</span>
      </h3>

      <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
        <CarouselContent>
          {hubs.map((hub) => (
            <CarouselItem key={hub.label}>
              <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3 / 2" }}>
                <img
                  src={hub.image}
                  alt={`${hub.label}, ${hub.country}`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white mb-2 drop-shadow-sm">
                    <MapPin size={14} />
                    {hub.country}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold leading-tight drop-shadow-md">
                    {hub.label}
                  </div>
                  <div className="text-sm text-white/80 mt-1 drop-shadow-sm">{hub.sub}</div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 bg-background/60 backdrop-blur border-border" />
        <CarouselNext className="right-3 bg-background/60 backdrop-blur border-border" />
      </Carousel>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {hubs.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-8 bg-primary shadow-[0_0_8px_hsl(var(--primary))]" : "w-3 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          {current + 1} / {hubs.length}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
