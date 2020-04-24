import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm"

function NewBeerForm(props) {

    function handleNewBeerFormSubmission(event){
        event.PreventDefault();
        props.onNewBeerCreation({name: event.target.name.value, type: event.target.type.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: v4() });
    }

    return (
        <React.Fragment>
            <ReusableForm formSubmissionHandler={handleNewBeerFormSubmission}
             buttonText="Create new beer" />
        </React.Fragment>
    );
}

NewBeerForm.propTypes = {
    onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;