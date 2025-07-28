import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  Calendar, 
  Award, 
  Heart, 
  Clock,
  Users,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sertifiserte Terapeuter",
    description: "Alle terapeuter er verifisert gjennom Helsedirektoratet og har gyldig autorisasjon.",
    color: "bg-primary"
  },
  {
    icon: MapPin,
    title: "Geografisk Søk",
    description: "Finn terapeuter i ditt område med avstand og reiseinfo.",
    color: "bg-accent"
  },
  {
    icon: Calendar,
    title: "Enkel Booking",
    description: "Book behandlinger direkte med sanntids kalender-tilgjengelighet.",
    color: "bg-primary"
  },
  {
    icon: Award,
    title: "Wellness Poeng",
    description: "Samle poeng for hver behandling og lås opp wellness-utmerkelser.",
    color: "bg-accent"
  },
  {
    icon: Heart,
    title: "Helse-tracking",
    description: "Følg din velvære-reise med behandlingshistorikk og fremgang.",
    color: "bg-primary"
  },
  {
    icon: Clock,
    title: "Fleksible Timer",
    description: "Behandlinger tilgjengelig 7 dager i uka, også kvelds- og helgetimer.",
    color: "bg-accent"
  }
];

const stats = [
  { number: "2,500+", label: "Sertifiserte Terapeuter" },
  { number: "50,000+", label: "Behandlinger Gjennomført" },
  { number: "98%", label: "Kundetilfredshet" },
  { number: "24/7", label: "Booking Support" }
];

const WellnessFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary-soft/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Profesjonell Helsetjeneste
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Din Trygghet er Vår Prioritet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi sørger for at alle terapeuter er kvalifiserte og at din wellness-reise 
            er trygg, effektiv og tilpasset dine behov.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tillit Bygget på Resultater
            </h3>
            <p className="text-xl text-white/90">
              Skandinavias ledende wellness-plattform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessFeatures;