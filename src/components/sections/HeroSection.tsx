
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight max-w-3xl">
            <span className="text-primary">{t("hero.title").split(' ')[0]}</span> {t("hero.title").split(' ').slice(1).join(' ')}
          </h1>
          
          <p className="mt-6 text-xl max-w-2xl text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">{t("hero.viewWork")}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">{t("hero.contact")}</a>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="mt-16 animate-bounce"
            onClick={handleScrollToAbout}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
