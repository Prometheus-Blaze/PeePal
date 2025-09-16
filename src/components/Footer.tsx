import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Find Washrooms', href: '#access' },
        { name: 'Add Location', href: '#access' },
        { name: 'Features', href: '#features' },
        { name: 'Mobile App', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Vision', href: '#vision' },
        { name: 'Team', href: '#team' },
        { name: 'Careers', href: 'mailto:careers@peepal.app' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#contact' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Report Issue', href: 'mailto:support@peepal.app' },
        { name: 'Community Guidelines', href: '#' },
      ]
    },
    {
      title: 'Partnerships',
      links: [
        { name: 'Government', href: 'mailto:partnerships@peepal.app' },
        { name: 'Businesses', href: 'mailto:partnerships@peepal.app' },
        { name: 'NGOs', href: 'mailto:partnerships@peepal.app' },
        { name: 'API Access', href: 'mailto:api@peepal.app' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, href.startsWith('mailto:') ? '_self' : '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/peepal-logo.jpg" 
                alt="PeePal Logo" 
                className="h-12 w-12 rounded-full object-cover shadow-soft"
              />
              <span className="text-2xl font-bold">PeePal</span>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              India's first AI-powered public washroom finder, connecting millions to clean, 
              accessible facilities while supporting Swachh Bharat and Smart City initiatives.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Youtube className="h-4 w-4 text-accent-light" />
                <a href="https://youtube.com/@teampeepal-tm?feature=shared" className="text-white/80 hover:text-white transition-colors">
                  https://youtube.com/@teampeepal-tm?feature=shared
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-light" />
                <a href="tel:+917701953578" className="text-white/80 hover:text-white transition-colors">
                  +91 7701953578
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-light" />
                <span className="text-white/80">India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-light">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/80 hover:text-white transition-colors flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                      {!link.href.startsWith('#') && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} PeePal. All rights reserved. Built with ❤️ for India.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>

            {/* Mission Statement */}
            <div className="text-white/60 text-sm text-center md:text-right">
              <div className="flex items-center space-x-2">
                <span>Supporting</span>
                <span className="text-accent-light font-medium">#SwachhBharat</span>
                <span>&</span>
                <span className="text-blue-light font-medium">#SmartCities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;