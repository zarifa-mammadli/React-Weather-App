import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/HeaderNavbar/HeaderNavbar';
import SearchBox from '../../components/SearchBox/SearchBox';
import News from '../../components/News/News';

class NewsPage extends Component {
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
                            <News />
                        </div>
                      
                    </section>
                </main>
            </div>
        );
    }
}
 
export default NewsPage;