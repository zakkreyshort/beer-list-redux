import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerDetail(props){
    const { beer } = props;
    return (
        <React.Fragment>
            <h1>Beer Detail</h1>
            <h3>{ beer.name }</h3>
            <hr />
        </React.Fragment>
    );
}

BeerDetail.propTypes = {
    beer: PropTypes.object
};

export default BeerDetail;