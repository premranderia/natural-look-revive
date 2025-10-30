import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Natural Look</h3>
            <p className="text-primary-foreground/80 mb-4">
              Serving Hayward with premium hair replacement solutions for over 35 years.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/naturallook510" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/naturallookinc/#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-accent transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-accent transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-accent transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>24700 Calaroga Ave UNIT 105, Hayward, CA 94545</li>
              <li>
                <a href="tel:+15107849999" className="hover:text-accent transition-colors">
                  (510) 784-9999
                </a>
              </li>
              <li>
                <a href="mailto:naturallookinc@gmail.com" className="hover:text-accent transition-colors">
                  naturallookinc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <div className="flex justify-center gap-6 mb-4">
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p>&copy; 2025 Natural Look. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
