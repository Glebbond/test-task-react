import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';
import PropTypes from 'prop-types';
import RepoCard from '../RepoCard/RepoCard';


const ListRepos = ({repos}) => {
  return (
    <>
      <section className="list-repos">
        {repos && repos.length ?
          repos.map((item, index) => (
            <RepoCard key={index} repo={item}></RepoCard>
          ))
          : null
        }
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  repos: state.reposList.repos,
})

ListRepos.propTypes = {
  repos: PropTypes.array
};

export default connect(mapStateToProps, null)(ListRepos)