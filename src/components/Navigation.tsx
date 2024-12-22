import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            SingYourStory
          </div>
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
                <Link to="/examples" className={navigationMenuTriggerStyle()}>
                  Beispiele
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/faqs" className={navigationMenuTriggerStyle()}>
                  FAQs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};