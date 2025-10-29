import beforeAfterMan1 from "@/assets/before-after-man-1.jpg";
import beforeAfterMan2 from "@/assets/before-after-man-2.jpg";
import beforeAfterWoman1 from "@/assets/before-after-woman-1.jpg";
import beforeAfterWoman2 from "@/assets/before-after-woman-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const transformations = [
    {
      image: beforeAfterMan1,
      alt: "Before and after hair replacement transformation for man - showing natural-looking results",
      category: "Men's Hair System"
    },
    {
      image: beforeAfterMan2,
      alt: "Before and after custom hair system for mature man - professional transformation",
      category: "Men's Hair System"
    },
    {
      image: beforeAfterWoman1,
      alt: "Before and after hair replacement for woman - natural volume restoration",
      category: "Women's Hair System"
    },
    {
      image: beforeAfterWoman2,
      alt: "Before and after custom hair system for woman - elegant transformation",
      category: "Women's Hair System"
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See the Natural Look Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations, real confidence. See how we've helped our clients restore their natural look.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Before/After Carousel */}
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {transformations.map((transformation, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                      <div className="relative">
                        <img 
                          src={transformation.image} 
                          alt={transformation.alt} 
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Before/After Labels */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                          <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Before</span>
                          </div>
                          <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">After</span>
                          </div>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                          <div className="bg-background/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-medium text-foreground">{transformation.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <span className="text-primary-foreground text-xl font-semibold">Real Client Transformation</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Natural Look</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
