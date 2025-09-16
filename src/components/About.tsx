import { Target, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Mission Driven', value: '100%' },
    { icon: Users, label: 'Community Powered', value: '24/7' },
    { icon: Zap, label: 'AI Enhanced', value: 'Smart' },
    { icon: Globe, label: 'Pan India', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">PeePal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Revolutionizing public sanitation in India through technology, community, and purpose-driven innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Solving India's Public Sanitation Challenge
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  PeePal addresses one of India's most pressing urban challenges: the lack of accessible, 
                  clean public washrooms. Our mission is to eliminate public urination by connecting 
                  people to nearby clean facilities through cutting-edge technology.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Using <span className="text-primary font-semibold">AI-powered cleanliness ratings</span>, 
                  <span className="text-primary font-semibold"> crowdsourced data</span>, and 
                  <span className="text-primary font-semibold"> precise geolocation</span>, we ensure 
                  users always find the nearest, cleanest washroom when they need it most.
                </p>
                
                <p className="text-lg leading-relaxed">
                  By partnering with public institutions and private spaces, PeePal creates a 
                  comprehensive network that supports government initiatives like 
                  <span className="text-accent font-semibold"> Swachh Bharat</span> and 
                  <span className="text-blue-accent font-semibold"> Smart Cities</span>.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">Real-time availability and cleanliness updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">Accessibility filters for disabled-friendly facilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">Community-driven data for continuous improvement</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-medium relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                    Our Impact by Numbers
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-primary/10 rounded-2xl p-4 mb-3 group-hover:bg-primary/20 transition-colors">
                          <stat.icon className="h-8 w-8 text-primary mx-auto" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Movement for Cleaner India
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Every washroom mapped, every rating shared, and every clean facility found 
              brings us closer to a more hygienic and dignified India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-white/20 px-4 py-2 rounded-full">#SwachhBharat</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">#SmartCities</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">#CleanIndia</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">#DigitalIndia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;