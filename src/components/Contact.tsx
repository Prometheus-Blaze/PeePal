import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send,
  Clock,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@peepal.app',
      description: 'For general inquiries and support',
      link: 'mailto:hello@peepal.app'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 7701953578',
      description: 'Business hours: 9 AM - 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'SRM KTR, Kanchipuram, Tamil Nadu',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'text-blue-accent hover:bg-blue-accent' },
    { icon: Twitter, name: 'Twitter', link: '#', color: 'text-blue-light hover:bg-blue-light' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'text-accent hover:bg-accent' },
  ];

  const quickLinks = [
    { title: 'Partnership Inquiries', email: 'partnerships@peepal.app' },
    { title: 'Media & Press', email: 'media@peepal.app' },
    { title: 'Technical Support', email: 'support@peepal.app' },
    { title: 'Career Opportunities', email: 'careers@peepal.app' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Have questions, feedback, or want to partner with us? We'd love to hear from you. 
              Let's work together to build a cleaner, more accessible India.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="h-6 w-6 mr-3 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        className="bg-background"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry, feedback, or how we can help..."
                        rows={6}
                        required
                        className="bg-background"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 py-3 text-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 group hover:bg-background/50 rounded-lg p-3 -m-3 transition-colors"
                    >
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary group-hover:text-white transition-colors">
                        <info.icon className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="font-medium text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={`mailto:${link.email}`}
                      className="block p-3 bg-background/50 rounded-lg hover:bg-background hover:shadow-soft transition-all text-sm"
                    >
                      <div className="font-semibold text-foreground">{link.title}</div>
                      <div className="text-primary">{link.email}</div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links & Additional Info */}
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${social.color} bg-current/10 hover:text-white transition-all hover:scale-110`}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Response time: Within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Available in English & Hindi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of users and hundreds of partners who are already contributing 
              to India's public sanitation revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.querySelector('#access')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold"
              >
                Start Using PeePal
              </Button>
              <a 
                href="mailto:partnerships@peepal.app"
                className="bg-white/20 text-white hover:bg-white/30 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;