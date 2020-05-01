
import React from 'react';
import PropTypes from "prop-types";
import Beer from './Beer';

function BeerList(props) {
  
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.beerList).map((beer) => {
      return <Beer
      whenBeerClicked={props.onBeerSelection}
      whenRestockClicked={props.onClickingRestock} 
      whenAddToCartClicked={props.onClickingAddToCart}
      whenClickingDelete={props.onClickingDelete}
      name={beer.name}
      description={beer.description}
      quantity={beer.quantity}
      id={beer.id}
      key={beer.id} />
      })}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  onBeerSelection: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default BeerList;