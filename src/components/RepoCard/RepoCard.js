import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';
import PropTypes from 'prop-types';
import {Card, Avatar, CardContent, Typography, CardActions, Button} from '@material-ui/core';

const RepoCard = ({
  repo,
  fetchBranches,
  branches,
  selectProj,
  selectedProject,
  togglePreloader,
  resetBranches
}) => {
  const handleFetchBranches = () => {
    if (selectedProject === repo.name && branches.length) {
      resetBranches();
      return;
    }
    resetBranches();
    togglePreloader();
    selectProj(repo.name);
    fetchBranches({
      owner: repo.owner.login,
      proj: repo.name
    });
  }

  return (
    <div className="repo-card">
      <Card>
        <CardContent>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
          <Typography  color="textSecondary" gutterBottom>
            {repo.name}
          </Typography>
          <Typography variant="body2" component="p">
            be{repo.description}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleFetchBranches}>Show Branches List</Button>
        </CardActions>
        {selectedProject === repo.name && branches && branches.length ?
          branches.map((element, ind) => (
            <Typography key={element.name} className="repo-card__branch" color="textSecondary">
              {element.name}
            </Typography>
          ))
          : null
        }
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => ({
  repos: state.reposList.repos,
  branches: state.reposList.branches,
  selectedProject: state.reposList.selectedProject,
  togglePreloader: PropTypes.func.isRequired,
})
const mapDispatchToProps = dispatch => {
  return {
    fetchBranches: (data) => {
      dispatch({type: 'FETCH_BRANCHES', payload: data})
    },
    selectProj: (name) => {
      dispatch({type: 'SELECT_PROJECT', name})
    },
    togglePreloader: () => {
      dispatch({type: 'TOGGLE_PRELOADER', mode: true})
    },
    resetBranches: () => {
      dispatch({type: 'RESET_BRANCHES'})
    }
  }
}

RepoCard.propTypes = {
  repo: PropTypes.object,
  fetchBranches: PropTypes.func,
  selectProj: PropTypes.func,
  selectedProject: PropTypes.string,
  resetBranches: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoCard)