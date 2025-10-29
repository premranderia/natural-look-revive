import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    quote: "After years of trying different solutions, Natural Look gave me exactly what I was looking for. The hair system is so natural, even my closest friends couldn't tell. My confidence is completely restored!",
    rating: 5,
  },
  {
    name: "David K.",
    quote: "I was skeptical at first, but the team at Natural Look made me feel comfortable from day one. The results are incredible - I look 10 years younger and feel amazing. Best decision I ever made.",
    rating: 5,
  },
  {
    name: "Robert T.",
    quote: "Professional, discreet, and absolutely life-changing. The quality of their work is unmatched. I've been a client for over 5 years and wouldn't trust anyone else.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-12 pb-8 px-6">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="font-semibold text-foreground">— {testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
