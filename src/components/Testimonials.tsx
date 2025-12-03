import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SimpleTypewriter from "./ui/SimpleTypewriter";

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
  {
    name: "John D.",
    quote: "I've been using Natural Look for over 5 years now, and I've never been happier with my results. The quality of their work is unmatched, and I've never had any issues with them",
    rating: 5,
  },
  {
    name: "Emily W.",
    quote: "Natural Look is the best hair restoration solution I've ever tried. The results are amazing, and I've never had any issues with them",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Glassmorphic background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <SimpleTypewriter text="What Our Clients Say" className="text-4xl md:text-5xl font-bold text-foreground mb-4" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            className="w-full max-w-4xl mx-auto"
            opts={{ loop: true, align: "center" }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              })
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="relative hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-md overflow-hidden">
                      {/* Glassmorphic gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />

                      <CardContent className="pt-12 pb-8 px-6 relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />
                        </motion.div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                              className="text-accent text-xl"
                            >
                              ★
                            </motion.span>
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-6 leading-relaxed text-lg">
                          "{testimonial.quote}"
                        </p>
                        <div className="font-semibold text-foreground">— {testimonial.name}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
