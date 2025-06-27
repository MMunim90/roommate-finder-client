import React, { use, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Helmet } from "react-helmet-async";

const MyListing = () => {
  const { user } = use(AuthContext);
  const allAds = useLoaderData();
  const myAds = allAds.filter((ads) => ads.email == user.email);
  const [ads, setAds] = useState(myAds);

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //   console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the ad
        fetch(`https://roommate-finder-server-eight.vercel.app/allAds/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingAds = ads.filter((del) => del._id !== _id);
              setAds(remainingAds);
              Swal.fire({
                title: "Deleted!",
                text: `${user.title} has been deleted.`,
                icon: "success",
              });
            }
          });
      }
    });
  };

  const slightFadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <div>
      <Helmet>
        <title>My Listing | Find Mate</title>
      </Helmet>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="text-center bg-gradient-to-r mb-12 from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg text-white">
              <h2 className="text-5xl font-extrabold mb-4">
                My Added Posts : {myAds.length}
              </h2>
            </div>
      </Fade>

      <div>
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
              {/* row 1 */}
              {myAds.map((user, index) => (
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
                        <div className="text-sm opacity-50">
                          {user.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.roomType}</td>
                  <td>$ {user.amount} / mo</td>
                  <th className="flex flex-col gap-6 md:flex-row md:gap-2">
                    <Link
                      to={`/updateRoommate/${user._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      <GrUpdate size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <MdOutlineDeleteOutline size={30} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
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

export default MyListing;
