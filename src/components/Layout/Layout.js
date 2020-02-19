import React from 'react';
import './styles.scss';
import Home from '../../pages/Home/Home';
import Preloader from '../Preloader/Preloader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Layout = ({preloader}) => {
  return (
    <main>
      {preloader && <Preloader />}
      <Home/>
    </main>
  )
}

const mapStateToProps = (state) => ({
  preloader: state.reposList.preloader,
})
Layout.propTypes = {
  preloader: PropTypes.bool
};
export default connect(mapStateToProps, null)(Layout)