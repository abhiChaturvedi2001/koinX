import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useCoinsList = () => {
    const [data, setData] = useState(null);

    const fetchCoinsData = async () => {
        try {
            const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
                { headers: { accept: 'application/json' } }
            );
            localStorage.setItem("coinsList", JSON.stringify(res?.data));
            setData(res?.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Check for local storage data on initial load
        const cachedData = localStorage.getItem("coinsList");
        if (cachedData) {
            setData(JSON.parse(cachedData));
        } else {
            fetchCoinsData();
        }

        // Add event listener to update data when user navigates back
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                fetchCoinsData(); // Fetch latest data when the page is revisited
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return data;
};

export default useCoinsList;
