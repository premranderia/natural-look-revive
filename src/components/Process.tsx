import { MessageSquare, Ruler, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import SimpleTypewriter from "./ui/SimpleTypewriter";

const Process = () => {

  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We start with a one-on-one consultation to understand your goals, lifestyle, and preferences. Our experts evaluate your hair type, density, and scalp condition. The focus: making sure we recommend the perfect system for you.",
      number: "01"
    },
    {
      icon: Ruler,
      title: "Custom Design & Measurement",
      description: "We take precise measurements and send them to our specialized factory. A custom hair system is designed to suit your face shape, personality, and style. Every system is handcrafted to ensure it blends naturally and fits comfortably.",
      number: "02"
    },
    {
      icon: Scissors,
      title: "Hair Cut & Installation",
      description: "Once your custom system arrives, our stylists cut, blend, and style it to perfection. Installation is done carefully to ensure it feels natural and undetectable. You leave with a fresh, confident look that feels completely your own.",
      number: "03"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <SimpleTypewriter text="Our Process" className="text-4xl md:text-5xl font-bold text-foreground mb-4" />
            
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to confidence — here's how we create your perfect Natural Look.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden hover-shadow animate-fade-in border-accent/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
                      <div className="relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '450ms' }}>
          <Button 
            size="lg"
            variant="hero"
            className="px-8"
            asChild
          >
            <Link to="/contact">
              Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
