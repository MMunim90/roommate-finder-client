import React from "react";
import { Fade } from "react-awesome-reveal";

const PopularCities = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl lg:text-5xl text-center my-10">
        Popular Cities in Find Mate
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="relative w-auto h-64 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://i.ibb.co/Ngh1GgRZ/dhaka.jpg)] bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-white font-bold text-7xl text-center">Dhaka</p>
          </div>
        </div>

        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://i.ibb.co/Kpq8TtJs/chittagong.jpg)] bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-white font-bold text-6xl text-center">
              Chittagong
            </p>
          </div>
        </div>

        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://i.ibb.co/jKWnG11/khulna.jpg)] bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-white font-bold text-7xl text-center">Khulna</p>
          </div>
        </div>

        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://i.ibb.co/B2ny54nL/barisal.jpg)] bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-white font-bold text-7xl text-center">
              Barishal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCities;
