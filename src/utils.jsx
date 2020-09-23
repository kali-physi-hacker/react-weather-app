/*
==============================================================
=                                                            =
=       Code To Get Day of Week Name Given number            =
=                                                            =
==============================================================
*/

const DAY_OF_WEEK = {
    SUNDAY: "Sunday",
    MONDAY: "Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday",
    SATURDAY: "Saturday"
}

const DAY_OF_WEEK_NUM_TO_NAME = {
    0: DAY_OF_WEEK.SUNDAY,
    1: DAY_OF_WEEK.MONDAY,
    2: DAY_OF_WEEK.TUESDAY,
    3: DAY_OF_WEEK.WEDNESDAY,
    4: DAY_OF_WEEK.THURSDAY,
    5: DAY_OF_WEEK.FRIDAY,
    6: DAY_OF_WEEK.SATURDAY
}

export const getDayOfWeekName = dayNum => (DAY_OF_WEEK_NUM_TO_NAME[String(dayNum)]);


/*
==============================================================
=                                                            =
=       Code To Get Month Name Given Month number            =
=                                                            =
==============================================================
*/

const MONTH_NUM_TO_NAME = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

export const getMonthName = monthNumber => (MONTH_NUM_TO_NAME[String(monthNumber)]);

const API_KEY = 'f1b8fe659c4596fdcdb52b02218fd116';

export const getWeatherByCoords = (coords, success) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`;
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        success(data);
    });
}


export const getWeatherByCity = (city, success) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(API_URL)
        .then(response=> response.json())
        .then(data=> {
            success(data)
        })
}

export const getWeatherIcon = code => (`http://openweathermap.org/img/w/${code}.png`);

export const rotateCompass = direction => {
    const style = {
        transform: `rotate(${direction-45}deg)`
    }
    return style;
}


export const toCelsius = kelvinTemp => (kelvinTemp-273.15).toFixed(0);


export const getCoords = (successCallback, errorCallback) => {
    navigator.geolocation.getCurrentPosition((position)=> {
        successCallback(position.coords)
    }, (error)=> {
        errorCallback(error);
    })
}

/*
==============================================================
=                                                            =
=       Code To Get Country Full Name given short name       =
=                                                            =
==============================================================
*/

const countries = require('full-countries-cities').getCountries();
export const getCountry = shortName => countries.find(country=> country.cca2 === shortName);