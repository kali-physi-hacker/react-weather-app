import React from "react";
import ForecastTableWidget from './ForecastTableWidget';

import Loading from '../../components/Loading/Loading.jsx'

const ForeCastTable = props => {

    return (
        <div className="forecast-table">
            <div className="container">
                {/*<h1 style={{textAlign: "center"}}>Some Error Text Here</h1>*/}
                {
                    props.errorMessage !== "" ?
                        (
                            <p style={{fontWeight: "bold", fontSize: 28, paddingTop: 15, color: "red", textAlign: "center"}}>{props.errorMessage}</p>
                        )
                        : null
                }
                <div className="forecast-container">
                    <Loading show={props.loading} />
                    {
                        props.currentWeather !== null ?
                            <ForecastTableWidget
                                weather={props.currentWeather}
                                show={!props.loading}
                                today={true}
                            />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}


export default ForeCastTable;