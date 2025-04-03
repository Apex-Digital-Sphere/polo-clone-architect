
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero image */}
      <div className="w-full h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Polo Ralph Lauren Collection" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="bg-white/80 p-8 md:p-12 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-polo-navy mb-4">
            Colección Primavera 2025
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Descubre la nueva colección con estilos clásicos y atemporales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-polo-navy hover:bg-polo-navy/90 text-white px-8 py-6">
              COMPRAR HOMBRE
            </Button>
            <Button className="bg-polo-navy hover:bg-polo-navy/90 text-white px-8 py-6">
              COMPRAR MUJER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
