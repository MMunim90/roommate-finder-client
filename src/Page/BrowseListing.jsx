import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const BrowseListing = ({ ad }) => {
// const allAds = useLoaderData();
  return (
    <div>
      <div className="font-bold text-xl py-6 text-center">
        <div className="btn border-2 border-black text-white bg-secondary text-xl">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
