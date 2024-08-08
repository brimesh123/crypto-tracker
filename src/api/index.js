import axios from 'axios';

const baseURL = 'https://api.coingecko.com/api/v3/';

export const fetchCoins = async () => {
    try {
        const response = await axios.get(`${baseURL}coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 25,  // Increase this number to fetch more coins
                page: 1,
                sparkline: false
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching coins:', error);
        throw error;
    }
};

export const fetchCoinDetails = async (coinId) => {
    try {
        const response = await axios.get(`${baseURL}coins/${coinId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coin details:', error);
        throw error;
    }
};
