import React from "react";
import useTrendingCoins from "../utils/useTrendingCoins";

const TrendingCoinCarousel = ({ title }) => {
  const coins = useTrendingCoins();

  return (
    <div className="w-full overflow-x-auto p-6 bg-white">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex items-center space-x-4 mt-4">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="min-h-[18vh] w-[15rem] flex-shrink-0 p-2 rounded-md border shadow"
          >
            <div className="flex items-center space-x-3">
              <img
                className="w-[30px]"
                src={coin.item.thumb || coin.item.small}
                alt={coin.item.name}
              />
              <p className="font-semibold text-gray-700">{coin.item.symbol}</p>
            </div>
            <p className="mt-2 text-gray-600">
              ${coin.item.data?.price_change_percentage_24h?.usd?.toFixed(1)}
            </p>
            <img
              className="w-full h-auto mt-2"
              src={coin.item.data?.sparkline}
              alt="Sparkline"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinCarousel;
