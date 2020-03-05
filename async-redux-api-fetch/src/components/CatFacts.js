import React from 'react';
import { connect } from 'react-redux';

import { getCatFact } from '../store/actions/index';

const CatFacts = ({ getCatFact, catFact, isFetching, error }) => {
    if (isFetching) {
        return <h2>Your Cat Fact Is Loading...</h2>
    }

    return (
        <div className="cat-fact-container">
            <button className="get-fact-button" onClick={getCatFact}>Get New Fact</button>
            <h2 className="cat-fact">{catFact}</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        catFact: state.catFact,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCatFact })(CatFacts);