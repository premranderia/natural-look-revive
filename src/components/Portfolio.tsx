import before1 from "@/assets/before-1.jpg";
import before2 from "@/assets/before-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after1 from "@/assets/after-1.jpg";
import after2 from "@/assets/after-2.jpg";
import after3 from "@/assets/after-3.jpg";
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
      beforeImages: [before1, before2, before3],
      afterImages: [after1, after2, after3],
      category: "Men's Hair System"
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
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Before Section */}
                      <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-card">
                        <div className="p-4">
                          <div className="bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg mb-4 inline-block">
                            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Before</span>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {transformation.beforeImages.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative overflow-hidden rounded-lg">
                                <img 
                                  src={image} 
                                  alt={`Before transformation view ${imgIndex + 1} - hair replacement client`}
                                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* After Section */}
                      <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-card">
                        <div className="p-4">
                          <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg mb-4 inline-block">
                            <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wide">After</span>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {transformation.afterImages.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative overflow-hidden rounded-lg">
                                <img 
                                  src={image} 
                                  alt={`After transformation view ${imgIndex + 1} - natural hair system results`}
                                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="text-center mt-6">
                      <div className="bg-card px-6 py-2 rounded-full shadow-lg inline-block">
                        <span className="text-sm font-medium text-foreground">{transformation.category}</span>
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
