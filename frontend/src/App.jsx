import React, { useEffect, useState } from 'react';
import CryptoTable from './components/CryptoTable';
import { fetchTopCoins } from './api/coinApi';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const loadCoins = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTopCoins();
      setCoins(data);
    } catch (err) {
      setError('Failed to fetch coins');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCoins();
    const interval = setInterval(loadCoins, 30 * 60 * 1000); 
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-yellow-400 drop-shadow-lg">Top 10 Cryptocurrencies</h1>
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by name or symbol..."
            className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
         
        </div>
        {loading ? (
          <div className="text-center text-lg py-8 animate-pulse">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-8">{error}</div>
        ) : (
          <CryptoTable coins={filteredCoins} />
        )}
      </div>
      
    </div>
  );
}

export default App;
