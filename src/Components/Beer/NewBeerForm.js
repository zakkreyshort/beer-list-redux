import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
   
    function handleNewBeerFormSubmission(event) {
      event.preventDefault();
      props.onNewBeerCreation({name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: v4()});
    }
  
  return (
    <React.Fragment>

      <ReusableForm 
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Create new item" />
        
    </ React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewBeerForm;