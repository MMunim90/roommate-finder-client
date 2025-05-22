import React from "react";
import { Link } from "react-router";

const AdCard = ({ ad }) => {
  const { title, photo, availability, location, amount } = ad;
  return (
    <div>{availability === "Available" && <div className="max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 w-11/12 mx-auto border-2">
      <img className="w-full h-48 object-cover" src={photo} alt='' />
      <div className="p-4 rounded-b-2xl bg-gray-400">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">Location: {location}</p>
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium">{availability}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold">Rent Amount: ${amount}</span>
          </div>
        </div>
        <div className="w-full text-white cursor-pointer py-2 rounded-xl bg-secondary text-center">
          <Link>See more</Link> {/*to={`/news-details/${id}`}*/}
        </div>
      </div>
    </div>}</div>
  );
};

export default AdCard;
