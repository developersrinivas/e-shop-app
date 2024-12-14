import React, { useState } from "react";

// Sample data for products
const products = [
  {
    id: 1,
    name: "Apple",
    price: 100,
    description: "Fresh and juicy apple, perfect for your health.",
    image: "https://via.placeholder.com/300x300?text=Apple",
  },
  {
    id: 2,
    name: "Banana",
    price: 50,
    description: "Sweet and ripe bananas, a healthy snack for all ages.",
    image: "https://via.placeholder.com/300x300?text=Banana",
  },
  {
    id: 3,
    name: "Milk",
    price: 60,
    description: "Fresh cow milk, perfect for your daily calcium needs.",
    image: "https://via.placeholder.com/300x300?text=Milk",
  },
  {
    id: 4,
    name: "Headphones",
    price: 500,
    description: "Noise-cancelling headphones, your perfect companion for music.",
    image: "https://via.placeholder.com/300x300?text=Headphones",
  },
  {
    id: 5,
    name: "Shoes",
    price: 1200,
    description: "Comfortable running shoes for your fitness needs.",
    image: "https://via.placeholder.com/300x300?text=Shoes",
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]); // Initial product selected

  // Function to handle adding products to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 font-sans">
      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">{selectedProduct.name}</h1>
          <p className="text-lg text-blue-500 font-semibold mb-4">₹{selectedProduct.price}</p>

          {/* Product Description */}
          <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(selectedProduct)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products
            .filter((product) => product.id !== selectedProduct.id) // Exclude the selected product
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition bg-white"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 mb-4 object-cover rounded-lg"
                />
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <p className="text-blue-500 font-semibold">₹{product.price}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Shopping Cart</h2>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty!</p>
          ) : (
            cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg shadow-md bg-white"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <span className="font-medium text-gray-800">{product.name}</span>
                </div>
                <span className="font-semibold text-blue-500">₹{product.price}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
