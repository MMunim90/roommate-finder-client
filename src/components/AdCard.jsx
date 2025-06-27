import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const AdCard = ({ ad }) => {
  const { title, photo, availability, location, amount, description, _id } = ad;
  const tooltipId = `tooltip-${_id}`;
  return (
    <div className="max-w-[600px] flex flex-col rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2">
      <div className="relative">
        <img
          data-tooltip-id={tooltipId}
          className="w-full h-56 object-cover"
          src={photo}
          alt=""
        />
        <Tooltip className="z-10" id={tooltipId}>
          <div className="w-50 h-60 text-2xl">{description}</div>
        </Tooltip>
      </div>

      <div className="p-4 flex flex-col flex-grow rounded-b-2xl bg-gray-400">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <div className="text-md mt-3 font-bold flex items-center gap-1"><MdLocationPin /> <p>{location}</p></div>
          <div className="flex items-center mb-2">
            <span className="text-sm font-bold opacity-70">{availability}</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold">
              Rent Amount: ${amount} / mo
            </span>
          </div>
        </div>

        <div className="mt-auto w-full text-white cursor-pointer py-2 rounded-xl bg-black text-center text-2xl">
          <Link to={`/ad/${_id}`}>See more</Link>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
