import Searchbar from "../components/Searchbar";
import { getCityData } from "../apis/external";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

export default function Home({recent, setRecent}){

  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError('');
  }, [data]);



  async function searchCity(){
    try {
      setLoading(true);
      const response = await getCityData(cityName);
      console.log("🚀 ~ searchCity ~ response:", response)
      if(response['status'] === 200){
        setData(response['data']);
        setRecent([
          ...recent,
          response['data']
        ]);
        setCityName('');
        navigate('/details', { state: response['data'] });
      } else {
        setError('City Not Found');
      }
      setLoading(false);
    } catch (error) {
      console.log("🚀 ~ searchCity ~ error:", error)
    }
  }

  return(
    <>
      <div className="p-4 full-height">
      <h2 className="border-bottom">Home</h2>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex">
              <Searchbar placeholder='Enter city name' setCityName={setCityName} cityName={cityName}/>
              <button onClick={searchCity} className={`ms-3`} disabled={loading}>{ loading ? <TailSpin
                visible={true}
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
              /> : 'Search' }</button>
            </div>
              <div className={`home__weather mt-4 ${ (error !== '') ? 'error' : ''}`}>
                {/* {
                  data ? (
                    <>
                      <h1 className="border-bottom">{ data['city']['name'] } Weather</h1>
                      <h2>{ data['weather'][0]['main'] }</h2>
                      <p>Temperature: {data['main']['temp']}</p>
                      <button onClick={seeDetails}>See Details</button>
                    </>
                  ) : ('Search for a city')
                } */}
                {
                  error === '' ? 'Search for a city' : 'No city found'
                }
              </div>
          </div>
          <div className="recent">
            <h3>Recent</h3>
            <div>
              {
                (recent.length === 0) ? (
                  'No recent searches'
                ) : (
                  [...recent].reverse().map((data, index) => (
                    <div className="d-flex mb-2" key={index}>
                      <div className="me-4">
                        {data['city']['name']}
                      </div>
                      <button onClick={() => {
                        navigate('/details', { state: data })
                      }}>See Details</button>
                    </div>
                  ))
                ) 
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}