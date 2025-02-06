import { useEffect, useState } from "react";
import Detail from "./pages/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";

export default function App(){

  const [favourites, setFavouriteList] = useState([]);
  const [recent, setRecent] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    
  }, [isDarkMode])
  return (
    <>
      <div className={isDarkMode ? 'bg-dark text-white' : 'none'}>
        <BrowserRouter>
          <Navbar setDarkMode={setDarkMode} isDarkMode={isDarkMode}/>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home recent={recent} setRecent={setRecent}/>
              }
            />

            <Route
              path="/details"
              exact
              element={
                <Detail setFavouriteList={setFavouriteList} favouriteList={favourites}/>
              }
            />
            <Route
              path="/favourites"
              exact
              element={
                <Favourites favourites={favourites}/>
              }
            />
            <Route
              path="*"
              element={
                <h2 className="full-height">Page Not Found!</h2>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}