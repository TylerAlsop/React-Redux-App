import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCatFact } from './store/actions/index'

import CatFacts from './components/CatFacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Facts</h1>
        <CatFacts />
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("State in mapStateToProps in App.js", state)
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCatFact })(App);
