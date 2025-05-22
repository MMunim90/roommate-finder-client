import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const AdDetails = () => {
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
  return (
    <div className="pb-20 my-10">
      <div className="grid grid-cols-1 items-center justify-center p-4 md:p-10 text-black bg-[#F4F3F0] rounded-lg">
        <figure>
          <img className="rounded-2xl w-full md:h-[400px] lg:h-[800px] object-cover" src={photo} alt="" />
        </figure>
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
            <b> Amount : </b>
            $ {amount} / mo
          </p>
          <p>
            <b> Name : </b>
            {name}
          </p>
          <p>
            <b> Contact : </b>
            {contact}
          </p>
        </div>
      </div>
      <div className="font-bold text-xl py-6 text-center">
        <div className="btn border-2 border-black text-white bg-secondary">
          <FaArrowLeftLong className="inline" /> &nbsp;
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
