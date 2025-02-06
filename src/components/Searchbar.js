export default function Searchbar({placeholder, setCityName, cityName}){
  return (
    <>
      <div className="search-bar--container">
        <input id='cityName' value={cityName} type="text" placeholder={placeholder} onInput={(e) => setCityName(e.target.value)}
          className="p-2"
        />
      </div>
    </>
  );
}