import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/main';
import Layout from './components/Layout/Layout';
import { createBrowserHistory } from "history";
import './App.scss';
import './assets/scss/main.scss';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store} >
      <Layout history={history}/>
    </Provider>
  );
}



export default App;
