import React from "react";
import useBitcoinPrice from "../utils/useBitcoinPrice";
import image2 from "/image2.png";
import image3 from "/image3.png";

const BitcoinInfo = () => {
  useBitcoinPrice();
  const priceData = JSON.parse(localStorage.getItem("coinData"));

  return (
    <div className="bg-gray-100 p-6  min-h-screen">
      <div className="w-[60vw] max-md:w-full bg-white shadow-lg p-6 rounded-lg">
        {/* About Bitcoin */}
        <section className="p-6 border-b border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            About Bitcoin
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            What is Bitcoin?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {priceData?.description?.en.slice(0, 933) || "Loading..."}
          </p>
        </section>

        {/* Details Section */}
        <section className="p-6 border-b border-gray-300">
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat est
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at.
          </p>
          <p className="text-gray-600 leading-relaxed my-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Fermentum hendrerit interdum nullam viverra faucibus. Sit aliquam
            massa vel convallis dui ac.
          </p>
        </section>

        {/* Already Holding Bitcoin Section */}
        <section className="p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Already Holding {priceData?.id}?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Calculate Profits */}
            <div className="bg-blue-500 rounded-md h-[15vh] w-[25vw] max-md:w-full flex p-2 space-x-5 ">
              <img className="" src={image3} alt="" />
              <div>
                <h1 className="font-bold text-white ">
                  Calculate your profits
                </h1>
                <button className="bg-white px-5 py-1 rounded-md mt-2">
                  Check Now
                </button>
              </div>
            </div>
            <div className="bg-[#FF9865] rounded-md h-[15vh] w-[25vw] max-md:w-full  flex p-2 space-x-5 ">
              <img className="" src={image2} alt="" />
              <div>
                <h1 className="font-bold text-white ">
                  Calculate your tax liability
                </h1>
                <button className="bg-white px-5 py-1 rounded-md mt-2">
                  Check Now
                </button>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BitcoinInfo;
