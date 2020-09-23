import React from 'react';

import './ForecastTable.css';

import umberellaIcon from '../../static/images/icon-umberella.png';
import windIcon from '../../static/images/icon-wind.png';
import compassIcon from '../../static/images/icon-compass.png';

// Some Utils Here
import {getDayOfWeekName, getMonthName, getCountry, toCelsius, getWeatherIcon, rotateCompass} from "../../utils";





const ForecastTableWidget = (props) => {
    const country = getCountry(props.weather.sys.country);
    return (
        props.show ? (
            <div className={`${props.today ? 'today' : ''} forecast`}>
                <div className="forecast-header">
                    <div className="day">{getDayOfWeekName(new Date().getDay())}</div>
                    <div className="date">{new Date().getDate()} {getMonthName(new Date().getMonth())}, {new Date().getFullYear()}</div>
                </div> 
                <div className="forecast-content">
                    <div className="weather-info">
                        <h4>Weather Details</h4>
                        <p>
                            <strong>Description:</strong><br/>
                            {props.weather.weather[0].main} <br/>
                            {props.weather.weather[0].description}<br/>
                            <strong>Wind Direction:</strong> {props.weather.wind.deg}<sup>o</sup><br/>
                            <strong>Pressure:</strong> {props.weather.main.pressure}
                        </p>
                    </div>
                    <div className="location">{country.capital}, {country.name.common}</div>
                    <div className="degree">
                        <div className="num">{toCelsius(props.weather.main.temp)}<sup>o</sup>C</div>
                        <div className="forecast-icon">
                            { props.today ? <img style={{width: 200, top: "-30px", position: "absolute"}} src={getWeatherIcon(props.weather.weather[0].icon)} alt="" width="90" /> : null}
                        </div>

                    </div>
                    <span><span><img src={umberellaIcon} alt="" />{props.weather.main.humidity}%</span>
                    <span><img src={windIcon} alt="" />{props.weather.wind.speed}m/s</span>
                    <span><img style={rotateCompass(props.weather.wind.deg)} src={compassIcon} alt="" />East</span></span>
                </div>
            </div>
        ):null
    )
}

export default ForecastTableWidget;