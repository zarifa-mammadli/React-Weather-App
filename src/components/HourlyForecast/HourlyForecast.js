import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
import './HourlyForecast.css';
import {connect} from "react-redux";
import {actionAdd} from "../../redux/actions.js";

const mapState = (store) => ( {data: store.hourlyForecastDatas} );
const mapDispatch = (dispatch) => ({
  addToList: (id) => dispatch( actionAdd(id) )
})

const connector = connect(mapState, mapDispatch);
const WEEK_DAYS = ['Monday_0', 'Monday_3', 'Monday_6', 'Monday_9', 'Monday_12', 'Monday_15', 'Monday_18', 'Monday_21',
                   'Tuesday_0', 'Tuesday_3', 'Tuesday_6', 'Tuesday_9', 'Tuesday_12', 'Tuesday_15', 'Tuesday_18', 'Tuesday_21',
                   'Wednesday_0', 'Wednesday_3', 'Wednesday_6', 'Wednesday_9', 'Wednesday_12', 'Wednesday_15', 'Wednesday_18', 'Wednesday_21', 
                   'Thursday_0', 'Thursday_3', 'Thursday_6', 'Thursday_9', 'Thursday_12', 'Thursday_15', 'Thursday_18', 'Thursday_21',
                   'Friday_0', 'Friday_3', 'Friday_6', 'Friday_9', 'Friday_12', 'Friday_15', 'Friday_18', 'Friday_21',
                   'Saturday_0', 'Saturday_3', 'Saturday_6', 'Saturday_9', 'Saturday_12', 'Saturday_15', 'Saturday_18', 'Saturday_21', 
                   'Sunday_0', 'Sunday_3', 'Sunday_6', 'Sunday_9', 'Sunday_12', 'Sunday_15', 'Sunday_18', 'Sunday_21', 
];

class HourlyForecast extends Component {
    render() { 
        const { data } = this.props;
        if(data){
        const dayInAWeek = new Date().getDay();
        const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
        return ( 
        <div className='content'>
            <label className="title">Hourly</label>
            <Accordion allowZeroExpanded>
              {data.list.splice(0, 56).map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="daily-item">
                        <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                        <label className="day">{item.dt_txt}</label>
                        {/* <label className="hour">{item.dt_txt}</label> */}
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="daily-details-grid">
                      <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} m/s</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Sea level:</label>
                        <label>{item.main.sea_level}m</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{item.main.feels_like}°C</label>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );
              }
    }
};

export default connector(HourlyForecast);