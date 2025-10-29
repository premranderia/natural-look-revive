import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? 'shadow-lg' 
          : 'shadow-sm'
      }`}
    >
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <img src={logo} alt="Natural Look Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-foreground hidden lg:block">Natural Look</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about"
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services"
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/services' ? 'text-primary' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio"
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/products"
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/products' ? 'text-primary' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/pricing"
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
            >
              Pricing
            </Link>
            <Button 
              variant="hero" 
              asChild
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/about"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/services' ? 'text-primary' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/products"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/products' ? 'text-primary' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/pricing"
              onClick={closeMobileMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
            >
              Pricing
            </Link>
            <Button 
              variant="hero" 
              asChild
              className="w-full"
            >
              <Link to="/contact" onClick={closeMobileMenu}>Book Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
