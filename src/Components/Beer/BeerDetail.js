import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){

    return (
        <React.Fragment>
            <h1>Beer Details</h1>
            <hr />
            <p>{ props.name }</p>
            <p>{props.quantity}</p>
            <button onClick= {()=> props.onClickingEdit(props.beer)}>Update Beer</button>
            <hr />
        </React.Fragment>
    );
}

BeerDetail.propTypes = {
    beer: PropTypes.object,
    onClickingEdit: PropTypes.func,
    masterBeerList: PropTypes.object
};

export default BeerDetail;