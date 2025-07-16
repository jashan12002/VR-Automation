const HistoryData = require('../models/HistoryData');
const CurrentData = require('../models/CurrentData');


exports.storeHistory = async (req, res) => {
  try {
    const currentCoins = await CurrentData.find({});
    if (!currentCoins.length) {
      return res.status(404).json({ error: 'No current data found' });
    }

    const historyRecords = currentCoins.map(coin => ({
      coinId: coin.coinId,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.price,
      marketCap: coin.marketCap,
      change24h: coin.change24h,
      lastUpdated: coin.lastUpdated
    }));
    await HistoryData.insertMany(historyRecords);
    res.status(201).json({ message: 'History snapshot stored', count: historyRecords.length });
  } catch (err) {
    res.status(500).json({ error: 'Failed to store history', details: err.message });
  }
};

exports.getHistoryByCoinId = async (req, res) => {
  try {
    const { coinId } = req.params;
    console.log(`Fetching history for coinId: ${coinId}`);
    const history = await HistoryData.find({ coinId }).sort({ lastUpdated: 1 });
    if (!history.length) {
      return res.status(404).json({ error: 'No history found for this coin' });
    }
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history', details: err.message });
  }
};
