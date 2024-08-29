import React, { useState } from 'react';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    if (productName && productPrice) {
      const nuevoProducto = {
        nombre: productName,
        precio: parseFloat(productPrice),
      };
      setProductos([...productos, nuevoProducto]);
      setProductName('');
      setProductPrice('');
    } else {
      alert('Por favor, ingresa un nombre y un precio para el producto.');
    }
  };

  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full border border-gray-200">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Carrito de Compras</h1>
        
        <div className="mb-5">
          <label htmlFor="productName" className="block text-gray-700 text-sm font-medium mb-2">Nombre del Producto:</label>
          <input 
            type="text" 
            id="productName" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Ej: Manzanas" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="productPrice" className="block text-gray-700 text-sm font-medium mb-2">Precio del Producto:</label>
          <input 
            type="number" 
            id="productPrice" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Ej: 10.50" 
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        
        <button 
          onClick={addProduct} 
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Añadir Producto
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Productos en el Carrito</h2>
        <ul className="list-disc list-inside space-y-2">
          {productos.map((producto, index) => (
            <li key={index} className="text-gray-700">{producto.nombre} - ${producto.precio.toFixed(2)}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Total: 
          <span className="text-green-600 font-bold"> ${calcularTotal()}</span>
        </h2>
      </div>
    </div>
  );
}

export default App;
