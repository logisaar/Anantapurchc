import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-medical-soft-gray">
      <div className="container-medical">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reach out to us for appointments, inquiries, or any healthcare assistance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <a
              href="mailto:anantapurchc@gmail.com"
              className="medical-card-highlight p-6 md:p-8 group cursor-pointer hover-lift animate-fade-in-up"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-medical transition-all duration-300">
                  <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Email Us
                  </h3>
                  <p className="text-primary font-medium">
                    anantapurchc@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:06788222894"
              className="medical-card-highlight p-6 md:p-8 group cursor-pointer hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:shadow-medical transition-all duration-300">
                  <Phone className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    Call Us
                  </h3>
                  <p className="text-accent font-medium">
                    06788-222894
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div
              className="medical-card p-6 md:p-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Anantapur, Odisha, India
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="medical-card p-6 md:p-8 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground">
                    24/7 Emergency Services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                Need Medical Assistance?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our team is available around the clock to help you with any healthcare needs.
              </p>
              <a
                href="tel:06788222894"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-medical text-primary-foreground font-semibold rounded-lg shadow-medical hover:shadow-medical-lg transition-all hover-lift"
              >
                <Phone className="w-5 h-5" />
                Call Now: 06788-222894
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-medical border border-border animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3718.989871689094!2d86.75952791!3d21.23225022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c7abfabf844c3%3A0x344d63cf0c9e31fe!2sAnantapur%20Hospital%20(CHC)!5e0!3m2!1sen!2sin!4v1767970043960!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anantapur Hospital Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
