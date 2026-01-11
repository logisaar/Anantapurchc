import { Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const backgrounds = [
    '/images/hero-3ed.png',
    '/images/hero-full.png',
    '/images/hero-2nd.png'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url('${bg}')` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container-medical relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Heart className="w-4 h-4 text-primary-foreground" />
              <span>Your Health, Our Priority</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Quality Healthcare
              <span className="block text-primary-foreground">For Everyone</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              Anantapur Hospital provides comprehensive medical services with
              compassion and excellence. Our dedicated team is committed to
              delivering the best healthcare experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all hover-lift border border-transparent"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right content - Stats & Logos (Simplified for full bg) */}
          <div className="hidden lg:block space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Floating Stats Card */}
            <div className="ml-auto content-end max-w-sm">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-medical-lg border border-white/20 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Trusted Excellence</p>
                    <p className="text-xs text-gray-500">Certified Healthcare</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Doctors</span>
                    <span className="font-bold text-primary">50+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Departments</span>
                    <span className="font-bold text-primary">12+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-bold text-primary">25+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logos Section - smaller/compact */}
            <div className="ml-auto w-fit bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/10 flex gap-6 items-center">
              <img
                src="/images/nhm-logo.png"
                alt="National Health Mission"
                className="h-12 w-auto object-contain opacity-90"
              />
              <div className="h-8 w-px bg-gray-300"></div>
              <img
                src="/images/odisha-logo.png"
                alt="Government of Odisha"
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
