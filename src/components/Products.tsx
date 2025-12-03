import productsDisplay from "@/assets/products-display.jpg";
import SimpleTypewriter from "./ui/SimpleTypewriter";

const products = [
  { name: "Premium Shampoo", description: "Gentle cleansing for hair systems" },
  { name: "Conditioning Treatment", description: "Deep moisture and shine" },
  { name: "Styling Products", description: "Professional hold and finish" },
  { name: "Adhesive Solutions", description: "Secure, comfortable hold" },
  { name: "Maintenance Kits", description: "Everything you need at home" },
  { name: "Specialized Care", description: "Expert-recommended products" },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <SimpleTypewriter text="Premium Hair Care Products" className="text-4xl md:text-5xl font-bold text-foreground mb-4" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade products to maintain your hair system at home
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Products Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={productsDisplay} 
                alt="Premium hair care products display" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
          </div>

          {/* Products List */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <h3 className="font-semibold text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-foreground">
                <strong>Available in-store:</strong> All products are carefully selected and recommended by our experts to ensure the longevity and natural appearance of your hair system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
