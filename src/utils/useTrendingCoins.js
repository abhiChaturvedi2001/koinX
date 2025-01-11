import { useEffect, useState } from "react";

const useTrendingCoins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
            const result = await response.json();
            setCoins(result.coins);
        };

        fetchTrendingCoins();
    }, []);

    return coins;
};
export default useTrendingCoins;
