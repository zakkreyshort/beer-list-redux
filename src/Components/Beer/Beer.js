import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
    let quantity = '';
    if (props.quantity <= 10) {
        quantity = <h3>You are almost empty, time to order more! Pints remaining: {props.quantity} </h3>;
    }
    else if (props.quantity > 10) {
        quantity = <h3>Pints remaining: {props.quantity}</h3>;
    } else {
        quantity = <h4>Out of stock!</h4>;
    }
    return (
            <div>
                <h2>Beer name: {props.name}</h2>
                <h4>Type: {props.type}</h4>
                <h4>Description: {props.description}</h4>
                <div>{quantity}</div>
      
                <button onClick={()=> props.whenAddToCartClicked(props)}>Add to cart</button>
                
                <button onClick={()=> props.whenRestockClicked(props)}>Change Keg</button>
                
                <button onClick={() => props.whenBeerClicked(props.id)}>Remove Beer</button>
            </div>
        );
}



Beer.PropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenBeerClicked: PropTypes.func,
    whenRestockClicked: PropTypes.func
}

export default Beer;
