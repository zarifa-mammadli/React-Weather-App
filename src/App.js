import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import DailyPage from './pages/DailyPage/DailyPage';
import HourlyPage from './pages/HourlyPage/HourlyPage';
import News from './components/News/News';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';

class App extends Component {
  render() {
    return (  
      <div className="app">
      <Router>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/daily' component={DailyPage} exact />
          <Route path='/hourly' component={HourlyPage} exact />
          <Route path='/news' component={News} exact />  
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
