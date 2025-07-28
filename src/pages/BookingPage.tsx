import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  ChevronLeft,
  CheckCircle,
  CreditCard,
  Shield
} from "lucide-react";
import WellnessNavigation from "@/components/WellnessNavigation";

const BookingPage = () => {
  const { therapistId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [step, setStep] = useState(1);

  // Mock data
  const therapist = {
    name: "Dr. Anna Lindberg",
    specialties: ["Dyp Vevsmassasje", "Triggerpunkt", "Sportsmassasje"],
    location: "Wellness Klinikk Sentrum, Oslo"
  };

  const treatments = [
    { id: "classic", name: "Klassisk Massasje", duration: "60 min", price: 850 },
    { id: "deep", name: "Dyp Vevsmassasje", duration: "60 min", price: 950 },
    { id: "trigger", name: "Triggerpunkt Behandling", duration: "45 min", price: 750 },
    { id: "sports", name: "Sportsmassasje", duration: "90 min", price: 1200 }
  ];

  const availableTimes = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

  const selectedTreatmentData = treatments.find(t => t.id === selectedTreatment);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    // Simulate booking confirmation
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-soft to-accent-soft/30 py-8">
          <div className="max-w-4xl mx-auto px-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Tilbake til profil
            </Button>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Book Behandling
            </h1>
            <p className="text-muted-foreground">
              {therapist.name} • {therapist.location}
            </p>
          </div>
        </div>

        {/* Booking Steps */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                </div>
                {num < 4 && (
                  <div className={`h-1 w-16 mx-4 ${
                    step > num ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Velg Behandling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {treatments.map((treatment) => (
                  <div 
                    key={treatment.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedTreatment === treatment.id 
                        ? 'border-primary bg-primary-soft' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedTreatment(treatment.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{treatment.name}</h3>
                        <p className="text-sm text-muted-foreground">{treatment.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{treatment.price} kr</div>
                        <Badge variant="outline">{treatment.duration}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Button 
                    onClick={handleNext} 
                    disabled={!selectedTreatment}
                    className="w-full"
                    variant="wellness"
                  >
                    Neste: Velg Dato
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Velg Dato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Velg Tid
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <div className="md:col-span-2">
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedDate || !selectedTime}
                  className="w-full"
                  variant="wellness"
                >
                  Neste: Personlige Opplysninger
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Dine Opplysninger
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Fornavn</label>
                    <Input placeholder="Skriv inn fornavn" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Etternavn</label>
                    <Input placeholder="Skriv inn etternavn" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-post</label>
                    <Input type="email" placeholder="din@epost.no" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefon</label>
                    <Input type="tel" placeholder="+47 123 45 678" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Spesielle ønsker eller helseopplysninger</label>
                  <Textarea 
                    placeholder="Beskriv eventuelle skader, allergier eller spesielle ønsker..."
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleNext} 
                  className="w-full"
                  variant="wellness"
                >
                  Neste: Bekreft & Betal
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <div className="space-y-6">
              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Sammendrag</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Behandling:</span>
                    <span className="font-semibold">{selectedTreatmentData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Varighet:</span>
                    <span>{selectedTreatmentData?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dato:</span>
                    <span>{selectedDate?.toLocaleDateString('no-NO')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tid:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Terapeut:</span>
                    <span>{therapist.name}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{selectedTreatmentData?.price} kr</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Betaling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Kortnummer</label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">CVV</label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Utløpsdato</label>
                      <Input placeholder="MM/ÅÅ" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Kortinnehaver</label>
                      <Input placeholder="Navn på kort" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Sikker betaling med 256-bit SSL kryptering</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Tilbake
                </Button>
                <Button onClick={handleBooking} className="flex-1" variant="wellness">
                  Bekreft Booking & Betal
                </Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Booking Bekreftet!</h2>
                <p className="text-muted-foreground mb-8">
                  Din behandling hos {therapist.name} er bekreftet for {selectedDate?.toLocaleDateString('no-NO')} kl. {selectedTime}.
                  Du vil motta en bekreftelse på e-post og SMS.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" onClick={() => navigate('/dashboard')}>
                    Se Mine Bookinger
                  </Button>
                  <Button variant="wellness" onClick={() => navigate('/')}>
                    Tilbake til Hjem
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;