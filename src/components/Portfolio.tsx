import beforeAfter from "@/assets/before-after-1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See the Natural Look Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations, real confidence. See how we've helped our clients restore their natural look.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Before/After Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={beforeAfter} 
                alt="Before and after hair replacement transformation" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <span className="text-primary-foreground text-xl font-semibold">Real Client Transformation</span>
              </div>
            </div>

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
