// src/components/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/productpage')} className="bg-white p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <div className="mt-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
