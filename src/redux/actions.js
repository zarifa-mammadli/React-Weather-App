  export const searchCities = (datas) => (
    {
      type: "SEARCH_CITIES",
      payload: {
        datas: datas
      }
    }
  )
  export const searchCitiesForForecast = (datas) => (
    {
      type: "SEARCH_CITIES_FOR",
      payload: {
        forecastDatas: datas
      }
    }
  )

  export const searchCitiesForHourlyForecast = (datas) => (
    {
      type: "SEARCH_CITIES_FOR_HOURLY",
      payload: {
        hourlyForecastDatas: datas
      }
    }
  )

  export const actionAdd = (id) => (
    {
      type: "ADD_CITY",
      payload: {
        id: id
      }
    }
  )

  export function getWeatherData(city) {
    return function (dispatch) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=99ad7cfca62b6edab5c72029c78086e8`)
        .then((res) => res.json())
        .then((data) => { 
          // console.warn(data)
          dispatch(searchCities(data));
        })
        .catch((e)=> {
          alert("Error: "+e.message);
        }); 
    };
  }

  export function getForecastData(city) {
    return function (dispatch) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=99ad7cfca62b6edab5c72029c78086e8`)
        .then((res) => res.json())
        .then((data) => { 
          // data.list.forEach(item=> console.warn(item.dt_txt))
          dispatch(searchCitiesForForecast(data));
        })
        .catch((e)=> {
          alert("Error: "+e.message);
        }); 
    };
  }

  export function getHourlyForecastData(city) {
    return function (dispatch) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=99ad7cfca62b6edab5c72029c78086e8`)
        .then((res) => res.json())
        .then((data) => { 
          // data.list.forEach(item=> console.warn(item.dt_txt))
          dispatch(searchCitiesForHourlyForecast(data));
        })
        .catch((e)=> {
          alert("Error: "+e.message);
        }); 
    };
  }

