import axios from 'axios';

const baseURL = 'http://api.coingecko.com/api/v3/';

export const fetchCoins = async (currency) => {
    try {
        const response = await axios.get(`${baseURL}coins/markets`, {
            params: {
                vs_currency: currency,
                order: 'market_cap_desc',
                per_page: 150,
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
