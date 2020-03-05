import React from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import { getCatFact } from './store/actions/index';

import CatFacts from './components/CatFacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Cat Facts!</h1>
        <i className="fas fa-cat"></i>
        <CatFacts />
      </header>
    </div>
  );
}

export default App;


// const mapStateToProps = state => {
//   console.log("State in mapStateToProps in App.js", state)
//   return {
//     catFact: state.fact,
//     isFetching: state.isFetching,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps, { getCatFact })(App);
