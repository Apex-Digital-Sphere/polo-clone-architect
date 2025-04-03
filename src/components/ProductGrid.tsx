
import React from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: "Camisa Oxford Slim Fit",
    price: 89990,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    category: "Camisas"
  },
  {
    id: 2,
    name: "Polo Classic Fit",
    price: 69990,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Polos"
  },
  {
    id: 3,
    name: "Suéter de Algodón Cable-Knit",
    price: 119990,
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Suéteres"
  },
  {
    id: 4,
    name: "Chaqueta Harrington",
    price: 199990,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    category: "Chaquetas"
  },
  {
    id: 5,
    name: "Vestido de Punto",
    price: 129990,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Vestidos"
  },
  {
    id: 6,
    name: "Pantalones Chinos Slim Fit",
    price: 89990,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=697&q=80",
    category: "Pantalones"
  },
  {
    id: 7,
    name: "Bolso Tote de Lona",
    price: 149990,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    category: "Accesorios"
  },
  {
    id: 8,
    name: "Zapatillas Court",
    price: 99990,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80",
    category: "Calzado"
  }
];

const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductGrid = ({ title }: { title: string }) => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-serif font-bold text-center text-polo-navy mb-12">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card group">
            <a href={`#product-${product.id}`}>
              <div className="mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="px-1">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-medium text-polo-navy group-hover:text-polo-navy/80 mb-1">
                  {product.name}
                </h3>
                <p className="font-medium">${formatPrice(product.price)}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#all-products" 
          className="inline-block border border-polo-navy text-polo-navy px-8 py-3 hover:bg-polo-navy hover:text-white transition-colors duration-300"
        >
          VER TODO
        </a>
      </div>
    </div>
  );
};

export default ProductGrid;
