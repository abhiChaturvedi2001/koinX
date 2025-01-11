import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useCoinsList = () => {
    const [data, setData] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', // Correct CoinGecko API URL
        headers: { accept: 'application/json' } // No API key required for public API
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.request(options);
            localStorage.setItem("coinsList", JSON.stringify(res?.data));
            setData(res?.data);
        };

        fetchData();
    }, []);

    return data;
};

export default useCoinsList;
