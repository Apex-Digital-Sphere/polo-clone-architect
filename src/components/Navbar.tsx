
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
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
            POLO RALPH LAUREN
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
