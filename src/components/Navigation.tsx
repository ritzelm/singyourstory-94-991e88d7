import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            SingYourStory
          </Link>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    Über uns
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/create" className={navigationMenuTriggerStyle()}>
                    Erstellen
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                    Preise
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#faqs" className={navigationMenuTriggerStyle()}>
                    FAQs
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/create">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Deinen Song erstellen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};