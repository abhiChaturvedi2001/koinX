import useTrendingCoins from "../utils/useTrendingCoins";

const TrendingCoins = () => {
  const coins = useTrendingCoins();

  if (!coins.length) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-md p-4 mt-2 shadow-lg">
      <h3 className="text-2xl font-semibold">Trending Coins (24h)</h3>
      <div className="mt-4">
        {coins.slice(0, 3).map((coin) => (
          <div key={coin.item.id} className="card flex space-x-2 mt-3">
            <img
              className="rounded-full w-[20px]"
              src={coin.item.thumb}
              alt={coin.item.name}
            />
            <p className="capitalize">
              {coin.item.id} ({coin.item.symbol})
            </p>
            <p>{coin.item.market_data?.price_change_percentage_24h}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrendingCoins;
