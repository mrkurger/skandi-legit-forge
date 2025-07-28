import WellnessNavigation from "@/components/WellnessNavigation";
import WellnessHero from "@/components/WellnessHero";
import WellnessFeatures from "@/components/WellnessFeatures";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      <WellnessHero />
      <WellnessFeatures />
    </div>
  );
};

export default Index;
