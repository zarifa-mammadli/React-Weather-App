import React, { Component } from 'react';
import './SearchBox.css';
import {getWeatherData} from "../../redux/actions";
import { getForecastData } from '../../redux/actions';
import { getHourlyForecastData } from '../../redux/actions';
import {connect} from "react-redux";
    
class SearchBox extends Component {
    state = {
        searchLine: '' 
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(getWeatherData(this.state.searchLine));
        this.props.dispatch(getForecastData(this.state.searchLine));
        this.props.dispatch(getHourlyForecastData(this.state.searchLine));
    }
    render() {   
        const { searchLine } = this.state;
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search for city:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="For instance, Baku"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}> Search 
                    </button>
                </form>
            </div>
        );
     }
}
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
} 
// export default SearchBox;
 
export default connect(mapStateToProps)(SearchBox);

