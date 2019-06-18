import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/alert'
import About from './components/pages/about'

import GithubState from './context/github/githubState'

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Get a single Github user based on username
  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}`
    )
    setUser(res.data)
    setLoading(false)
  }

  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setRepos(res.data)
    setLoading(false)
  }
  


  const showAlert = (msg, type) => {
    setAlert({msg: msg, type: type});
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

 

    

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Github Finder'/>
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search setAlert={showAlert }/>
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User { ...props } getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>

  )
  
}

export default App