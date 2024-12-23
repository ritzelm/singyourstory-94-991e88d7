import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#faqs');
    } else {
      document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { title: "Über uns", link: "/about" },
    { title: "Erstellen", link: "/create" },
    { title: "Preise", link: "/pricing" },
    { title: "FAQs", link: "/#faqs", onClick: handleFAQClick },
  ];

  const MobileMenu = () => (
    <Accordion type="single" collapsible className="w-full">
      {menuItems.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger className="text-left">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            {item.onClick ? (
              <a
                href={item.link}
                className="block py-2 hover:text-primary"
                onClick={item.onClick}
              >
                {item.title}
              </a>
            ) : (
              <Link
                to={item.link}
                className="block py-2 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            MeinKinderLied
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              item.onClick ? (
                <a
                  key={item.title}
                  href={item.link}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                  onClick={item.onClick}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.link}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {item.title}
                </Link>
              )
            ))}
            <Link to="/create">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Deinen Song erstellen
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="py-4">
                  <MobileMenu />
                  <div className="mt-4">
                    <Link to="/create" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Deinen Song erstellen
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};