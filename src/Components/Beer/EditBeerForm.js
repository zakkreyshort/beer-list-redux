import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditBeerForm(props) {

    return(
        <React.Fragment>
            <div style={styles}>
            <ReusableForm buttonText="Update Beer" />
            </div>
        </React.Fragment>
    );
}

export default EditBeerForm;