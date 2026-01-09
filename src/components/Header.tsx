import { Cross, Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/departments", label: "Departments" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/inquiry", label: "Inquiry" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-medical py-2 flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:06788222894"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>06788-222894</span>
            </a>
            <a
              href="mailto:anantapurchc@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">anantapurchc@gmail.com</span>
            </a>
          </div>
          <span className="hidden md:block font-medium">Caring for You, Always</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container-medical py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl gradient-medical flex items-center justify-center shadow-medical group-hover:shadow-medical-lg transition-shadow">
                <Cross className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Anantapur Hospital
              </h1>
              <p className="text-xs text-muted-foreground">Community Health Center</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
