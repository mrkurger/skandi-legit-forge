import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Clock,
  Award,
  Shield,
  Heart,
  ChevronLeft,
  MessageCircle,
  Share2
} from "lucide-react";
import WellnessNavigation from "@/components/WellnessNavigation";

const TherapistProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock therapist data
  const therapist = {
    id: 1,
    name: "Dr. Anna Lindberg",
    title: "Autorisert Massasjeterapeut",
    specialties: ["Dyp Vevsmassasje", "Triggerpunkt", "Sportsmassasje", "Rehabilitering"],
    rating: 4.9,
    reviews: 127,
    experience: "8 år erfaring",
    price: "950 kr",
    image: "/api/placeholder/200/200",
    verified: true,
    location: "Wellness Klinikk Sentrum, Karl Johans gate 15, 0154 Oslo",
    phone: "+47 123 45 678",
    email: "anna@wellnessklinikk.no",
    description: "Autorisert massasjeterapeut med spesialisering innen dyp vevsmassasje og triggerpunkt behandling. Med over 8 års erfaring hjelper jeg klienter med muskel- og skjelettplager, samt forebygging av skader.",
    education: [
      "Master i Massasjeterapi - Høgskolen i Oslo (2016)",
      "Triggerpunkt Sertifisering - NAMT (2018)",
      "Sportsmassasje Spesialist - NSIF (2019)"
    ],
    treatments: [
      { name: "Klassisk Massasje", duration: "60 min", price: "850 kr" },
      { name: "Dyp Vevsmassasje", duration: "60 min", price: "950 kr" },
      { name: "Triggerpunkt Behandling", duration: "45 min", price: "750 kr" },
      { name: "Sportsmassasje", duration: "90 min", price: "1200 kr" }
    ],
    availability: [
      { day: "Mandag", times: ["09:00", "11:00", "14:00", "16:00"] },
      { day: "Tirsdag", times: ["10:00", "13:00", "15:00"] },
      { day: "Onsdag", times: ["09:00", "11:00", "14:00", "16:00", "18:00"] },
      { day: "Torsdag", times: ["10:00", "13:00", "15:00"] },
      { day: "Fredag", times: ["09:00", "11:00", "14:00"] }
    ],
    reviewsList: [
      {
        name: "Lars M.",
        rating: 5,
        date: "2 dager siden",
        comment: "Fantastisk behandling! Anna er meget dyktig og profesjonell. Følte meg mye bedre etter behandlingen."
      },
      {
        name: "Maria K.",
        rating: 5,
        date: "1 uke siden", 
        comment: "Anbefaler på det sterkeste. Triggerpunkt behandlingen hjalp enormt med skuldersmertene mine."
      },
      {
        name: "Erik J.",
        rating: 4,
        date: "2 uker siden",
        comment: "Profesjonell og kunnskapsrik. God oppfølging og gode råd for hjemmetrening."
      }
    ]
  };

  const handleBooking = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Tilbake til søk
          </Button>
        </div>

        {/* Profile Header */}
        <div className="bg-gradient-to-br from-primary-soft to-accent-soft/30 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-xl">
                  <div className="text-6xl font-bold text-white">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                {therapist.verified && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground shadow-lg">
                    <Shield className="h-4 w-4 mr-1" />
                    Verifisert
                  </Badge>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      {therapist.name}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                      {therapist.title}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{therapist.rating}</span>
                        <span className="text-muted-foreground">({therapist.reviews} anmeldelser)</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-5 w-5" />
                        {therapist.experience}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        Sentrum, Oslo
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {therapist.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="bg-primary-soft text-primary border-primary/20">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <div className="text-center lg:text-right mb-4">
                      <div className="text-3xl font-bold text-primary">
                        Fra {therapist.price}
                      </div>
                      <div className="text-sm text-muted-foreground">per time</div>
                    </div>
                    
                    <Button 
                      variant="wellness" 
                      size="lg" 
                      onClick={handleBooking}
                      className="flex items-center gap-2"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Behandling
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Melding
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Del
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Oversikt</TabsTrigger>
              <TabsTrigger value="treatments">Behandlinger</TabsTrigger>
              <TabsTrigger value="availability">Tilgjengelighet</TabsTrigger>
              <TabsTrigger value="reviews">Anmeldelser</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* About */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Om {therapist.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {therapist.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Education */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Utdanning & Sertifiseringer</h3>
                      <div className="space-y-3">
                        {therapist.education.map((edu, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-accent mt-0.5" />
                            <span className="text-muted-foreground">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Kontaktinfo</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{therapist.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{therapist.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm">{therapist.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Hurtigstatistikk</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Gjennomsnittlig vurdering</span>
                          <span className="font-semibold">{therapist.rating}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Totalt anmeldelser</span>
                          <span className="font-semibold">{therapist.reviews}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">År med erfaring</span>
                          <span className="font-semibold">8+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Spesialiteter</span>
                          <span className="font-semibold">{therapist.specialties.length}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="treatments">
              <div className="grid md:grid-cols-2 gap-6">
                {therapist.treatments.map((treatment, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">{treatment.name}</h3>
                        <Badge variant="outline">{treatment.duration}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{treatment.price}</span>
                        <Button variant="outline" size="sm">
                          Velg
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="availability">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Ukentlig Tilgjengelighet</h3>
                  <div className="space-y-4">
                    {therapist.availability.map((day, index) => (
                      <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="font-medium w-20">{day.day}</div>
                        <div className="flex flex-wrap gap-2">
                          {day.times.map((time, timeIndex) => (
                            <Badge key={timeIndex} variant="outline" className="bg-background">
                              <Clock className="h-3 w-3 mr-1" />
                              {time}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                {therapist.reviewsList.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;