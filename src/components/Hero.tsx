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

          {/* Right content - Stats & Logos */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Logos Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-medical-lg border border-primary/10 hover-lift text-center">
              <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">Supported By</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <img
                  src="/images/nhm-logo.png"
                  alt="National Health Mission"
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="h-16 w-px bg-border hidden md:block"></div>
                <img
                  src="/images/odisha-logo.png"
                  alt="Government of Odisha"
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-medical-lg hover-lift group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src="/images/hero-main.jpeg"
                  alt="Anantapur Hospital Building"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Stats - Bottom Left */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3 animate-fade-in-up">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">Emergency</p>
                      <p className="text-sm font-bold text-foreground">24/7 Care Available</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats - Top Right - Optional decorative badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-accent/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-white/20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white">Trusted Care</span>
                    </div>
                  </div>
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
