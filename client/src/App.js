import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import GameMap from './components/GameMap/GameMap'
import Nav from './components/Nav/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import Login from './components/Login/Login'
// import Register from './components/Register/Register'
// import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ToastContainer />
          <Nav />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/map" component={GameMap} /> */}
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={GameMap}
          />
        </Router>
      </div>
    )
  }
}

export default App
