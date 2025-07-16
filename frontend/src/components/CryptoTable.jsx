import React from 'react';

const CryptoTable = ({ coins }) => (
  <div className="overflow-x-auto rounded-lg shadow-lg">
    <table className="min-w-full bg-gray-900 text-white border border-gray-800 rounded-lg">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-4 py-3 text-left">Coin</th>
          <th className="px-4 py-3 text-left">Symbol</th>
          <th className="px-4 py-3 text-right">Price (USD)</th>
          <th className="px-4 py-3 text-right">Market Cap</th>
          <th className="px-4 py-3 text-right">24h % Change</th>
          <th className="px-4 py-3 text-right">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.coinId} className="border-t border-gray-800 hover:bg-gray-800 transition">
           <td className="px-4 py-3">
              <div className="flex items-center">
                <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                <span className="font-semibold">{coin.name}</span>
              </div>
            </td>
            <td className="px-4 py-3 uppercase font-mono text-yellow-300">{coin.symbol}</td>
            <td className="px-4 py-3 text-right font-semibold">${coin.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td className="px-4 py-3 text-right">${coin.marketCap.toLocaleString()}</td>
            <td className={`px-4 py-3 text-right font-bold ${coin.change24h > 0 ? 'text-green-400' : 'text-red-400'}`}>{coin.change24h.toFixed(2)}%</td>
            <td className="px-4 py-3 text-right text-xs text-gray-400">{new Date(coin.lastUpdated).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CryptoTable;
