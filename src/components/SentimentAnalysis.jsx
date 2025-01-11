import React from "react";

const SentimentAnalysis = () => {
  return (
    <div className="bg-gray-100 p-6 ">
      <div className="w-[60vw] max-md:w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Sentiment</h2>
          <h3 className="text-sm font-semibold text-gray-500">Key Events</h3>
        </div>
        <div className="p-6 grid grid-cols-2 overflow-scroll  gap-4">
          <div className="flex items-start bg-blue-50 h-[20vh] p-4 rounded-lg shadow-sm">
            <div>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Ar consectetur ut lorem risus est facilisis auctor.
              </p>
            </div>
          </div>
          <div className="flex items-start bg-green-50 p-4 rounded-lg shadow-sm">
            <div>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Ar consectetur ut lorem
                risus est facilisis auctor.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Sed vitae nisl risus habitant.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">
            Analyst Estimates
          </h3>
          <div className="flex items-center space-x-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="w-full bg-green-100 h-full rounded-full  flex items-center justify-center">
                <span className="text-green-500  font-semibold text-lg">
                  76%
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="text-gray-600 text-sm w-16">Buy</span>
                <div className="bg-gray-200 flex-1 h-2 rounded-lg overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: "76%" }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-gray-600">76%</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-600 text-sm w-16">Hold</span>
                <div className="bg-gray-200 flex-1 h-2 rounded-lg overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full"
                    style={{ width: "8%" }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-gray-600">8%</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 text-sm w-16">Sell</span>
                <div className="bg-gray-200 flex-1 h-2 rounded-lg overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "16%" }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-gray-600">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
