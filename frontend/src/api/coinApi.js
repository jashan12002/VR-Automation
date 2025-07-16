import axios from 'axios';

const API_BASE = 'https://vr-automation.onrender.com/api/coins';

export const fetchTopCoins = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};
