import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import MapPage from './MapPage'
import EditOrganizationPage from './EditOrganizationPage'
import EditUserPage from './EditUserPage'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import NotFound404 from './NotFound404'


const About = () => (
  <div> This is the about page </div>
)


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/about" component={ About } />
          <Route path="/edit/:id" component={ EditOrganizationPage } />
          <Route path="/editUser/:id" component={ EditUserPage } />
          <Route path="/maps" component={ MapPage } />
          <Route path="/login" component={ LoginPage } />
          <Route path="/admin" component={ AdminPage } />
          <Route component={ NotFound404 } />
          </Switch>
      </div>
    )
  }
}


export default App
