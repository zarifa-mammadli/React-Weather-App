const initialStore = {
    datas: null,
    forecastDatas: null,
    hourlyForecastDatas: null,
}

function reducer(store = initialStore, action) {
    switch (action.type) {
        case "SEARCH_CITIES":
          return {...store, datas: action.payload.datas}
        break;

      case "SEARCH_CITIES_FOR":
        return {...store, forecastDatas: action.payload.forecastDatas}
      break;

      case "SEARCH_CITIES_FOR_HOURLY":
        return {...store, hourlyForecastDatas: action.payload.hourlyForecastDatas}
      break;
    default:
    }
    return store;  
  }

export default reducer;
