import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import Home from './Home'
import DailyMatters from './DailyMatters'
import Events from './Events'
import Cookbook from './Cookbook'
import ShoppingLists from './ShoppingLists'
import Calendar from './Calendar'
import Finance from './Finance'

export default class App extends Component {
  render() {
    return (
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/daily-matters" component={DailyMatters}/>
          <Route path="/events" component={Events}/>
          <Route path="/cookbook" component={Cookbook}/>
          <Route path="/shopping-lists" component={ShoppingLists}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/finance" component={Finance}/>
        </Switch>
      </Router>
    )
  }
}
