// components/Carrito.js
import React, { useState } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  console.log('Renderizando Carrito');

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;

