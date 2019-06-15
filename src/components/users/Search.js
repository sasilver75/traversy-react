import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text)
  }

  render() { 
    return (
      <div>
        <form action="" className="form" onSubmit={this.onSubmit}>
          <input type="text" name="text" onChange={this.onChange} value={this.state.text} placeholder="Search Users..." />
          <input type="submit" className="btn btn-dark btn-block" value="Search" />
        </form>
      </div>
    )
  }
}


export default Search