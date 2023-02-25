import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'dbfd75ec16msh01db1ac0495be39p1233a4jsn483b25b96702',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const api = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}