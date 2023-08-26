import React, { useState } from 'react';
import ProductCard from './component/ProductCard';
import Images from './assets/img/index';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '$19.99',
      image: Images.blue,
      isOnSale: true, 
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '$24.99',
      image: Images.red,
      isOnSale: false,
      newProduct:true,
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: '$29.99',
      newPrice:"$35.65",
      image: Images.green,
      isOnSale: true, 
    },
    // Add more products as needed
  ];

  return (
    <div className={`container mx-auto mt-5 ${isDarkMode ? 'dark' : ''}`}>
      <button
        onClick={toggleDarkMode}
        className={`${
          isDarkMode
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-gray-300 hover:bg-gray-400'
        } text-white font-semibold py-1 px-2 rounded-full absolute top-0 right-0 m-4`}
      >
        {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
