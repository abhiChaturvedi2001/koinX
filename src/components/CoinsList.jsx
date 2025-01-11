import React from "react";
import useCoinsList from "../utils/useCoinsList";
import { Link } from "react-router-dom";

const CoinsList = () => {
  useCoinsList();
  const coins = JSON.parse(localStorage.getItem("coinsList"));
  console.log(coins);
  if (!coins) return <h1>loading......</h1>;
  return (
    <>
      <div className="grid grid-cols-6 gap-5 m-5 max-md:grid-cols-4 max-sm:grid-cols-2">
        {coins.map((item, index) => {
          return (
            <Link key={index} to={`/${item.id}`}>
              <div className="bg-gray-200 shadow h-[15vh] pt-5 cursor-pointer  ">
                <img className="w-[50px] mx-auto" src={item.image} alt="" />
                <h1 className="text-center">{item.id}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CoinsList;
