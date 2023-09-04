import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* TEST CONTAINER */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
          Test
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 relative">
        <Image src="/slide1.png" alt="slide" fill className=" object-cover" />
      </div>
    </div>
  );
};

export default Slider;
