import React from "react";

const PopularCities = () => {
  
  return (
    <div>
      <h1 className="font-bold text-3xl lg:text-5xl text-center my-10 text-secondary">
        Popular Cities in Find Mate
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[url(https://i.ibb.co/Ngh1GgRZ/dhaka.jpg)] bg-cover bg-no-repeat w-100 h-64 rounded-2xl">
            <p className="text-white text-center mt-[25%] text-7xl">Dhaka</p>
          </div>
          <div className="bg-[url(https://i.ibb.co/Kpq8TtJs/chittagong.jpg)] bg-cover bg-no-repeat w-100 h-64 rounded-2xl">
            <p className="text-white text-center mt-[25%] text-7xl">
              Chittagong
            </p>
          </div>
          <div className="bg-[url(https://i.ibb.co/jKWnG11/khulna.jpg)] bg-cover bg-no-repeat w-100 h-64 rounded-2xl">
            <p className="text-white text-center mt-[25%] text-7xl">Khulna</p>
          </div>
          <div className="bg-[url(https://i.ibb.co/B2ny54nL/barisal.jpg)] bg-cover bg-no-repeat w-100 h-64 rounded-2xl">
            <p className="text-white text-center mt-[25%] text-7xl">Barishal</p>
          </div>
        </div>
    </div>
  );
};

export default PopularCities;
