import React from 'react';
import { connect } from 'react-redux';

import { getCatFact } from '../store/actions/index';

const CatFacts = ({ getCatFact, fact, isFetching, error }) => {
    if (isFetching) {
        return <h2>Your Cat Fact Is Loading...</h2>
    }

    return (
        <div>
            <h2>Cat Fact: {fact}</h2>
            <button onClick={getCatFact}>Get New Fact</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        fact: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCatFact })(CatFacts);