import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-confidence.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Confident client with natural hair restoration" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Confidence. Restored <span className="text-accent">Naturally.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            Custom, undetectable hair systems for men and women — serving Hayward with excellence for over 35 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg"
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="accent" 
              size="lg"
              asChild
              className="text-lg"
            >
              <Link to="/portfolio">
                See Real Results
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-primary-foreground/80">
            <Phone className="h-5 w-5" />
            <span className="text-lg">Call us: <a href="tel:+15107849999" className="font-semibold hover:text-accent transition-colors">(510) 784-9999</a></span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
