import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddRoommate = () => {
  // const handleAddCoffee = (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const newCoffee = Object.fromEntries(formData.entries());
  //   console.log(newCoffee);

  //   // send coffee data to the database
  //   fetch("http://localhost:3000/addRoommate", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newCoffee),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.insertedId) {
  //         console.log('added successfully!');
  //         Swal.fire({
  //           title: "Coffee added successfully!!!",
  //           icon: "success",
  //           draggable: true,
  //         });
  //         form.reset()
  //       }
  //     });
  // };
  return (
    <div className="p-28 bg-[url(https://i.ibb.co/q3j15yY0/11.png)] bg-cover bg-no-repeat pb-20">
      <h1 className="font-bold text-xl">
        <FaArrowLeftLong className="inline" /> &nbsp;
        <Link to="/">Back to home</Link>
      </h1>
      <div className="p-20 text-center space-y-4">
        <h1 className="text-6xl">Add To Find Roommate</h1>
        <p>
          Fill in the details below to add a new roommate listing. Include the
          name, location, lifestyle preferences, and budget to help users find
          their ideal living match with ease.
        </p>
      </div>
      <form className="text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              readOnly={name}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              // readOnly={email}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Enter Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              name="amount"
              className="input w-full"
              placeholder="Enter Rent Amount"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Contact Info</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              placeholder="Enter Contact Info"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Enter Room Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Room Type</label>
            <select className="input w-full" name="roomType">
              <option value="single">Single</option>
              <option value="shared">Shared</option>
              <option value="other">Other</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Lifestyle Preferences</label>
            <select className="input w-full" name="lifestyle">
              <option value="pets">Pets</option>
              <option value="smoking">Smoking</option>
              <option value="nightOwl">Night Owl</option>
              <option value="other">Other</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Availability</label>
            <select className="input w-full" name="availability">
              <option value="available">Available</option>
              <option value="availableSoon">Available Soon</option>
              <option value="notAvailable">Not Available</option>
            </select>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn w-full mt-6 bg-[#D2B48C] font-rancho text-lg border-black border-2"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddRoommate;
