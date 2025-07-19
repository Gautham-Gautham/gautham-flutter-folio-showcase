import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Cross-platform app development"]
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "Supabase", "SQL", "Rest APIs"]
    },
    {
      title: "State Management & Architecture",
      skills: ["Provider", "Riverpod", "GetX", "Flutter Flow"]
    },
    {
      title: "Tools & Services",
      skills: ["Git", "GitHub", "Push Notification", "Problem-Solving"]
    },
    {
      title: "Development Practices",
      skills: ["Time Management", "Multitasking", "Product Development", "Source and Version Control"]
    }
  ];

  const featuredSkills = [
    "Flutter", "Dart", "Firebase", "Provider", "Riverpod", "GetX", 
    "SQL", "Git", "GitHub", "Rest APIs", "Push Notification", 
    "Cross-platform app development", "Time Management", "Multitasking",
    "Product Development", "Problem-Solving", "Supabase", "Flutter Flow"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and development capabilities
          </p>
          
          {/* Featured Skills Cloud */}
          <Card className="mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredSkills.map((skill, index) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-gradient-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categorized Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-glow-secondary transition-all duration-300"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-foreground">{skill}</span>
                      </div>
                    ))}
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

export default Skills;