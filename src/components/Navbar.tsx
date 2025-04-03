
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "Hombre", url: "#" },
    { name: "Mujer", url: "#" },
    { name: "Niños", url: "#" },
    { name: "Polo Home", url: "#" },
    { name: "Sale", url: "#", highlight: true }
  ];

  // Subcategories for men
  const menCategories = [
    { name: "Polos", url: "#" },
    { name: "Camisas", url: "#" },
    { name: "Pantalones", url: "#" },
    { name: "Chaquetas", url: "#" },
    { name: "Zapatos", url: "#" },
    { name: "Accesorios", url: "#" },
  ];

  // Subcategories for women
  const womenCategories = [
    { name: "Vestidos", url: "#" },
    { name: "Blusas", url: "#" },
    { name: "Pantalones", url: "#" },
    { name: "Chaquetas", url: "#" },
    { name: "Zapatos", url: "#" },
    { name: "Accesorios", url: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Category Navigation */}
      <div className="hidden lg:block border-b border-gray-200">
        <div className="container mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-gray-800 hover:text-polo-navy">Hombre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-4 p-4 min-w-[400px]">
                    {menCategories.map((category, idx) => (
                      <NavigationMenuLink
                        key={idx}
                        href={category.url}
                        className="block p-2 text-sm text-gray-700 hover:text-polo-navy hover:bg-gray-50"
                      >
                        {category.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-gray-800 hover:text-polo-navy">Mujer</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-4 p-4 min-w-[400px]">
                    {womenCategories.map((category, idx) => (
                      <NavigationMenuLink
                        key={idx}
                        href={category.url}
                        className="block p-2 text-sm text-gray-700 hover:text-polo-navy hover:bg-gray-50"
                      >
                        {category.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      
      {/* Top bar with logo and icons */}
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-polo-navy font-serif text-2xl font-bold">
            FERTIO
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Search size={20} />
          </button>
          <button className="p-2 hidden md:block">
            <User size={20} />
          </button>
          <button className="p-2 relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-polo-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Categories menu - desktop */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {categories.map((category, index) => (
              <li key={index}>
                <a 
                  href={category.url} 
                  className={`py-3 block text-sm tracking-wide ${
                    category.highlight 
                      ? 'text-polo-red font-medium' 
                      : 'text-gray-800 hover:text-polo-navy'
                  }`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-16">
          <div className="container mx-auto px-4">
            <ul className="space-y-4 py-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.url} 
                    className={`block py-2 text-lg ${
                      category.highlight 
                        ? 'text-polo-red font-medium' 
                        : 'text-gray-800'
                    }`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-200">
                <a href="#" className="block py-2 text-lg text-gray-800">
                  Mi cuenta
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg text-gray-800">
                  Favoritos
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
