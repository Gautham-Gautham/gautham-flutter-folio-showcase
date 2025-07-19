import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Hancod Digital",
      location: "Preinthalmanna, India",
      period: "Dec 2024-Current",
      projects: "Duxbe (ERP), iLovenge, DineNorder, Kasicon",
      achievements: [
        "Implemented the application UI and developed reusable custom widgets to speed up application development",
        "Worked on new products and updated functionality of existing software systems"
      ]
    },
    {
      title: "Flutter Developer",
      company: "Technavis Web Solutions",
      location: "Malappuram, India",
      period: "Aug 2024-Dec 2024",
      projects: "RSA Kerala Driver(RoadSide Assistance), Aurify(Live Gold Rate)",
      achievements: [
        "Collaborated with peers on team projects creating a functional mobile app with flutter and integrated APIs",
        "Verified compliance with customer needs by testing software functionality and equipment load capabilities"
      ]
    },
    {
      title: "Flutter Developer (Freelance)",
      company: "FindHub IT Solutions, UAE",
      location: "UAE",
      period: "May 2024-Aug 2024",
      projects: "FindHub Seller, FindHub Customer",
      achievements: [
        "Worked on new products and updated functionality of existing software systems",
        "Developed an e-commerce application focused on offline stores",
        "Improved performance of existing software, helping organization remain agile in face of changing needs"
      ]
    },
    {
      title: "Flutter Developer",
      company: "First Logic Meta Lab Pvt Ltd",
      location: "Preinthalmanna, India",
      period: "Jun 2023-May 2024",
      projects: "Arooha Tours and Travels, Flit online Portal",
      achievements: [
        "Implemented the application UI and developed reusable custom widgets to speed up application development",
        "Worked on new products and updated functionality of existing software systems",
        "Developed user-friendly mobile applications for iOS and Android platforms",
        "Handling of widgets state property to work with background data updates"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            2+ years of delivering high-quality Flutter applications across various industries
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-secondary border-primary/20 shadow-glow-secondary hover:shadow-glow-primary transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Building className="w-4 h-4 text-accent" />
                        <span className="text-lg font-medium text-foreground">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="border-accent/50 text-accent">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Projects:</h4>
                      <p className="text-muted-foreground">{exp.projects}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;