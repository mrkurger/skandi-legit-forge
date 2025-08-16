import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdvertiserCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  size: 'square' | 'tall' | 'wide';
  className?: string;
}

const AdvertiserCard = ({ title, subtitle, imageUrl, href, size, className }: AdvertiserCardProps) => {
  const spanClass = {
    square: "row-span-1",
    tall: "sm:row-span-2 lg:row-span-3",
    wide: "sm:col-span-2 row-span-1"
  }[size];

  return (
    <a
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        spanClass,
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Text Labels */}
        <div className="mb-4">
          <h3 className="text-white font-bold text-lg md:text-xl line-clamp-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-white/90 text-sm md:text-base drop-shadow-md">
            {subtitle}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border-0 transition-all duration-300"
            tabIndex={-1}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </a>
  );
};

export default AdvertiserCard;