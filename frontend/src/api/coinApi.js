import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/coins';

export const fetchTopCoins = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};
