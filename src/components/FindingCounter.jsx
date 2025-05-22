import React from "react";
import CountUp from "react-countup";

const FindingCounter = () => {
  return (
    <div className="my-8">
      <h1 className="font-bold text-3xl lg:text-5xl my-10 text-secondary text-center">Why You Need To Use Find Mate ?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-start text-black">
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6"
            src="https://i.ibb.co.com/NnWrQyGp/success-staffs.png"
            alt=""
          />
          <h1 className="text-secondary text-3xl my-4">Record!</h1>
          <CountUp
            className="font-extrabold text-5xl text-secondary"
            end={3200}
            duration={10}
          />{" "}
          <span className="font-extrabold text-5xl text-secondary">+</span>
          <p className="opacity-50 mt-6">Total Findings</p>
        </div>
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6 w-25"
            src="https://i.ibb.co/j9Q961jL/key.png"
            alt=""
          />
          <h1 className="text-secondary text-3xl my-4">Safety</h1>
          {" "}
          <p className="opacity-50 mt-6">Your safety is our top priority.</p>
        </div>
        <div className="bg-gray-300 p-12 rounded-2xl">
          <img
            className="mb-6 w-16"
            src="https://i.ibb.co/WWNw4cw7/5min.png"
            alt=""
          />
          <h1 className="text-secondary text-3xl my-4">We're the busiest</h1>
          <CountUp
            className="font-extrabold text-5xl text-secondary"
            end={5}
            duration={10}
          />{" "}
          <p className="opacity-50 mt-6">Every 5 minutes someone finds a roommate on Find Mate</p>
        </div>
      </div>
    </div>
  );
};

export default FindingCounter;
