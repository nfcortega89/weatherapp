import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  componentWillMount() {
    console.log("I'm mounting")
    this.props.fetchWeather()
  }
  renderWeather(locations) {
    return locations.map(({ data }) => {
      return (
        <tr>
          <td><GoogleMap lat={data.coord.lat} lon={data.coord.lon}/></td>
          <td className="temp">{data.main.temp}</td>
          <td className="humidity">{data.main.humidity}</td>
          <td className="wind">{convertToKnots(data.wind.speed)}</td>
        </tr>
      )
    })

  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Humidity (%)</th>
            <th>Wind (K)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const convertToKnots = function(meters) {
  return Math.floor(meters * 1.94384)
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
