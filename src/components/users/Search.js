import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
  const [text, setText] = useState(''); // Create the text state

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text)
      setText('')
    }
  }

    return (
      <div>
        <form action="" className="form" onSubmit={onSubmit}>
          <input type="text" name="text" onChange={onChange} value={text} placeholder="Search Users..." />
          <input type="submit" className="btn btn-dark btn-block" value="Search" />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
      </div>
    )
  
}


Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}


export default Search