const cron = require('node-cron');
const CurrentData = require('../models/CurrentData');
const HistoryData = require('../models/HistoryData');


cron.schedule('0 * * * *', async () => {
  try {
    const currentCoins = await CurrentData.find({});
    if (!currentCoins.length) return;
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
    console.log(`[CRON] History snapshot stored: ${historyRecords.length} records at ${new Date().toISOString()}`);
  } catch (err) {
    console.error('[CRON] Failed to store history:', err.message);
  }
});
