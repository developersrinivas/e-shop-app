import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ScrollableImages from "./scrollingImages";
import ShopsList from "./ShopList";

// Fake API function to get categories data
const fetchCategories = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Food & Groceries",
          items: [
            { id: 1, name: "Apple", price: 20, image: "https://via.placeholder.com/150" },
            { id: 2, name: "Banana", price: 10, image: "https://via.placeholder.com/150" },
            { id: 3, name: "Milk", price: 50, image: "https://via.placeholder.com/150" },
          ],
        },
        {
          id: 2,
          name: "Electronics & Gadgets",
          items: [
            { id: 4, name: "Smartphone", price: 20000, image: "https://via.placeholder.com/150" },
            { id: 5, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
            { id: 6, name: "Headphones", price: 2000, image: "https://via.placeholder.com/150" },
          ],
        },
        {
          id: 3,
          name: "Clothing",
          items: [
            { id: 7, name: "T-Shirt", price: 500, image: "https://via.placeholder.com/150" },
            { id: 8, name: "Jeans", price: 1200, image: "https://via.placeholder.com/150" },
            { id: 9, name: "Jacket", price: 3000, image: "https://via.placeholder.com/150" },
          ],
        },
      ]);
    }, 1000) // Simulate 1 second delay for API
  );
};

const HomeComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
      setSelectedCategory(categoriesData[0]); // Select first category by default
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <style>{`/* Hide scrollbar */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    `}</style>
      <ScrollableImages />

      <ShopsList />

      
    </>
  );
};

export default HomeComponent;
