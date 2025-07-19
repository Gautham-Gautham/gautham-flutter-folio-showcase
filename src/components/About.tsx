import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <Card className="bg-gradient-secondary border-primary/20 shadow-glow-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Innovative Software Developer with expertise in designing, debugging, and deploying 
                    client-server applications. Known for a customer-centric approach, strong project 
                    management, and the ability to meet tight deadlines while managing interruptions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled Flutter Developer, adaptable to evolving needs and committed to team success, 
                    consistently taking on new challenges with a proactive attitude.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Languages</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">English</span>
                        <span className="text-sm text-muted-foreground">Upper Intermediate (B2)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Malayalam</span>
                        <span className="text-sm text-muted-foreground">Proficient (C2)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Tamil</span>
                        <span className="text-sm text-muted-foreground">Beginner (A1)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-foreground">Bachelor of Computer Application (BCA)</p>
                        <p className="text-sm text-muted-foreground">University of Calicut</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Plus Two (Computer Science)</p>
                        <p className="text-sm text-muted-foreground">Kerala Board Of Higher Secondary Education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;