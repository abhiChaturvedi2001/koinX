import React from "react";
import image1 from "/image1.png";

const AdCard = () => {
  return (
    <div className="bg-blue-700 rounded-md shadow-lg p-6 w-[90%] sm:w-[25vw] mx-auto min-h-[40vh] text-center flex flex-col items-center">
      {/* Heading */}
      <h5 className="text-white font-semibold text-2xl leading-snug">
        Get Started with KoinX <br /> for FREE
      </h5>

      {/* Description */}
      <p className="my-4 text-white text-sm sm:text-base leading-relaxed">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      {/* Image */}
      <img
        className="mx-auto my-4 w-3/4 sm:w-1/2"
        src={image1}
        alt="KoinX features visual"
      />

      {/* Call to Action Button */}
      <button className="bg-white text-blue-700 font-medium text-sm sm:text-base px-4 py-2 rounded-md w-[80%] sm:w-[70%] transition duration-200 hover:bg-gray-200">
        Get Started for FREE
      </button>
    </div>
  );
};

export default AdCard;
