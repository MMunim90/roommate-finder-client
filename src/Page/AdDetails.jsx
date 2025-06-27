import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const AdDetails = () => {
  const [liked, setLiked] = useState(false);
  const { user } = use(AuthContext);
  const allAds = useLoaderData();
  const {
    _id,
    name,
    email,
    title,
    location,
    amount,
    contact,
    description,
    roomType,
    lifestyle,
    photo,
    availability,
  } = allAds;

  const [count, setCount] = useState(() => {
    const storedCounts = JSON.parse(localStorage.getItem("counts") || "{}");
    return storedCounts[_id] || 0;
  });

  const handleLike = () => {
    const storedCounts = JSON.parse(localStorage.getItem("counts") || "{}");
    const newCount = (storedCounts[_id] || 0) + 1;

    storedCounts[_id] = newCount;
    localStorage.setItem("counts", JSON.stringify(storedCounts));
    setCount(newCount);
    setLiked(true);
    toast.success(`Liked!`);
  };

  const handleUnlike = () => {
    setLiked(false);
    toast.success("Unliked!");
  };
  return (
    <div className="pb-16 my-10">
      <div className="font-extrabold text-2xl mb-10 text-center">
        {liked ? `${count} people interested in` : ""}
      </div>
      <div className="grid grid-cols-1 items-center justify-center p-4 md:p-10 text-black bg-[#F4F3F0] rounded-lg">
        <figure>
          <img
            className="rounded-2xl w-full md:h-[400px] lg:h-[800px] object-cover"
            src={photo}
            alt=""
          />
        </figure>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="card-body text-2xl">
            <h2 className="card-title text-4xl md:text-7xl">{title}</h2>
            <p>
              <b> Description : </b>
              {description}
            </p>
            <p>
              <b> Location : </b>
              {location}
            </p>
            <p>
              <b> RoomType : </b>
              {roomType}
            </p>
            <p>
              <b> Lifestyle : </b>
              {lifestyle}
            </p>
            <p>
              <b> Availability : </b>
              {availability}
            </p>
            <p>
              <b> Amount : </b>$ {amount} / mo
            </p>
            <p>
              <b> Name : </b>
              {name}
            </p>
          </div>

          <div className="px-6 lg:mt-10">
            {
            email !== user.email && <button className="flex items-center gap-4">
              <span className="text-2xl">Like This ?</span>{" "}
              {liked ? (
                <AiFillLike
                  size={30}
                  onClick={() => handleUnlike()}
                  className="inline cursor-pointer"
                />
              ) : (
                <AiOutlineLike
                  size={30}
                  onClick={() => handleLike()}
                  className="inline cursor-pointer"
                />
              )}
            </button>
            }
            <br />
            {liked ? (
              <p className="text-2xl">
                <b> Contact : </b>
                {contact}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="font-bold text-xl py-6 text-center">
        <div className="btn border-2 border-black text-xl">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
