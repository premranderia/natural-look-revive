import { Award, GraduationCap, Heart } from "lucide-react";

const AboutUs = () => {
  const credentials = [
    {
      icon: GraduationCap,
      year: "1981",
      title: "Bachelor of Science in Industrial Education",
      institution: "Don Mariano Marcos Memorial State University, Philippines"
    },
    {
      icon: Award,
      year: "1989",
      title: "Graduate of Zenzi's Beauty College",
      institution: "San Francisco — California State Cosmetology Certification"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the Expert Behind Natural Look
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portrait Section */}
          <div className="animate-fade-in">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <img
                src="/placeholder.svg"
                alt="Loly Cronin - Hair Replacement Specialist and Founder of Natural Look"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">Loly Cronin</h3>
                <p className="text-accent font-medium">Hair Replacement Specialist</p>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I have been working in the San Francisco Bay Area hair replacement industry since <span className="font-semibold text-foreground">1989</span>.
              </p>
              <p className="text-lg">
                In <span className="font-semibold text-foreground">2005</span>, I founded <span className="font-semibold text-foreground">Natural Look, Inc.</span>, dedicated to providing exclusive, non-surgical hair replacement and skincare services that help clients regain confidence and feel their best.
              </p>
              <p className="text-lg">
                With over three decades of experience, I bring both artistry and precision to every client I work with.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">My Background</h4>
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm font-bold text-primary">{credential.year}</span>
                        <span className="text-muted-foreground">•</span>
                        <h5 className="font-semibold text-foreground">{credential.title}</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{credential.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote Banner */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary mt-6">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg italic text-foreground font-medium">
                  "My goal has always been simple — to create natural, customized, and comfortable solutions that enhance each client's individuality."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Team Section Placeholder */}
        <div className="mt-20 pt-12 border-t border-border/50 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Meet Our Stylists</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team of certified hair stylists is dedicated to bringing your vision to life with expertise and care.
            </p>
            <div className="mt-8 text-muted-foreground/60 italic">
              Coming soon — Meet the professionals who make Natural Look exceptional.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
