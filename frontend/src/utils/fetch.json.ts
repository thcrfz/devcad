import axios from 'axios';

export const fecthJson = async (url: string) => {
  const rawData = await axios.get(url);
  return rawData;
};
