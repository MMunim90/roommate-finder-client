import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/RGc0t6JP/slide1.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">Best Roommate Finder in Bangladesh</span><br />
              Find Your Perfect Roommate Easily with Bangladesh's Top Matching Platform
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/p621VJXW/slide2.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">Find Best Room</span><br />
              Find a room you like in any major city in Bangladesh.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/sJvZCyhG/slide3.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center"><span className="font-bold text-3xl md:text-5xl lg:text-7xl">At Minimum Cost</span><br />Find a room within your means.<br />
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/G4bTTpYd/slide4.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl">Stay Healthy</span><br />
              Stay healthy and comfortable in your new room with perfect amenities and a peaceful environment always.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
