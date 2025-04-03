
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const categoryLinks = [
    { name: "Hombre", url: "#" },
    { name: "Mujer", url: "#" },
    { name: "Niños", url: "#" },
    { name: "Polo Home", url: "#" },
    { name: "Accesorios", url: "#" },
    { name: "Sale", url: "#" }
  ];

  const helpLinks = [
    { name: "Contacto", url: "#" },
    { name: "Envíos y Entregas", url: "#" },
    { name: "Devoluciones", url: "#" },
    { name: "Preguntas Frecuentes", url: "#" },
    { name: "Seguimiento de Pedido", url: "#" },
    { name: "Guía de Tallas", url: "#" }
  ];

  const aboutLinks = [
    { name: "Nuestra Historia", url: "#" },
    { name: "Responsabilidad Social", url: "#" },
    { name: "Tiendas", url: "#" },
    { name: "Trabaja con Nosotros", url: "#" },
    { name: "Prensa", url: "#" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="font-serif font-bold text-polo-navy text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categoryLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-polo-navy text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="font-serif font-bold text-polo-navy text-lg mb-4">Ayuda</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-polo-navy text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-polo-navy text-lg mb-4">Sobre Nosotros</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-polo-navy text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social and contact */}
          <div>
            <h3 className="font-serif font-bold text-polo-navy text-lg mb-4">Conéctate Con Nosotros</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-polo-navy">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-polo-navy">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-polo-navy">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-2">Servicio al Cliente:</p>
            <p className="text-sm text-gray-600 mb-4">+56 2 2336 9222</p>
            <p className="text-sm text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-sm text-gray-600">Sábado: 9:00 - 14:00</p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Polo Ralph Lauren. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xs text-gray-500 hover:text-polo-navy">
                Políticas de Privacidad
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-polo-navy">
                Términos y Condiciones
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-polo-navy">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
