import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';


function EditBeerForm(props) {
    const { beer } = props;

    function handleEditBeerFormSubmission(event){
        event.preventDefault();
        props.onEditClick({name: event.target.name.value, description: event.target.description.value, id: beer.id});
    }

    return(
        <React.Fragment>
            
            <ReusableForm 
            editing={props.editing}
            beer={beer}
            formSubmissionHandler = {handleEditBeerFormSubmission}
            buttonText="Update Beer" />
            
        </React.Fragment>
    );
}

EditBeerForm.propTypes = {
    onEditClick: PropTypes.func,
    beer: PropTypes.object,
    editing: PropTypes.bool
}

export default EditBeerForm;