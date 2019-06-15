import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({...this.state, loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({...this.state, users: res.data, loading: false})
  // }

  searchUsers = async text => {
    this.setState({...this.state, loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({...this.state, users: res.data.items, loading: false})
  }

  clearUsers = () => {
    this.setState({...this.state, users: []});
  }


  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder'/>
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    )
  }
}

export default App