import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Plus, 
  Search, 
  Navigation, 
  Camera, 
  Star,
  Clock,
  Accessibility,
  Building2,
  Users
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccessPeePal = () => {
  const [isAddingWashroom, setIsAddingWashroom] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: '',
    description: '',
    accessibility: false
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Washroom Submitted!",
      description: "Thank you for contributing to our community. Your submission will be reviewed and added to the map.",
    });
    setFormData({ name: '', location: '', type: '', description: '', accessibility: false });
    setIsAddingWashroom(false);
  };

  const mockWashrooms = [
    { id: 1, name: "Central Mall Washroom", distance: "0.2 km", rating: 4.5, status: "Open", type: "Mall" },
    { id: 2, name: "Metro Station - Connaught Place", distance: "0.5 km", rating: 4.2, status: "Open", type: "Public" },
    { id: 3, name: "India Gate Public Facility", distance: "0.8 km", rating: 4.0, status: "Open", type: "Public" },
    { id: 4, name: "Hospital Complex", distance: "1.2 km", rating: 4.8, status: "Open", type: "Hospital" },
  ];

  return (
    <section id="access" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Access <span className="bg-gradient-primary bg-clip-text text-transparent">PeePal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Find clean washrooms near you or contribute to our community by adding new locations. 
              Together, we're building India's most comprehensive washroom network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search Bar */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        placeholder="Search for washrooms near you..."
                        className="pl-10 bg-background"
                      />
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90 px-6">
                      <Navigation className="h-4 w-4 mr-2" />
                      Locate Me
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map Placeholder */}
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Interactive Washroom Map</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gradient-to-br from-primary/5 to-blue-accent/5 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-primary/20">
                    <div className="text-center space-y-4">
                      <div className="bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto">
                        <MapPin className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Interactive Map Coming Soon
                        </h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          Our AI-powered map will show real-time washroom locations, ratings, and availability. 
                          Click anywhere to add a new washroom location.
                        </p>
                      </div>
                      <Button 
                        onClick={() => setIsAddingWashroom(true)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Washroom Here
                      </Button>
                    </div>
                    
                    {/* Animated Pin Icons */}
                    <div className="absolute top-16 left-20 animate-float">
                      <div className="bg-primary text-white rounded-full p-2 shadow-soft">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="bg-accent text-white rounded-full p-2 shadow-soft">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="absolute bottom-20 left-32 animate-float" style={{ animationDelay: '2s' }}>
                      <div className="bg-blue-accent text-white rounded-full p-2 shadow-soft">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Controls */}
                  <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span>Excellent (4.5+ rating)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span>Good (3.5+ rating)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-accent rounded-full"></div>
                        <span>Accessible</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      🔄 Real-time updates • 📍 Precise locations
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={() => setIsAddingWashroom(true)}
                    className="w-full bg-gradient-primary hover:opacity-90 justify-start"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Washroom
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Photo Review
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-2" />
                    Rate a Washroom
                  </Button>
                </CardContent>
              </Card>

              {/* Nearby Washrooms */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Navigation className="h-5 w-5 mr-2 text-primary" />
                    Nearby Washrooms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockWashrooms.map((washroom) => (
                    <div key={washroom.id} className="bg-background rounded-lg p-4 space-y-2 hover:shadow-soft transition-shadow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-sm text-foreground">{washroom.name}</h4>
                        <span className="text-xs text-muted-foreground">{washroom.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current text-accent" />
                            <span className="text-xs font-medium">{washroom.rating}</span>
                          </div>
                          <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                            {washroom.status}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">{washroom.type}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Filters */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Accessibility className="h-4 w-4 text-blue-accent" />
                      <span className="text-sm">Wheelchair Accessible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm">Family Friendly</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Public Buildings</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Add Washroom Modal */}
          {isAddingWashroom && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Add New Washroom</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsAddingWashroom(false)}
                    >
                      ✕
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Washroom Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g., Central Mall Washroom"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Type</Label>
                        <Input 
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          placeholder="e.g., Mall, Public, Restaurant"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Location/Address *</Label>
                      <Input 
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter detailed address or nearby landmark"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Any additional details about cleanliness, accessibility, or facilities..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="accessibility"
                        checked={formData.accessibility}
                        onChange={(e) => setFormData(prev => ({ ...prev, accessibility: e.target.checked }))}
                        className="rounded"
                      />
                      <Label htmlFor="accessibility">Wheelchair accessible</Label>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
                        Submit Washroom
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsAddingWashroom(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccessPeePal;