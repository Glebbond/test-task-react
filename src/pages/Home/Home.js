import React from 'react';
import './styles.scss';
import {TextField, Button} from '@material-ui/core';
const Home = (props) => {
  return (
    <div className="home">
      <TextField label="Input text.." />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}

export default Home;
