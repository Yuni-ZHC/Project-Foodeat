import React from 'react';
import BannerImg from "../../assets/makananjepang-removebg-preview.png";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
        {/* Bagian Gambar */}
        <div className="flex justify-center items-center">
          <img src={BannerImg} alt="Makanan Turki" className="h-80 w-auto" />
        </div>
        {/* Bagian Teks */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Food Is Always Good</h1>
          <p className="py-4 font-bold">
          Experience the perfect harmony of flavors in every bite. Fresh ingredients and authentic recipes come together to create a dish that warms the heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
