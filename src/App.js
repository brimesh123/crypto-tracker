import React, { useState, useEffect } from 'react';
import { fetchCoins, fetchCoinDetails } from './api';
import CoinList from './components/CoinList';
import CoinDetails from './components/CoinDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getCoins = async () => {
            const allCoins = await fetchCoins();
            setCoins(allCoins);
        };
        getCoins();
    }, []);

    const handleSearchChange = (value) => {
        setSearch(value.toLowerCase());
    };

    const handleCoinClick = async (coinId) => {
        const coinData = await fetchCoinDetails(coinId);
        setSelectedCoin(coinData);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Crypto Currency Tracker</h1>
               <SearchBar onChange={handleSearchChange} /> 


            </header>
            <center>  {selectedCoin && <CoinDetails coin={selectedCoin} />} </center>

            <CoinList coins={filteredCoins} onCoinClick={handleCoinClick} />
        </div>
    );
}

export default App;
