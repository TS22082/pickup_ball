import React, { Component } from 'react'
import './newGameForm_style.css'
import Geocode from 'react-geocode'
import { toast } from 'react-toastify'
import GOOGLE_API_KEY from './../../../secret/google_key'

Geocode.setApiKey(GOOGLE_API_KEY)
class NewGameForm extends Component {
  constructor() {
    super()
    this.state = {
      street: '',
      zip: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const game = {
      street: this.state.street,
      zip: this.state.zip,
      longitude: '',
      latitude: ''
    }
    Geocode.fromAddress(`${game.street} ${game.zip}`).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        game.longitude = lng
        game.latitude = lat
        this.props.addToGames(game)
        this.props.toggleNewGameForm()
        toast.success('Succesfully added pickup game')
      },
      error => {
        toast.error(error)
      }
    )
  }
  render() {
    return (
      <form className="newGameForm">
        <input
          name="street"
          onChange={this.onChange}
          type="text"
          placeholder="street address"
          className="newGameText"
        />
        <input
          name="zip"
          onChange={this.onChange}
          type="text"
          placeholder="zip"
          className="newGameText"
        />
        <div className="btnRow">
          <input
            type="button"
            onClick={() => this.props.toggleNewGameForm()}
            value="Cancel"
            className="cancelNewButton"
          />
          <input
            type="submit"
            onClick={this.onSubmit}
            value="Add"
            className="addNewButton"
          />
        </div>
      </form>
    )
  }
}

export default NewGameForm
