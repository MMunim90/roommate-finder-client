import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const UpdateRoommate = () => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    email,
    title,
    location,
    amount,
    contact,
    description,
    photo,
  } = useLoaderData();
  const handleUpdateAd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedAd = Object.fromEntries(formData.entries());
    // console.log(updatedAd);

    // send updated coffee to the db
    fetch(`https://roommate-finder-server-eight.vercel.app/allAds/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedAd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            imageUrl: photo,
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Coffee Photo",
            icon: "success",
            title: "Great!",
            text: `Update ${name} Details Successfully`,
            draggable: true,
          });
          navigate("/dashboard/myListing");
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
        <title>Update Find Post | Find Mate</title>
      </Helmet>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="text-center mb-12 bg-gradient-to-r from-gray-400 to-gray-700 py-12 px-6 rounded-lg shadow-lg text-white">
          <h2 className="text-5xl font-extrabold mb-4">
            Update Your Roommate Post
          </h2>
          <p className="text-lg mb-4 opacity-90">
            Keep your ad fresh and relevant to attract the right flatmate!
          </p>
          <p className="text-sm opacity-80 max-w-3xl mx-auto">
            Whether your availability has changed, you’ve found a partial match,
            or want to adjust details like rent or preferences — updating your
            Find Mate listing ensures more accurate and quicker responses. Stay
            visible and make your post stand out!
          </p>
        </div>
      </Fade>

      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="p-4 space-y-6 mb-6 text-center">
          <h1 className="text-6xl">Update Find Post</h1>
          <p>
            Easily Update Your Find Post to Reach More Roommates with Accurate
            Details, Photos, and Location Across Bangladesh
          </p>
        </div>
      </Fade>
      <form onSubmit={handleUpdateAd} className="bg-gray-400 p-6 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full"
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              defaultValue={location}
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              name="amount"
              className="input w-full"
              defaultValue={amount}
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Contact Info</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              defaultValue={contact}
              required
            />
          </fieldset>
          <fieldset className="fieldset rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              defaultValue={description}
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
              defaultValue={photo}
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
            value=" Update"
          />
          <h1 className="btn font-bold text-lg border-black border-2">
            <Link to="/dashboard/myListing">Cancel</Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default UpdateRoommate;
