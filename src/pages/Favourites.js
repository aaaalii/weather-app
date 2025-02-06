import { useNavigate } from "react-router-dom";

export default function Favourites({favourites}){
  const navigate = useNavigate();
  return (
    <div className="full-height p-4">
      <h2 className="border-bottom">Favourites</h2>
      <div className="mt-4">
        {
          [...favourites].reverse().map((favourite, index) => (
            <div className="d-flex mb-2" key={index}>
              <div className="me-4">
                {favourite['city']['name']}
              </div>
              <button onClick={() => {
                navigate('/details', { state: favourite })
              }}>See Details</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}