import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Gautham Krishna K
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            Flutter & FlutterFlow Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Innovative Software Developer with 2+ years of expertise in designing, debugging, and deploying 
            client-server applications. Specialized in Flutter development with a customer-centric approach.
          </p>
          
          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <a href="mailto:gauthamkrishna277@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                gauthamkrishna277@gmail.com
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <a href="tel:+919447170591" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 9447170591
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <a href="https://linkedin.com/in/gautham-k-a11571279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <a href="https://github.com/Gautham-Gautham" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-3"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;