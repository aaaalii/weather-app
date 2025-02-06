import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

export default function Detail({setFavouriteList, favouriteList}){
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  console.log("🚀 ~ Detail ~ data:", data)
  function addToFavouriteList(){
    if (!favouriteList.some(item => item.city.name === data.city.name)) {
      setFavouriteList([
        ...favouriteList,
        data
      ]);
      navigate('/favourites');
    } else {
      alert('This city already exists in the favourites')
    }
  }
  return(
    <div className="full-height p-4">
        {
          data ?
            (
              <div>
                <h2 className="border-bottom"><FontAwesomeIcon icon={faCloudSun}/> {data['city']['name']} Weather Forecast</h2>
                <div className="d-flex justify-content-between">
                  {
                    data['list'].map((item, index) => (
                      <div key={index}>
                        <h2>{item['dt_txt']} | {item['weather'][0]['main']}</h2>
                        <p>Temperature: {item['main']['temp']} C</p>
                        <p>Feels Like: {item['main']['feels_like']} C</p>
                        <p>Humidity: {item['main']['humidity']}</p>
                        <p>Pressure: {item['main']['pressure']}</p>
                        <p>Max Temperature: {item['main']['temp_max']}</p>
                        <p>Min Temperature: {item['main']['temp_min']}</p>
                      </div>
                    ))
                  }
                </div>
                <button onClick={addToFavouriteList}>Add to favourites</button>
              </div>
            ) : 'No details!'
        }
    </div>
  );
}