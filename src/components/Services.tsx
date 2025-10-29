import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, RefreshCw, UserCheck, Wrench, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: UserCheck,
    title: "Non-Surgical Hair Replacement",
    description: "Natural-looking hair systems that are completely undetectable. Custom-fitted to match your unique style and lifestyle.",
  },
  {
    icon: Scissors,
    title: "Custom Hair Systems",
    description: "Personalized solutions designed specifically for you. We create systems that look and feel completely natural.",
  },
  {
    icon: RefreshCw,
    title: "Hair Maintenance & Styling",
    description: "Regular maintenance to keep your hair system looking fresh and natural. Expert styling services included.",
  },
  {
    icon: Wrench,
    title: "System Repair & Refitting",
    description: "Professional repair services and refitting to ensure perfect comfort and appearance over time.",
  },
  {
    icon: Lock,
    title: "Private Consultations",
    description: "Confidential, one-on-one consultations in our private studio. We understand your needs and provide personalized solutions.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive hair replacement solutions for men and women, tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
