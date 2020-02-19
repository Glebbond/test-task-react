import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';
import Home from '../../pages/Home/Home';

const Layout = ({dispatch}) => {
  dispatch({type: 'SEARCH_REPOS', payload: {searchText: 'test'}})
  return (
    <Home/>
  )
}

export default connect(

)(Layout)