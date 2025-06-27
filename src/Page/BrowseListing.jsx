import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { Tooltip } from "react-tooltip";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import { MdLocationPin } from "react-icons/md";

const BrowseListing = () => {
  const allAds = useLoaderData();
  const [find, setFind] = useState(allAds);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setFind(allAds);
    const searchedAds = allAds.filter(
      (ad) =>
        ad?.title?.toLowerCase().includes(text.toLowerCase()) ||
        ad?.location?.toLowerCase().includes(text.toLowerCase())
    );
    setFind(searchedAds);
  };

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
    <div className="my-10">

      <Fade direction="down" keyframes={slightFadeDown}>
      <div className="text-center mb-16 bg-gradient-to-r from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg">
        <h2 className="text-5xl font-extrabold mb-4">Why Use Find Mate?</h2>
        <p className="text-lg mb-4 opacity-70">
          Connecting roommates across cities in a safe and smart way.
        </p>
        <p className="text-sm opacity-50 max-w-3xl mx-auto">
          Whether you're a student, a professional, or someone relocating —
          Find Mate makes it easy to search, connect, and match with the right
          roommate. Browse listings by location, rent range, or preferences, and
          find a trusted flatmate today!
        </p>
      </div>
    </Fade>
      {/* Search Form */}
      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          setSearchText("");
        }}
        className="flex flex-col md:flex-row gap-2 justify-center items-center md:px-24 mb-10"
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-lg shadow-md w-3/4 lg:w-2/4 h-13 px-4 mb-3 md:mb-0 focus:outline-none focus:shadow-outline md:mr-2"
          type="text"
          placeholder="Search Room By Location"
        />
        <button
          className="btn border-2 border-black text-xl p-[26px] rounded-xl"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 my-10">
        {find.map((user) => {
          const tooltipId = `tooltip-${user._id}`;
          return (
            <div
              key={user._id}
              className="max-w-[600px] flex flex-col justify-between rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2"
            >
              <img
                data-tooltip-id={tooltipId}
                className="w-full h-56 object-cover"
                src={user.photo}
                alt=""
              />
              <Tooltip className="z-10" id={tooltipId}>
                <div className="w-80 h-70 text-2xl">{user.description}</div>
              </Tooltip>

              <div className="p-4 flex flex-col flex-grow rounded-b-2xl bg-gray-400">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-1">{user.title}</h2>
                  <div className="text-md mt-3 font-bold flex items-center gap-1"><MdLocationPin /> <p>{user.location}</p></div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium">
                      {user.availability}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold">
                      Rent Amount: ${user.amount} / mo
                    </span>
                  </div>
                </div>

                <div className="mt-auto w-full text-white cursor-pointer py-2 rounded-xl bg-black text-center text-2xl">
                  <Link to={`/ad/${user._id}`}>See more</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back to Home */}
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
