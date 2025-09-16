import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
const Team = () => {
  const teamMembers = [{
    name: "Aditya Tomar",
    role: "CEO and Founder",
    image: "/api/placeholder/300/300",
    linkedin: "www.linkedin.com/in/aditya-tomar-2909-spa",
    Github: "https://github.com/Prometheus-Blaze",
    email: "aditya7tomar.2909@gmail.com"
  }, {
    name: "Siddhant Prasad Naugain",
    role: "Co-Founder",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    github: "#",
    email: "sidhhant.2222@gmail.com"
  }, {
    name: "Rahil Rathod",
    role: "Co-Founder",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "rahilrathod15@gmail.com"
  }, {
    name: "Lavanya Singh",
    role: "Marketing Head",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "lavanyasingh@gmail.com"
  }, {
    name: "Arnav Gullia",
    role: "Developer",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    github: "#",
    email: "arnavgullia.eagle@gmail.com"
  }, {
    name: "Garima Jand",
    role: " Assistant Developer",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    twitter: "#",
    email: "garimajand@gmail.com"
  }];
  return <section id="team" className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              A diverse group of technologists, policy experts, and social impact advocates 
              united by the mission to transform public sanitation in India.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => <Card key={index} className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 border-0 shadow-soft bg-gradient-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Photo */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-glow">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {member.linkedin && <a href={member.linkedin} className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                          <Linkedin className="h-4 w-4" />
                        </a>}
                      {member.twitter && <a href={member.twitter} className="w-8 h-8 bg-blue-accent/10 rounded-full flex items-center justify-center text-blue-accent hover:bg-blue-accent hover:text-white transition-all duration-200 hover:scale-110">
                          <Twitter className="h-4 w-4" />
                        </a>}
                      {member.github && <a href={member.github} className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-110">
                          <Github className="h-4 w-4" />
                        </a>}
                      <a href={`mailto:${member.email}`} className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-200 hover:scale-110">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Team Stats */}
          

          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              in India's public health and sanitation landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@peepal.app" className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block">
                View Open Positions
              </a>
              <a href="mailto:partnerships@peepal.app" className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block">
                Partnership Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Team;