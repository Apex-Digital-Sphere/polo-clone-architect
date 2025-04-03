
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <ProductGrid title="Destacados" />
        
        {/* Brand story section */}
        <div className="bg-polo-lightgray py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-polo-navy mb-6">
                Nuestra Herencia
              </h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Desde 1967, Polo Ralph Lauren ha definido el estilo estadounidense auténtico, personificando los sueños y aspiraciones de las personas de todo el mundo. El mundo de Polo está inspirado en un patrimonio auténtico, honrando la artesanía tradicional y celebrando estándares atemporales de calidad y experiencia estilística.
                </p>
                <p className="text-gray-700">
                  Nuestra marca ha evolucionado desde una colección de corbatas hasta una marca global con un amplio concepto de estilo que abarca todas las categorías de productos, desde ropa hasta fragancias y decoración del hogar.
                </p>
              </div>
              <Button variant="outline" className="border-polo-navy text-polo-navy hover:bg-polo-navy hover:text-white">
                DESCUBRE NUESTRA HISTORIA
              </Button>
            </div>
          </div>
        </div>
        
        {/* Categories banners */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Men's category */}
            <div className="relative h-[500px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Colección Hombre" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-polo-navy mb-4">Hombre</h3>
                  <Button className="bg-polo-navy hover:bg-polo-navy/90 text-white">
                    EXPLORAR
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Women's category */}
            <div className="relative h-[500px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" 
                alt="Colección Mujer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-polo-navy mb-4">Mujer</h3>
                  <Button className="bg-polo-navy hover:bg-polo-navy/90 text-white">
                    EXPLORAR
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
