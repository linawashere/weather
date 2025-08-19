import 'dotenv/config';
const API_KEY = process.env.WEATHERSTACK_API_KEY;
const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

export async function getWeather(city) {
  try {
    const response = await fetch(`${API_URL}${city}`);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.info);
    }
    
    return data;
  } catch (error) {
    console.error("Ошибка запроса:", error);
    throw error;
  }
}