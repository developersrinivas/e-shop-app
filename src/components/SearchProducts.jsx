import React, { useState, useEffect } from "react";

// Function to fetch products from the Fake Store API
const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const SearchComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Initially display all products
    };
    getProducts();
  }, []);

  // Handle the search query change and filter products
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-1  font-sans bg-transparent min-h-screen">
      {/* Search Bar */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center p-4 border hover:scale-105 hover:shadow-lg rounded-lg shadow-md bg-white transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
              <p className="text-blue-500 font-semibold">₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
