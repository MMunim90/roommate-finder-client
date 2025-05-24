import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const BrowseListing = () => {
  const allAds = useLoaderData();
  const [find, setFind] = useState(allAds);
  const [searchText, setSearchText] = useState('')

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
  return (
    <div className="my-10">
      <form
        onSubmit={(e) => {
          handleSearch(e, searchText);
          // reset input state
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
        <button className="btn border-2 border-black text-xl p-[26px] rounded-xl" type="submit" label="Search">Search</button>
      </form>

        <div className="overflow-x-auto">
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
          {find.map((user, index) => (
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
