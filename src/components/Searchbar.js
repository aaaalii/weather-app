export default function Searchbar({placeholder, setCityName}){
  return (
    <>
      <div className="search-bar--container">
        <input id='cityName' type="text" placeholder={placeholder} onInput={(e) => setCityName(e.target.value)}/>
      </div>
    </>
  );
}