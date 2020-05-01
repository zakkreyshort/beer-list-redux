import React from 'react';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';


function EditBeerForm(props) {
    const { beer } = props;

    function handleEditBeerFormSubmission(event){
        event.preventDefault();
        props.onEditBeer({name: event.target.name.value, description: event.target.description.value, id: beer.id});
    }

    return(
        <React.Fragment>
            
            <ReusableForm 
            formSubmissionHandler = {handleEditBeerFormSubmission}
            buttonText="Update Beer" />
            
        </React.Fragment>
    );
}

export default EditBeerForm;