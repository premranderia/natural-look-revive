import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const naturalLookServices = [
  { name: "NLI System Cut-in (New System)", price: "$150", note: "(Full Service Included) (Color/Tint not included)" },
  { name: "Full Service", price: "$120", note: "(System cut-in & Color/Tint not included)" },
  { name: "Haircut, Wash, & Style", price: "$80", note: "(System cut-in & Color/Tint not included)" },
  { name: "Haircut", price: "$65", note: "(System cut-in not included)" },
  { name: "Hair Add (30 mins)", price: "$60", note: "" },
  { name: "Color/Tint System", price: "$60", note: "" },
  { name: "Color/Tint own Hair", price: "$80", note: "" },
  { name: "Base Repair (30 mins)", price: "$60", note: "" },
  { name: "Perm", price: "$120", note: "" },
];

const nonNaturalLookServices = [
  { name: "Cut-in for Non NLI (New System)", price: "$250", note: "(Full Service Included) (Color/Tint not included)" },
  { name: "Full Service for Non-NLI", price: "$150", note: "(System cut-in & Color/Tint not included)" },
  { name: "Haircut, Wash, & Style Non-NLI", price: "$100", note: "(System cut-in & Color/Tint not included)" },
  { name: "Haircut for Non-NLI", price: "$65", note: "(System cut-in not included)" },
  { name: "Hair Add Non-NLI (30 mins)", price: "$75", note: "" },
  { name: "Color/Tint System Non-NLI", price: "$65", note: "" },
  { name: "Color/Tint own Hair", price: "$80", note: "" },
  { name: "Base Repair Non-NLI (30 mins)", price: "$75", note: "" },
  { name: "Perm for Non-NLI", price: "$140", note: "" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional hair replacement solutions for men and women
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Natural Look Systems */}
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-center">Natural Look Systems</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {naturalLookServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border/50 last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{service.name}</p>
                      {service.note && <p className="text-sm text-muted-foreground mt-1">{service.note}</p>}
                    </div>
                    <p className="font-bold text-primary whitespace-nowrap">{service.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Non-Natural Look Systems */}
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl text-center">Non-Natural Look Systems</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {nonNaturalLookServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border/50 last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{service.name}</p>
                      {service.note && <p className="text-sm text-muted-foreground mt-1">{service.note}</p>}
                    </div>
                    <p className="font-bold text-primary whitespace-nowrap">{service.price}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
