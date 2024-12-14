import React, { useState, useEffect } from "react";

// Fake API function to get shops data
const fetchShops = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, name: "Fresh Mart", location: "Downtown", products: generateProducts(10) },
        { id: 2, name: "Tech Hub", location: "City Center", products: generateProducts(8) },
        { id: 3, name: "Fashion Plaza", location: "Main Street", products: generateProducts(12) },
        { id: 4, name: "Grocery King", location: "Uptown", products: generateProducts(6) },
      ]);
    }, 1000) // Simulate 1 second delay for API
  );
};

// Generate random products for each shop
function generateProducts(count) {
  const productNames = [
    "Apple", "Milk", "Headphones", "Laptop", "Jeans", "Banana", "T-Shirt", "Tablet", "Shoes", "Watch",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: productNames[Math.floor(Math.random() * productNames.length)],
    price: (Math.random() * 1000 + 100).toFixed(2),
    image: `https://via.placeholder.com/100x100?text=Product+${i + 1}`,
  }));
}

const ShopsList = () => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const shopsData = await fetchShops();
      setShops(shopsData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-6 font-sans">
      {/* Shops List */}
      <div>
        <h2 className=" text-xl font-semibold mb-4 text-gray-800">Nearby Shops</h2>
        <div className="grid w-full grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {shops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => setSelectedShop(shop)}
              className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition bg-white"
            >
              <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={`https://via.placeholder.com/100x100?text=${shop.name}`}
                  alt={shop.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">{shop.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Shop Products */}
      {selectedShop && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Products in {selectedShop.name}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {selectedShop.products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition bg-white"
              >
                <div className="w-24 h-24 bg-gray-200 mb-2 flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
                <p className="text-blue-500 font-semibold mt-2">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopsList;
