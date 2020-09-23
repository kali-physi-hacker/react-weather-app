import React from 'react'
import ForecastTableWidget from "../ForecastTable/ForecastTableWidget";
import {getDayOfWeekName, toCelsius, getWeatherIcon, rotateCompass, getCountry} from "../../utils";
import umberellaIcon from "../../static/images/icon-umberella.png";
import windIcon from "../../static/images/icon-wind.png";
import compassIcon from "../../static/images/icon-compass.png";
import weatherMan from '../../static/images/weather_man.svg';


const Main = (props) => {
    const firstSearchHistory = props.lastFiveSearches[0];
    // console.log(firstSearchHistory)
    const country = getCountry(firstSearchHistory.result.sys.country);
    const remainingSearchHistory = props.lastFiveSearches.slice(1, props.lastFiveSearches.length)
    return (
        <div style={{position: "relative"}}>
            {/*<img style={{position: "absolute", top: "-12rem", zIndex: -2}} src={weatherMan} alt=""/>*/}
            {
                props.lastFiveSearches.length > 0 ?
                    <h4 style={{textAlign: "center", fontSize: 28, marginTop: "5rem"}}>Your Search History</h4>
                : null
            }
        <main style={{marginTop: "7rem", zIndex: 2}} className="main-content">
            <div className="fullwidth-block">
                <div className="container">
                    {props.lastFiveSearches.length > 0 ?
                        (
                            <div className="forecast-table">
                                <div className="container">
                                    <div className="forecast-container">
                                        <div  className="today forecast">
                                            <div className="forecast-header">
                                                <div className="day">{firstSearchHistory.date.day}</div>
                                                <div
                                                    className="date">{firstSearchHistory.date.date} {firstSearchHistory.date.month}</div>
                                            </div>
                                            <div className="forecast-content">
                                                <div className="location">{country.capital}, {country.name.common}</div>
                                                <div className="degree">
                                                    <div className="num">{toCelsius(firstSearchHistory.result.main.temp)}<sup>o</sup>C</div>
                                                    <div className="forecast-icon">
                                                    <img style={{width: 120, top: "-30px", position: "absolute"}} src={getWeatherIcon(firstSearchHistory.result.weather[0].icon)} alt="" width="90" />
                                                </div>
                                                </div>
                                                <span><span><img src={umberellaIcon} alt="" />{firstSearchHistory.result.main.humidity}%</span>
                                                <span><img src={windIcon} alt="" />{firstSearchHistory.result.wind.speed}m/s</span>
                                                <span><img style={rotateCompass(firstSearchHistory.result.wind.deg)} src={compassIcon} alt="" />East</span></span>
                                            </div>
                                        </div>
                                        {
                                            remainingSearchHistory.map(history => (
                                                    <div className="forecast">
                                                        <div className="forecast-header">
                                                            <div className="day">{history.date.day}</div>
                                                        </div>
                                                        <div className="forecast-content">
                                                            <div className="forecast-icon">
                                                                <img src={getWeatherIcon(history.result.weather[0].icon)} alt=""
                                                                     width="48"/>
                                                            </div>
                                                            <div
                                                                className="degree">{toCelsius(history.result.main.temp)}<sup>o</sup>C
                                                            </div>
                                                            <small>{history.result.wind.deg}<sup>o</sup></small>
                                                        </div>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : <h4 className="section-title">Your Recent Searches will appear here</h4>
                    }
                </div>
            </div>
        </main>
        </div>
        )
    }


export default Main;