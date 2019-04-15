import React, { Component } from 'react'
import './map_style.css'
import { geolocated } from 'react-geolocated'
import GoogleMap from './GoogleMap/GoogleMap'

class GameMap extends Component {
  constructor() {
    super()
    this.state = {
      longitude: '',
      latitude: ''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
    })
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <h3>Your browser does not support Geolocation</h3>
    ) : !this.props.isGeolocationEnabled ? (
      <h3>Geolocation is not enabled</h3>
    ) : this.props.coords ? (
      <GoogleMap
        longitude={this.state.longitude}
        latitude={this.state.latitude}
      />
    ) : (
      <h3>Getting the location data&hellip; </h3>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000,
  watchPosition: true
})(GameMap)
