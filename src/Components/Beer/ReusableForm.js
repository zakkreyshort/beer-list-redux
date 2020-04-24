import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

    return(
        <React.Fragment>
            <div style={styles}>
                <form onSubmit={props.formSubmissionHandler}>
                    <input 
                     required
                     type='text'
                     name='name'
                     placeholder='Name of beer' /><br />
                     <input 
                     required
                     type='text'
                     name='type'
                     placeholder='Type of beer' /><br />
                     <input 
                     required
                     type='text'
                     name='description'
                     placeholder='Description of beer' /><br />
                     <input 
                     required
                     type='number'
                     name='quantity'
                     placeholder='Pints in keg (124)' /><br />
                    <button type="submit">{props.buttonText}</button>
                </form>
            </div>
        </React.Fragment>
    );
}

const styles = {
    display: 'inlineBlock'
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;
