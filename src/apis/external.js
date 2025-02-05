import axios from "axios";

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5',
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
});

const API_KEY = 'e88f7b5e26e9b1d4e410950b34a10b30';

export const getCityData = async cityName => {
  let response;

  try{
    response = await api.get(`weather?q=${cityName}&appid=${API_KEY}`);
  } catch (err){
    return err;
  }

  return response;
}