import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const BrowseListing = () => {
  const allAds = useLoaderData();
  return (
    <div className="my-10 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Title & Location</th>
            <th>Room Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allAds.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.title}</div>
                    <div className="text-sm opacity-50">{user.location}</div>
                  </div>
                </div>
              </td>
              <td>{user.roomType}</td>
              <td>$ {user.amount} / mo</td>
              <th className="flex flex-col gap-6 md:flex-row md:gap-2">
                <Link to={`/ad/${user._id}`} className="btn btn-lg">
                  See More
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
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
