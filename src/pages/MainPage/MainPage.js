import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/HeaderNavbar/HeaderNavbar';
import SearchBox from '../../components/SearchBox/SearchBox';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header /> 
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__current">
                            <CurrentWeather />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}
 
export default MainPage;