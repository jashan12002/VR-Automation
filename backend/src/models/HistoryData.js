const mongoose = require('mongoose');

const HistoryDataSchema = new mongoose.Schema({
  coinId: { type: String, required: true },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  change24h: { type: Number, required: true },
  lastUpdated: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('HistoryData', HistoryDataSchema);
