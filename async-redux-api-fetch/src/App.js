import React from 'react';
import './App.css';
import Logo from './Cat.png'
// import { connect } from 'react-redux';
// import { getCatFact } from './store/actions/index';

import CatFacts from './components/CatFacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>RANDOM CAT FACTS!</h1>
          <img className="cat-logo" src={Logo} alt="cat icon" />
        </div>
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
