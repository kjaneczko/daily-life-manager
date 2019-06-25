import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import Home from './Home'
import DailyMatters from './DailyMatters'
import Events from './Events'
import Cookbook from './Cookbook'
import ToDoLists from './ToDoLists'
import Calendar from './Calendar'
import Finance from './Finance'
import './styles/App.scss'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export default class App extends Component {
  render() {
    return (
        <Router>
          <MainNavigation />
          <div className="container mt-56">
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/daily-matters" component={DailyMatters}/>
                <Route path="/events" component={Events}/>
                <Route path="/cookbook" component={Cookbook}/>
                <Route path="/to-do-lists" component={ToDoLists}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/finance" component={Finance}/>
              </Switch>
            </div>
          </div>
        </Router>
    )
  }
}
