import React from 'react';

const AddRoommate = () => {
    return (
        <div className="p-28 bg-[url(https://i.ibb.co/q3j15yY0/11.png)] bg-cover bg-no-repeat pb-20 text-black">
      <h1 className='font-bold text-xl'><FaArrowLeftLong className='inline' /> &nbsp;<Link to='/'>Back to home</Link></h1>
      <div className="p-20 text-center space-y-4">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          Fill in the details below to add a new coffee to the menu. Include the
          name, origin, flavor notes, and price to help customers discover their
          next favorite brew.
        </p>
      </div>
      <form onSubmit={handleAddCoffee} className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
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
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Price</label>
          <input
            type="number"
            name="price"
            className="input w-full"
            placeholder="Enter Coffee Price"
          />
        </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        </div>

        <input type="submit" className="btn w-full mt-6 bg-[#D2B48C] font-rancho text-lg border-black border-2" value="Add" />
      </form>
    </div>
    );
};

export default AddRoommate;