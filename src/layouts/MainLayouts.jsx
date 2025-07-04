import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router";
import Slider from "../components/Slider";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const MainLayouts = () => {
  const location = useLocation();
  const slightFadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Header></Header>
      </div>
      {location.pathname === "/" && (
        <Fade direction="down" keyframes={slightFadeDown}>
            <Slider />
        </Fade>
      )}
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
