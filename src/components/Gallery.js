// components/Gallery.js
import React, { useState } from 'react';

const Gallery = ({ agregarAlCarrito }) => {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 149.99 },
    { id: 2, nombre: 'Producto 2', precio: 1499.99 },
    { id: 3, nombre: 'Producto 3', precio: 349.99 }
  ];

  return (
    <div className="gallery">
      <h2>Productos Destacados</h2>
      <div className="gallery-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="product">
            <h3>{producto.nombre}</h3>
            <p>Prenda - ${producto.precio.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
