import React from "react";
import BitcoinPrice from "./BitcoinPrice";
import AdCard from "./AdCard";
import TrendingCoins from "./TrendingCoins";
import OverviewComponent from "./OverviewComponent";
import BitcoinInfo from "./BitcoinInfo";
import Tokenomics from "./Tokenomics";
import SentimentAnalysis from "./SentimentAnalysis";
import TrendingCoinCarousel from "./TrendingCoinCarousel";
import { useParams } from "react-router-dom";
import Team from "./Team";

const SinglePage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:space-x-5 w-[90%] max-md:w-full mt-5 max-md:p-6">
        <BitcoinPrice coinId={id} />
        <div className="hidden md:flex flex-col space-y-4">
          <AdCard />
          <TrendingCoins />
        </div>
      </div>
      <OverviewComponent />
      <BitcoinInfo />
      <Tokenomics />
      <SentimentAnalysis />
      <Team />

      <TrendingCoinCarousel title={"You May Also Like"} />
      <TrendingCoinCarousel title={"Trending Coins"} />
      <div className="flex flex-col md:hidden p-6 space-y-4">
        <AdCard />
        <TrendingCoins />
      </div>
    </>
  );
};

export default SinglePage;
