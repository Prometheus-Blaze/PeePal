import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Smartphone } from 'lucide-react';
const Hero = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#access');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-accent/20 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary-light/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-accent-light/20 rounded-full animate-float" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 fade-in">
            <img src="/peepal-logo.jpg" alt="PeePal Logo" className="mx-auto h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover shadow-glow animate-pulse-glow" />
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 slide-up text-balance">
            Find Clean Washrooms,
            <br />
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Anywhere, Anytime
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto slide-up text-balance" style={{
          animationDelay: '0.2s'
        }}>
            India's first AI-powered washroom finder app. Connecting you to clean, accessible facilities while supporting 
            <span className="font-semibold text-accent-light"> Swachh Bharat</span> and 
            <span className="font-semibold text-blue-light"> Smart City</span> initiatives.
          </p>

          {/* Features Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex items-center space-x-2 text-white/80">
              <MapPin className="h-5 w-5 text-accent-light" />
              <span>Real-time Locations</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Smartphone className="h-5 w-5 text-blue-light" />
              <span>AI Cleanliness Ratings</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <ArrowRight className="h-5 w-5 text-accent-light" />
              <span>Accessibility Filters</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="slide-up" style={{
          animationDelay: '0.6s'
        }}>
            <Button onClick={handleGetStarted} size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold shadow-strong group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 fade-in" style={{
          animationDelay: '0.8s'
        }}>
            
            
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;