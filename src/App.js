import React, { useState, useEffect } from 'react';
import './static/style.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ForeCastTable from "./components/ForecastTable/ForecastTable";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {getWeatherByCoords, getCoords} from "./utils";

import './static/fonts/font-awesome.min.css';


function App() {

  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastFiveSearches, setLastFiveSearches] = useState(
      window.sessionStorage.lastFiveSearches !== undefined ?
          JSON.parse(window.sessionStorage.lastFiveSearches) :
          []
  );


  const setError = errorMessage => {
      setErrorMessage(errorMessage);
      setLoading(false);
      setCurrentWeather(null)
  }


  const updateSearchHistory = (searchItem) => {
      let historyArray = lastFiveSearches;
      if (historyArray.length < 6) {
          historyArray.push(searchItem);
          setLastFiveSearches(historyArray);
          window.sessionStorage.lastFiveSearches = JSON.stringify(lastFiveSearches);
      }
  }

  useEffect(()=> {
      getCoords((coords)=> {
          getWeatherByCoords(coords, (data)=> {
              setCurrentWeather(data);
              setLoading(false);
          })
      }, (error)=> {
            setErrorMessage("Please be sure you have internet connectivity");
            setLoading(false);
      })
  }, [])

  return (
    <div className="site-content">
      <Header />
      <Hero currentWeather={currentWeather} setErrorMessage={setError} updateSearchHistory={updateSearchHistory} setLoading={setLoading} setCurrentWeather={setCurrentWeather} />
      <ForeCastTable errorMessage={errorMessage} loading={loading} currentWeather={currentWeather} />
      <Main lastFiveSearches={lastFiveSearches} />
      <Footer />
    </div>
  );
}

export default App;
