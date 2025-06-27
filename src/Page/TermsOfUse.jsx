import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-400 rounded-lg shadow-md">
      <Helmet>
        <title>Terms of Use | Find Mate</title>
      </Helmet>
      <h2 className="text-3xl font-semibold mb-4">Terms of Use</h2>
      <p className="leading-relaxed mb-2">
        By using Find Mate, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          You must provide accurate and truthful information in your profile.
        </li>
        <li>
          Harassment, discrimination, or abusive behavior will not be tolerated.
        </li>
        <li>We reserve the right to remove any user violating our policies.</li>
        <li>
          Find Mate is not responsible for personal agreements made between
          roommates.
        </li>
        <li>All data collected is handled as per our privacy policy.</li>
      </ul>
      <p className="mt-4">
        Please read and understand these terms before using our service.
      </p>
    </div>
  );
};

export default TermsOfUse;
