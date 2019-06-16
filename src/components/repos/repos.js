import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './repoitem'

const Repos = ({repos}) => {
  return repos.map(repo => (
    <RepoItem repo={repo} key={repo.id}/>
  ))
}

Repos.proptypes = {
  repose: PropTypes.array.isRequired,
}

export default Repos
