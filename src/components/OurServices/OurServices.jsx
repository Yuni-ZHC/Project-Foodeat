import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const OurServices = () => {
  return (
    <div className="container py-12">
        {/* header section */}
        <div className="text-center">
            <h1 className="text-4xl font-semibold">Our Services</h1>
        </div>
         {/* icons section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
        <div className="flex justify-center place-items-center gap-3">
            <FaMobileScreen className="text-2xl"/>
            <p className="text-xl font-semibold">Online Booking</p>
        </div>
        <div className="flex justify-center place-items-center gap-3">
            <IoFastFoodOutline className="text-2xl" />
            <p className="text-xl font-semibold">Fast Food</p>
        </div>
        <div className="flex justify-center place-items-center gap-3">
        <MdOutlineFoodBank className="text-2xl" />
        <p className="text-xl font-semibold">Healthy Food</p> 
        </div>
        <div className="flex justify-center place-items-center gap-3"> 
        <TbTruckDelivery className="text-2xl" />
        <p className="text-xl font-semibold">Delivery</p>
        </div>
    </div>
    </div>
  );
};

export default OurServices;