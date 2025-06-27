import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const FindersSay = () => {
  const [finders, setFinders] = useState([]);

  useEffect(() => {
    fetch('FinderSay.json') 
      .then(res => res.json())
      .then((data) => {
        setFinders(data);
      });
  }, []);

  return (
    <div className="w-full mx-auto p-4 my-10 border-4 bg-gray-400 rounded-2xl">
      <h2 className="text-center text-3xl font-semibold mb-6">What Finders Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={finders.length > 1}
        pagination={{ clickable: true }}
        className="rounded-2xl bg-white"
      >
        {finders.map((finder) => (
          <SwiperSlide key={finder.id}>
            <div className="bg-white rounded-xl p-6 md:flex md:items-center md:gap-8">
              <div className="relative w-fit mx-auto md:mx-0">
                <img
                  src={finder.photo}
                  alt={finder.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-400"
                />
              </div>

              <div className="mt-6 md:mt-0 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">{finder.name}</h3>
                <p className="text-gray-400 text-sm font-medium">{finder.occupation}</p>
                <p className="text-black text-base italic mt-2">"{finder.say}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FindersSay;