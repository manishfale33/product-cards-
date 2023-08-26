import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, isDarkMode, toggleDarkMode }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } ${isZoomed ? 'scale-105' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
        } rounded-t overflow-hidden`}
      >
        {/* Sale tag */}
        {product.isOnSale && (
          <div className="absolute top-0 left-0 mt-2 ml-2 bg-red-600 text-white px-2 py-1 rounded">
            Sale
          </div>
        )}
          {/* Sale tag */}
          {product.newProduct && (
          <div className="absolute top-0 left-0 mt-2 ml-2 bg-red-600 text-white px-2 py-1 rounded">
            New
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full transition-transform transform ${
            isZoomed ? 'scale-150' : ''
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity ${
            isZoomed ? 'opacity-40' : 'opacity-0'
          }`}
        ></div>
      </div>
      <div className={`px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span
          className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${
            product.newPrice ? 'line-through' : ''
          }`}
        >
          {product.price}
        </span>
        {product.newPrice && (
          <span
            className={`inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white`}
          >
            {` ${product.newPrice}`}
          </span>
        )}
        <div className="flex items-center">
          <span className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="ml-1">4.5</span>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button
          className={`${
            isDarkMode
              ? 'bg-blue-800 hover:bg-blue-900'
              : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-semibold py-2 px-4 rounded-full`}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
