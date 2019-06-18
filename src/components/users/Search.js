import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState(''); // Create the text state

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

    return (
      <div>
        <form action="" className="form" onSubmit={onSubmit}>
          <input type="text" name="text" onChange={onChange} value={text} placeholder="Search Users..." />
          <input type="submit" className="btn btn-dark btn-block" value="Search" />
        </form>
        {githubContext.users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
        )}
      </div>
    )
  
}


Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
}


export default Search