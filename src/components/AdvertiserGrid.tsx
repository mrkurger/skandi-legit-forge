import AdvertiserCard from "./AdvertiserCard";
import { cn } from "@/lib/utils";

interface Advertiser {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  size: 'square' | 'tall' | 'wide';
}

interface AdvertiserGridProps {
  advertisers: Advertiser[];
  className?: string;
}

const AdvertiserGrid = ({ advertisers, className }: AdvertiserGridProps) => {
  return (
    <div className={cn("container mx-auto px-6 py-12", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
        {advertisers.map((advertiser) => (
          <AdvertiserCard
            key={advertiser.id}
            title={advertiser.title}
            subtitle={advertiser.subtitle}
            imageUrl={advertiser.imageUrl}
            href={advertiser.href}
            size={advertiser.size}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvertiserGrid;