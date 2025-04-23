
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          {t("error.pageNotFound")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t("error.pageNotFoundMessage")}
        </p>
        <Button asChild size="lg">
          <Link to="/">{t("error.backToHome")}</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
