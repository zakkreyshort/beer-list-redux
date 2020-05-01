import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
    const { beer } = props;
    return (
        <React.Fragment>
            <h1>Beer Detail</h1>
            <h3>{ beer.name }</h3>
            <button onClick= { props.onClickingEdit }>Update Beer</button>
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