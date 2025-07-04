import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { keyframes } from "@emotion/react";

const Support = () => {
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
        <title>Support | Find Mate</title>
      </Helmet>
      <Fade direction="down" keyframes={slightFadeDown}>
      <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-400 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Support</h2>
      <p className="leading-relaxed">
        Need help? We're here for you! If you have questions or face issues
        using Find Mate, feel free to reach out through our contact form or
        email us at
        <a href="mailto:support@findmate.com" className="underline ml-1">
          support@findmate.com
        </a>
        . Our team is dedicated to assisting you as quickly as possible.
      </p>
      <p className="mt-4">
        You can also check our FAQs and help guides for quick answers.
      </p>
      </div>
      </Fade>
      
    </div>
  );
};

export default Support;
