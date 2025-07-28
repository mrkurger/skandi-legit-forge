import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Shield } from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const WellnessHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Din Vei til
            <span className="block bg-gradient-to-r from-white to-accent-soft bg-clip-text text-transparent">
              Wellness & Velvære
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Finn sertifiserte massasjeterapeuter og helsetjenester i Skandinavia. 
            Profesjonell behandling for din velvære-reise.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <Input 
                placeholder="Søk etter behandlingstype..." 
                className="pl-12 bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <Input 
                placeholder="Postnummer eller by..." 
                className="pl-12 bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0"
              />
            </div>
            <Button variant="wellness" size="lg" className="md:px-8" onClick={() => window.location.href = '/search'}>
              Søk Terapeuter
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Sertifiserte Terapeuter</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm font-medium">4.8/5 Gjennomsnitt</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Hele Skandinavia</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  );
};

export default WellnessHero;