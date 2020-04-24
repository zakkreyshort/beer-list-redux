import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
    let quantity = '';
    // if (props.quantity <= 10 && props.quantity > 0) {
    //     quantity = <h3>You are almost empty, time to order more! Pints remaining: {props.quantity} </h3>;
    // }
    if (props.quantity > 0) {
        quantity = <h3>Pints remaining: {props.quantity}</h3>;
    } else {
        quantity = <h5>Out of stock!</h5>;
    }

    const styledComponent = {
        border: '2px black solid',
        borderRadius: '15px',
        maxWidth: '400px',
        margin: '5px'
    }

    return (
        <React.Fragment>
            <div style={styledComponent}>
                <h2>Beer name: {props.name}</h2>
                <h4>Description: {props.description}</h4>
                <div>{quantity}</div>
      
                <button onClick={()=> props.whenAddToCartClicked(props)}>Add to cart</button>
                <button onClick={()=> props.whenRestockClicked(props)}>Change Keg</button>
                <button onClick={() => props.whenBeerClicked(props.id)}>Remove Beer</button>
            </div>

        </React.Fragment>
        );
}



Beer.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenBeerClicked: PropTypes.func,
    whenRestockClicked: PropTypes.func
};

export default Beer;
