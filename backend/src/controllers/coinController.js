const { fetchTopCoins } = require('../services/coinGeckoService');
const CurrentData = require('../models/CurrentData');

exports.getTopCoins = async (req, res) => {
  try {
    const coins = await fetchTopCoins();

    for (const coin of coins) {
      await CurrentData.findOneAndUpdate(
        { coinId: coin.id },
        {
          coinId: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          price: coin.current_price,
          marketCap: coin.market_cap,
          change24h: coin.price_change_percentage_24h,
          lastUpdated: coin.last_updated
        },
        { upsert: true, new: true }
      );
    }
    res.json(coins.map(coin => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      lastUpdated: coin.last_updated
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch coins' });
  }
};
