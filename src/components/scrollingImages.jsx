import React, { useState, useEffect } from "react";

// Fake API function to get categories data
const fetchCategories = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve( [
        { "id": 1, "name": "Fruits", "image": "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4&text=Fruits" },
        { "id": 2, "name": "Electronics", "image": "https://www.shutterstock.com/image-illustration/collection-consumer-electronics-flying-air-260nw-738107467.jpg" },
        { "id": 3, "name": "Clothing", "image": "https://questanews.com/wp-content/uploads/2022/03/shop-clothing-clothes-shop-hanger-modern-shop-boutique-scaled-e1648594589180.jpg" },
        { "id": 4, "name": "Toys", "image": "https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids-696x476.jpg" },
        { "id": 5, "name": "Books", "image": "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" },
        { "id": 6, "name": "Groceries", "image": "https://banner2.cleanpng.com/20180920/orj/kisspng-grocery-store-kabul-farms-supermarket-food-online-groceries-png-clipart-png-mart-1713937518196.webp" },
        { "id": 7, "name": "Footwear", "image": "https://lh3.googleusercontent.com/F5f7OTNhO4t0Vgr9zHVdtgZRidoTq1jRf9TIGHT9bEVuOWaj0mO3Ww1JxwHIH-4t0fisbgRCop7bSEWeOEWBocllM79SWzdFJBOouubrcw=h450-rw" }
    ]);
    }, 1000) // Simulate 1 second delay for API
  );
};

const ScrollableImages = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
  <div
    key={category.id}
    className="flex-none w-24 text-center hover:scale-105 transform transition"
  >
    <img
      src={category.image}
      alt={category.name}
      className="w-20 h-20 rounded-full object-cover mx-auto p-1 border-s-4 border-red-400"
    />
    <p className="mt-2 text-sm text-gray-700">{category.name}</p>
  </div>
))}
      </div>
    </div>
  );
};

export default ScrollableImages;
