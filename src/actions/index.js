import * as c from './../actions/ActionTypes';


export const deleteBeer = id => ({
    type: c.DELETE_BEER,
    id
});

export const toggleForm = () => ({
    type: c.TOGGLE_FORM,
});

export const addBeer = (beer) => {
    const { name, description, quantity, id } = beer;
    return {
        type: c.ADD_BEER,
        name: name,
        description: description,
        quantity: quantity,
        id: id

    }
};

export const editBeer = (beer) => {
    const { name, description, quantity, id} = beer;
    return {
        type: 'c.EDIT_BEER',
        name: name,
        description: description,
        quantity: quantity,
        id: id
    }
};

export const selectBeer = (id) => ({
    type: c.SELECT_BEER,
    id
});