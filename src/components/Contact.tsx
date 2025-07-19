import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gauthamkrishna277@gmail.com",
      href: "mailto:gauthamkrishna277@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9447170591",
      href: "tel:+919447170591",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gautham-k-a11571279",
      href: "https://linkedin.com/in/gautham-k-a11571279",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Gautham-Gautham",
      href: "https://github.com/Gautham-Gautham",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ready to bring your Flutter app ideas to life? I'm available for new opportunities 
            and exciting projects. Let's discuss how we can collaborate!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.label}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow-secondary transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-primary`}>
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-primary">{method.label}</h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              asChild
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-3"
            >
              <a href="mailto:gauthamkrishna277@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-3"
            >
              <a href="https://linkedin.com/in/gautham-k-a11571279" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;