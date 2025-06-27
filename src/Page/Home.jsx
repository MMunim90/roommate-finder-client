import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import AdCard from "../components/AdCard";
import FindingCounter from "../components/FindingCounter";
import PopularCities from "../components/PopularCities";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import FindersSay from "../components/FinderSay";

const Home = () => {
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
  const allAds = useLoaderData();
  //   console.log(allAds);
  return (
    <div className="space-y-6 my-6">
      <Fade direction="down" keyframes={slightFadeDown}>
        <h1 className="font-bold text-3xl lg:text-5xl text-center my-10">
          Featured Roommates Post
        </h1>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {allAds
            .filter((ad) => ad.availability === "Available")
            .slice(0, 8)
            .map((ad) => (
              <AdCard key={ad._id} ad={ad}></AdCard>
            ))}
        </div>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div>
          <PopularCities></PopularCities>
        </div>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div>
          <FindingCounter></FindingCounter>
        </div>
      </Fade>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div>
          <FindersSay></FindersSay>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
