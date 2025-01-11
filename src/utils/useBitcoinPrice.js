import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useBitcoinPrice = (coinId) => {
    const [data, setData] = useState(null);
    const options = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${coinId}`,
        headers: { accept: 'application/json' }
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.request(options);
            // i am using this because of api too many request
            localStorage.setItem("coinData", JSON.stringify(res?.data));
            setData(res?.data);
        };

        fetchData();
    }, []);

    return data;
};

export default useBitcoinPrice;
