
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="bg-polo-gray py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-polo-navy mb-4">
            Únete a nuestro newsletter
          </h2>
          <p className="text-gray-700 mb-8">
            Regístrate para recibir noticias sobre nuestras últimas colecciones, eventos y promociones exclusivas.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Tu dirección de email" 
              className="flex-grow min-w-0"
              required
            />
            <Button className="bg-polo-navy hover:bg-polo-navy/90 text-white px-6">
              SUSCRIBIRSE
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
