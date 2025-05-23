import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'

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
          className="relative w-full h-[220px] md:h-[400px] lg:h-[700px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/RGc0t6JP/slide1.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center">
              {

              }
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl"><Typewriter words={['Best', 'Roommate', 'finder', 'in', 'Bangladesh']} loop={Infinity} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50}/></span><br />
              Find Your Perfect Roommate Easily with Bangladesh's Top Matching Platform
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[400px] lg:h-[700px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/p621VJXW/slide2.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl"><Typewriter words={['Find', 'Best', 'Room']} loop={Infinity} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50}/></span><br />
              Find a room you like in any major city in Bangladesh.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[400px] lg:h-[700px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/sJvZCyhG/slide3.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center"><span className="font-bold text-3xl md:text-5xl lg:text-7xl"><Typewriter words={['At', 'Minimum', 'Cost',]} loop={Infinity} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50}/></span><br />Find a room within your means.<br />
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative w-full h-[220px] md:h-[400px] lg:h-[700px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/G4bTTpYd/slide4.jpg')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-secondary">
              <span className="font-bold text-3xl md:text-5xl lg:text-7xl"><Typewriter words={['Stay', 'Healthy']} loop={Infinity} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50}/></span><br />
              Stay healthy and comfortable in your new room with perfect amenities and a peaceful environment always.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
