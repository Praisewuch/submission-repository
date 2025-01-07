import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
console.log("API Key:", apiKey);

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  let request = axios.get(`${baseUrl}`);
  return request.then((response) => response.data);
};

const getWeather = (country) => {
  const altUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${apiKey}`;
  let request = axios.get(`${altUrl}`);
  return request.then((response) => response.data)
};

export default { getAll,getWeather };
