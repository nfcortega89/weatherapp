import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list';
import LandingPage from './landing_page'
import NavBar from './nav'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
        <WeatherList />
      </div>
    );
  }
}

// city -> San Diego
// table -> location on googlemaps with directions.
// use navigator to see distance to location
// also show current weather for location green-good weather red-bad weather
// wind/precipitation/

// title-place name & coordinates
