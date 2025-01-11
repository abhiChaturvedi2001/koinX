import useBitcoinPrice from "../utils/useBitcoinPrice";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";
import TradingViewWidget from "./TradingViewWidget";

const BitcoinPrice = ({ coinId }) => {
  useBitcoinPrice(coinId);
  const priceData = JSON.parse(localStorage.getItem("coinData"));

  if (!priceData) return <p>Loading...</p>;

  const {
    image,
    id,
    symbol,
    market_cap_rank,
    market_data: {
      high_24h: { usd: highUSD, inr: highINR } = {},
      price_change_percentage_24h: priceChange = 0,
    } = {},
  } = priceData;

  const isPriceUp = priceChange > 0;

  return (
    <div className="w-[60vw] max-md:w-full min-h-[80vh] bg-white rounded-md p-5 shadow-md">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src={image?.small} alt={id} className="w-8 h-8" />
          <div className="flex items-center space-x-2">
            <p className="capitalize font-semibold">{id}</p>
            <p className="uppercase text-gray-500">{symbol}</p>
          </div>
        </div>
        <p className="bg-gray-400 px-3 py-1 rounded-lg text-white font-medium">
          RANK # {market_cap_rank}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center mt-2 space-x-4">
          <p className="font-bold text-3xl">${highUSD || "N/A"}</p>
          <div
            className={`flex items-center px-2 py-1 rounded-md ${
              isPriceUp ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isPriceUp ? (
              <MdOutlineArrowDropUp className="text-green-600" />
            ) : (
              <IoMdArrowDropdown className="text-red-600" />
            )}
            <span
              className={`ml-1 font-bold ${
                isPriceUp ? "text-green-600" : "text-red-600"
              }`}
            >
              {priceChange.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-700">₹{highINR || "N/A"}</p>
      <TradingViewWidget />
    </div>
  );
};

export default BitcoinPrice;
