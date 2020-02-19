import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';
import {TextField} from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchForm = ({onSearch, togglePreloader}) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      togglePreloader();
      onSearch(e.target.value);
    }
  }

  return (
    <section className="search-form">
      <TextField
        className="search-form__input"
        label="Input text and press Enter.."
        onKeyPress={handleKeyPress}/>
    </section>
  )
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  togglePreloader: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: text => {
      dispatch({type: 'SEARCH_REPOS', payload: {searchText: text}})
    },
    togglePreloader: text => {
      dispatch({type: 'TOGGLE_PRELOADER', mode: true})
    }
  }
}
export default connect(null, mapDispatchToProps)(SearchForm)