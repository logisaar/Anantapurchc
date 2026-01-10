import { Cross, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-navy text-secondary">
      <div className="container-medical py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Cross className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground">
                 LogiSaar
                </h3>
                <p className="text-xs text-muted-foreground">Web Development Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to providing quality healthcare services to our community
              with compassion, integrity, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Departments", "Our Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-heading font-semibold mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:anantapurchc@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  anantapurchc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:06788222894"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  06788-222894
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Anantapur, Odisha, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} LogiSaar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for our community
            </p>
            <p className="text-muted-foreground text-sm">
              Created by <a href="https://logisaar.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">LogiSaar</a>
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
