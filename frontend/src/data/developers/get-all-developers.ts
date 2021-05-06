import { DEVELOPERS_URL } from '../../config/app-config';
import { fecthJson } from '../../utils/fetch.json';

export const getAllDevelopers = async () => {
  const url = `${DEVELOPERS_URL}`;
  const { data: developers } = await fecthJson(url);
  return developers;
};
