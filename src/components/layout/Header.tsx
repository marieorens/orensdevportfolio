import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../theme/ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { name: "nav.home", path: "/" },
  { name: "nav.about", path: "/#about" },
  { name: "nav.projects", path: "/#projects" },
  { name: "nav.services", path: "/#services" },
  { name: "nav.contact", path: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation with smooth scrolling
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setMobileMenuOpen(false);
    
    // Only prevent default for hash links (section navigation)
    if (path.startsWith('/#')) {
      event.preventDefault();
      const targetId = path.substring(2); // Remove the '/#'
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Use smooth scrolling for better UX
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash without causing a full page reload
        window.history.pushState(null, '', path);
      }
    }
  };

  // Check if the path is active
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path && !location.hash;
    return location.hash === path.substring(1);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-lg border-b"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl font-bold">
          <span className="text-primary">Orens</span> TONON.
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  asChild
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  className="font-medium"
                >
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="px-3 py-2"
                  >
                    {t(item.name)}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <div className="ml-4 flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-fade-in">
            <nav className="container mx-auto py-4 px-4">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <li key={item.name} className="w-full">
                    <Button
                      asChild
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      className="w-full justify-start font-medium"
                    >
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavClick(e, item.path)}
                        className="px-3 py-2"
                      >
                        {t(item.name)}
                      </Link>
                    </Button>
                  </li>
                ))}
                <li className="border-t pt-2 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
