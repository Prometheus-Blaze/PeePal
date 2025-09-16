import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  MapPin, 
  Users, 
  Accessibility, 
  Building, 
  Star,
  Clock,
  Shield
} from 'lucide-react';
import WashroomMap from '@/components/WashroomMap';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Cleanliness Ratings',
      description: 'Advanced AI analyzes user feedback, photos, and maintenance data to provide real-time cleanliness scores for every washroom.',
      gradient: 'from-primary to-primary-light',
      benefits: ['Instant quality assessment', 'Photo-based verification', 'Predictive maintenance alerts']
    },
    {
      icon: MapPin,
      title: 'Smart Map Search',
      description: 'Interactive map interface with GPS integration shows nearby washrooms with distance, directions, and availability status.',
      gradient: 'from-blue-accent to-blue-light',
      benefits: ['Real-time GPS tracking', 'Optimized route planning', 'Offline map access']
    },
    {
      icon: Users,
      title: 'Crowdsourced Data',
      description: 'Community-driven platform where users contribute washroom locations, reviews, and real-time status updates.',
      gradient: 'from-accent to-accent-light',
      benefits: ['User-generated content', 'Real-time updates', 'Community moderation']
    },
    {
      icon: Accessibility,
      title: 'Accessibility Filters',
      description: 'Comprehensive filters for disabled-friendly facilities, baby changing stations, and family-friendly washrooms.',
      gradient: 'from-success to-primary-light',
      benefits: ['Wheelchair accessibility', 'Baby changing facilities', 'Family-friendly options']
    },
    {
      icon: Building,
      title: 'Public-Private Partnerships',
      description: 'Strategic collaborations with government bodies, malls, restaurants, and public spaces to expand our network.',
      gradient: 'from-primary-dark to-primary',
      benefits: ['Government integration', 'Private space access', 'Partnership benefits']
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Multi-layered verification system ensuring only genuine, clean, and accessible washrooms are featured.',
      gradient: 'from-accent-light to-accent',
      benefits: ['Verified listings', 'Quality standards', 'Regular audits']
    }
  ];

  const additionalFeatures = [
    { icon: Clock, title: 'Real-time Availability', description: 'Live status updates on washroom availability and queue times' },
    { icon: Shield, title: 'Safety First', description: 'Safety ratings and well-lit, secure facility recommendations' },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Powerful <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Cutting-edge technology meets social impact. Discover how PeePal is transforming 
              public sanitation through innovation and community collaboration.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-card"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="my-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              🗺️ Interactive Washroom Map
            </h3>
            <p className="text-lg text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
              Click anywhere on the map to add a washroom location. Your data is saved locally so it works for this demo.
            </p>
            <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-primary/20 shadow-md">
              <WashroomMap />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
