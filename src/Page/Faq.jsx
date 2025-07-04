import React from "react";
import { Helmet } from "react-helmet-async";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
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
  const faqs = [
    {
      question: "What is Find Mate?",
      answer:
        "Find Mate is a platform that helps you connect with trusted and compatible roommates in your preferred location.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, Find Mate is completely free for basic roommate searching and profile viewing.",
    },
    {
      question: "How do I contact a potential roommate?",
      answer:
        "After creating your profile, you can view and message potential roommates directly from the platform.",
    },
    {
      question: "Is my information safe?",
      answer:
        "Yes, we take your privacy seriously and ensure your data is stored securely and only visible to verified users.",
    },
    {
      question: "Can I update my profile later?",
      answer:
        "Yes, you can update your details, preferences, and availability anytime from your dashboard.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>FAQ's | Find Mate</title>
      </Helmet>

      <Fade direction="down" keyframes={slightFadeDown}>
        <div className="max-w-4xl mx-auto p-6 my-10 bg-gray-400 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow text-black"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Faq;
