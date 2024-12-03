import React from "react";
import Image2 from "../../assets/hot_pot-removebg-preview.png";
import Image3 from "../../assets/klepon1-removebg-preview.png";
import Image4 from "../../assets/steak-removebg-preview.png";

const FoodData = [
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$9,43",
    name: "Hot Pot",
    desc: "Hot pot is a cooking technique from China that involves making soup directly while eating.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$1,26",
    name: "Klepon",
    desc: "Klepon is made from sweet rice cake filled with molten palm sugar and coated in grated coconut.",
  },
  {
    image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$5,66",
    name: "Steak",
    desc: "Steak is a food made from grilled or grilled meat, usually in the form of beef, chicken and pork.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our Top List</p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-transparant p-5 rounded-3xl hover:scale-105 transition duration-300 shadow-lg overflow-visible"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 mx-auto object-cover rounded-full"
            />
            <div className="space-y-2 mt-4 text-center">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-800">{item.desc}</p>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
