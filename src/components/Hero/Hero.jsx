import React, { useState, useEffect } from "react";
import mountainImage from '../../static/images/mountain.jpg';
import './Hero.css';

// Some helper functions here
import {getDayOfWeekName, getMonthName, getWeatherByCity} from "../../utils";

const countries = require('full-countries-cities').getCountries()


const Hero = props => {

    const [searchQuery, setSearchQuery] = useState("");
    const [matchCountries, setMatchCountries] = useState([]);
    const [showResult, setShowResult] = useState(false);



    useEffect(() => {
        const heroElement = document.getElementById("hero")
        heroElement.style.backgroundImage = `url(${heroElement.getAttribute("data-bg-image")})`;
        
    });

    const searchCity = cityName => {
        const city = countries.find(country => country.capital === cityName);
        const country = countries.find(country=> country.name.common === cityName);
        if (city === undefined && country === undefined) {
            return false;
        }
        return true;
    }

    const searchCities = (e) => {
        setSearchQuery(e.target.value);
        setShowResult(true);
        const match = countries.filter(country => {
            const searchString = country.name.common + country.capital + country.region + country.subregion + country.name.official;
            return searchString.toLowerCase().includes(searchQuery.toLowerCase());
        })
        setMatchCountries(match);
    }

    const getSearchHistoryObject = query => {
        const history = {
            query: query,
            result: props.currentWeather,
            date: {
                date: new Date().getDate(),
                day: getDayOfWeekName(new Date().getDay()),
                month: getMonthName(new Date().getMonth()),
                year: (new Date()).getFullYear()
            }
        }
        return history;
    }

    const updateWeatherView = (city) => {
        props.setLoading(true);
        if (searchCity(city)) {
            getWeatherByCity(city, props.setCurrentWeather)
            props.setLoading(false);
            setMatchCountries([])
            props.setErrorMessage("");
            const historyItem = getSearchHistoryObject(city);
            props.updateSearchHistory(historyItem)
        }else{
            props.setErrorMessage(`Sorry "${city}" is not a valid city`)
        }
    }

    return (
        <div id="hero" className="hero" data-bg-image={mountainImage}>
            <div className="container">
                <form onBlur={()=> setMatchCountries([])} onSubmit={(e)=> {e.preventDefault(); updateWeatherView(searchQuery)}} action="#" className="find-location">
                    <input onBlur={() => setShowResult(false)} onChange={searchCities} type="text" placeholder="Find your location..." />
                    <input id="findButton" type="submit" value="Find" /><br />
                    <ul className="search-result">
                        {
                            showResult ? (
                                matchCountries.map(country => (
                                    <li onMouseDown={()=> updateWeatherView(country.capital)} key={country.cca2}>
                                        <span className="postal-code">+{country.callingCode} <i className="material-icons">settings_phone</i></span>
                                        <p className="meta">
                                            <span className="country">{country.name.common}</span><br />
                                            <span className="city">{country.capital}</span>
                                        </p>
                                    </li>
                                )
                                )
                        ):null}
                        {matchCountries.length > 0 ? <li></li> : null}
                    </ul>
                </form>

            </div>
        </div>
    )
}

export default Hero;