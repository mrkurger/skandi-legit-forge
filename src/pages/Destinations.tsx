import WellnessNavigation from "@/components/WellnessNavigation";
import AdvertiserGrid from "@/components/AdvertiserGrid";
import { advertisers } from "@/data/advertisers";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-wellness-primary mb-4">
            Utforsk Skandinavia
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finn sertifiserte massasjeterapeuter og wellness-tjenester i de vakreste byene i Norden
          </p>
        </div>
      </div>

      {/* Advertiser Grid */}
      <AdvertiserGrid advertisers={advertisers} />
    </div>
  );
};

export default Destinations;