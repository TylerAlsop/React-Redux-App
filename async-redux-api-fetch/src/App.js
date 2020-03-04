import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchingStart, fetchingSuccess, fetchingFailure} from './store/actions/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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

export default connect(mapStateToProps, {fetchingStart, fetchingSuccess, fetchingFailure})(App);
