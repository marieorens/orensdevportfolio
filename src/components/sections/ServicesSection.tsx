import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";


const services = [
  {
    id: 1,
    titleKey: "services.mobileapp",
    descriptionKey: "services.mobileappdescription",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    id: 2,
    titleKey: "services.desktop",
    descriptionKey: "services.desktopdescription",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 5,
    titleKey: "services.custom",
    descriptionKey: "services.customdescription",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  const { t } = useLanguage(); 
  
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold">{t("services.title")}</h2>
          <div className="w-20 h-1 bg-primary my-4 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <CardHeader className="pb-2 flex flex-col items-center">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center">
                  {t(service.titleKey)}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  {t(service.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}