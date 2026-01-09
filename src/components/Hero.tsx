import { Heart, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative gradient-medical-soft overflow-hidden">
      <div className="container-medical section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Your Health, Our Priority</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Quality Healthcare
              <span className="block text-gradient-medical">For Everyone</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Anantapur Hospital provides comprehensive medical services with 
              compassion and excellence. Our dedicated team is committed to 
              delivering the best healthcare experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-medical text-primary-foreground font-semibold rounded-lg shadow-medical hover:shadow-medical-lg transition-all hover-lift"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-primary/20 text-primary font-semibold rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="medical-card-highlight p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">26+</h3>
              <p className="text-muted-foreground text-sm">Dedicated Staff</p>
            </div>

            <div className="medical-card-highlight p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">9</h3>
              <p className="text-muted-foreground text-sm">Departments</p>
            </div>

            <div className="col-span-2 medical-card-highlight p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">24/7 Emergency Care</h3>
                  <p className="text-muted-foreground text-sm">Round-the-clock medical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
