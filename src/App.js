import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/alert'
import About from './components/pages/about'

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   this.setState({...this.state, loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({...this.state, users: res.data, loading: false})
  // }

  // Get a bunch of Github Users
  searchUsers = async (text) => {
    this.setState({...this.state, loading: true});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
    this.setState({...this.state, users: res.data.items, loading: false})
  }

  // Get a single Github user based on username
  getUser = async (username) => {
    this.setState({...this.state, loading: true})
    const res = await axios.get(
      `https://api.github.com/users/${username}`
    )
    this.setState({...this.state, user: res.data, loading: false})
  }
  
  clearUsers = () => {
    this.setState({...this.state, users: []});
  }

  setAlert = (msg, type) => {
    this.setState({...this.state, alert: {msg: msg, type: type}})
    setTimeout(() => {
      this.setState({...this.state, alert: null})
    }, 5000)
  }

  render() {

    const {loading, users, user} = this.state

    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder'/>
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUser searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
                  <Users loading={loading} users={users}/>
                </Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User { ...props } getUser={this.getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App