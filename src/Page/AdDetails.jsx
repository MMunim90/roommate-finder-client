import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const AdDetails = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const Details = useLoaderData();
  const {
    name,
    title,
    location,
    amount,
    contact,
    description,
    roomType,
    lifestyle,
    photo,
    availability,
  } = Details;

  const handleLike = () => {
    setLiked(true);
    setCount((prev) => prev + 1);
    toast.success("Liked!");
  };

  const handleUnlike = () => {
    setLiked(false);
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    toast.success("Unliked!");
  };
  return (
    <div className="pb-20 my-10">
    <div className="font-extrabold text-2xl text-secondary mb-10 text-center">{liked ? `${count} people interested in` : ""}</div>
      <div className="grid grid-cols-1 items-center justify-center p-4 md:p-10 text-black bg-[#F4F3F0] rounded-lg">
        <figure>
          <img
            className="rounded-lg w-full md:h-[400px] lg:h-[800px] object-cover"
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
            {
                liked  ? <p>
              <b> Contact : </b>
              {contact}
            </p> : ''
            }
          </div>

          <div className="px-6 lg:mt-10">
            <button className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
      <div className="font-bold text-xl py-6 text-center">
        <div className="btn border-2 border-black text-white bg-secondary text-xl">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
