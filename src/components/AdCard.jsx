import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const AdCard = ({ ad }) => {
  const { title, photo, availability, location, amount, description, _id } = ad;
  const tooltipId = `tooltip-${_id}`;
  return (
    <div className="max-w-[600px] rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2">
      <img data-tooltip-id={tooltipId} className="w-full h-56 object-cover" src={photo} alt='' />
      <Tooltip className="z-10" id={tooltipId}><div className="w-auto h-auto text-2xl">
        {description}
        </div></Tooltip>
      <div className="p-4 rounded-b-2xl bg-gray-400">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">Location: {location}</p>
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium">{availability}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold">Rent Amount: ${amount} / mo</span>
          </div>
        </div>
        <div className="w-full text-white cursor-pointer py-2 rounded-xl bg-secondary text-center">
          <Link>See more</Link> {/*to={`/news-details/${id}`}*/}
        </div>
      </div>
    </div>
  );
};

export default AdCard;
