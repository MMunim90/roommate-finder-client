import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import AdCard from "../components/AdCard";

const BrowseListing = () => {
const allAds = useLoaderData();
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allAds.map((ad) => (
              <AdCard key={ad._id} ad={ad}></AdCard>
            ))}
        </div>
      <div className="font-bold text-xl py-10 text-center">
        <div className="btn border-2 border-black text-xl">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
