import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GOOGLE_API_KEY from './../../../secret/google_key'
import UserLocation from './../UserLocation/UserLocation'
import './googleMap_style.css'
import NewGameForm from '../NewGameForm/NewGameForm'
import Game from '../Game/Game'

class GoogleMap extends Component {
  constructor() {
    super()
    this.state = {
      showAddGameForm: true,
      pickupGames: []
    }
    this.toggleNewGameForm = this.toggleNewGameForm.bind(this)
    this.addToGames = this.addToGames.bind(this)
  }

  toggleNewGameForm() {
    this.state.showAddGameForm
      ? this.setState({ showAddGameForm: false })
      : this.setState({ showAddGameForm: true })
  }

  addToGames(game) {
    const games = this.state.pickupGames
    games.push(game)
    this.setState({ pickupGames: games })
    console.log(this.state)
  }

  render() {
    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude
    }

    return (
      <div style={{ height: '90vh', width: '100%' }}>
        {this.state.showAddGameForm ? (
          <button
            onClick={() => this.toggleNewGameForm()}
            className="addGameBtn"
          >
            Add Game
          </button>
        ) : (
          <NewGameForm
            toggleNewGameForm={this.toggleNewGameForm}
            pickupGames={this.state.pickupGames}
            addToGames={this.addToGames}
          />
        )}
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={14}
        >
          <UserLocation lat={this.props.latitude} lng={this.props.longitude} />
          {this.state.pickupGames.map(game => (
            <Game lat={game.latitude} lng={game.longitude} />
          ))}
        </GoogleMapReact>
      </div>
    )
  }
}
export default GoogleMap
