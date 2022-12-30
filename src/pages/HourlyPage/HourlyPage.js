import React, { Component } from 'react';
import './HourlyPage.css';
import Header from '../../components/HeaderNavbar/HeaderNavbar';
import SearchBox from '../../components/SearchBox/SearchBox';
// import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
// import Forecast from '../../components/Forecast/Forecast';
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast';


class HourlyPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header /> 
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        {/* <div className="main-page__current">
                            <CurrentWeather />
                        </div> */}
                        {/* <div className="main-page__forecast">
                            <Forecast />
                        </div> */}
                        <div className="main-page__hourly_forecast">
                            <HourlyForecast />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
 
export default HourlyPage;