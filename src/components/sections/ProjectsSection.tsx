
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const projectsData = {
  en: [
    {
      id: 1,
      title: "e-Gaz",
      description:
        "A mobile application built to allow users to order domestic gas and get delivered by the same way.",
      image: "https://i.ibb.co/chwHLk3t/e-Gaz.png",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      liveUrl: "https://drive.google.com/file/d/1OPJg6rboOWmEABepLBwrq2sDx9OILP99/view?usp=sharing",
      githubUrl: "https://github.com/marieorens/egaz",
      category: "mobile",
    },
    {
      id: 2,
      title: "Biblippedia",
      description:
        "Biblipedia is a mobile app that help users to ask questions about Bible and get answers from AI",
      image: "https://i.ibb.co/yBG8hdLg/e-Gaz-1.png",
      tags: ["Flutter", "API", "Gemini"],
      liveUrl: "https://docs.google.com/uc?export=download&id=1eThCl9IOEBQQf0Zb5kohvyWKSpI_C2Gw",
      githubUrl: "https://github.com/marieorens/biblipedia",
      category: "mobile",
    },
    {
      id: 3,
      title: "e-Messe",
      description:
        "A mass ordering platform",
      image: "https://i.ibb.co/yF712ynm/Capture-d-cran-2025-04-23-231419.png",
      tags: ["Firebase", "Django"],
      liveUrl: "https://arnaud2580.pythonanywhere.com/",
      githubUrl: "https://github.com/marieorens/e-Messe",
      category: "mobile",
    },
    {
      id: 4,
      title: "Gameroom Manager",
      description:"Gameroom manager is a software I made for a friend who requested it so as to manage his gamers sessions with ease.",
      image: "https://i.ibb.co/YgXZ1Zs/Capture-d-cran-2025-04-23-232132.png",
      tags: ["Qt", "C++", "Desktop"],
      liveUrl: "https://drive.google.com/file/d/1EQWp93Le74EGJkSGwtVwLkvGul77VBx1/view?usp=drive_link",
      githubUrl: "https://github.com/marieorens/gameroom-manager",
      category: "desktop",
    },
    {
      id: 5,
      title: "MUZIKY",
      description:
        "A desktop app to play music an have fun",
      image: "https://i.ibb.co/XxG6zMhc/screencapture-orens-tonon-portfolio-vercel-app-assets-lecteur-png-2025-04-23-20-00-20.png",
      tags: ["C++", "Qt"],
      githubUrl: "https://github.com/marieorens/lecteur_de_musique",
      category: "desktop",
    },
    {
      id: 6,
      title: "Currency Converter",
      description:
        "XOF-Naira currency converter",
      image: "https://i.ibb.co/sJzLVpnw/screencapture-orens-tonon-portfolio-vercel-app-assets-convertisseur-png-2025-04-23-20-01-07.png",
      tags: ["C++", "Qt"],
      githubUrl: "https://github.com/marieorens/convertisseur_de_devises",
      category: "desktop",
    }
  ],
  fr: [
    {
      id: 1,
      title: "e-Gaz",
      description:
        "e-Gaz est une application mobile qui permet de commander du gaz domestique et de se faire livrer chez soi.",
      image: "https://i.ibb.co/chwHLk3t/e-Gaz.png",
      tags: ["Flutter", "Dart", "Firebase", "Mobile"],
      liveUrl: "https://drive.google.com/file/d/1OPJg6rboOWmEABepLBwrq2sDx9OILP99/view?usp=sharing",
      githubUrl: "https://github.com/marieorens/egaz",
      category: "mobile",
    },
    {
      id: 2,
      title: "Biblipedia",
      description:
        "Biblipedia est une application mobile qui permet de poser des questions sur la Bible à l'IA",
      image: "https://i.ibb.co/yBG8hdLg/e-Gaz-1.png",
      tags: ["Flutter", "API", "Gemini"],
      liveUrl: "https://docs.google.com/uc?export=download&id=1eThCl9IOEBQQf0Zb5kohvyWKSpI_C2Gw",
      githubUrl: "https://github.com/marieorens/biblipedia",
      category: "mobile",
    },
    {
      id: 3,
      title: "e-Messe",
      description:
        "Plateforme de demandes de messes en ligne",
      image: "https://i.ibb.co/yF712ynm/Capture-d-cran-2025-04-23-231419.png",
      tags: ["Firebase", "Django"],
      liveUrl: "https://arnaud2580.pythonanywhere.com/",
      githubUrl: "https://github.com/marieorens/e-Messe",
      category: "mobile",
    },
    {
      id: 4,
      title: "Gameroom Manager",
      description:"Gameroom manager est un logiciel de gestion des sessions des joueurs dans une salle de jeux.",
      image: "https://i.ibb.co/YgXZ1Zs/Capture-d-cran-2025-04-23-232132.png",
      tags: ["Qt", "C++", "Desktop"],
      liveUrl: "https://drive.google.com/file/d/1EQWp93Le74EGJkSGwtVwLkvGul77VBx1/view?usp=drive_link",
      githubUrl: "https://github.com/marieorens/gameroom-manager",
      category: "desktop",
    },
    {
      id: 5,
      title: "MUZIKY",
      description:
        "A simple logiciel lecteur de musique",
      image: "https://i.ibb.co/XxG6zMhc/screencapture-orens-tonon-portfolio-vercel-app-assets-lecteur-png-2025-04-23-20-00-20.png",
      tags: ["C++", "Qt"],
      githubUrl: "https://github.com/marieorens/lecteur_de_musique",
      category: "desktop",
    },
    {
      id: 6,
      title: "Convertisseur de devises",
      description:
        "Convertisseur de devises CFA-Naira",
      image: "https://i.ibb.co/sJzLVpnw/screencapture-orens-tonon-portfolio-vercel-app-assets-convertisseur-png-2025-04-23-20-01-07.png",
      tags: ["C++", "Qt"],
      githubUrl: "https://github.com/marieorens/convertisseur_de_devises",
      category: "desktop",
    },
  ],
};

// Filter categories
const categories = [
  { id: "all", name: "projects.allProjects" },
  { id: "mobile", name: "projects.mobileApps" },
  { id: "desktop", name: "projects.desktopApps" },
 
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, language } = useLanguage();

  // Get projects in the current language
  const projects = projectsData[language];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold">{t("projects.title")}</h2>
          <div className="w-20 h-1 bg-primary my-4 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category.id)}
            >
              {t(category.name)}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-scale-in">
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="pt-0 flex-grow">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild variant="secondary" size="sm" className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.liveDemo")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
