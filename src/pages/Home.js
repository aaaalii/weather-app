import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { getCityData } from "../apis/external";
import { useState } from "react";

export default function Home(){

  const [cityName, setCityName] = useState('');
  async function searchCity(){
    try {
      const response = await getCityData(cityName);
      console.log(response);
    } catch (error) {
      
    }
  }
  return(
    <>
      <Searchbar placeholder='Enter city name' setCityName={setCityName}/>
      <button onClick={searchCity}>Search</button>
    </>
  );
}