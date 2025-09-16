import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Vision from '@/components/Vision';
import AccessPeePal from '@/components/AccessPeePal';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Vision />
        <AccessPeePal />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
