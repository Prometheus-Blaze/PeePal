import { Target, Heart, Lightbulb, Globe, Award, Sparkles } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: 'Dignified Sanitation for All',
      description: 'Creating a society where access to clean washrooms is a fundamental right, not a privilege.',
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Supporting Smart Cities',
      description: 'Integrating with Smart City initiatives to build tech-enabled urban infrastructure.',
      color: 'text-blue-accent'
    },
    {
      icon: Sparkles,
      title: 'Advancing Swachh Bharat',
      description: 'Contributing to India\'s cleanliness mission through community participation and technology.',
      color: 'text-primary'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Public Health',
      description: 'Pioneering technological solutions that improve public hygiene and health outcomes.',
      color: 'text-success'
    }
  ];

  const goals = [
    { number: '1M+', label: 'Washrooms Mapped', sublabel: 'Across all major Indian cities' },
    { number: '100+', label: 'Cities Covered', sublabel: 'Including Tier 2 & Tier 3 cities' },
    { number: '24/7', label: 'Real-time Updates', sublabel: 'Continuous monitoring system' },
    { number: '0', label: 'Public Urination', sublabel: 'Our ultimate goal for India' }
  ];

  return (
    <section id="vision" className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary rounded-full p-4 shadow-glow">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Building a cleaner, more dignified India where technology serves humanity and 
              every citizen has access to safe, clean public facilities.
            </p>
          </div>

          {/* Main Vision Statement */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-strong">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              "A Swachh, Smart, and Dignified India"
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              PeePal envisions an India where public urination is eliminated through accessible, 
              clean washroom facilities. We're building the backbone of urban sanitation infrastructure 
              that supports government initiatives, empowers communities, and leverages cutting-edge 
              technology for social good.
            </p>
          </div>

          {/* Vision Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className={`${point.color} bg-current/10 rounded-xl p-3 group-hover:scale-110 transition-transform`}>
                    <point.icon className={`h-6 w-6 ${point.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Goals & Metrics */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
              Our 2025 Goals
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {goals.map((goal, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {goal.number}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {goal.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {goal.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Areas */}
          <div className="bg-gradient-to-r from-background to-secondary rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Creating Multi-dimensional Impact
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Social Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Improving quality of life, especially for women, elderly, and disabled citizens
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Environmental Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Reducing public urination, improving urban cleanliness and public health
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-accent" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Economic Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting local businesses, creating partnerships, driving tourism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;