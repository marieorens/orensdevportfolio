
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    
    
    "hero.title": "Creating Exceptional Digital Experiences",
    "hero.subtitle": "Mobile & Desktop Developer specializing in Flutter, Qt Creator, and C++, building innovative applications that deliver outstanding user experiences.",
    "hero.viewWork": "View My Work",
    "hero.contact": "Get In Touch",

    
    "about.title": "About Me",
    "about.subtitle": "Get to know more about me, my background, and what I do",
    "about.whoAmI": "Who I Am",
    "about.description1": "I'm a passionate Mobile & Desktop Developer with skills in Flutter, Qt Creator, and C++. With a strong focus on creating elegant and efficient applications, I strive to deliver exceptional user experiences across different platforms.",
    "about.description2": "My journey in software development started three years, and since then, I've been constantly learning and adapting to new technologies to stay at the forefront of the industry.",
    "about.description3": "I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive designs :)",
    "about.technicalSkills": "Technical Skills",
    "about.softSkills": "Soft Skills",

    
    "projects.title": "My Projects",
    "projects.subtitle": "Explore some of my recent work and projects",
    "projects.allProjects": "All Projects",
    "projects.mobileApps": "Mobile Apps",
    "projects.desktopApps": "Desktop Apps",
    "projects.crossPlatform": "Cross-Platform",
    "projects.liveDemo": "Live Demo",
    
    "projects.egaz.title": "e-Gaz",
    "projects.egaz.description": "A cross-platform mobile application for fitness tracking with personalized workout plans and nutrition guidance.",
    
    "projects.desktopMediaPlayer.title": "Desktop Media Player",
    "projects.desktopMediaPlayer.description": "A feature-rich desktop media player with support for various formats, playlists, and advanced audio controls.",
    
    "projects.taskManagementApp.title": "Task Management App",
    "projects.taskManagementApp.description": "A productivity application with task tracking, reminders, and team collaboration features.",
    
    "projects.cadDesignTool.title": "CAD Design Tool",
    "projects.cadDesignTool.description": "A professional-grade CAD design tool for engineers and architects with 3D modeling capabilities.",
    
    "projects.smartHomeControl.title": "Smart Home Control",
    "projects.smartHomeControl.description": "An IoT application to control smart home devices with intuitive interface and automation features.",
    
    "projects.videoEditingSuite.title": "Video Editing Suite",
    "projects.videoEditingSuite.description": "A professional video editing application with timeline editing, effects, and export options.",
    "projects.noProjects": "No projects found in this category",

    // Services Section
    "services.title": "My Services",
    "services.subtitle": "Specialized services I offer to help bring your ideas to life",
    "services.mobileapp":"Mobile App Development",
    "services.mobileappdescription":"Custom mobile applications built with Flutter for iOS and Android, focusing on beautiful design and smooth performance.",
    "services.desktop": "Desktop Application Development",
    "services.desktopdescription": "Powerful desktop software solutions using Qt and C++, designed for efficiency, stability, and excellent user experience.",
    "services.custom": "Custom Software Solutions",
    "services.customdescription": "Tailor-made software applications designed to address specific business needs and streamline operations.",    
    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have a question or want to work together? Feel free to contact me!",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.contactInfo": "Contact Information",
    "contact.reachOut": "Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    "contact.workingHours": "Working Hours",
    "contact.workHours": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.weekend": "Weekend: Available for urgent matters",
    "error.pageNotFound": "Page Not Found",
    "error.pageNotFoundMessage": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    "error.backToHome": "Back to Homepage"
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.projects": "Projets",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.resume": "CV",
    
    // Hero Section
    "hero.title": "Création d'Expériences Numériques Exceptionnelles",
    "hero.subtitle": "Développeur Mobile & Desktop spécialisé en Flutter, Qt Creator et C++, créant des applications innovantes qui offrent des expériences utilisateur remarquables.",
    "hero.viewWork": "Voir Mes Projets",
    "hero.contact": "Me Contacter",

    // About Section
    "about.title": "À Propos",
    "about.subtitle": "Apprenez à me connaître, mon parcours et ce que je fais",
    "about.whoAmI": "Qui suis-je ?",
    "about.description1": "Je suis un développeur Mobile & Desktop passionné avec des compétences en Flutter, Qt Creator et C++. Avec un fort accent sur la création d'applications élégantes et efficaces, je m'efforce d'offrir des expériences utilisateur exceptionnelles sur différentes plateformes.",
    "about.description2": "Mon voyage dans le développement logiciel a commencé il y a trois ans, et depuis, je n'ai cessé d'apprendre et de m'adapter aux nouvelles technologies pour rester à la pointe de l'industrie.",
    "about.description3": "J'aime relever des défis complexes et les transformer en designs simples, beaux et intuitifs. :)",
    "about.technicalSkills": "Compétences Techniques",
    "about.softSkills": "Compétences Humaines",

    // Projects Section
    "projects.title": "Mes Projets",
    "projects.subtitle": "Découvrez certains de mes travaux récents",
    "projects.allProjects": "Tous les Projets",
    "projects.mobileApps": "Apps Mobiles",
    "projects.desktopApps": "Apps Desktop",
    "projects.crossPlatform": "Multi-Plateformes",
    "projects.liveDemo": "Démo Live",

    "projects.egaz.title": "Application Fitness",
"projects.egaz.description": "Une application mobile multiplateforme pour le suivi de fitness, avec des plans d'entraînement personnalisés et des conseils nutritionnels.",

"projects.desktopMediaPlayer.title": "Lecteur Multimédia Desktop",
"projects.desktopMediaPlayer.description": "Un lecteur multimédia riche en fonctionnalités avec prise en charge de multiples formats, playlists et contrôles audio avancés.",

"projects.arApp.title": "Application de Réalité Augmentée",
"projects.arApp.description": "Une application de réalité augmentée immersive permettant aux utilisateurs d'interagir avec des objets virtuels dans leur environnement réel.",

"projects.studentTracker.title": "Application de Suivi des Étudiants",
"projects.studentTracker.description": "Une application mobile pour les établissements éducatifs, facilitant le suivi de la performance des étudiants, la gestion des présences et la communication enseignant-élève.",

"projects.saas.title": "Plateforme SaaS de Gestion de Projets",
"projects.saas.description": "Une solution web SaaS permettant la gestion collaborative de projets, la planification des tâches et le suivi du temps en temps réel.",

"projects.vpnClient.title": "Client VPN Sécurisé",
"projects.vpnClient.description": "Un client VPN desktop axé sur la sécurité, avec support multi-protocoles, kill switch intégré et cryptage de bout en bout.",

"projects.graphAnalyzer.title": "Analyseur de Graphes",
"projects.graphAnalyzer.description": "Un outil desktop pour la visualisation et l’analyse de structures de graphes, utilisant des algorithmes comme Dijkstra et Kruskal.",

"projects.dnsApp.title": "Application DNS Personnalisée",
"projects.dnsApp.description": "Une application pour tester et gérer les requêtes DNS, utile pour les développeurs réseau et les ingénieurs systèmes.",

"projects.deliveryTracker.title": "Suivi de Livraison Intelligent",
"projects.deliveryTracker.description": "Une application mobile optimisant les trajets de livraison avec des algorithmes de calcul de routes et des prévisions de trafic.",

"projects.qrMenu.title": "Menu Numérique QR",
"projects.qrMenu.description": "Une solution pour restaurants permettant aux clients d’accéder au menu via QR code, avec gestion de commandes en temps réel.",

    
    // Services Section
    "services.title": "Mes Services",
    "services.subtitle": "Services spécialisés que je propose pour donner vie à vos idées",
    "services.mobileapp": "Développement d'Applications Mobiles",
    "services.mobileappdescription": "Applications mobiles personnalisées développées avec Flutter pour iOS et Android, mettant l'accent sur un design élégant et des performances fluides.",
    "services.desktop": "Développement d'Applications Desktop",
    "services.desktopdescription": "Solutions logicielles puissantes pour ordinateurs utilisant Qt et C++, conçues pour l'efficacité, la stabilité et une excellente expérience utilisateur.",
    "services.custom": "Solutions Logicielles Sur Mesure",
    "services.customdescription": "Applications logicielles personnalisées conçues pour répondre à des besoins métiers spécifiques et optimiser les opérations.",
  
    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Une question ou envie de collaborer ? N'hésitez pas à me contacter !",
    "contact.name": "Votre Nom",
    "contact.email": "Votre Email",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer le Message",
    "contact.sending": "Envoi en cours...",
    "contact.contactInfo": "Informations de Contact",
    "contact.reachOut": "N'hésitez pas à me contacter via l'un de ces canaux. Je suis toujours ouvert à la discussion de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision.",
    "contact.workingHours": "Heures de Travail",
    "contact.workHours": "Lundi - Vendredi : 9h00 - 18h00",
    "contact.weekend": "Week-end : Disponible pour les urgences",
    "error.pageNotFound": "Page Non Trouvée",
    "error.pageNotFoundMessage": "La page que vous recherchez a peut-être été supprimée, renommée ou est temporairement indisponible.",
    "error.backToHome": "Retour à l'Accueil"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
