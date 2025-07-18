const axios = require('axios');

const COINGECKO_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';


async function fetchTopCoins() {
  const response = await axios.get(COINGECKO_URL, {
    headers: {
      'x-cg-pro-api-key': process.env.COINGECKO_API_KEY
    }
  });
  return response.data;
}

module.exports = { fetchTopCoins };
