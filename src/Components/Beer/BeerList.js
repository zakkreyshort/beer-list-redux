import React from 'react';
import PropTypes from "prop-types";
import Beer from './Beer';

function BeerList(props) {

    return(
        <React.Fragment>
            {props.beerList.map((beer) =>
            <Beer 
            whenRestockClicked={props.onClickingRestock}
            whenAddToCartClicked={props.onClickingAddToCart}
            whenBeerClicked={props.onClickingDelete}
            name={beer.name}
            type={beer.type}
            description={beer.description}
            quantity={beer.quantity}
            id={beer.id}
            key={beer.id} />
            )}
        </React.Fragment>
    );
}

BeerList.propTypes = {
    beerList: PropTypes.array,
    onBeerSelection: PropTypes.func,
    onClickingDelete: PropTypes.func
};

export default BeerList;