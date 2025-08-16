import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  User, 
  MapPin, 
  Menu,
  Bell,
  Search
} from "lucide-react";

const WellnessNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">WellnessNord</h1>
              <p className="text-xs text-muted-foreground">Skandinavisk Wellness</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => window.location.href = '/search'}>
              <Search className="h-4 w-4" />
              Finn Terapeuter
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => window.location.href = '/destinations'}>
              <MapPin className="h-4 w-4" />
              Destinasjoner
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => window.location.href = '/about'}>
              <MapPin className="h-4 w-4" />
              Om Oss
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => window.location.href = '/dashboard'}>
              <Heart className="h-4 w-4" />
              Min Wellness
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-accent border-0" />
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Logg Inn
            </Button>
            
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-white border-0 hover:shadow-lg">
              Bli Terapeut
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WellnessNavigation;