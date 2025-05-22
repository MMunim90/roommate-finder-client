import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/v4THdMnz/404.gif)] bg-contain bg-no-repeat h-[1600px]">
      <h1 className="font-bold text-xl text-black py-6 text-center">
        <FaArrowLeftLong className="inline" /> &nbsp;
        <Link to="/">Back to home</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
