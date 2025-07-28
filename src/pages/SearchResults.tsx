import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Star, 
  Filter,
  SlidersHorizontal,
  Map,
  List,
  Clock,
  Calendar,
  Award
} from "lucide-react";
import WellnessNavigation from "@/components/WellnessNavigation";

// Mock data for therapists
const therapists = [
  {
    id: 1,
    name: "Dr. Anna Lindberg",
    specialties: ["Dyp Vevsmassasje", "Triggerpunkt", "Sportsmassasje"],
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km",
    price: "950 kr",
    image: "/api/placeholder/150/150",
    verified: true,
    nextAvailable: "I dag 14:30",
    location: "Sentrum, Oslo"
  },
  {
    id: 2,
    name: "Erik Johansson",
    specialties: ["Klassisk Massasje", "Avspenningsmassasje", "Gravid"],
    rating: 4.8,
    reviews: 89,
    distance: "2.1 km",
    price: "850 kr",
    image: "/api/placeholder/150/150",
    verified: true,
    nextAvailable: "I morgen 09:00",
    location: "Grünerløkka, Oslo"
  },
  {
    id: 3,
    name: "Maria Svensson",
    specialties: ["Hot Stone", "Aromaterapi", "Refleksologi"],
    rating: 4.9,
    reviews: 203,
    distance: "3.5 km",
    price: "1050 kr",
    image: "/api/placeholder/150/150",
    verified: true,
    nextAvailable: "I dag 16:00",
    location: "Majorstuen, Oslo"
  }
];

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const handleTherapistClick = (id: number) => {
    navigate(`/therapist/${id}`);
  };

  const handleBookNow = (therapistId: number) => {
    navigate(`/booking/${therapistId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      
      {/* Search Header */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-primary-soft to-accent-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Finn Din Terapeut
            </h1>
            <p className="text-muted-foreground">
              {therapists.length} sertifiserte terapeuter funnet i ditt område
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 p-4 bg-white rounded-2xl shadow-lg">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Søk etter behandlingstype..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 border-0 focus-visible:ring-primary"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Postnummer eller by..." 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-12 border-0 focus-visible:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="wellness" className="px-8">
                Søk
              </Button>
            </div>
          </div>

          {/* View Toggle & Filters */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-4">
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="flex items-center gap-2"
                >
                  <List className="h-4 w-4" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="flex items-center gap-2"
                >
                  <Map className="h-4 w-4" />
                  Kart
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Sortert etter: <Badge variant="outline">Nærmest</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {showFilters && (
          <Card className="mb-6 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Avanserte Filtre</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Behandlingstype</label>
                  <div className="space-y-2">
                    {["Klassisk Massasje", "Dyp Vevsmassasje", "Sportsmassasje", "Aromaterapi"].map(type => (
                      <label key={type} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Pris per time</label>
                  <div className="space-y-2">
                    {["Under 800 kr", "800-1000 kr", "1000-1200 kr", "Over 1200 kr"].map(price => (
                      <label key={price} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {price}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Tilgjengelighet</label>
                  <div className="space-y-2">
                    {["I dag", "I morgen", "Denne uken", "Helger"].map(time => (
                      <label key={time} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {time}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Avstnd</label>
                  <div className="space-y-2">
                    {["Under 1 km", "1-3 km", "3-5 km", "5+ km"].map(distance => (
                      <label key={distance} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {distance}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Therapist Cards */}
        <div className="grid gap-6">
          {therapists.map((therapist) => (
            <Card 
              key={therapist.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
              onClick={() => handleTherapistClick(therapist.id)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Therapist Image */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-soft to-accent-soft rounded-2xl flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary">
                        {therapist.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {therapist.verified && (
                      <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        Verifisert
                      </Badge>
                    )}
                  </div>

                  {/* Therapist Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {therapist.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium text-foreground">{therapist.rating}</span>
                            <span>({therapist.reviews} anmeldelser)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {therapist.distance} • {therapist.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {therapist.price}
                        </div>
                        <div className="text-sm text-muted-foreground">per time</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {therapist.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="bg-primary-soft text-primary border-primary/20">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">
                          Neste ledig: {therapist.nextAvailable}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTherapistClick(therapist.id);
                          }}
                        >
                          Se Profil
                        </Button>
                        <Button 
                          variant="wellness"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookNow(therapist.id);
                          }}
                          className="flex items-center gap-2"
                        >
                          <Calendar className="h-4 w-4" />
                          Book Nå
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Last inn flere terapeuter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;