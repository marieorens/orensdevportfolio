import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";


const technicalSkills = [
  "Flutter", "Dart", "Qt Creator", "C++", 
  "Mobile Development", "Desktop Development", "Firebase",
  "Git", "REST APIs", 
];


const softSkills = {
  en: [
    "Problem Solving", "Team Collaboration", "Communication", 
    "Time Management", "Attention to Detail", "Adaptability"
  ],
  fr: [
    "Résolution de problèmes", "Collaboration d'équipe", "Communication", 
    "Gestion du temps", "Souci du détail", "Adaptabilité"
  ]
};

export function AboutSection() {
  const { t, language } = useLanguage();
  
 
  const currentSoftSkills = softSkills[language];
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-primary my-4 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            {t("about.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-right">
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t("about.whoAmI")}</h3>
                <p className="text-muted-foreground mb-4">{t("about.description1")}</p>
                <p className="text-muted-foreground mb-4">{t("about.description2")}</p>
                <p className="text-muted-foreground">{t("about.description3")}</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("about.technicalSkills")}</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">{t("about.softSkills")}</h3>
                <div className="flex flex-wrap gap-2">
                  {currentSoftSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
