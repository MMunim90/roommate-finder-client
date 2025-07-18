import React, { use } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Helmet } from "react-helmet-async";

const AddRoommate = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const handleAddRoommate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newAd = Object.fromEntries(formData.entries());
    // console.log(newAd);

    // send data to the database
    fetch("https://roommate-finder-server-eight.vercel.app/allAds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log('added successfully!');
          Swal.fire({
            title: "AD added successfully!!!",
            icon: "success",
            draggable: true,
          });
          form.reset();
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
    <div className="p-4 md:p-8 pb-12">
      <Helmet>
        <title>Ad Find Post | Find Mate</title>
      </Helmet>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="text-center mb-12 bg-gradient-to-r from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg text-white">
          <h2 className="text-5xl font-extrabold mb-4">
            Post Your Roommate Ad
          </h2>
          <p className="text-lg mb-4 opacity-90">
            Looking for a flatmate? Let others find you!
          </p>
          <p className="text-sm opacity-80 max-w-3xl mx-auto">
            Whether you have a spare room, a shared flat, or you're subletting —
            post your listing easily on Find Mate. Reach verified users nearby
            and connect with the perfect roommate who matches your lifestyle,
            budget, and schedule.
          </p>
        </div>
      </Fade>

      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="p-4 space-y-4 flex flex-col mb-6">
          <h1 className="text-4xl lg:text-6xl text-center">
            Add To Find Roommate
          </h1>
          <p className="text-center text-2xl">
            Fill in the details below to add a new roommate listing. Include the
            name, location, lifestyle preferences, and budget to help users find
            their ideal living match with ease.
          </p>
        </div>
      </Fade>
      <form
        onSubmit={handleAddRoommate}
        className="bg-gray-400 p-6 rounded-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={user.displayName}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter Title"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Enter Location"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              name="amount"
              className="input w-full"
              placeholder="Enter Rent Amount per Month"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Contact Info</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              placeholder="Enter Contact Info"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Enter Room Description"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Room Type</label>
            <select className="input w-full" name="roomType" required>
              <option>Select</option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Lifestyle Preferences</label>
            <select className="input w-full" name="lifestyle">
              <option>Select</option>
              <option value="Pets">Pets</option>
              <option value="Smoking">Smoking</option>
              <option value="Night Owl">Night Owl</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter Photo URL"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset rounded-box border p-4 mt-6">
          <label className="label">Availability</label>
          <select className="input w-full" name="availability">
            <option value="Available">Available</option>
            <option value="Available Soon">Available Soon</option>
            <option value="Not Available">Not Available</option>
          </select>
        </fieldset>

        <div className="flex justify-center items-center gap-6 mt-10">
          <input
            type="submit"
            className="btn bg-black text-white text-lg border-black border-2"
            value="Add"
          />
          <h1 className="btn font-bold text-lg border-black border-2">
            <Link onClick={() => navigate(-1)}>Cancel</Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default AddRoommate;
