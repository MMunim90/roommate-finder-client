import React from "react";

const PopularCities = () => {
  
  return (
    <div>
      <h1 className="font-bold text-3xl lg:text-5xl text-center my-10 text-secondary">
        Popular Cities in Find Mate
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative w-100 h-64 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url(https://i.ibb.co/Ngh1GgRZ/dhaka.jpg)] bg-cover bg-no-repeat">
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="relative text-white font-bold text-center mt-[25%] text-7xl z-10">Dhaka</p>
          </div>
        
        <div className="relative w-100 h-64 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url(https://i.ibb.co/Kpq8TtJs/chittagong.jpg)] bg-cover bg-no-repeat">
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="relative text-white font-bold text-center mt-[25%] text-7xl z-10">Chittagong</p>
          </div>

          <div className="relative w-100 h-64 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url(https://i.ibb.co/jKWnG11/khulna.jpg)] bg-cover bg-no-repeat">
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="relative text-white font-bold text-center mt-[25%] text-7xl z-10">Khulna</p>
          </div>

          <div className="relative w-100 h-64 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url(https://i.ibb.co/B2ny54nL/barisal.jpg)] bg-cover bg-no-repeat">
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <p className="relative text-white font-bold text-center mt-[25%] text-7xl z-10">Barishal</p>
          </div>
        </div>
    </div>
  );
};

export default PopularCities;
