
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold">{t("contact.title")}</h2>
          <div className="w-20 h-1 bg-primary my-4 rounded-full"></div>
          <p className="max-w-2xl text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="shadow-lg animate-fade-in-right">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">{t("contact.contactInfo")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("contact.reachOut")}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:contact@example.com" 
                    className="hover:text-primary transition-colors"
                  >
                    orensmarie601@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/marie-orens-tonon-277b22260/?trk=smart-comment__new-comment_comment_actor-name" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Linkedin
                  </a>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a 
                    href="https://github.com/username" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <a 
                    href="https://iuntogyr.mychariow.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    CodeVibe Studio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
