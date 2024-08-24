"use client"
import React, { useState } from 'react';

// Componente para el slider
const Slider = () => {
  // Estado para controlar la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imágenes
  const images = ['/caja.png', '/caja2.png'];

  // Función para ir a la imagen siguiente
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 bg-gray-200 overflow-hidden rounded-md slider">
      {/* Renderiza todas las imágenes y usa transform para mostrar la imagen actual */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 transform ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <img src={image} alt={`Producto ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}

      {/* Botón para la imagen anterior */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 focus:outline-none"
      >
        <p>&lt;</p>
      </button>

      {/* Botón para la imagen siguiente */}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 focus:outline-none"
      >
        <p>&gt;</p>
      </button>
    </div>
  );
};

export default Slider;
