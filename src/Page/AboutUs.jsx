import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { keyframes } from "@emotion/react";

const AboutUs = () => {
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
        <title>About Us | Find Mate</title>
      </Helmet>
      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-400 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="leading-relaxed">
            Find Mate is a modern platform designed to simplify the process of
            finding roommates. Whether you're a student, professional, or
            someone relocating to a new city, our platform helps you connect
            with verified and compatible flatmates easily. With features like
            profile preferences, filters, and verified users, we ensure a safe
            and convenient experience for all our users.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUs;
