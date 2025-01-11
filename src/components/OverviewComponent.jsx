import React from "react";
import useBitcoinPrice from "../utils/useBitcoinPrice";
import { MdOutlineArrowDropUp } from "react-icons/md";
const OverviewComponent = () => {
  useBitcoinPrice();
  const priceData = JSON.parse(localStorage.getItem("coinData"));
  return (
    <div className="p-6 min-h-[55vh] w-[63vw] max-md:w-full">
      {/* Header */}
      <div className="flex gap-4 pb-4 border-b border-gray-300 overflow-scroll">
        <span className="font-semibold text-blue-600">Overview</span>
        <span>Fundamentals</span>
        <span>News Insights</span>
        <span>Sentiments</span>
        <span>Team</span>
        <span>Technicals</span>
        <span>Tokenomics</span>
      </div>

      {/* Performance Section */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <div>
          <h2 className="text-lg font-bold">Performance</h2>

          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>

            <div className="relative mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 h-2 rounded-full bg-gradient-to-r from-red-500 to-green-500"
                style={{ width: "60%" }}
              ></div>
              <span className="absolute top-[10px] left-[55%] translate-x-[-50%] text-lg">
                <MdOutlineArrowDropUp />
              </span>
              <span className="absolute top-[25px] left-[55%] translate-x-[-50%] text-sm">
                $48,637.83
              </span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>${priceData?.market_data?.low_24h?.usd}</span>
              <span>${priceData?.market_data?.high_24h?.usd}</span>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-sm">
            <div>
              <p>52W Low</p>
              <p className="font-bold text-red-500">$16,930.22</p>
            </div>

            <div>
              <p>52W High</p>
              <p className="font-bold text-green-500">$49,743.83</p>
            </div>
          </div>
        </div>

        {/* Fundamentals Section */}
        <div className="mt-5">
          <h2 className="text-lg font-bold">Fundamentals</h2>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div className="border-b py-2">
              <p>{priceData?.id} Price</p>
              <p className="font-bold">$16,815.46</p>
            </div>
            <div className="border-b py-2">
              <p>Market Cap</p>
              <p className="font-bold">
                ${priceData?.market_data?.market_cap?.usd}
              </p>
            </div>
            <div className="border-b py-2">
              <p>24h Low / 24h High</p>
              <p className="font-bold">
                ${priceData?.market_data?.low_24h?.usd} / $
                {priceData?.market_data?.high?.usd}
              </p>
            </div>
            <div className="border-b py-2">
              <p>Market Cap Dominance</p>
              <p className="font-bold">38.343%</p>
            </div>
            <div className="border-b py-2">
              <p>7d Low / 7d High</p>
              <p className="font-bold">$16,382.07 / $16,874.12</p>
            </div>
            <div className="border-b py-2">
              <p>Volume / Market Cap</p>
              <p className="font-bold">0.0718</p>
            </div>
            <div className="border-b py-2">
              <p>Trading Volume</p>
              <p className="font-bold">
                ${priceData?.market_data?.total_volume?.usd}
              </p>
            </div>
            <div className="border-b py-2">
              <p>All-Time High</p>
              <p className="font-bold text-red-500">$69,044.77 -75.6%</p>
            </div>
            <div className="border-b py-2">
              <p>Market Cap Rank</p>
              <p className="font-bold">
                #{priceData?.market_data?.market_cap_rank}
              </p>
            </div>
            <div className="border-b py-2">
              <p>All-Time Low</p>
              <p className="font-bold text-green-500">$67.81 24279.1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
