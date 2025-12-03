import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SimpleTypewriter from "./ui/SimpleTypewriter";

const pricingPlans = [
  {
    title: "Repair Services",
    description: "Expert repair & refitting",
    price: "Starting at $75",
    features: [
      "System inspection",
      "Professional repairs",
      "Refitting services",
      "Color touch-ups",
      "Base replacement",
      "Quick turnaround",
    ],
  },  {
    title: "Maintenance Plans",
    description: "Keep your system looking fresh",
    price: "$150 - $300/month",
    features: [
      "Regular cleaning & maintenance",
      "Professional styling",
      "Adhesive replacement",
      "Minor repairs included",
      "Priority scheduling",
      "Product discounts",
    ],
    popular: true,
  },  {
    title: "New System Installation",
    description: "Complete custom hair system package",
    price: "Starting at $1,200",
    features: [
      "Private consultation",
      "Custom hair system design",
      "Professional installation",
      "Styling & cut included",
      "Maintenance instructions",
      "Follow-up appointment",
    ],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <SimpleTypewriter text="Transparent Pricing" className="text-4xl md:text-5xl font-bold text-foreground mb-4" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality service at fair prices. Schedule a consultation for personalized pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'border-primary border-2 shadow-lg' : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            <strong className="text-foreground">Free Consultation:</strong> Schedule a private consultation to discuss your needs and get personalized pricing. No obligation, completely confidential.
          </p>
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Get Personalized Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
